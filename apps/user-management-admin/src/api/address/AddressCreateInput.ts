import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type AddressCreateInput = {
  addressLine1?: string | null;
  addressType?: "Option1" | null;
  city?: string | null;
  country?: "Option1" | null;
  island?: "Option1" | null;
  postalCode?: number | null;
  user?: UserWhereUniqueInput | null;
};
