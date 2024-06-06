import * as React from "react";
import { List, Datagrid, ListProps, TextField, DateField } from "react-admin";
import Pagination from "../Components/Pagination";

export const PersonalIdInfoList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"PersonalIdInfos"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="businessPhone" source="businessPhone" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <TextField label="jobTitle" source="jobTitle" />
        <TextField label="nationality" source="nationality" />
        <TextField label="personalIdNumber" source="personalIdNumber" />
        <TextField label="personalIdType" source="personalIdType" />
        <TextField label="shortJobTitle" source="shortJobTitle" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="uploadIdDocs" source="uploadIdDocs" />
        <TextField label="voterId" source="voterId" />
      </Datagrid>
    </List>
  );
};
