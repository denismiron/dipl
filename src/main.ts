import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger";


async function start(){
    const PORT = process.env.PORT || 5000
    const app = await NestFactory.create(AppModule, {cors: true})
    const config = new DocumentBuilder()
      .setTitle("обед-буфет")
      .setDescription("Документация api")
      .setVersion('1.0.0')
      // .addBearerAuth()
      .build()
  const document = SwaggerModule.createDocument(app, config)
  SwaggerModule.setup("/api/docs", app, document)
    await app.listen(PORT,()=>{
      console.log(`Server started on port = ${PORT}`)
    })
}
start()
//Когда надо всё сделать. Картинки. Документация. Что писать про реализацию. Рассказать что сделал и что дальше делать буду.
//валидация. про номер телефона узнать как можно больше информации идентификация по номеру телефона
// с лизой по названиям ключей интерфейса, созвониться сегодня
// файл нам приходит, распарсить в бд, интерфейс и меню
// какая архитектура во 2ой части, в 3ей главе документация.
