import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
     TypeOrmModule.forRoot({
      type: 'mysql',
      port: 3306,
      host: '127.0.0.1',
      username: 'root',
      password: 'root',
      database: 'user_blog_app',
      autoLoadEntities: true,
      synchronize: true
     })
    ,UsersModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
