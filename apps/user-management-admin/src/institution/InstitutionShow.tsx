import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
  ReferenceManyField,
  Datagrid,
  ReferenceField,
} from "react-admin";

import { INSTITUTION_TITLE_FIELD } from "./InstitutionTitle";
import { PERSONALIDINFO_TITLE_FIELD } from "../personalIdInfo/PersonalIdInfoTitle";

export const InstitutionShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <TextField label="individuals" source="individuals" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField
          reference="User"
          target="institutionId"
          label="Users"
        >
          <Datagrid rowClick="show">
            <TextField label="addressDetails" source="addressDetails" />
            <TextField label="birthDate" source="birthDate" />
            <DateField source="createdAt" label="Created At" />
            <TextField label="dateOfBirth" source="dateOfBirth" />
            <TextField label="documentDetails" source="documentDetails" />
            <TextField label="Email" source="email" />
            <TextField label="emailAddress" source="emailAddress" />
            <TextField label="emailAddressOTP" source="emailAddressOtp" />
            <TextField label="emailOTP" source="emailOtp" />
            <TextField label="First Name" source="firstName" />
            <TextField label="gender" source="gender" />
            <TextField label="ID" source="id" />
            <ReferenceField
              label="institution"
              source="institution.id"
              reference="Institution"
            >
              <TextField source={INSTITUTION_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="Last Name" source="lastName" />
            <TextField label="mobilePhone" source="mobilePhone" />
            <TextField label="mobilePhoneNumber" source="mobilePhoneNumber" />
            <TextField label="otpExpires" source="otpExpires" />
            <TextField label="otpExpiry" source="otpExpiry" />
            <ReferenceField
              label="personalIdInfo"
              source="personalidinfo.id"
              reference="PersonalIdInfo"
            >
              <TextField source={PERSONALIDINFO_TITLE_FIELD} />
            </ReferenceField>
            <TextField
              label="personalIdInformation"
              source="personalIdInformation"
            />
            <TextField label="phoneOTP" source="phoneOtp" />
            <TextField label="relatedInstitution" source="relatedInstitution" />
            <TextField label="Roles" source="roles" />
            <TextField label="smsOTP" source="smsOtp" />
            <DateField source="updatedAt" label="Updated At" />
            <TextField label="userCategory" source="userCategory" />
            <TextField label="Username" source="username" />
            <TextField label="userType" source="userType" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
