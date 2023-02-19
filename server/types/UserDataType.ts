export interface UserModelDataType {
  emailAddress: string;
  fullName: string;
  password?: string;
  isDisplayPictureSet: boolean;
  displayPicture: string;
  teams: {
    title?: string | undefined;
    Id?: string | undefined;
  }[];
}
export interface UserSignUpRequestDataType {
  emailAddress: string;
  fullName: string;
  password: string;
  teamId?: string;
  accessKey?: string;
}
export interface UserSignInRequestDataType {
  emailAddress: string;
  password: string;
}
