import { Institution as TInstitution } from "../api/institution/Institution";

export const INSTITUTION_TITLE_FIELD = "individuals";

export const InstitutionTitle = (record: TInstitution): string => {
  return record.individuals?.toString() || String(record.id);
};
