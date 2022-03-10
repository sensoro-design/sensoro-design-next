/**
 * title: 拖拽排序
 * desc: 指定 `dragToSort` 属性以允许对已输入的值进行拖拽排序。
 */
import { InputTag } from '@sensoro-design/react';

export default () => {
  return (
    <InputTag style={{ maxWidth: 350 }} allowClear dragToSort defaultValue={['a', 'b', 'c', 'd']} />
  )
}
