import { NestFactory } from '@nestjs/core'
import { ValidationPipe } from '@nestjs/common'
import { ApplicationModule } from './app.module'
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger'

async function bootstrap() {
  const app = await NestFactory.create(ApplicationModule)
  app.useGlobalPipes(new ValidationPipe())

  const options = new DocumentBuilder()
    .setTitle('User example')
    .setDescription('The user API description')
    .setVersion('1.0')
    .build()

  const document = SwaggerModule.createDocument(app, options)
  SwaggerModule.setup('/api', app, document)

  await app.listen(3000)
}
bootstrap()
