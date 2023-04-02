import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { generateDocument } from './doc';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // 创建文档
  generateDocument(app)
  // 添加数据校验
  app.useGlobalPipes(new ValidationPipe())
  await app.listen(3000);
}
bootstrap();
