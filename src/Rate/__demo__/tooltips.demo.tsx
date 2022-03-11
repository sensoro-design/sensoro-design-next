/**
 * title: 显示提示信息
 * desc: 通过 `tooltips` 来为每一个评级提供鼠标悬浮时的提示信息。
 */
import { Rate } from '@sensoro-design/react';

export default () => {
  return (
    <Rate tooltips={['😠', '🙂', '😊' , '😘', '😍']} />
  )
}
