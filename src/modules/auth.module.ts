import { Module } from '@nestjs/common';
import { UsersModule } from './users.module';
import { AuthService } from 'src/services/auth.service';
import { AuthController } from 'src/controllers/auth.controller';
import { JwtModule } from '@nestjs/jwt';
import { jwtConstants } from 'src/constants/jwt.constant';

@Module({
  imports: [UsersModule,
    JwtModule.register({
        global: true,
        secret: jwtConstants.secret,
        signOptions: {expiresIn: '60s'}
    })
  ],
  providers: [AuthService],
  controllers: [AuthController],
  exports: [AuthService]
})
export class AuthModule {}