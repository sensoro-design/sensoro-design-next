/**
 * title: 基本用法
 * desc: 基本用法
 */
import { InputTag } from '@sensoro-design/react';

export default () => {
  return (
    <div>
      <div style={{ marginBottom: 20 }}>
        <InputTag
          allowClear
          placeholder="Input and press Enter"
          style={{ maxWidth: 350, marginRight: 20 }}
        />
        <InputTag allowClear placeholder="Disabled" disabled style={{ maxWidth: 350 }} />
      </div>
      <div>
        <InputTag
          allowClear
          placeholder="Readonly"
          readOnly
          style={{ maxWidth: 350, marginRight: 20 }}
        />
        <InputTag allowClear placeholder="Error" error style={{ maxWidth: 350 }} />
      </div>
    </div>
  )
}
