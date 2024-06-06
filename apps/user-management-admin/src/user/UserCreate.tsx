import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  ReferenceArrayInput,
  SelectArrayInput,
  SelectInput,
  ReferenceInput,
  NumberInput,
  DateTimeInput,
  PasswordInput,
} from "react-admin";

import { AddressTitle } from "../address/AddressTitle";
import { DocumentTitle } from "../document/DocumentTitle";
import { InstitutionTitle } from "../institution/InstitutionTitle";
import { PersonalIdInfoTitle } from "../personalIdInfo/PersonalIdInfoTitle";
import { ROLES_OPTIONS } from "../user/RolesOptions";

export const UserCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="addressDetails" source="addressDetails" />
        <ReferenceArrayInput
          source="addresses"
          reference="Address"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={AddressTitle} />
        </ReferenceArrayInput>
        <TextInput label="birthDate" source="birthDate" />
        <TextInput label="dateOfBirth" source="dateOfBirth" />
        <TextInput label="documentDetails" source="documentDetails" />
        <ReferenceArrayInput
          source="documents"
          reference="Document"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={DocumentTitle} />
        </ReferenceArrayInput>
        <TextInput label="Email" source="email" type="email" />
        <TextInput label="emailAddress" source="emailAddress" type="email" />
        <TextInput label="emailAddressOTP" source="emailAddressOtp" />
        <TextInput label="emailOTP" source="emailOtp" />
        <TextInput label="First Name" source="firstName" />
        <SelectInput
          source="gender"
          label="gender"
          choices={[{ label: "Option 1", value: "Option1" }]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
        <ReferenceInput
          source="institution.id"
          reference="Institution"
          label="institution"
        >
          <SelectInput optionText={InstitutionTitle} />
        </ReferenceInput>
        <TextInput label="Last Name" source="lastName" />
        <NumberInput step={1} label="mobilePhone" source="mobilePhone" />
        <NumberInput
          step={1}
          label="mobilePhoneNumber"
          source="mobilePhoneNumber"
        />
        <DateTimeInput label="otpExpires" source="otpExpires" />
        <DateTimeInput label="otpExpiry" source="otpExpiry" />
        <PasswordInput label="Password" source="password" />
        <ReferenceInput
          source="personalIdInfo.id"
          reference="PersonalIdInfo"
          label="personalIdInfo"
        >
          <SelectInput optionText={PersonalIdInfoTitle} />
        </ReferenceInput>
        <TextInput
          label="personalIdInformation"
          source="personalIdInformation"
        />
        <TextInput label="phoneOTP" source="phoneOtp" />
        <TextInput label="relatedInstitution" source="relatedInstitution" />
        <SelectArrayInput
          source="roles"
          choices={ROLES_OPTIONS}
          optionText="label"
          optionValue="value"
        />
        <TextInput label="smsOTP" source="smsOtp" />
        <SelectInput
          source="userCategory"
          label="userCategory"
          choices={[{ label: "Option 1", value: "Option1" }]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
        <TextInput label="Username" source="username" />
        <SelectInput
          source="userType"
          label="userType"
          choices={[{ label: "Option 1", value: "Option1" }]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
      </SimpleForm>
    </Create>
  );
};
