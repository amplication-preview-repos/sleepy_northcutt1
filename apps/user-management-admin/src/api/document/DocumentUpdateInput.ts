import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type DocumentUpdateInput = {
  format?: string | null;
  name?: string | null;
  url?: string | null;
  user?: UserWhereUniqueInput | null;
};
