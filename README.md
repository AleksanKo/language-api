A small language API deployed to AWS:
https://jozya4at3k.execute-api.eu-central-1.amazonaws.com/analyze/

Only POST requests are supported.

Request:

`{text: "<some string>"}`

Response:

        {
            "textLength":{"withSpaces": <number>,"withoutSpaces": <number>},
            "wordCount": <number>,
            "characterCount":[{<character>: <number>},]
        }