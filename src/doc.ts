import { INestApplication } from "@nestjs/common";
import {SwaggerModule,DocumentBuilder } from "@nestjs/swagger";
import * as packageConfig from "../package.json"
/**
 * 
 * @param app 创建文档
 */
export const generateDocument = (app:INestApplication) =>{
  const options = new DocumentBuilder()
    .setTitle(packageConfig.name)
    .setDescription(packageConfig.description)
    .setVersion(packageConfig.version)
    .addBearerAuth() // 允许token 验证
    .build();

    const document = SwaggerModule.createDocument(app,options)
    SwaggerModule.setup("/api/docs",app,document)
}


