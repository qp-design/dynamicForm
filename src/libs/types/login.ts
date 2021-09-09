export interface loginForm {
  sign: string;
  password: string;
  code: string;
}

export interface resetForm {
  oldPassword: string;
  newPassword: string;
  again: string;
}
