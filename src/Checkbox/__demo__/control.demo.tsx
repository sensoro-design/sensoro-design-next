/**
 * title: 受控
 * desc: 通过 `checked` 属性控制是否选中
 */
import { useState } from 'react';
import { Checkbox, Button } from '@sensoro-design/react';

export default () => {
  const [checked, setChecked] = useState(false);

  return (
    <div>
      <Checkbox checked={checked} style={{ marginRight: 40 }}>Checkbox</Checkbox>
      <Checkbox checked={checked} disabled>disabled Checkbox</Checkbox>

      <div style={{marginTop: 30}}>
        <Button
          type="primary"
          onClick={() => { setChecked(!checked) }}
        >
          { checked ? 'unCheck' : 'Check'}
        </Button>
      </div>
    </div>
  )
}
