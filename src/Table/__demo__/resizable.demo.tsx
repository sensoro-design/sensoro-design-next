/**
 * title: 可伸缩列
 * desc: 配合 `react-resizable` 可以实现可伸缩列的效果。
 */
import { useState } from 'react';
import { Table } from '@sensoro-design/react';
import { Resizable } from 'react-resizable';

const originColumns = [
  {
    title: 'Name',
    dataIndex: 'name',
    width: 120,
  },
  {
    title: 'Salary',
    dataIndex: 'salary',
    width: 100,
  },
  {
    title: 'Address',
    dataIndex: 'address',
    width: 180,
  },
  {
    title: 'Email',
    dataIndex: 'email',
  },
];

const data = [{
  key: '1',
  name: 'Jane Doe',
  salary: 23000,
  address: '32 Park Road, London',
  email: 'jane.doe@example.com'
}, {
  key: '2',
  name: 'Alisa Ross',
  salary: 25000,
  address: '35 Park Road, London',
  email: 'alisa.ross@example.com'
}, {
  key: '3',
  name: 'Kevin Sandra',
  salary: 22000,
  address: '31 Park Road, London',
  email: 'kevin.sandra@example.com'
}, {
  key: '4',
  name: 'Ed Hellen',
  salary: 17000,
  address: '42 Park Road, London',
  email: 'ed.hellen@example.com'
}, {
  key: '5',
  name: 'William Smith',
  salary: 27000,
  address: '62 Park Road, London',
  email: 'william.smith@example.com'
}];

const ResizableTitle = props => {
  const { onResize, width, ...restProps } = props;

  if (!width) {
    return <th {...restProps} />;
  }

  return (
    <Resizable
      width={width}
      height={0}
      handle={resizeHandle => (
        <span
          className={`react-resizable-handle react-resizable-handle-${resizeHandle}`}
          onClick={e => {
            e.stopPropagation();
          }}
        />
      )}
      onResize={onResize}
      draggableOpts={{ enableUserSelectHack: false }}
    >
      <th {...restProps} />
    </Resizable>
  );
};

export default () => {
  const [columns, setColumns] = useState(
    originColumns.map((column, index) => {
      if (column.width) {
        return {
          ...column,
          onHeaderCell: col => ({
            width: col.width,
            onResize: handleResize(index)
          })
        }
      }
      return column;
    })
  );

  function handleResize(index) {
    return (e, { size }) => {
      setColumns(prevColumns => {
        const nextColumns = [...prevColumns];
        nextColumns[index] = {
          ...nextColumns[index],
          width: size.width,
        };
        return nextColumns;
      })
    }
  }

  const components = {
    header: {
      th: ResizableTitle,
    },
  };

  return <Table
    className="table-demo-resizable-column"
    components={components}
    border
    borderCell
    columns={columns}
    data={data}
  />;
}
