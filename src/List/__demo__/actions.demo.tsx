/**
 * title: 增加操作项
 * desc: 通过 `actions` 来为列表添加操作项。
 */
import { useState } from 'react';
import { List, Avatar } from '@sensoro-design/react';
import EditOutlined from '@sensoro-design/icons/EditOutlined';
import DeleteOutlined from '@sensoro-design/icons/DeleteOutlined';
import DownOutlined from '@sensoro-design/icons/DownOutlined';
import { IconLoading } from '@sensoro-design/react/icon';

export default () => {
  const dataSource = new Array(4).fill({
    title: 'Beijing Bytedance Technology Co., Ltd.',
    description: 'Beijing ByteDance Technology Co., Ltd. is an enterprise located in China.',
  });

  const [loading, setLoading] = useState(false);

  const render = (actions, item, index) => (
    <List.Item key={index} actions={actions}>
      <List.Item.Meta
        avatar={
          <Avatar shape="square">
            A
          </Avatar>
        }
        title={item.title}
        description={item.description}
      />
    </List.Item>
  );

  const footer = (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        cursor: 'pointer',
      }}
      onClick={() => setLoading(!loading)}
    >
      {loading ? (
        <span style={{ color: 'var(--color-text-3)' }}>
          <IconLoading style={{ marginRight: 8, color: 'rgb(var(--arcoblue-6))' }} /> loading...
        </span>
      ) : (
        <span className="list-demo-actions-button" >
          More <DownOutlined style={{ marginLeft: 8 }} />
        </span>
      )}
    </div>
  );

  return (
    <>
      <List
        className="list-demo-actions"
        style={{ width: 700, marginBottom: 48 }}
        dataSource={dataSource}
        render={render.bind(null, [
          <span className="list-demo-actions-icon">
            <EditOutlined />
          </span>,
          <span className="list-demo-actions-icon">
            <DeleteOutlined />
          </span>,
        ])}
        footer={footer}
      />
      <List
        className="list-demo-actions"
        style={{ width: 700 }}
        dataSource={dataSource}
        render={render.bind(null, [
          <span className="list-demo-actions-button">Edit</span>,
          <span className="list-demo-actions-button">Delete</span>,
        ])}
      />
    </>
  );
}
