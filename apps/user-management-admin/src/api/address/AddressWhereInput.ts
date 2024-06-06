import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type AddressWhereInput = {
  addressLine1?: StringNullableFilter;
  addressType?: "Option1";
  city?: StringNullableFilter;
  country?: "Option1";
  id?: StringFilter;
  island?: "Option1";
  postalCode?: IntNullableFilter;
  user?: UserWhereUniqueInput;
};
