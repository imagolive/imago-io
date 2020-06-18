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
using System.Globalization;
using System.Threading;
using System.Drawing;
using System.Diagnostics;
using System.IO;
using Imago.IO.Classes;

namespace Imago.IO
{
    public partial class Client
    {
        public static class ImageryQueryParametersMatchChoices
        {
            public const string MatchEqual = "equals";
            public const string MatchLike = "like";
        }

        public class ImageryQueryParameters
        {
            public Guid? workspaceId { get; set; }
            public Guid? collectionId { get; set; }
            public Guid? datasetId { get; set; }
            public Guid? imageryTypeId { get; set; }
            public string collectionName { get; set; }
            public string datasetName { get; set; }
            public string name { get; set; }
            public string match { get; set; }
            public double? startDepth { get; set; }
            public double? endDepth { get; set; }
            public double? x { get; set; }
            public double? y { get; set; }
            public double? z { get; set; }
            public int? updatedSinceDays { get; set; }
            public int? queryOffset { get; set; }
            public int? queryLimit { get; set; }
        }

        public async Task<Result<List<Imagery>>> SearchForImagery(ImageryQueryParameters parameters, CancellationToken ct, TimeSpan? timeout = null)
        {
            try
            {
                if (parameters.imageryTypeId == Guid.Empty || parameters.collectionId == Guid.Empty)
                    return new Result<List<Imagery>> { Code = ResultCode.failed };

                NameValueCollection query = new NameValueCollection();

                if (parameters.workspaceId != null)
                    query["workspaceid"] = parameters.workspaceId.ToString();
                if (parameters.collectionId != null)
                    query["collectionid"] = parameters.collectionId.ToString();
                if (parameters.datasetId != null)
                    query["datasetid"] = parameters.datasetId.ToString();
                if  (parameters.imageryTypeId != null)
                    query["imagerytypeid"] = parameters.imageryTypeId.ToString();
                if (!String.IsNullOrWhiteSpace(parameters.collectionName))
                    query["collectionname"] = parameters.collectionName;
                if (!String.IsNullOrWhiteSpace(parameters.datasetName))
                    query["datasetname"] = parameters.datasetName;
                if (!String.IsNullOrWhiteSpace(parameters.name))
                    query["name"] = parameters.name;
                if (!String.IsNullOrWhiteSpace(parameters.match))
                    query["match"] = parameters.match;
                if (parameters.startDepth != null)
                    query["startdepth"] = parameters.startDepth.ToString();
                if (parameters.endDepth != null)
                    query["enddepth"] = parameters.endDepth.ToString();
                if (parameters.x != null)
                    query["x"] = parameters.x.ToString();
                if (parameters.y != null)
                    query["y"] = parameters.y.ToString();
                if (parameters.z != null)
                    query["z"] = parameters.z.ToString();
                if (parameters.queryOffset != null)
                    query["offset"] = parameters.queryOffset.ToString();
                if (parameters.queryLimit != null)
                    query["limit"] = parameters.queryLimit.ToString();
                if (parameters.updatedSinceDays != null && parameters.updatedSinceDays > 0)
                    query["updatedsince"] = parameters.updatedSinceDays.ToString();

                return await ClientGet("/imagery", query, ct, timeout, (response, body) =>
                {
                    this.LogHttpResponse(response);
                    JObject responseObject = JObject.Parse(body);
                    return _jsonConverter.Deserialize<List<Imagery>>(responseObject["imageries"].ToString());
                });
            }
            catch (Exception ex)
            {
                this.LogTracer.TrackError(ex);
                return new Result<List<Imagery>> { Code = ResultCode.failed };
            }
        }
        public class ImageryUpdateParameters
        {
            public class FeatureDefinition
            {
                public string name { get; set; } = "linearization";
                public FeatureType[] featureTypes { get; set; } = null;
            }
            public class FeatureType
            {
                public string name { get; set; } = null;
                public Image[] images { get; set; } = null;

            }

            public class AttributeDefinition
            {
                public string name { get; set; } = "Core Tray Box Numbers";
                public Dictionary<string, object> attributeValues { get; set; } = new Dictionary<string, object>();
            }

            public class Image
            {
                public string name { get; set; }
                public Feature[] features { get; set; } = null;
            }
            public class Feature
            {
                public Point[] points { get; set; } = null;
            }

            public class Point
            {
                public double x { get; set; }
                public double y { get; set; }
                public int pen { get; set; }
            }

            public Guid? id { get; set; }
            public string name { get; set; }
            public double? startDepth { get; set; }
            public double? endDepth { get; set; }
            public double? x { get; set; }
            public double? y { get; set; }
            public double? z { get; set; }

            public FeatureDefinition[] featureDefinitions { get; set; } = null;
            public List<AttributeDefinition> attributeDefinitions { get; set; } = null;
        }
        public async Task<Result<Imagery>> UpdateImagery(ImageryUpdateParameters parameters, CancellationToken ct, TimeSpan? timeout = null)
        {
            try
            {
                if (parameters.id == null || parameters.id == Guid.Empty)
                    return new Result<Imagery> { Code = ResultCode.failed };

                UriBuilder builder = new UriBuilder(_apiUrl);
                builder.Path += "/imagery/" + parameters.id.ToString();

                if (parameters.featureDefinitions != null && parameters.featureDefinitions.Any(fd => string.IsNullOrWhiteSpace(fd.name) || fd.featureTypes.Any(ft => string.IsNullOrWhiteSpace(ft.name) || ft.images.Any(i=> string.IsNullOrWhiteSpace(i.name)))))
                    return new Result<Imagery> { Code = ResultCode.failed };

                return await ClientPut(builder, parameters, timeout, ct, (response, body) =>
                {
                    this.LogHttpResponse(response);
                    return _jsonConverter.Deserialize<Imagery>(body);
                });
            }
            catch (Exception ex)
            {
                this.LogTracer.TrackError(ex);
                return new Result<Imagery> { Code = ResultCode.failed };
            }
        }
        public class AttributeUpdateParameters : ImageryQueryParameters
        {
            //public Guid imageryId { get; set; }
            public Dictionary<string, string> attributes { get; set; }
        }
        public class BulkAttributeUpdateParameters
        {
            public int? id { get; set; }
            public string type { get; set; }
            public string group { get; set; }
            public List<AttributeUpdateParameters> imageries { get; set; }
        }
        public async Task<Result<object>> UpdateBulkImageryAttributes(BulkAttributeUpdateParameters parameters, CancellationToken ct, TimeSpan? timeout = null)
        {
            try
            {
                if (parameters.imageries.Count == 0)
                    return new Result<object> { Code = ResultCode.ok };

                var query = new NameValueCollection();

                query["id"] = parameters.id.ToString();
                query["type"] = parameters.type;
                query["group"] = parameters.group;
                UriBuilder builder = new UriBuilder(_apiUrl);
                builder.Path += "/attributes";
                builder.Query = BuildQueryString(query);

                return await ClientPost(builder, parameters, timeout, ct, (response, body) =>
                {
                    this.LogHttpResponse(response);
                    return (object)true;
                });
            }
            catch (Exception ex)
            {
                this.LogTracer.TrackError(ex);
                return new Result<object> { Code = ResultCode.failed };
            }
        }
    }
}
