
/**
 * title: 显示输入框
 * desc: 当设置 `showInput` 为 true 时，将显示输入框。当设置 `onlyMarkValue` 为 `true` 时，输入框始终不会显示
 */
import { Slider } from '@sensoro-design/react';

export default () => {
  return <>
    <Slider defaultValue={80} showInput style={{ width: 280, marginRight: 44 }}/>
    <Slider defaultValue={[10, 80]} range showInput style={{ width: 360 }}/>
  </>
}
