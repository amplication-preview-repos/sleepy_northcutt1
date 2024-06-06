import { PersonalIdInfo as TPersonalIdInfo } from "../api/personalIdInfo/PersonalIdInfo";

export const PERSONALIDINFO_TITLE_FIELD = "jobTitle";

export const PersonalIdInfoTitle = (record: TPersonalIdInfo): string => {
  return record.jobTitle?.toString() || String(record.id);
};
