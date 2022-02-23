export interface RegDto {
  readonly name: string;
  readonly email: string;
  readonly password: string;
}

export interface AuthDto {
  readonly email: string;
  readonly password: string;
}
