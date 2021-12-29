import { Table } from 'antd';
import React from 'react';


export const DataTable = ({ dataForTable, columnsForTable, rowSelectionForTable, handleTableChange, components }: any) => {

  console.log('1', handleTableChange);
  return (
    <Table
      bordered
      columns={columnsForTable}
      dataSource={dataForTable}
      rowSelection={{ ...rowSelectionForTable }}
    // components={{
    //   body: {
    //     cell: EditableCell,
    //   },
    // }}
    />
  );
};
