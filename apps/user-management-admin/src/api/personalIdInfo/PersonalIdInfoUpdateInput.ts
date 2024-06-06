import { UserUpdateManyWithoutPersonalIdInfosInput } from "./UserUpdateManyWithoutPersonalIdInfosInput";

export type PersonalIdInfoUpdateInput = {
  businessPhone?: number | null;
  jobTitle?: string | null;
  nationality?: string | null;
  personalIdNumber?: number | null;
  personalIdType?: "Option1" | null;
  shortJobTitle?: string | null;
  uploadIdDocs?: string | null;
  users?: UserUpdateManyWithoutPersonalIdInfosInput;
  voterId?: string | null;
};
