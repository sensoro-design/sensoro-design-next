
/**
 * title: 基础状态
 * desc: 默认态、禁用态。
 */
import { Slider } from '@sensoro-design/react';

export default () => {
  return (
    <div>
      <Slider defaultValue={30} style={{ width: 200 }}/>
      <Slider defaultValue={30} disabled={true} style={{ width: 200, marginLeft: 74 }}/>
    </div>
  )
}
