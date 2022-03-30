
/**
 * title: 对齐
 * desc: 通过 `align` 属性可以设置 `datetime` 和 `actions` 的对齐方式.
 */
import React from 'react';
import { Comment, Avatar  } from '@sensoro-design/react';
import { IconHeartFill, IconMessage, IconStarFill, IconHeart, IconStar } from '@sensoro-design/react/icon';

import StarOutlined from '@sensoro-design/icons/StarOutlined';

import './styles.less';

export default () => {
  const [like, setLike] = React.useState(true);
  const [star, setStar] = React.useState(true);

  const actions = [
    <span
      className="custom-comment-action"
      key="heart"
      onClick={() => setLike(!like) }
    >
      { like ? <IconHeartFill style={{color: '#f53f3f'}} /> : <IconHeart  />}
      {' '}{83 + (like ? 1 : 0)}
    </span>,
    <span
      className="custom-comment-action"
      key="star"
      onClick={() => setStar(!star) }
    >
      {star ? <IconStarFill style={{color: '#ffb400'}} /> : <IconStar  />}
      {' '}{3 + (star ? 1 : 0)}
    </span>,
    <span className="custom-comment-action" key="reply"><IconMessage /> Reply</span>,
  ];

  return (
    <Comment
      actions={actions}
      align="right"
      author="Balzac"
      avatar={
        <Avatar>
          <img alt='avatar' src='//p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/9eeb1800d9b78349b24682c3518ac4a3.png~tplv-uwbnlip3yd-webp.webp' />
        </Avatar>
      }
      content={
        <div>
          A design is a plan or specification for the construction of an object or system or for the implementation of an activity or process, or the result of that plan or specification in the form of a prototype, product or process.
        </div>
      }
      datetime="1 hour"
    />
  );
};
