import { IntNullableFilter } from "../../util/IntNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { UserListRelationFilter } from "../user/UserListRelationFilter";

export type PersonalIdInfoWhereInput = {
  businessPhone?: IntNullableFilter;
  id?: StringFilter;
  jobTitle?: StringNullableFilter;
  nationality?: StringNullableFilter;
  personalIdNumber?: IntNullableFilter;
  personalIdType?: "Option1";
  shortJobTitle?: StringNullableFilter;
  uploadIdDocs?: StringNullableFilter;
  users?: UserListRelationFilter;
  voterId?: StringNullableFilter;
};
