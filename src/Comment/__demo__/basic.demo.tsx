/**
 * title: 基础用法
 * desc: 一个基本的评论组件，带有作者、头像、时间和操作。
 */
import React from 'react';
import { Comment, Avatar } from '@sensoro-design/react';

import HeartOutlined from '@sensoro-design/icons/HeartOutlined';
import MessageOutlined from '@sensoro-design/icons/MessageOutlined';
import StarOutlined from '@sensoro-design/icons/StarOutlined';
import HeartFilled from '@sensoro-design/icons/HeartFilled';
import StarFilled from '@sensoro-design/icons/StarFilled';

export default () => {
  const [like, setLike] = React.useState<boolean>();
  const [star, setStar] = React.useState<boolean>();

  const actions = [
    <span
      className="custom-comment-action"
      key="heart"
      onClick={() => setLike(!like) }
    >
      { like ? <HeartFilled style={{color: '#f53f3f'}} /> : <HeartOutlined  />}
      {' '}{83 + (like ? 1 : 0)}
    </span>,
    <span
      className="custom-comment-action"
      key="star"
      onClick={() => setStar(!star) }
    >
      {star ? <StarFilled style={{color: '#ffb400'}} /> : <StarOutlined  />}
      {' '}{3 + (star ? 1 : 0)}
    </span>,
    <span className="custom-comment-action" key="reply"><MessageOutlined /> Reply</span>,
  ];

  return (
    <Comment
      actions={actions}
      author="Socrates"
      avatar={
        <Avatar>
          <img alt='avatar' src='//p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/e278888093bef8910e829486fb45dd69.png~tplv-uwbnlip3yd-webp.webp' />
        </Avatar>
      }
      content={
        <div>
          Comment body content.
        </div>
      }
      datetime="1 hour"
    />
  );
};
