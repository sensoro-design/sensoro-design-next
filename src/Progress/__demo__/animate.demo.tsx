/**
 * title: 动画效果
 * desc: 设置 `animation` 为 `true` 时，将会显示动画效果，仅当 `type = line` 时生效
 */
import { Progress } from '@sensoro-design/react';

export default () => {
  return (
    <div>
      <Progress percent={80} animation width={300} />
      <br/>
      <br/>
      <Progress percent={80} status="success" animation width={300}/>
    </div>
  )
}
