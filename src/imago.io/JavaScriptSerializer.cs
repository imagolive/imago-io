﻿using Newtonsoft.Json;

namespace Imago.IO
{
    public class JavaScriptSerializer
    {
        internal string Serialize<T>(T data, JsonSerializerSettings settings = null)
        {
            if (settings != null)
            {
                return Newtonsoft.Json.JsonConvert.SerializeObject(data, settings);
            }
            else
            {
                return Newtonsoft.Json.JsonConvert.SerializeObject(data);
            }
        }

        internal T Deserialize<T>(string json)
        {
            return Newtonsoft.Json.JsonConvert.DeserializeObject<T>(json);
        }
    }
}
