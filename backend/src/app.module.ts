import { Module } from '@nestjs/common';

import { ConfigModule } from '@nestjs/config';
import { AuthModule } from './auth/auth.module';
import { RoutinesModule } from './routines/routines.module';
import { UsersModule } from './users/users.module';
import { ExercisesModule } from './exercises/exercises.module';


@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    AuthModule,
    RoutinesModule,
    UsersModule,
    ExercisesModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
