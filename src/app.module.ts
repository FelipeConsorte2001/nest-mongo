import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { MongooseModule } from '@nestjs/mongoose';
import { Config } from './config.module';
@Module({
  imports: [MongooseModule.forRoot(process.env.URL_DB), UsersModule, Config],
  controllers: [],
  providers: [],
})
export class AppModule {}
