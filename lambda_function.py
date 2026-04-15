import json

def lambda_handler(event, context):
    body = json.loads(event['body'])

    name = body['name']
    email = body['email']
    message = body['message']

    print(name, email, message)

    return {
        "statusCode": 200,
        "headers": {
            "Access-Control-Allow-Origin": "*"
        },
        "body": "Message received successfully 🚀"
    }