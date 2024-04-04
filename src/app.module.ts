import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import CatsController from './controllers';
import LoggerMiddleWare from './middlewares';
import { modules } from './modules/modules';

@Module({
  imports: [modules],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleWare).forRoutes(CatsController);
  }
}
