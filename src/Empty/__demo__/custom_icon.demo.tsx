
/**
 * title: 自定义图标和文案
 * desc: 可以通过 `icon` 参数传入自定义图标，`description` 修改显示文案。
 */
import { Empty } from '@sensoro-design/react';
import { IconExclamation } from '@sensoro-design/react/icon';

export default () => {
  return (
    <Empty
      icon={<div
        style={{
          background: '#f2994b',
          display: 'inline-flex',
          borderRadius: '50%',
          width: 50,
          height: 50,
          fontSize: 30,
          alignItems: 'center',
          color: 'white',
          justifyContent: 'center'
        }}
      >
        <IconExclamation  />
      </div>}
      description="No data, please reload!"
    />
  )
}
