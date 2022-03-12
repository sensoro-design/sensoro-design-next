
/**
 * title: 设置范围
 * desc: 通过 `min` 和 `max` 设置可选范围。
 */
import { useState } from 'react';
import { Slider, InputNumber } from '@sensoro-design/react';

export default () => {
    const [value, setValue] = useState(30);
    const [min, setMin] = useState(0);
    const [max, setMax] = useState(100)
    return (
        <div style={{ display: 'flex', alignItems: `center` }}>
            <InputNumber
                value={min}
                onChange={val => setMin(val)}
                style={{ width: 78, marginRight: 16 }}/>
            <Slider
                value={value}
                min={min}
                max={max}
                onChange={val => setValue(val)}
                style={{ width: 200 }}/>
            <InputNumber
                value={max}
                onChange={val => setMax(val)}
                style={{ width: 78, marginLeft: 16  }}/>
        </div>
    )
}
