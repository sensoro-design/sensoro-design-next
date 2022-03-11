
/**
 * title: 不同颜色
 * desc: 通过 `color` 属性设置不同背景色的 `tooltip`
 */
import { Tooltip, Button } from '@sensoro-design/react';

const colors = ['#3491FA', '#165DFF', '#722ED1']

export default () => {
  return (
    <div>
    {
      colors.map(color => {
        return (
          <Tooltip key={color} color={color} content="tooltip text">
            <Button style={{ marginRight: 20, background: color,color: '#fff' }}>{color}</Button>
          </Tooltip>
        )
      })
    }
    </div>
  )
}
