import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  ReferenceField,
  ReferenceManyField,
  Datagrid,
} from "react-admin";

import { USER_TITLE_FIELD } from "./UserTitle";
import { INSTITUTION_TITLE_FIELD } from "../institution/InstitutionTitle";
import { PERSONALIDINFO_TITLE_FIELD } from "../personalIdInfo/PersonalIdInfoTitle";

export const UserShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
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
        <ReferenceManyField
          reference="Address"
          target="userId"
          label="Addresses"
        >
          <Datagrid rowClick="show">
            <TextField label="addressLine1" source="addressLine1" />
            <TextField label="addressType" source="addressType" />
            <TextField label="city" source="city" />
            <TextField label="country" source="country" />
            <DateField source="createdAt" label="Created At" />
            <TextField label="ID" source="id" />
            <TextField label="island" source="island" />
            <TextField label="postalCode" source="postalCode" />
            <DateField source="updatedAt" label="Updated At" />
            <ReferenceField label="User" source="user.id" reference="User">
              <TextField source={USER_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="Document"
          target="userId"
          label="Documents"
        >
          <Datagrid rowClick="show">
            <DateField source="createdAt" label="Created At" />
            <TextField label="format" source="format" />
            <TextField label="ID" source="id" />
            <TextField label="name" source="name" />
            <DateField source="updatedAt" label="Updated At" />
            <TextField label="url" source="url" />
            <ReferenceField label="User" source="user.id" reference="User">
              <TextField source={USER_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
