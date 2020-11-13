import { Injectable, ExecutionContext } from '@nestjs/common';
import { JwtAuthGuard } from './jwt-auth.guard';

@Injectable()
export class CanBeAuthenticated extends JwtAuthGuard {
  beforeAuth(context: ExecutionContext): void {
    const request = context.switchToHttp().getRequest();
    const bearer = request.headers['authorization'];
    if (!bearer) return;
    return;
  }

  afterAuth(user): Record<string, any> {
    return { user, pass: true };
  }
}