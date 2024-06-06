import { Injectable } from "@nestjs/common";

@Injectable()
export class AuthService {
  constructor() {}
  async SignUp(args: string): Promise<string> {
    throw new Error("Not implemented");
  }
}
