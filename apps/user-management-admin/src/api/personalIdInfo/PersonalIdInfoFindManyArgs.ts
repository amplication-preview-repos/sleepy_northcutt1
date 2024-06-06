import { PersonalIdInfoWhereInput } from "./PersonalIdInfoWhereInput";
import { PersonalIdInfoOrderByInput } from "./PersonalIdInfoOrderByInput";

export type PersonalIdInfoFindManyArgs = {
  where?: PersonalIdInfoWhereInput;
  orderBy?: Array<PersonalIdInfoOrderByInput>;
  skip?: number;
  take?: number;
};
