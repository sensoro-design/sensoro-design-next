/**
 * title: 自定义图标和文案
 * desc: 可以通过 `icon` 参数传入自定义图标，`description` 修改显示文案。
 */
import { Empty } from '@sensoro-design/react';

import NoDevicePurely from '@sensoro-design/icons/NoDevicePurely';

export default () => {
  return (
    <Empty
      icon={<NoDevicePurely  />}
      description="暂无设备"
    />
  )
}
