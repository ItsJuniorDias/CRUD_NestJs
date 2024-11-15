import { Injectable, UnauthorizedException } from "@nestjs/common";
import { UsersService } from "../users/users.service";
import { JwtService } from "@nestjs/jwt";
import { AuthDto } from "./dto/auth-user.dto";

export interface UsersProps {
  name: string;
  email: string;
  password: string;
}

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UsersService,
    private jwtService: JwtService
  ) {}

  async signIn(
    email: string,
    pass: string
  ): Promise<{
    email: string;
    access_token: string;
    _id: string;
  }> {
    const user: any = await this.userService.findLogin(email, pass);

    if (user?.email !== email) {
      throw new UnauthorizedException();
    }

    if (user?.password !== pass) {
      throw new UnauthorizedException();
    }

    const payload = { email: user.email, password: user.password };

    const { _id } = user;

    return {
      _id,
      email: user.email,
      access_token: await this.jwtService.signAsync(payload),
    };
  }
}
