import { IsEmail, IsString } from 'class-validator';

export class UserRegisterDto {
	@IsEmail({}, { message: 'Email wrong' })
	email: string;

	@IsString({ message: 'Password not given' })
	password: string;

	@IsString({ message: 'Name not given' })
	name: string;
}
