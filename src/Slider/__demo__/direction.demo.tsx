
/**
 * title: 竖直滑动条
 * desc:
 */
import { useState } from 'react';
import { Slider } from '@sensoro-design/react';
import SoundOutlined from '@sensoro-design/icons/SoundOutlined';
import MuteOutlined from '@sensoro-design/icons/MuteOutlined';

export default () => {
  const [value, setValue] = useState(10);

  return (
    <div style={{ maxWidth: '60%', minWidth: '20%' }}>
      <div style={{ width: 22, textAlign: 'center', marginRight: 92, display: 'inline-block' }}>
        <Slider
          value={value}
          onChange={(val) => {
            setValue(val as number);
          }}
          vertical
        />
        { value ? <SoundOutlined style={{ fontSize: 16, color: 'var(--color-text-1)' }} /> : null }
        { !value ? <MuteOutlined style={{ fontSize: 16, color: 'var(--color-text-1)' }} /> : null }
      </div>
      <Slider
        range
        max={20}
        vertical
        defaultValue={[5, 10]}
        marks={{
          5: '5km',
          10: '10km',
        }}
        style={{ verticalAlign: 'top' }}
      />
    </div>
  );
}
