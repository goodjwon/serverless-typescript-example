import type { Serverless } from 'serverless/aws';
const serverlessConfiguration: Serverless = {
  service: {
    name: 'serverless-typescript-example',
    // app and org for use with dashboard.serverless.com
    // app: your-app-name,
    // org: your-org-name,
  },
  frameworkVersion: '2',
  custom: {
    webpack: {
      webpackConfig: './webpack.config.js',
      includeModules: true
    }
  },
  // Add the serverless-webpack plugin
  plugins: ['serverless-webpack'],
  provider: {
    name: 'aws',
    runtime: 'nodejs12.x',
    region: 'ap-northeast-2',
    stage: 'dev',
    apiGateway: {
      minimumCompressionSize: 1024,
    },
    environment: {
      AWS_NODEJS_CONNECTION_REUSE_ENABLED: '1',
    },
    iamRoleStatements:[
      {
        Effect: 'Allow',
        Action: [
            'dynamodb:Query',
            'dynamodb:Scan',
            'dynamodb:GetItem',
            'dynamodb:PutItem',
            'dynamodb:UpdateItem',
            'dynamodb:DeleteItem',
        ],
        Resource: 'arn:aws:dynamodb:ap-northeast-2:026363199507:table/books-table'
      }
    ]
  },
  resources: {
    Resources: {
      BooksTable: {
        Type: 'AWS::DynamoDB::Table',
        Properties: {
          TableName:'books-table',
          AttributeDefinitions: [
            { AttributeName: 'PK', AttributeType: 'S' },
            { AttributeName: 'SK', AttributeType: 'S' }
          ],
          KeySchema: [
            { AttributeName: 'PK', KeyType: 'HASH' },
            { AttributeName: 'SK', KeyType: 'RANGE' }
          ],
          BillingMode: 'PAY_PER_REQUEST'
        }
      }
    }
  },
  functions: {
    hello: {
      handler: 'handler.hello',
      events: [
        {
          http: {
            method: 'post',
            path: 'hello',
          }
        }
      ]
    },
    goodbye: {
      handler: 'handler.goodbye',
      events: [
        {
          http: {
            method: 'get',
            path: 'goodbye',
          }
        }
      ]
    }
  }
}

module.exports = serverlessConfiguration;
