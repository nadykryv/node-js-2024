import { ApiError } from "../errors/api-error";
import { IUser, IUserCreateDto } from "../interfaces/user.interface";
import { userRepository } from "../repositories/user.repository";
import { passwordService } from "./password.service";
import { userService } from "./user.service";

class AuthService {
  public async singUp(dto: IUserCreateDto): Promise<IUser> {
    await userService.isEmailUnique(dto.email);
    const password = await passwordService.hashPassword(dto.password);
    return await userRepository.create({ ...dto, password });
  }

  public async signIn(dto: any): Promise<any> {
    const user = await userRepository.getByEmail(dto.email);
    const isPasswordCorrect = await passwordService.comparePassword(
      dto.password,
      user.password,
    );
    if (!isPasswordCorrect) {
      throw new ApiError("incorrect email or password", 401);
    }
  }
}

export const authService = new AuthService();
