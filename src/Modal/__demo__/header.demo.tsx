
/**
 * title: 自定义标题
 * desc: `title` 支持传入文字或者 react 节点，支持各种场景的标题栏展示。
 */
import React from 'react';
import { Modal, Button } from '@sensoro-design/react';

export default () => {
  const [visible, setVisible] = React.useState(false);
  const [visible1, setVisible1] = React.useState(false);

  return (
      <div>
        <Button onClick={() => setVisible(true)} type="primary">
          Left align title
        </Button>
        <Modal
          title={(
            <div style={{ textAlign: 'left' }}> Modal Title </div>
          )}
          visible={visible}
          onCancel={() => {setVisible(false);}}
          onOk={() => {setVisible(false);}}
        >
          <p>Some content...</p>
          <p>Some content...</p>
          <p>Some content...</p>
          <p>Some content...</p>
          <p>Some content...</p>
        </Modal>


        <Button onClick={() => setVisible1(true)} type="primary" style={{ marginLeft: 24 }}>
          Center align title
        </Button>
        <Modal
          title="Modal Title"
          visible={visible1}
          onCancel={() => {setVisible1(false);}}
          onOk={() => {setVisible1(false);}}
        >
          <p>Some content...</p>
          <p>Some content...</p>
          <p>Some content...</p>
          <p>Some content...</p>
          <p>Some content...</p>
        </Modal>
      </div>
  )
}
