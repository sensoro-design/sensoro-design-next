/**
 * title: 剩余进度条
 * desc: 可以通过 `trailColor` 设置剩余进度条的颜色
 */
import { Progress } from '@sensoro-design/react';

export default () => {
  return (
    <div >
      <div style={{width: '40%',  marginBottom: 20}}>
        <Progress percent={30} trailColor="var(--color-primary-light-1)"   />
      </div>
      <div style={{width: '40%',  marginBottom: 20}}>
        <Progress steps={4} percent={30}  trailColor="var(--color-primary-light-1)"/>
      </div>
      <Progress  percent={30} type="circle" trailColor="var(--color-primary-light-1)"/>
    </div>
  );
}
