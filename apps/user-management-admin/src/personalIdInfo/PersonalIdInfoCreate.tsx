import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  NumberInput,
  TextInput,
  SelectInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { UserTitle } from "../user/UserTitle";

export const PersonalIdInfoCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <NumberInput step={1} label="businessPhone" source="businessPhone" />
        <TextInput label="jobTitle" source="jobTitle" />
        <TextInput label="nationality" source="nationality" />
        <NumberInput
          step={1}
          label="personalIdNumber"
          source="personalIdNumber"
        />
        <SelectInput
          source="personalIdType"
          label="personalIdType"
          choices={[{ label: "Option 1", value: "Option1" }]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
        <TextInput label="shortJobTitle" source="shortJobTitle" />
        <TextInput label="uploadIdDocs" source="uploadIdDocs" />
        <ReferenceArrayInput
          source="users"
          reference="User"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={UserTitle} />
        </ReferenceArrayInput>
        <TextInput label="voterId" source="voterId" />
      </SimpleForm>
    </Create>
  );
};
