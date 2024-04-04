import { Module } from "@nestjs/common";
import { CatsModule } from "./cats.module";
import { ProductsModule } from "./product.module";
import { AuthModule } from "./auth.module";

@Module({
  imports: [CatsModule, ProductsModule, AuthModule]
})
export class modules {}
