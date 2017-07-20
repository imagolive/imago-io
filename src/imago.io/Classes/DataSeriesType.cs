﻿using System;
using System.Collections.Generic;
using Newtonsoft.Json;
using Newtonsoft.Json.Converters;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Imago.IO.Classes
{
    public class DataSeriesType
    {
        public enum GeometryTypes { none, point, trace };
        public enum ContentTypes { image, video, coretray, downhole };

        public Guid Id { get; set; } = Guid.Empty;
        public string Name { get; set; }
        [JsonConverter(typeof(StringEnumConverter))]
        public GeometryTypes GeometryType { get; set; }
        [JsonConverter(typeof(StringEnumConverter))] public ContentTypes ContentType { get; set; }
        public List<ImageryType> ImageryTypes { get; set; } = new List<ImageryType>();
    }
}
