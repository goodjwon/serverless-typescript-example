const aws = require('aws-sdk');
const db = new aws.DynamoDB.DocumentClient({
    region: 'ap-northeast-2'
})
export const dynamo = {
    put: async data => {
        const params = {
            TableName: 'books-table',
            Item: data
        }
        const res = await db.put(params).promise()
        return res
    },

    get: async  keys => {
        const params = {
            TableName: 'books-table',
            Key: keys
        }
        const x = await db.get(params).promise()
        return x.Item;
    }
}

export const handler = {
    input: x => JSON.parse(x.body),
    returnSuccess: x => ({
            statusCode: 200,
            body: JSON.stringify(x)
        }
    )
}

export default {
    handler: handler,
    db: {},
    event: {}
}