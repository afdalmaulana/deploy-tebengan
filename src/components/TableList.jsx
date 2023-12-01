import React, { useState } from "react";
import { Table } from "antd";
import { DataKeyThree } from "./Data/DataKeyThree";
import IdField from "./Field/IdField";
import StatusField from "./Field/StatusField";
import NameField from "./Field/NameField";
import { filtersConfig } from "./Filter/FilterConfig";
import ContactField from "./Field/ContactField";
import VoucherField from "./Field/VoucherField";
import AddressField from "./Field/AddressField";
import { DataKeyOne } from "./Data/DataKeyOne";
import { DataKeyTwo } from "./Data/DataKeyTwo";
import { DataKeyFour } from "./Data/DataKeyFour";
import TripField from "./Field/TripField";
import ActionField from "./Field/ActionField";

const columns = [
  {
    title: "ID",
    dataIndex: "ID",
    render: (text, record) => <IdField record={record} />,
    filters: filtersConfig,
    filterMode: "tree",
    filterSearch: true,
    onFilter: (value, record) => record.name.includes(value),
    width: "20%",
  },
  {
    title: "Status",
    dataIndex: "Status",
    render: (text, record) => <StatusField record={record} />,
    filters: filtersConfig,
    filterMode: "tree",
    filterSearch: true,
    width: "15%",
  },
  {
    title: "Name",
    dataIndex: "Name",
    render: (text, record) => <NameField record={record} />,
    filters: filtersConfig,
    filterMode: "tree",
    filterSearch: true,
    width: "15%",
  },
  {
    title: "Contact",
    dataIndex: "Contact",
    render: (text, record) => <ContactField record={record} />,
    filters: filtersConfig,
    filterMode: "tree",
    filterSearch: true,
    width: "10%",
  },
  {
    title: "Address",
    dataIndex: "Address",
    render: (text, record) => <AddressField record={record} />,
    filters: filtersConfig,
    filterMode: "tree",
    filterSearch: true,
    width: "50%",
  },
  {
    title: "Trip",
    dataIndex: "Trip",
    render: (text, record) => <TripField record={record} />,
    width: "5%",
  },
  {
    title: "Voucher",
    dataIndex: "Voucher",
    render: (text, record) => <VoucherField record={record} />,
    width: "40%",
  },
  {
    title: "Action",
    dataIndex: "Action",
    render: (text, record) => <ActionField record={record} />,
    width: "10%",
  },
];

const data = [DataKeyOne, DataKeyTwo, DataKeyThree, DataKeyFour];

const TableList = () => {
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);

  const onSelectChange = (newSelectedRowKeys) => {
    console.log("selectedRowKeys changed: ", newSelectedRowKeys);
    setSelectedRowKeys(newSelectedRowKeys);
  };

  const rowSelection = {
    selectedRowKeys,
    onChange: onSelectChange,
    selections: [],
  };

  return (
    <Table
      rowSelection={rowSelection}
      columns={columns}
      dataSource={data}
      //   scroll={{
      //     y: "500px",
      //   }}
      pagination={false}
    />
  );
};

export default TableList;
