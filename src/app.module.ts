import { Module } from "@nestjs/common";
import { UsersModule } from "./users/users.module";
import { MongooseModule } from "@nestjs/mongoose";
import { AuthModule } from "./auth/auth.module";
import { ConfigModule } from "@nestjs/config";
import * as dotenv from "dotenv";

dotenv.config({ path: process.cwd() + "/.env" });

@Module({
  imports: [
    MongooseModule.forRoot(
      `mongodb+srv://${process.env.USER_EMAIL}:${process.env.SECRET_KEY}@cluster0.gulwx.mongodb.net/`
    ),
    UsersModule,
    AuthModule,
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: ".env",
    }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
