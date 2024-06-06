import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { UserListRelationFilter } from "../user/UserListRelationFilter";

export type InstitutionWhereInput = {
  id?: StringFilter;
  individuals?: StringNullableFilter;
  users?: UserListRelationFilter;
};
