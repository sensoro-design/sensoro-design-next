/**
 * title: 自定义分页
 * desc: 自定义分页，通过设置 `total`，`pageSize`，通过 `onChange` 来动态更新表格数据。当分页设置 `simple` 为 `true` 时，会应用简单分页样式。关于 `pagination` 的具体设置可查看[pagination 组件](/react/components/Pagination)文档。通过 `renderPagination` 可以自定义分页渲染部分。
 */
import { useState } from 'react';
import { Table, Space, Button } from '@sensoro-design/react';

const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
  },
  {
    title: 'Salary',
    dataIndex: 'salary',
  },
  {
    title: 'Address',
    dataIndex: 'address',
  },
  {
    title: 'Email',
    dataIndex: 'email',
  },
];

const allData = Array(200)
  .fill('')
  .map((_, index) => ({
    key: `${index}`,
    name: `Kevin Sandra ${index}`,
    salary: 22000,
    address: `${index} Park Road, London`,
    email: `kevin.sandra_${index}@example.com`,
  }));

export default () => {
  const [data, setData] = useState(allData);
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);
  const [pagination, setPagination] = useState({
    sizeCanChange: true,
    showTotal: true,
    total: 96,
    pageSize: 10,
    current: 1,
    pageSizeChangeResetCurrent: true,
  });
  const [loading, setLoading] = useState(false);

  function onChangeTable(pagination) {
    const { current, pageSize } = pagination;
    setLoading(true);
    setTimeout(() => {
      setData(allData.slice((current - 1) * pageSize, current * pageSize));
      setPagination((pagination) => ({
        ...pagination,
        current,
        pageSize,
      }));
      setLoading(false);
    }, 1000);
  }

  return (
    <Table
      loading={loading}
      columns={columns}
      data={data}
      pagination={pagination}
      onChange={onChangeTable}
      rowSelection={{
        selectedRowKeys,
        onChange: (selectedRowKeys, selectedRows) => {
          console.log('selectedRowKeys', selectedRowKeys);
          console.log('selectedRows', selectedRows);
          setSelectedRowKeys(selectedRowKeys);
        },
      }}
      renderPagination={(paginationNode) => (
        <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 10 }}>
          <Space>
            <span>Selected {selectedRowKeys.length}</span>
            <Button size="mini">Save</Button>
            <Button size="mini">Delete</Button>
          </Space>
          {paginationNode}
        </div>
      )}
    />
  );
}
