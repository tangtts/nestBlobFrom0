import { ValidationPipe } from "@nestjs/common";
import { NestFactory } from "@nestjs/core";
import { NestExpressApplication } from "@nestjs/platform-express";
import { join } from "path";
import { AppModule } from "./app.module";
import { generateDocument } from "./doc";

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  // 创建文档
  generateDocument(app);
  // 添加数据校验
  app.useGlobalPipes(new ValidationPipe());

  const uploadDir = join(__dirname, "../../", "static/upload");

  app.useStaticAssets(uploadDir, {
    // 设置虚拟路径
    prefix: "/static/upload",
  });

  await app.listen(3000);
}
bootstrap();
