
/**
 * title: 网络型内嵌卡片
 * desc: 通过 `Card.Grid` 来使用卡片内容区隔模式。
* background: var(--color-fill-2)
 */
import { Card, Link } from '@sensoro-design/react';
import './styles.less';

const { Grid } = Card;

export default () => {
  return (
    <Card style={{ width: '100%' }}>
      {new Array(7).fill(null).map((_, index) => {
        const hoverable = index % 2 === 0;
        return (
          <Grid key={index} hoverable={hoverable} style={{ width: '25%' }}>
            <Card
              className="card-demo-in-grid"
              style={{ width: '100%' }}
              title="Arco Card"
              extra={<Link>More</Link>}
            >
              {new Array(2).fill(null).map((_, index) => (
                <p style={{ margin: 0 }} key={index}>
                  {hoverable ? 'Card allow to hover' : 'Card content'}
                </p>
              ))}
            </Card>
          </Grid>
        );
      })}
    </Card>
  )
}
