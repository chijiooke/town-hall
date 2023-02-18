export interface UserModelDataType {
  emailAddress: string;
  fullName: string;
  password?: string;
}
export interface UserSignUpRequestDataType {
  emailAddress: string;
  fullName: string;
  password: string;
  teamId?: string;
  accessKey?: string;
}
