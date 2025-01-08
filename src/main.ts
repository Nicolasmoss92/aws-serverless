import { NestFactory } from '@nestjs/core';
import serverlessExpress from '@codegenie/serverless-express';
import { Handler } from 'aws-lambda';
import { AppModule } from './app.module';

let server: Handler;

async function createServer(): Promise<Handler> {
  const app = await NestFactory.create(AppModule);
  await app.init();

  return serverlessExpress({ app: app.getHttpAdapter().getInstance() });
}

export const handler: Handler = async (event, context, callback) => {
  server = server || (await createServer());
  return server(event, context, callback);
};
