
/**
 * title: 范围刻度可拖拽
 * desc: 通过设置 `range.draggableBar` 为 `true`, 让范围刻度可以拖拽。
 */
import { Slider } from '@sensoro-design/react';

export default() => {
  return (
    <Slider style={{ width: 200 }} max={10} range={{ draggableBar: true }} defaultValue={[ 3, 6 ]} />
  )
}
