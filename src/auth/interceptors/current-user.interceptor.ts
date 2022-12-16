import {
    CallHandler,
    ExecutionContext,
    Inject,
    NestInterceptor,
    NotFoundException,
  } from '@nestjs/common';
  import { Observable } from 'rxjs';
  import { UsersService } from 'src/users/users.service';
  
  export class CurrentUserInterceptor implements NestInterceptor {
    constructor(
        private readonly userService: UsersService
    ) {}
  
    async intercept(
      context: ExecutionContext,
      next: CallHandler,
    ): Promise<Observable<any>> {
      const request = context.switchToHttp().getRequest();
  
      const user = await this.userService.findOneById(
        request.user.id,
      );
  
      if (!user) {
        throw new NotFoundException('Access token is not valid');
      }
  
      request.user = user;
  
      return next.handle();
    }
  }