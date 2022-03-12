
/**
 * title: 浮层内关闭
 * desc: 控制浮层显示。更多示例可查看 [Trigger](/react/components/trigger)组件。
 */
import { Popover, Button, Link } from '@sensoro-design/react';

const style = { margin: 0 };

export default () => {
  const [visible, setVisible] = React.useState(false)
  const [visible2, setVisible2] = React.useState(false)

  return <div>
    <Popover
      title="Title"
      popupVisible={visible}
      onVisibleChange={setVisible}
      content={
        <span>
          <p style={style}>Here is the text content</p>
          <p style={style}>Here is the text content</p>
          <p style={{ ...style, textAlign: 'right', marginTop: 4 }}>
            <Link onClick={() => setVisible(false)}>Close</Link>
          </p>
        </span>
      }
    >
      <Button type="primary" style={{ marginRight: 24 }}>
        Hover
      </Button>
    </Popover>
    <Popover
      title="Title"
      popupVisible={visible2}
      // button 触发 mouseenter的时候会调用该方法。更多的用法可以查看Trigger组件。
      onVisibleChange={visible => {
        if (visible) {
          setVisible2(true)
        }
      }}
      content={
        <span>
          <p style={style}>Here is the text content</p>
          <p style={style}>Here is the text content</p>
          <p style={{ ...style, textAlign: 'right', marginTop: 4 }}>
            <Link onClick={() => setVisible2(false)}>Close</Link>
          </p>
        </span>
      }
    >
      <Button type="primary">
        Will not close when moved out
      </Button>
    </Popover>
  </div>
}

