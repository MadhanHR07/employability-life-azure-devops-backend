import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { HelloController } from './hello/hello.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'cobradatabase.mysql.database.azure.com',
      port: 3306,
      username: 'MadhanHR2003',
      password: 'Shetty@2003',
      database: 'cobradb',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true,
    }),
    UserModule,
    AuthModule
  ],
  controllers: [AppController, HelloController],
  providers: [AppService],
})
export class AppModule {}
