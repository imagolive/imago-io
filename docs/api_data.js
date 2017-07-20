define({ "api": [
  {
    "type": "get",
    "url": "/integrate/2/context",
    "title": "",
    "name": "GetUserContext",
    "group": "User_Context",
    "description": "<p>The user context describes the list of projects accessible by that user.</p> <p>Each project is described by its dataset, data series types and imagery type definitions.</p>",
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
            "field": "projects",
            "description": "<p>List of projects accessible by the signed in user.</p>"
          },
          {
            "group": "Success 200",
            "type": "Guid",
            "optional": false,
            "field": "projects.id",
            "description": "<p>Project identifier.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "projects.name",
            "description": "<p>Name of the project.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "projects.datasets",
            "description": "<p>List of datasets in the project.</p>"
          },
          {
            "group": "Success 200",
            "type": "Guid",
            "optional": false,
            "field": "projects.datasets.id",
            "description": "<p>Dataset identifier.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "projects.datasets.name",
            "description": "<p>Name of the dataset.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "projects.datasets.dataSeriesTypes",
            "description": "<p>List of data series types in the dataset.</p>"
          },
          {
            "group": "Success 200",
            "type": "Guid",
            "optional": false,
            "field": "projects.datasets.dataSeriesTypes.id",
            "description": "<p>Data series type identifier.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "projects.datasets.dataSeriesTypes.name",
            "description": "<p>Name of the data series type.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "projects.datasets.dataSeriesTypes.contentType",
            "description": "<p>Content type of the data series type.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "projects.datasets.dataSeriesTypes.geometryType",
            "description": "<p>Geometry type of the data series type.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "projects.datasets.dataSeriesTypes.imagerytypes",
            "description": "<p>List of imagery types in the data series type.</p>"
          },
          {
            "group": "Success 200",
            "type": "Guid",
            "optional": false,
            "field": "projects.datasets.dataSeriesTypes.imageryTypes.id",
            "description": "<p>Imagery type identifier.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "projects.datasets.dataSeriesTypes.imageryTypes.name",
            "description": "<p>Name of the imagery type.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"projects\": [\n        {\n            \"id\": \"e0a14890-4ff9-4048-bf5d-76018b950317\",\n            \"name\": \"Demo\",\n            \"Datasets\": [\n                {\n                    \"id\": \"9a08e64f-e6e9-41d8-a47c-044db8a882c4\",\n                    \"name\": \"Base Metals Brownfields Drilling\",\n                    \"dataSeriesTypes\": [\n                        {\n                            \"id\": \"b3627180-ca97-4e5d-a0c6-49fbc0c16f6e\",\n                            \"name\": \"Core Trays\",\n                            \"geometryType\": \"trace\",\n                            \"contentType\": \"coretray\",\n                            \"imageryTypes\": [\n                                {\n                                    \"id\": \"744b14c5-f754-4dee-b644-bbfde533c798\",\n                                    \"name\": \"Dry\"\n                                },\n                                {\n                                    \"id\": \"d0969932-d6bd-4e0d-8c54-9acc13cf5144\",\n                                    \"name\": \"Wet\"\n                                }\n                            ]\n                        },\n                        {\n                            \"id\": \"aed9256f-a18a-4eb4-a17a-9e5958dddf2f\",\n                            \"name\": \"Downhole\",\n                            \"geometryType\": \"trace\",\n                            \"contentType\": \"none\",\n                            \"imageryTypes\": [\n                                {\n                                    \"id\": \"7bf27c47-7c0d-498e-a3fb-887531632b7b\",\n                                    \"name\": \"Dry\"\n                                },\n                                {\n                                    \"id\": \"02bcc28c-b483-422f-8d32-dac72285c3ea\",\n                                    \"name\": \"Wet\"\n                                }\n                            ]\n                        }\n                    ]\n                },\n                {\n                    \"id\": \"992efe3e-340c-4082-a83f-ddff9225c180\",\n                    \"name\": \"Coal Mine Infill Drilling\",\n                    \"dataSeriesTypes\": [\n                        {\n                            \"id\": \"b3627180-ca97-4e5d-a0c6-49fbc0c16f6e\",\n                            \"name\": \"Core Trays\",\n                            \"geometryType\": \"trace\",\n                            \"contentType\": \"coretray\",\n                            \"imageryTypes\": [\n                                {\n                                    \"id\": \"744b14c5-f754-4dee-b644-bbfde533c798\",\n                                    \"name\": \"Dry\"\n                                },\n                                {\n                                    \"id\": \"d0969932-d6bd-4e0d-8c54-9acc13cf5144\",\n                                    \"name\": \"Wet\"\n                                }\n                            ]\n                        },\n                        {\n                            \"id\": \"aed9256f-a18a-4eb4-a17a-9e5958dddf2f\",\n                            \"name\": \"Downhole\",\n                            \"geometryType\": \"trace\",\n                            \"contentType\": \"none\",\n                            \"imageryTypes\": [\n                                {\n                                    \"id\": \"7bf27c47-7c0d-498e-a3fb-887531632b7b\",\n                                    \"name\": \"Dry\"\n                                },\n                                {\n                                    \"id\": \"02bcc28c-b483-422f-8d32-dac72285c3ea\",\n                                    \"name\": \"Wet\"\n                                }\n                            ]\n                        }\n                    ]\n                }\n            ]\n        }\n    ]\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "ErrorDuringRequest",
            "description": "<p>Internal error occurred during the request</p>"
          }
        ]
      }
    },
    "version": "2.0.0",
    "filename": "../imago-agent/api/routes/io/2/get-context.js",
    "groupTitle": "User_Context"
  }
] });
