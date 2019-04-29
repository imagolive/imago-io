define({ "api": [
  {
    "type": "get",
    "url": "/integrate/2/attributes",
    "title": "Get data attributes",
    "name": "GetAttributes",
    "group": "Attributes",
    "description": "<p>Return a group of attributes associated with data within Imago.</p>",
    "examples": [
      {
        "title": "Example Usage (requires the authorisation token header):",
        "content": "curl -O  https://io.imago.live/integrate/2/attributes?id=e1865861-0d53-4d49-a554-af79dae9aa81&type=image",
        "type": "curl"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "imago-api-token",
            "description": "<p>b4ecb7d7-b8bb-460f-9506-134df358f471</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Guid",
            "optional": false,
            "field": "id",
            "description": "<p>Data identifier.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "allowedValues": [
              "\"image\""
            ],
            "optional": true,
            "field": "type",
            "defaultValue": "image",
            "description": "<p>Type of data to search for.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "allowedValues": [
              "\"properties\""
            ],
            "optional": true,
            "field": "group",
            "defaultValue": "properties",
            "description": "<p>Specifies which group of attributes to return for the data.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Query String:",
          "content": "?id=e1865861-0d53-4d49-a554-af79dae9aa81&type=image",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Guid",
            "optional": false,
            "field": "id",
            "description": "<p>Data identifier.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "group",
            "description": "<p>Name of group of attributes.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "attributes",
            "description": "<p>Attributes associated with the specified group. The fields depend on the attributes group and its definition.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"id\" : \"108501d0-4d6c-475c-8ad2-96bb983b1fc5\",\n    \"group\" : \"properties\",\n    \"attributes\" : {\n        \"mimeType\" : \"image/jpeg\",\n        \"fileName\" : \"DH001_coretray_wet.jpeg\",\n        \"fileExt\" : \".jpeg\",\n        \"fileSize\" : \"16253742783\"\n    }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "404": [
          {
            "group": "404",
            "optional": false,
            "field": "NotFound",
            "description": "<p>The specified attributes were not found.</p>"
          },
          {
            "group": "404",
            "optional": false,
            "field": "ErrorDuringRequest",
            "description": "<p>Internal error occurred during the request.</p>"
          }
        ]
      }
    },
    "version": "2.0.0",
    "filename": "../imago-agent/api/routes/io/2/get-attributes.js",
    "groupTitle": "Attributes"
  },
  {
    "type": "post",
    "url": "/integrate/2/attributes",
    "title": "Assigns attributes to an image",
    "name": "PostAttributes",
    "group": "Attributes",
    "description": "<p>Assigns a group of attributes to associated an image within Imago.</p>",
    "examples": [
      {
        "title": "Example Usage (requires the authorisation token header):",
        "content": "curl -H \"Content-Type: application/json\" -X POST -d '{\"name\":\"DH001\",\"place\":\"lower mountain top\"}'   https://io.imago.live/integrate/2/attributes?id=e1865861-0d53-4d49-a554-af79dae9aa81&group=custom",
        "type": "curl"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "imago-api-token",
            "description": "<p>b4ecb7d7-b8bb-460f-9506-134df358f471</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Guid",
            "optional": false,
            "field": "id",
            "description": "<p>Data identifier.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "group",
            "defaultValue": "custom",
            "description": "<p>Specifies which group of attributes to assign for the data.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Query String:",
          "content": "?id=e1865861-0d53-4d49-a554-af79dae9aa81&type=image&group=custom",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "404": [
          {
            "group": "404",
            "optional": false,
            "field": "NotFound",
            "description": "<p>The specified attributes were not updateable.</p>"
          },
          {
            "group": "404",
            "optional": false,
            "field": "ErrorDuringRequest",
            "description": "<p>Internal error occurred during the request.</p>"
          }
        ]
      }
    },
    "version": "2.0.0",
    "filename": "../imago-agent/api/routes/io/2/post-attributes.js",
    "groupTitle": "Attributes"
  },
  {
    "type": "get",
    "url": "/integrate/2/collection",
    "title": "Search for collections",
    "name": "GetCollection",
    "group": "Collection",
    "description": "<p>Searches for a list of matching collections.</p> <p>Each collection is described by its name and dataset id.</p>",
    "examples": [
      {
        "title": "Example Usage (requires the authorisation token header):",
        "content": "curl -O  https://io.imago.live/integrate/2/collection?name=DH&match=startswith",
        "type": "curl"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "imago-api-token",
            "description": "<p>b4ecb7d7-b8bb-460f-9506-134df358f471</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "name",
            "description": "<p>Search pattern to match collection names. If no search pattern is supplied then all collections are returned for the dataset.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "allowedValues": [
              "\"equals\"",
              "\"startswith\"",
              "\"endswith\"",
              "\"includes\"",
              "\"like\""
            ],
            "optional": true,
            "field": "match",
            "defaultValue": "equals",
            "description": "<p>Determines how the search pattern matches the collection name. Wildcards &quot;*&quot; can be used with the &quot;like&quot; match.</p>"
          },
          {
            "group": "Parameter",
            "type": "Guid",
            "optional": true,
            "field": "datasetid",
            "description": "<p>Only search within the dataset.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Query String:",
          "content": "?datasetid=9a08e64f-e6e9-41d8-a47c-044db8a882c4&name=DH&match=startswith",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "collections",
            "description": "<p>List of matching collections.</p>"
          },
          {
            "group": "Success 200",
            "type": "Guid",
            "optional": false,
            "field": "collections.id",
            "description": "<p>Collection identifier.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "collections.name",
            "description": "<p>Name of collection.</p>"
          },
          {
            "group": "Success 200",
            "type": "Guid",
            "optional": false,
            "field": "collections.datasetId",
            "description": "<p>Identifier of dataset that the collection belongs to.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"collections\" : [\n        {\n            \"id\" : \"d856d001-22bf-4339-8382-9e29532e539b\",\n            \"name\" : \"DH001\",\n            \"datasetId\" : \"9a08e64f-e6e9-41d8-a47c-044db8a882c4\"\n        },\n        {\n            \"id\" : \"eecd8f6c-127f-42ba-9ddc-a56a97c61719\",\n            \"name\" : \"DH003\",\n            \"datasetId\" : \"9a08e64f-e6e9-41d8-a47c-044db8a882c4\"\n        }\n    ]\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "404": [
          {
            "group": "404",
            "optional": false,
            "field": "ErrorDuringRequest",
            "description": "<p>Internal error occurred during the request</p>"
          }
        ]
      }
    },
    "version": "2.0.0",
    "filename": "../imago-agent/api/routes/io/2/get-collection.js",
    "groupTitle": "Collection"
  },
  {
    "type": "post",
    "url": "/integrate/2/collection",
    "title": "Create a new collection",
    "name": "PostCollection",
    "group": "Collection",
    "description": "<p>Adds a new collection to a dataset.</p> <p>If the new collection already exists in the dataset then no action is taken.</p>",
    "examples": [
      {
        "title": "Example Usage (requires the authorisation token header):",
        "content": "curl -H \"Content-Type: application/json\" -X POST -d '{\"name\":\"DH001\",\"datasetId\":\"9a08e64f-e6e9-41d8-a47c-044db8a882c4\"}' https://io.imago.live/integrate/2/collection",
        "type": "curl"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "imago-api-token",
            "description": "<p>b4ecb7d7-b8bb-460f-9506-134df358f471</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Name of new collection.</p>"
          },
          {
            "group": "Parameter",
            "type": "Guid",
            "optional": false,
            "field": "datasetId",
            "description": "<p>Add the new collection to this dataset.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request Body:",
          "content": "{\n    \"name\" : \"DH001\",\n    \"datasetId\" : \"9a08e64f-e6e9-41d8-a47c-044db8a882c4\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Guid",
            "optional": false,
            "field": "id",
            "description": "<p>New collection identifier.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Name of new collection.</p>"
          },
          {
            "group": "Success 200",
            "type": "Guid",
            "optional": false,
            "field": "datasetId",
            "description": "<p>Identifier of dataset that the collection belongs to.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"id\" : \"d856d001-22bf-4339-8382-9e29532e539b\",\n    \"name\" : \"DH001\",\n    \"datasetId\" : \"9a08e64f-e6e9-41d8-a47c-044db8a882c4\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "404": [
          {
            "group": "404",
            "optional": false,
            "field": "ErrorDuringRequest",
            "description": "<p>Internal error occurred during the request</p>"
          }
        ]
      }
    },
    "version": "2.0.0",
    "filename": "../imago-agent/api/routes/io/2/post-collection.js",
    "groupTitle": "Collection"
  },
  {
    "type": "get",
    "url": "/integrate/2/image",
    "title": "Download an image",
    "name": "GetImage",
    "group": "Imagery",
    "description": "<p>Downloads an image</p>",
    "examples": [
      {
        "title": "Example Usage (requires the authorisation token header):",
        "content": "curl -O  https://io.imago.live/integrate/2/image?imageryid=c2019bd6-34aa-4561-ab2f-8802fa5ff3a9&imagetypeid=f0b6aec1-ce5c-4874-b107-162090623a9b&mimetype=image%2Fjpeg&width=200",
        "type": "curl"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "imago-api-token",
            "description": "<p>b4ecb7d7-b8bb-460f-9506-134df358f471</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Guid",
            "optional": false,
            "field": "imageryid",
            "description": "<p>Only search within this imagery.</p>"
          },
          {
            "group": "Parameter",
            "type": "Guid",
            "optional": false,
            "field": "imagetypeid",
            "description": "<p>Only search for an image with this image type.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "width",
            "description": "<p>Scale the image to this width (height is adjusted according to aspect ratio if not specified).</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "height",
            "description": "<p>Scale the image to this height (width is adjusted according to aspect ratio if not specified).</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Query String:",
          "content": "?imageryid=c2019bd6-34aa-4561-ab2f-8802fa5ff3a9&imagetypeid=f0b6aec1-ce5c-4874-b107-162090623a9b&mimetype=image%2Fjpeg&width=200",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "404": [
          {
            "group": "404",
            "optional": false,
            "field": "NotFound",
            "description": "<p>The specified image was not found.</p>"
          },
          {
            "group": "404",
            "optional": false,
            "field": "ErrorDuringRequest",
            "description": "<p>Internal error occurred during the request.</p>"
          }
        ]
      }
    },
    "version": "2.0.0",
    "filename": "../imago-agent/api/routes/io/2/get-image.js",
    "groupTitle": "Imagery"
  },
  {
    "type": "get",
    "url": "/integrate/2/imagery",
    "title": "Search for imagery",
    "name": "GetImagery",
    "group": "Imagery",
    "description": "<p>Searches for a list of matching imageries.</p>",
    "examples": [
      {
        "title": "Example Usage (requires the authorisation token header):",
        "content": "curl -O  https://io.imago.live/integrate/2/imagery?collectionid=d856d001-22bf-4339-8382-9e29532e539b&imagerytypeid=78742fab-4c55-4b57-830d-5ab6b6c1fb09",
        "type": "curl"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "imago-api-token",
            "description": "<p>b4ecb7d7-b8bb-460f-9506-134df358f471</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Guid",
            "optional": false,
            "field": "collectionid",
            "description": "<p>Only search within this collection.</p>"
          },
          {
            "group": "Parameter",
            "type": "Guid",
            "optional": false,
            "field": "imagerytypeid",
            "description": "<p>Only search for imagery with this imagery type.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "name",
            "description": "<p>Search for imagery with this name.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "startdepth",
            "description": "<p>Search for imagery with this start depth.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "enddepth",
            "description": "<p>Search for imagery with this end depth.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "x",
            "description": "<p>Search for imagery with this longtitude/X coordinate.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "y",
            "description": "<p>Search for imagery with this latitude/Y coordinate.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "z",
            "description": "<p>Search for imagery with this elevation/Z coordinate.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "allowedValues": [
              "\"equals\"",
              "\"includes\""
            ],
            "optional": true,
            "field": "match",
            "defaultValue": "equals",
            "description": "<p>Determines how the search pattern matches the start/end depths.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "tol",
            "defaultValue": "0.0",
            "description": "<p>Tolerance used when matching numbers.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Query String:",
          "content": "?collectionid=d856d001-22bf-4339-8382-9e29532e539b&imagerytypeid=78742fab-4c55-4b57-830d-5ab6b6c1fb09",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "imageries",
            "description": "<p>List of matching imagery.</p>"
          },
          {
            "group": "Success 200",
            "type": "Guid",
            "optional": false,
            "field": "imageries.id",
            "description": "<p>Imagery identifier.</p>"
          },
          {
            "group": "Success 200",
            "type": "Guid",
            "optional": false,
            "field": "imageries.collectionId",
            "description": "<p>Identifier of collection that the imagery belongs to.</p>"
          },
          {
            "group": "Success 200",
            "type": "Guid",
            "optional": false,
            "field": "imageries.imageryTypeId",
            "description": "<p>Identifier of imagery type that the imagery belongs to within the collection.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "imageries.name",
            "description": "<p>Name of the imagery</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": true,
            "field": "imageries.startDepth",
            "description": "<p>Start depth of the imagery.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": true,
            "field": "imageries.endDepth",
            "description": "<p>End depth of the imagery.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": true,
            "field": "imageries.x",
            "description": "<p>Longtitude/X coordinate of the imagery.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": true,
            "field": "imageries.y",
            "description": "<p>Latitude/Y coordinate of the imagery.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": true,
            "field": "imageries.z",
            "description": "<p>Elevation/Z coordinate of the imagery.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "imageries.images",
            "description": "<p>List of images on this imagery.</p>"
          },
          {
            "group": "Success 200",
            "type": "Guid",
            "optional": true,
            "field": "imageries.images.imageTypeId",
            "description": "<p>Image type available on the imagery.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"imageries\" : [\n        {\n            \"id\" : \"c2019bd6-34aa-4561-ab2f-8802fa5ff3a9\",\n            \"collectionId\" : \"d856d001-22bf-4339-8382-9e29532e539b\",\n            \"imageryTypeId\" : \"78742fab-4c55-4b57-830d-5ab6b6c1fb09\"\n            \"startDepth\" : 0,\n            \"endDepth\" : 10.1,\n            \"images\" : [\n                { imageTypeId: \"f0b6aec1-ce5c-4874-b107-162090623a9b\" }\n            ]\n        },\n        {\n            \"id\" : \"5a199953-52e5-437c-a2d8-aa8785beb45d\",\n            \"collectionId\" : \"d856d001-22bf-4339-8382-9e29532e539b\",\n            \"imageryTypeId\" : \"78742fab-4c55-4b57-830d-5ab6b6c1fb09\",\n            \"startDepth\" : 10.1,\n            \"endDepth\" : 15.2,\n            \"images\" : [\n                { imageTypeId: \"f0b6aec1-ce5c-4874-b107-162090623a9b\" }\n            ]\n        },\n        {\n            \"id\" : \"ca8379b2-261e-4f30-8848-2eb92cfded87\",\n            \"collectionId\" : \"d856d001-22bf-4339-8382-9e29532e539b\",\n            \"imageryTypeId\" : \"78742fab-4c55-4b57-830d-5ab6b6c1fb09\"\n            \"startDepth\" : 15.2,\n            \"endDepth\" : 19.43,\n            \"images\" : [\n                { imageTypeId: \"f0b6aec1-ce5c-4874-b107-162090623a9b\" }\n            ]\n        }\n    ]\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "404": [
          {
            "group": "404",
            "optional": false,
            "field": "ErrorDuringRequest",
            "description": "<p>Internal error occurred during the request</p>"
          }
        ]
      }
    },
    "version": "2.0.0",
    "filename": "../imago-agent/api/routes/io/2/get-imagery.js",
    "groupTitle": "Imagery"
  },
  {
    "type": "post",
    "url": "/integrate/2/image",
    "title": "Upload an image",
    "name": "PostImage",
    "group": "Imagery",
    "description": "<p>Updloads an image of a specified image type to an imagery.</p> <p>The image is uploaded against an imagery. The imagery can be specified directly by its ID or you can specify an Imagery Type plus spatial information to search by i.e. look for a core tray with a from/to of 10-15m. Either the imagery ID or imagery type, plus spatial information, must be specified, but not both.</p>",
    "examples": [
      {
        "title": "Example Usage (requires the authorisation token header):",
        "content": "    curl -i -F filedata=@sample.jpeg -X POST https://io.imago.live/integrate/2/image?imageryid=c2019bd6-34aa-4561-ab2f-8802fa5ff3a9&imagetypeid=f0b6aec1-ce5c-4874-b107-162090623a9b&mimetype=image%2Fjpeg\nor\n    curl -i -F filedata=@sample.jpeg -X POST https://io.imago.live/integrate/2/image?startdepth=10&enddepth=20&imagerytypeid=78742fab-4c55-4b57-830d-5ab6b6c1fb09&imagetypeid=f0b6aec1-ce5c-4874-b107-162090623a9b&mimetype=image%2Fjpeg",
        "type": "curl"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "imago-api-token",
            "description": "<p>b4ecb7d7-b8bb-460f-9506-134df358f471</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Guid",
            "optional": true,
            "field": "imageryid",
            "description": "<p>Upload direcly against this imagery using an ID. Specify the imagery ID or specify the following criteria:</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "imagerytypeid",
            "description": "<p>Search for imagery of this type.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "name",
            "description": "<p>Search for imagery by name.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "startdepth",
            "description": "<p>Search for imagery by start depth.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "enddepth",
            "description": "<p>Search for imagery by end depth.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "x",
            "description": "<p>Search for imagery by longtitude/X.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "y",
            "description": "<p>Search for imagery by latitude/Y.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "z",
            "description": "<p>Search for imagery by elevation/Z.</p>"
          },
          {
            "group": "Parameter",
            "type": "Guid",
            "optional": false,
            "field": "imagetypeid",
            "description": "<p>Add an image of this image type.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "allowedValues": [
              "\"image/png\"",
              "\"image/jpeg\""
            ],
            "optional": false,
            "field": "mimetype",
            "description": "<p>Image's mime type</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Query String:",
          "content": "?imageryid=c2019bd6-34aa-4561-ab2f-8802fa5ff3a9&imagetypeid=f0b6aec1-ce5c-4874-b107-162090623a9b&mimetype=image%2Fjpeg",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Guid",
            "optional": false,
            "field": "imageryId",
            "description": "<p>New imagery's identifier (related to start/end depth, x/y/z etc..).</p>"
          },
          {
            "group": "Success 200",
            "type": "Guid",
            "optional": false,
            "field": "imageId",
            "description": "<p>New image's identifier (related to image attached to imagery)</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"imageId\": \"4dba5ebd-264f-4135-8420-1293f61c4e59\",\n    \"imageryId\": \"c2019bd6-34aa-4561-ab2f-8802fa5ff3a9\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "404": [
          {
            "group": "404",
            "optional": false,
            "field": "ErrorDuringRequest",
            "description": "<p>Internal error occurred during the request.</p>"
          }
        ]
      }
    },
    "version": "2.0.0",
    "filename": "../imago-agent/api/routes/io/2/post-image.js",
    "groupTitle": "Imagery"
  },
  {
    "type": "put",
    "url": "/integrate/2/imagery/:id",
    "title": "Update imagery definition",
    "name": "PutImagery",
    "group": "Imagery",
    "description": "<p>Update imagery definition such as its name, start/end depths or x,y,z.</p>",
    "examples": [
      {
        "title": "Example Usage (requires the authorisation token header):",
        "content": "curl -H \"Content-Type: application/json\" -X PUT -d '{\"name\":\"Sample 01926AB\"}' https ://io.imago.live/integrate/2/imagery/ca8379b2-261e-4f30-8848-2eb92cfded87",
        "type": "curl"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "imago-api-token",
            "description": "<p>b4ecb7d7-b8bb-460f-9506-134df358f471</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Guid",
            "optional": false,
            "field": "id",
            "description": "<p>The identifier of the imagery to update with new geometry.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "name",
            "description": "<p>New name of imagery.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "startDepth",
            "description": "<p>New start depth of imagery.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "endDepth",
            "description": "<p>New end depth of imagery.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "x",
            "description": "<p>New longtitude/X coordinate of imagery.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "y",
            "description": "<p>New latitude/Y coordinate of imagery.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "z",
            "description": "<p>New elevation/Z coordinate of imagery.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request Body:",
          "content": "{\n    \"name\" : \"DH001\",\n    \"startDepth\" : 0,\n    \"endDepth\" : 10.1\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "404": [
          {
            "group": "404",
            "optional": false,
            "field": "ErrorDuringRequest",
            "description": "<p>Internal error occurred during the request</p>"
          }
        ]
      }
    },
    "version": "2.0.0",
    "filename": "../imago-agent/api/routes/io/2/put-imagery.js",
    "groupTitle": "Imagery"
  },
  {
    "type": "delete",
    "url": "/integrate/2/session",
    "title": "Sign out of Imago",
    "name": "DeleteSession",
    "group": "Session",
    "description": "<p>Sign a user out of imago and ends the current active session.</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "imago-api-token",
            "description": "<p>b4ecb7d7-b8bb-460f-9506-134df358f471</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "401": [
          {
            "group": "401",
            "optional": false,
            "field": "NotAuthorised",
            "description": "<p>Not authorised to sign in with the supplied credentials.</p>"
          }
        ],
        "404": [
          {
            "group": "404",
            "optional": false,
            "field": "ErrorDuringRequest",
            "description": "<p>Internal error occurred during the request.</p>"
          }
        ]
      }
    },
    "version": "2.0.0",
    "filename": "../imago-agent/api/routes/io/2/definition.js",
    "groupTitle": "Session"
  },
  {
    "type": "get",
    "url": "/integrate/2/session",
    "title": "Check if still signed in",
    "name": "GetSession",
    "group": "Session",
    "description": "<p>Checks if a user is still signed into imago and has an active session.</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "imago-api-token",
            "description": "<p>b4ecb7d7-b8bb-460f-9506-134df358f471</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Guid",
            "optional": false,
            "field": "uid",
            "description": "<p>User's identifier.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"uid\" : \"23c6727c-a5a6-484b-ac33-9812b9878f0a\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "401": [
          {
            "group": "401",
            "optional": false,
            "field": "NotAuthorised",
            "description": "<p>Not authorised to sign in with the supplied credentials.</p>"
          }
        ],
        "404": [
          {
            "group": "404",
            "optional": false,
            "field": "ErrorDuringRequest",
            "description": "<p>Internal error occurred during the request.</p>"
          }
        ]
      }
    },
    "version": "2.0.0",
    "filename": "../imago-agent/api/routes/io/2/definition.js",
    "groupTitle": "Session"
  },
  {
    "type": "post",
    "url": "/integrate/2/session",
    "title": "Sign into Imago",
    "name": "PostSession",
    "group": "Session",
    "description": "<p>Signs into Imago using a username and password and creates an active session.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "username",
            "description": "<p>User's account name.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>User's password.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request Body:",
          "content": "{\n    \"username\" : \"my_user_name\",\n    \"password\" : \"my_password\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Guid",
            "optional": false,
            "field": "uid",
            "description": "<p>User's identifier.</p>"
          },
          {
            "group": "Success 200",
            "type": "Guid",
            "optional": false,
            "field": "apiToken",
            "description": "<p>Imago authorisation token.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"uid\" : \"23c6727c-a5a6-484b-ac33-9812b9878f0a\",\n    \"apiToken\" : \"b4ecb7d7-b8bb-460f-9506-134df358f471\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "401": [
          {
            "group": "401",
            "optional": false,
            "field": "NotAuthorised",
            "description": "<p>Not authorised to sign in with the supplied credentials.</p>"
          }
        ],
        "404": [
          {
            "group": "404",
            "optional": false,
            "field": "ErrorDuringRequest",
            "description": "<p>Internal error occurred during the request.</p>"
          }
        ]
      }
    },
    "version": "2.0.0",
    "filename": "../imago-agent/api/routes/io/2/definition.js",
    "groupTitle": "Session"
  },
  {
    "type": "get",
    "url": "/integrate/2/context",
    "title": "Get the user's context",
    "name": "GetUserContext",
    "group": "UserContext",
    "description": "<p>The user context describes the list of workspaces and other information accessible by that user.</p> <p>Each workspace is described by its dataset, imagery type and image type definitions.</p>",
    "examples": [
      {
        "title": "Example Usage (requires the authorisation token header):",
        "content": "curl -O  https://io.imago.live/integrate/2/context",
        "type": "curl"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "imago-api-token",
            "description": "<p>b4ecb7d7-b8bb-460f-9506-134df358f471</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "workspaces",
            "description": "<p>List of workspaces accessible by the signed in user.</p>"
          },
          {
            "group": "Success 200",
            "type": "Guid",
            "optional": false,
            "field": "workspaces.id",
            "description": "<p>Workspace identifier.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "workspaces.name",
            "description": "<p>Name of the workspace.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "workspaces.readonly",
            "description": "<p>Indicates whether the person has readonly or write access to workspace.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "workspaces.datasets",
            "description": "<p>List of datasets in the workspace.</p>"
          },
          {
            "group": "Success 200",
            "type": "Guid",
            "optional": false,
            "field": "workspaces.datasets.id",
            "description": "<p>Dataset identifier.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "workspaces.datasets.name",
            "description": "<p>Name of the dataset.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "workspaces.datasets.imageryTypes",
            "description": "<p>List of imagery types in the dataset.</p>"
          },
          {
            "group": "Success 200",
            "type": "Guid",
            "optional": false,
            "field": "workspaces.datasets.imageryTypes.id",
            "description": "<p>Imagery type identifier.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "workspaces.datasets.imageryTypes.name",
            "description": "<p>Name of the imagery type.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "workspaces.datasets.imageryTypes.contentType",
            "description": "<p>Content type of the imagery type.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "workspaces.datasets.imageryTypes.geometryType",
            "description": "<p>Geometry type of the imagery type.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "workspaces.datasets.imageryTypes.imagetypes",
            "description": "<p>List of imag types in the imagery type.</p>"
          },
          {
            "group": "Success 200",
            "type": "Guid",
            "optional": false,
            "field": "workspaces.datasets.imageryTypes.imageTypes.id",
            "description": "<p>Image type identifier.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "workspaces.datasets.imageryTypes.imageTypes.name",
            "description": "<p>Name of the image type.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"workspaces\": [\n        {\n            \"id\": \"e0a14890-4ff9-4048-bf5d-76018b950317\",\n            \"name\": \"Demo\",\n            \"readonly\" : false,\n            \"datasets\": [\n                {\n                    \"id\": \"9a08e64f-e6e9-41d8-a47c-044db8a882c4\",\n                    \"name\": \"Base Metals Brownfields Drilling\",\n                    \"imageryTypes\": [\n                        {\n                            \"id\": \"b3627180-ca97-4e5d-a0c6-49fbc0c16f6e\",\n                            \"name\": \"Core Trays\",\n                            \"geometryType\": \"trace\",\n                            \"contentType\": \"coretray\",\n                            \"imageTypes\": [\n                                {\n                                    \"id\": \"744b14c5-f754-4dee-b644-bbfde533c798\",\n                                    \"name\": \"Dry\"\n                                },\n                                {\n                                    \"id\": \"d0969932-d6bd-4e0d-8c54-9acc13cf5144\",\n                                    \"name\": \"Wet\"\n                                }\n                            ]\n                        },\n                        {\n                            \"id\": \"aed9256f-a18a-4eb4-a17a-9e5958dddf2f\",\n                            \"name\": \"Downhole\",\n                            \"geometryType\": \"trace\",\n                            \"contentType\": \"none\",\n                            \"imageTypes\": [\n                                {\n                                    \"id\": \"7bf27c47-7c0d-498e-a3fb-887531632b7b\",\n                                    \"name\": \"Dry\"\n                                },\n                                {\n                                    \"id\": \"02bcc28c-b483-422f-8d32-dac72285c3ea\",\n                                    \"name\": \"Wet\"\n                                }\n                            ]\n                        }\n                    ]\n                },\n                {\n                    \"id\": \"992efe3e-340c-4082-a83f-ddff9225c180\",\n                    \"name\": \"Coal Mine Infill Drilling\",\n                    \"imageryTypes\": [\n                        {\n                            \"id\": \"b3627180-ca97-4e5d-a0c6-49fbc0c16f6e\",\n                            \"name\": \"Core Trays\",\n                            \"geometryType\": \"trace\",\n                            \"contentType\": \"coretray\",\n                            \"imageTypes\": [\n                                {\n                                    \"id\": \"744b14c5-f754-4dee-b644-bbfde533c798\",\n                                    \"name\": \"Dry\"\n                                },\n                                {\n                                    \"id\": \"d0969932-d6bd-4e0d-8c54-9acc13cf5144\",\n                                    \"name\": \"Wet\"\n                                }\n                            ]\n                        },\n                        {\n                            \"id\": \"aed9256f-a18a-4eb4-a17a-9e5958dddf2f\",\n                            \"name\": \"Downhole\",\n                            \"geometryType\": \"trace\",\n                            \"contentType\": \"none\",\n                            \"imageTypes\": [\n                                {\n                                    \"id\": \"7bf27c47-7c0d-498e-a3fb-887531632b7b\",\n                                    \"name\": \"Dry\"\n                                },\n                                {\n                                    \"id\": \"02bcc28c-b483-422f-8d32-dac72285c3ea\",\n                                    \"name\": \"Wet\"\n                                }\n                            ]\n                        }\n                    ]\n                }\n            ]\n        }\n    ]\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "404": [
          {
            "group": "404",
            "optional": false,
            "field": "ErrorDuringRequest",
            "description": "<p>Internal error occurred during the request</p>"
          }
        ]
      }
    },
    "version": "2.0.0",
    "filename": "../imago-agent/api/routes/io/2/get-context.js",
    "groupTitle": "UserContext"
  }
] });
