import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthModule } from './auth/auth.module';
import { UploadModule } from './upload/upload.module';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://reabilitado97:DDFYDBjwEtAg9LTT@cluster0.gulwx.mongodb.net/',
    ),
    UsersModule,
    AuthModule,
    UploadModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
