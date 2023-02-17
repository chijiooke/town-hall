import { UserModelDataType } from "./UserDataType";

export interface TeamDataType {
  title: string;
  members: UserModelDataType[];
}
