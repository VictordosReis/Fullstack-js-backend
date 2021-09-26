import { NextFunction, request, response } from 'express';
import Controller from './Controller';

class UserController extends Controller {
  Constructor() {
    super('user');
  }

  protected initRoutes(): void {
    throw new Error('method not implemented.');
  }

  private async list(req: Request, res: Response, next: NextFunction): Promise<Response> {
    return null;
  }
}
