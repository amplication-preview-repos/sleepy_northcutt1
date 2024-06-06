import { SortOrder } from "../../util/SortOrder";

export type AddressOrderByInput = {
  addressLine1?: SortOrder;
  addressType?: SortOrder;
  city?: SortOrder;
  country?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  island?: SortOrder;
  postalCode?: SortOrder;
  updatedAt?: SortOrder;
  userId?: SortOrder;
};
