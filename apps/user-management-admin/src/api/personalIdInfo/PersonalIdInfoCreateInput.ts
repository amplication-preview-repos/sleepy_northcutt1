import { UserCreateNestedManyWithoutPersonalIdInfosInput } from "./UserCreateNestedManyWithoutPersonalIdInfosInput";

export type PersonalIdInfoCreateInput = {
  businessPhone?: number | null;
  jobTitle?: string | null;
  nationality?: string | null;
  personalIdNumber?: number | null;
  personalIdType?: "Option1" | null;
  shortJobTitle?: string | null;
  uploadIdDocs?: string | null;
  users?: UserCreateNestedManyWithoutPersonalIdInfosInput;
  voterId?: string | null;
};
