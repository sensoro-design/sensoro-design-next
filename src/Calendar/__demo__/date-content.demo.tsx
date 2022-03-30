/**
 * title: 日历内容定制
 * desc: 使用 `dateInnerContent` 可以将自定义元素追加到日历单元格中，可以用来实现日历待办事项等展示。
 */
import React from 'react';
import { Calendar, Badge } from '@sensoro-design/react';

const badgeStyle: React.CSSProperties = {
  width: '100%',
  whiteSpace: 'nowrap',
  overflow: 'hidden',
  textOverflow: 'ellipsis'
};

export default () => {
  return (
    <div style={{width: '100%', overflow: 'auto'}}>
      <Calendar
        defaultValue="2020-03-04"
        dateInnerContent={(currentDate) => {
          switch (currentDate.format('YYYY-MM-DD')) {
            case '2020-03-07':
              return <div style={{ padding: '0 10px' }}>
                <Badge style={badgeStyle} status='processing' text='Cooking' />
                <br />
                <Badge style={badgeStyle} status='success' text='Reading' />
                <br />
                <Badge style={badgeStyle} status='warning' text='Sleeping' />
              </div>;
            case '2020-03-17':
              return <div style={{ padding: '0 10px' }}>
                <Badge style={badgeStyle} status='default' text='Coding' />
                <br />
                <Badge style={badgeStyle} status='processing' text='Runing' />
                <br />
                <Badge style={badgeStyle} status='success' text='Eating' />
                <br />
                <Badge style={badgeStyle} status='warning' text='Play games' />
                <br />
                <Badge style={badgeStyle} status='error' text='Sleeping' />
              </div>;
            default:
              return;
          }
        }}
      />
    </div>
  )
}
