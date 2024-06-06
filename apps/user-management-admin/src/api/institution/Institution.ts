import { User } from "../user/User";

export type Institution = {
  createdAt: Date;
  id: string;
  individuals: string | null;
  updatedAt: Date;
  users?: Array<User>;
};
