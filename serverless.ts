import type { Serverless } from 'serverless/aws';
import {Table} from "aws-sdk/clients/glue";

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
  },
  resources: {
    Resources: {

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
