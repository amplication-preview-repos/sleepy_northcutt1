import { User } from "../user/User";

export type Address = {
  addressLine1: string | null;
  addressType?: "Option1" | null;
  city: string | null;
  country?: "Option1" | null;
  createdAt: Date;
  id: string;
  island?: "Option1" | null;
  postalCode: number | null;
  updatedAt: Date;
  user?: User | null;
};
