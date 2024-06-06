import { User } from "../user/User";

export type PersonalIdInfo = {
  businessPhone: number | null;
  createdAt: Date;
  id: string;
  jobTitle: string | null;
  nationality: string | null;
  personalIdNumber: number | null;
  personalIdType?: "Option1" | null;
  shortJobTitle: string | null;
  updatedAt: Date;
  uploadIdDocs: string | null;
  users?: Array<User>;
  voterId: string | null;
};
