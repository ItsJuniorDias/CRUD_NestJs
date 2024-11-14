import { Module } from "@nestjs/common";
import { UsersModule } from "./users/users.module";
import { MongooseModule } from "@nestjs/mongoose";
import { AuthModule } from "./auth/auth.module";
require("dotenv").config();

@Module({
  imports: [
    MongooseModule.forRoot(
      "mongodb+srv://juniordias:gNPxdfPGyF7A37XJ@cluster0.b7w3c.mongodb.net/"
    ),
    UsersModule,
    AuthModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
