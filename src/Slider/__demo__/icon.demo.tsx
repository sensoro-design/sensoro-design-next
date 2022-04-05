
/**
 * title: 带有icon的滑动输入条
 * desc: 两边带有 icon 表示状态。
 */
import { useState } from 'react';
import { Slider, Space } from '@sensoro-design/react';
import SoundOutlined from '@sensoro-design/icons/SoundOutlined';
import MuteOutlined from '@sensoro-design/icons/MuteOutlined';

export default () => {
  const [value, setValue] = useState<number>(10);

  return (
    <Space>
      <Space style={{ marginRight: 20 }}>
        <img style={{ width: 22, verticalAlign: 'bottom' }} src="//p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/48872c084d77494ebc0ddd0892d97e3d~tplv-uwbnlip3yd-image.image" />
        <Slider
          defaultValue={50}
          style={{ width: 200 }}
        />
        <img style={{ width: 22, verticalAlign: 'bottom' }} src="//p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/40b91e0c13cb4069976ae726da62aa75~tplv-uwbnlip3yd-image.image" />
      </Space>
      <Space>
        <MuteOutlined style={{ fontSize: 16, color: value > 0 ? 'var(--color-text-4)' : 'var(--color-text-1)' }} />
        <Slider
          value={value}
          onChange={(val) => {
            setValue(val as number);
          }}
          style={{ width: 200 }}
        />
        <SoundOutlined style={{ fontSize: 16, color: value === 0 ? 'var(--color-text-4)' : 'var(--color-text-1)' }} />
      </Space>
    </Space>
  )
}
