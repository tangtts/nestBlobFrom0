# 🐇 Swagger 文档
```sh
 pnpm i @nestjs/swagger
```
1. 定义一个`doc.ts` 与 `main` 平级

```js
import { INestApplication } from "@nestjs/common";
import { SwaggerModule, DocumentBuilder } from "@nestjs/swagger";
import * as packageConfig from "../package.json";

export const generateDocument = (app: INestApplication) => {
  const options = new DocumentBuilder()
    .setTitle(packageConfig.name)
    .setDescription(packageConfig.description)
    .setVersion(packageConfig.version)
    .addBearerAuth() // 允许token 验证
    .build();

  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup("/api/docs", app, document);
};
```

2. 在 `main.ts` 中引入
   `generateDocument(app)`
3. 在 controll 使用
   - @ApiTags("初始化") 大标题
   - @ApiOperation({ // 单独接口的标题
     summary:"getHello"
     })
   - @ApiBearerAuth() 使用鉴权
   -  @ApiResponse({
  status:HttpStatus.CREATED,
  description:"getHello",
  type:CreateDto
 })

4. 在 `dto` 中使用

```js
export class CreateDto {
  @ApiProperty({ example: "123" })
  phoneNumber: string;
  @ApiProperty({ example: "password" })
  password: string;
  @ApiProperty({ example: "email" })
  email: string;
}
```

