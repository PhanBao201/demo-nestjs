import { MiddlewareConsumer, Module, NestModule } from "@nestjs/common";
import { CatsController } from "src/controllers/cats.controller";
import { LoggerMiddleWare } from "src/middlewares/logger.middleware";
import { CatsService } from "src/services/cats.service";

@Module({
  controllers: [CatsController],
  providers: [CatsService],
})
export class CatsModule implements NestModule {
    configure(consumer: MiddlewareConsumer) {
        consumer.apply(LoggerMiddleWare).forRoutes(CatsController);
      }
}
