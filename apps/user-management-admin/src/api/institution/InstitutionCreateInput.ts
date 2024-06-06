import { UserCreateNestedManyWithoutInstitutionsInput } from "./UserCreateNestedManyWithoutInstitutionsInput";

export type InstitutionCreateInput = {
  individuals?: string | null;
  users?: UserCreateNestedManyWithoutInstitutionsInput;
};
