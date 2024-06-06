import { UserUpdateManyWithoutInstitutionsInput } from "./UserUpdateManyWithoutInstitutionsInput";

export type InstitutionUpdateInput = {
  individuals?: string | null;
  users?: UserUpdateManyWithoutInstitutionsInput;
};
