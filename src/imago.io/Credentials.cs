﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Imago.IO.Classes;

namespace Imago.IO
{
    public class Credentials
    {
        public static string DefaultHostName { get; set; }
        public static string DefaultApiVersion2 { get; protected set; } = "/integrate/2";
        public Credentials()
        {
            HostName = "https://io.imago.live";
            ApiVersion = Credentials.DefaultApiVersion2;
        }
        public string ProxyUri { get; set; } = null;
        public string HostName { get; set; }
        public string ApiVersion { get; protected set; }
        public string UserName { get; set; }
        public string Password { get; set; }
    }
}
