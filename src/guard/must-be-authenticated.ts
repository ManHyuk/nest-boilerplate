import { Injectable, ExecutionContext } from '@nestjs/common';
import { JwtAuthGuard } from './jwt-auth.guard';
import { UnauthorizedException } from '@nestjs/common';

@Injectable()
export class MustBeAuthenticated extends JwtAuthGuard {
  beforeAuth(context: ExecutionContext): void {
    const request = context.switchToHttp().getRequest();
    const bearer = request.headers['authorization'];
    if (!bearer) throw new UnauthorizedException();
    return;
  }

  afterAuth(user): Record<string, any> {
    if (!user) throw new UnauthorizedException();
    return { user, pass: true };
  }
}