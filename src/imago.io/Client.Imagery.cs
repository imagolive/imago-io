﻿using System;
using System.Collections.Generic;
using System.Collections.Specialized;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Net.Http;
using System.Net.Http.Headers;
using System.Net;
using System.Web;
using Newtonsoft.Json.Linq;
using System.Web.Script.Serialization;
using System.Data.Entity.Design.PluralizationServices;
using System.Globalization;
using System.Threading;
using System.Net.Http.Formatting;
using System.Drawing;
using System.Diagnostics;
using System.IO;
using System.IO;
using Imago.IO.Classes;

namespace Imago.IO
{
    public partial class Client
    {
        public class ImageryQueryParameters
        {
            public Guid dataItemId { get; set; } = Guid.Empty;
            public Guid imageryTypeId { get; set; } = Guid.Empty;
            public bool overwriteExisting { get; set; } = false;
            public int? resizeWidth { get; set; } = null;
            public int? resizeHeight { get; set; } = null;
        }
        public async Task<Result<string>> DownloadImageryToFile(ImageryQueryParameters parameters, string fileName, CancellationToken ct)
        {
            try
            {
                if (parameters.dataItemId == Guid.Empty || parameters.imageryTypeId == Guid.Empty)
                    return new Result<string> { Code = ResultCode.failed };

                NameValueCollection query = new NameValueCollection();
                if (_credentials.ApiVersion == Credentials.ImagoApiVersion1)
                    query["type"] = "imagery";

                query["dataitemid"] = parameters.dataItemId.ToString();
                query["imtypeid"] = parameters.imageryTypeId.ToString();
                if (parameters.resizeHeight != null)
                    query["height"] = parameters.resizeHeight.Value.ToString();
                if (parameters.resizeWidth != null)
                    query["width"] = parameters.resizeWidth.Value.ToString();

                UriBuilder builder = new UriBuilder(_apiUrl);
                builder.Path += _credentials.ApiVersion == Credentials.ImagoApiVersion2 ? "/imagery" : "/query";
                builder.Query = BuildQueryString(query);

                HttpResponseMessage response = await _client.GetAsync(builder.ToString(), ct).ConfigureAwait(false);
                _lastResponse = response;

                if (response.StatusCode == HttpStatusCode.NotFound)
                    return new Result<string> { Code = ResultCode.ok };
                if (response.Content.Headers.ContentDisposition == null || String.IsNullOrWhiteSpace(response.Content.Headers.ContentDisposition.FileName) || response.StatusCode != HttpStatusCode.OK)
                    return new Result<string> { Code = ResultCode.failed };

                string fsExt = Path.GetExtension(response.Content.Headers.ContentDisposition.FileName.Replace("\"",""));
                if (String.IsNullOrWhiteSpace(fsExt))
                    return new Result<string> { Code = ResultCode.failed };

                fileName += fsExt;
                using (FileStream imageFileStream = new FileStream(fileName, FileMode.Create))
                    using (var httpStream = await response.Content.ReadAsStreamAsync())
                    {
                        httpStream.CopyTo(imageFileStream);
                        imageFileStream.Flush();
                    }

                return new Result<string> { Value = fileName, Code = response.StatusCode != HttpStatusCode.OK ? ResultCode.failed : ResultCode.ok };
            }
            catch(Exception ex)
            {
                return new Result<string> { Code = ResultCode.failed };
            }
            finally
            {

            }
        }
        public class ImageryUpdateParameters
        {
            public string imageFileName { get; set; }
            public string mimeType { get; set; }
            public Guid imageryTypeId { get; set; }
            public Guid dataItemId { get; set; }
            public bool replaceHistory { get; set; } = false;
        }
        public async Task<Result<Imagery>> AddImagery(ImageryUpdateParameters parameters, CancellationToken ct)
        {
            FileStream fs = null;
            Result<Imagery> result = null;
            try
            { 
                if (parameters.dataItemId == Guid.Empty || parameters.imageryTypeId == Guid.Empty || String.IsNullOrWhiteSpace(parameters.imageFileName))
                    return new Result<Imagery> { Code = ResultCode.failed };

                NameValueCollection query = new NameValueCollection();
                if (_credentials.ApiVersion == Credentials.ImagoApiVersion1)
                    query["type"] = "image";
                query["dataitemid"] = parameters.dataItemId.ToString();
                query["imtypeid"] = parameters.imageryTypeId.ToString();
                query["mimetype"] = parameters.mimeType;
                if (parameters.replaceHistory)
                    query["history"] = "replace";

                UriBuilder builder = new UriBuilder(_apiUrl);
                builder.Path += _credentials.ApiVersion == Credentials.ImagoApiVersion2 ? "/imagery" : "/update";
                builder.Query = BuildQueryString(query);

                fs = new FileStream(parameters.imageFileName, FileMode.Open);

                string boundary = "Upload----" + DateTime.Now.ToString(CultureInfo.InvariantCulture);
                MultipartFormDataContent content = new MultipartFormDataContent(boundary);
                HttpContent streamedContent = new StreamContent(fs);
                content.Add(streamedContent, "file", parameters.imageFileName);

                HttpResponseMessage response = await _client.PostAsync(builder.ToString(),content,ct).ConfigureAwait(false);
                _lastResponse = response;
                string body = await response.Content.ReadAsStringAsync();
                _lastResponseBody = body;

                Imagery dataItem = _jsonConverter.Deserialize<Imagery>(body);
                result = new Result<Imagery> { Value = dataItem, Code = dataItem == null || response.StatusCode != HttpStatusCode.OK ? ResultCode.failed : ResultCode.ok };
            }
            catch(Exception ex)
            {
                result = new Result<Imagery> { Code = ResultCode.failed };
            }
            finally
            {
                if (fs != null)
                    fs.Close();

            }
            return result;
        }
    }
}
