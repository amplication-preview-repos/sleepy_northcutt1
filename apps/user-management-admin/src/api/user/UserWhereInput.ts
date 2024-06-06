import { StringNullableFilter } from "../../util/StringNullableFilter";
import { AddressListRelationFilter } from "../address/AddressListRelationFilter";
import { DocumentListRelationFilter } from "../document/DocumentListRelationFilter";
import { StringFilter } from "../../util/StringFilter";
import { InstitutionWhereUniqueInput } from "../institution/InstitutionWhereUniqueInput";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { PersonalIdInfoWhereUniqueInput } from "../personalIdInfo/PersonalIdInfoWhereUniqueInput";

export type UserWhereInput = {
  addressDetails?: StringNullableFilter;
  addresses?: AddressListRelationFilter;
  birthDate?: StringNullableFilter;
  dateOfBirth?: StringNullableFilter;
  documentDetails?: StringNullableFilter;
  documents?: DocumentListRelationFilter;
  email?: StringNullableFilter;
  emailAddress?: StringNullableFilter;
  emailAddressOtp?: StringNullableFilter;
  emailOtp?: StringNullableFilter;
  firstName?: StringNullableFilter;
  gender?: "Option1";
  id?: StringFilter;
  institution?: InstitutionWhereUniqueInput;
  lastName?: StringNullableFilter;
  mobilePhone?: IntNullableFilter;
  mobilePhoneNumber?: IntNullableFilter;
  otpExpires?: DateTimeNullableFilter;
  otpExpiry?: DateTimeNullableFilter;
  personalIdInfo?: PersonalIdInfoWhereUniqueInput;
  personalIdInformation?: StringNullableFilter;
  phoneOtp?: StringNullableFilter;
  relatedInstitution?: StringNullableFilter;
  smsOtp?: StringNullableFilter;
  userCategory?: "Option1";
  username?: StringFilter;
  userType?: "Option1";
};