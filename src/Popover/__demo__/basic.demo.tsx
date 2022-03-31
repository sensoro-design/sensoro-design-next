/**
 * title: 基础用法
 * desc: 鼠标移入或点击，弹出气泡，可对浮层上元素进行操作，承载复杂内容和操作。
 */
import { Popover, Button } from '@sensoro-design/react';

const style = { margin: 0 };

export default () => {
  return (
    <Popover
      title="Title"
      content={
        <span>
          <p style={style}>Here is the text content</p>
          <p style={style}>Here is the text content</p>
        </span>
      }
    >
      <Button type="primary">
        Hover
      </Button>
    </Popover>
  )
}
