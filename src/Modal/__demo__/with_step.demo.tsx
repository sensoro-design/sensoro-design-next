
/**
 * title: 带有步骤条对话框
 * desc: 带有横向步骤条的对话框。
 */
import React from 'react';
import { Modal, Button, Table, Steps, Divider } from '@sensoro-design/react';
import './styles.less';

const Step = Steps.Step;

export default () => {
  const [visible, setVisible] = React.useState(false);
  // table
  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      sorter: (a, b) => a.name.length - b.name.length,
    },
    {
      title: 'Version',
      dataIndex: 'version',
      sorter: (a, b) => {
        const aVersion = a.version.split('.');
        const bVersion = b.version.split('.');
        for(let i = 0; i < aVersion.length; i++) {
          if (aVersion[i] === bVersion[i]) continue;
          return aVersion[i] - bVersion[i]
        }
        return 1;
      },
    },
    {
      title: 'Author',
      dataIndex: 'author',
      sorter: (a, b) => a.author.length - b.author.length,
    },
  ];
  const data = [
    {
      id: '1',
      name: 'EduTools',
      version: '12.18.1',
      author: 'Dickens',
    },
    {
      id: '2',
      name: 'BashSupport',
      version: '12.19.2',
      author: 'Aristotle',
    },
    {
      id: '3',
      name: 'GitToolBox',
      version: '12.20.3',
      author: 'Hemingway',
    },
  ];
  return (
    <div>
      <Button onClick={() => setVisible(true)} type="primary">
        Open Modal
      </Button>
      <Modal
        title="Manage Plugins"
        visible={visible}
        className="modal-demo-without-content-spacing"
        onOk={() => setVisible(false)}
        onCancel={() => setVisible(false)}
      >
        <div style={{ padding: '16px 0' }}>
          <Steps size='small' lineless current={2} style={{ maxWidth: 375, margin: '0 auto' }}>
            <Step title='Succeeded' />
            <Step title='Processing' />
            <Step title='Pending' />
          </Steps>
        </div>
        <Divider style={{ margin: 0 }}/>
        <div style={{ padding: '24px 20px' }}>
          <p>
            You can select multiple plugins for the current project so that our app will verify that the plugins are installed and enabled.
          </p>
          <p style={{ marginTop: 20, marginBottom: 8, fontWeight: 600 }}>
            List of plugins
          </p>
          <Table
            columns={columns}
            data={data}
            pagination={false}
            border={{ headerCell: true, wrapper: true, }}
            rowKey='id'
            rowSelection={{ type: 'checkbox', checkAll: true }}
          ></Table>
        </div>
      </Modal>
    </div>
  )
}
