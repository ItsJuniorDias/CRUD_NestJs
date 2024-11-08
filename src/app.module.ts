import { Module } from "@nestjs/common";
import { UsersModule } from "./users/users.module";
import { MongooseModule } from "@nestjs/mongoose";

@Module({
  imports: [
    MongooseModule.forRoot(
      "mongodb+srv://reabilitado97:zs1oAU5swuN1NTlw@cluster0.gulwx.mongodb.net/"
    ),
    UsersModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
