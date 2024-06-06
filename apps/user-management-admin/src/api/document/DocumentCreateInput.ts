import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type DocumentCreateInput = {
  format?: string | null;
  name?: string | null;
  url?: string | null;
  user?: UserWhereUniqueInput | null;
};
