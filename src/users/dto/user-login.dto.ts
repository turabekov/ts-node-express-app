import { IsEmail, IsString } from 'class-validator';

export class UserLoginDto {
	@IsEmail({}, { message: 'Email wrong' })
	email: string;

	@IsString({ message: 'Password not given' })
	password: string;
}
