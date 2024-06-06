import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type DocumentWhereInput = {
  format?: StringNullableFilter;
  id?: StringFilter;
  name?: StringNullableFilter;
  url?: StringNullableFilter;
  user?: UserWhereUniqueInput;
};
