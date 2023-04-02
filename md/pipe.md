# 🐤 pipe

> 相当于 自来水管，可以加入净水器，净水器就相当于 pipe(管道)

```sh
pnpm i class-validator class-transformer
```

## 两大功能

1. 可以做转换
2. 可以进行检测

### 数据校验

1. 在 main.ts 中,先定义

```js
import { ValidationPipe } from "@nestjs/common";
app.useGlobalPipes(new ValidationPipe());
```

2. 在`dto` 中声明

```js
export class CreateDto {
  @ApiProperty({ example: "123" })
  @Matches(/\d{9,}/g, { message: "请输入正确的手机号" })
  phoneNumber: string;

  @ApiProperty({ example: "password" })
  @IsNotEmpty()
  @Length(6, 10)
  password: string;

  @ApiProperty({ example: "email" })
  @IsEmail()
  email: string;
}
```
