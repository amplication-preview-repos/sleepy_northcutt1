import { User } from "../user/User";

export type Document = {
  createdAt: Date;
  format: string | null;
  id: string;
  name: string | null;
  updatedAt: Date;
  url: string | null;
  user?: User | null;
};
