import { Module } from "@nestjs/common";
import CatsController, { Product_Controller } from "src/controllers";
import CatsService, { Product_Service } from "src/services";

@Module({
  controllers: [CatsController, Product_Controller],
  providers: [CatsService, Product_Service],
})
export class modules {}
