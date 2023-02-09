import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Transport } from '@nestjs/microservices';
import { USER_PACKAGE_NAME } from './users/user.pb';
import { join } from 'path';

const microserviceOptions = {
  transport: Transport.GRPC,
  options: {
    package: USER_PACKAGE_NAME,
    protoPath: join(__dirname, '../../app-proto/user.proto')
  }
}

async function bootstrap() {
  const app = await NestFactory.createMicroservice(AppModule, microserviceOptions);
  await app.listen();
}
bootstrap();
