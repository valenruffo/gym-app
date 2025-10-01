import { Module } from '@nestjs/common';
 
import { ConfigModule } from '@nestjs/config';
import { AuthModule } from './auth/auth.module';
import { RoutinesModule } from './routines/routines.module';
import { UsersModule } from './users/users.module';
import { ExercisesModule } from './exercises/exercises.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    MongooseModule.forRoot('mongodb+srv://gym-app:papa123@gymapp.qpv4br8.mongodb.net/?retryWrites=true&w=majority&appName=gymApp'),
    AuthModule,
    RoutinesModule,
    UsersModule,
    ExercisesModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
