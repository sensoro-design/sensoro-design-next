import React, { Component, ReactNode, CSSProperties } from 'react';
import classNames from '@pansy/classnames';
import { LoadingOutlined } from '../IconLoading';
import IconHover from '../_class/icon-hover';

import InfoCircleFilled from '@sensoro-design/icons/InfoCircleFilled';
import CloseOutlined from '@sensoro-design/icons/CloseOutlined';
import ExclamationCircleFilled from '@sensoro-design/icons/ExclamationCircleFilled';
import CloseCircleFilled from '@sensoro-design/icons/CloseCircleFilled';
import CheckCircleFilled from '@sensoro-design/icons/CheckCircleFilled';

export interface NoticeProps {
  style?: CSSProperties;
  className?: string;
  title?: ReactNode | string;
  content?: ReactNode | string;
  duration?: number;
  showIcon?: boolean;
  icon?: ReactNode;
  id?: string;
  onClose?: (id) => void;
  position?: string;
  type?: string;
  btn?: ReactNode;
  prefixCls?: string;
  noticeType?: 'message' | 'notification';
  update?: boolean;
  closable?: boolean;
}

class Notice extends Component<NoticeProps, {}> {
  static defaultProps = {
    type: 'info',
    showIcon: true,
    noticeType: 'message',
    duration: 3000,
  };

  wrapper: Element;

  timer: any;

  componentDidMount() {
    this.startTimer();
  }

  componentDidUpdate(nextProps) {
    if (nextProps.duration !== this.props.duration || this.props.update) {
      this.removeTimer();
      this.startTimer();
    }
  }

  componentWillUnmount() {
    this.removeTimer();
  }

  startTimer = () => {
    const { duration, onClose, id } = this.props;
    // 自动关闭
    if (duration !== 0) {
      this.timer = window.setTimeout(() => {
        onClose && onClose(id);
        this.removeTimer();
      }, duration);
    }
  };

  removeTimer = () => {
    if (this.timer) {
      window.clearTimeout(this.timer);
      this.timer = null;
    }
  };

  onClose: React.MouseEventHandler<HTMLSpanElement> = () => {
    this.props.onClose && this.props.onClose(this.props.id);
  };

  renderIcon = () => {
    const { showIcon, icon, type, prefixCls } = this.props;
    let content: ReactNode;
    if (icon) {
      content = icon;
    } else if (showIcon) {
      switch (type) {
        case 'info':
          content = <InfoCircleFilled />;
          break;
        case 'success':
          content = <CheckCircleFilled />;
          break;
        case 'error':
          content = <CloseCircleFilled />;
          break;
        case 'warning':
          content = <ExclamationCircleFilled />;
          break;
        case 'loading':
          content = <LoadingOutlined />;
          break;
        default:
          break;
      }
    }
    return <span className={`${prefixCls}-icon`}>{content}</span>;
  };

  onMouseEnter = () => {
    this.removeTimer();
  };

  onMouseLeave = () => {
    this.startTimer();
  };

  render() {
    const {
      title,
      content,
      showIcon,
      className,
      style,
      type,
      btn,
      icon,
      prefixCls,
      closable,
      noticeType,
    } = this.props;
    const classes = classNames(
      prefixCls,
      `${prefixCls}-${type}`,
      {
        [`${prefixCls}-closable`]: closable,
      },
      className
    );

    let _closable = 'closable' in this.props ? closable : true;

    let shouldRenderIcon = showIcon;
    if (type === 'normal' && !icon) {
      shouldRenderIcon = false;
    }

    if (noticeType === 'message') {
      _closable = closable;
      return (
        <div
          style={{ textAlign: 'center' }}
          onMouseEnter={this.onMouseEnter}
          onMouseLeave={this.onMouseLeave}
        >
          <div className={classes} style={style}>
            {shouldRenderIcon && this.renderIcon()}
            <span className={`${prefixCls}-content`}>{content}</span>
            {_closable && (
              <IconHover
                prefix={prefixCls}
                className={`${prefixCls}-close-btn`}
                onClick={this.onClose}
              >
                <CloseOutlined />
              </IconHover>
            )}
          </div>
        </div>
      );
    }

    if (noticeType === 'notification') {
      return (
        <div onMouseEnter={this.onMouseEnter} onMouseLeave={this.onMouseLeave}>
          <div className={classes} style={style}>
            {shouldRenderIcon && <div className={`${prefixCls}-left`}>{this.renderIcon()}</div>}
            <div className={`${prefixCls}-right`}>
              {title && <div className={`${prefixCls}-title`}>{title}</div>}
              <div className={`${prefixCls}-content`}>{content}</div>
              {btn && <div className={`${prefixCls}-btn-wrapper`}>{btn}</div>}
            </div>
            {_closable && (
              <IconHover
                prefix={prefixCls}
                className={`${prefixCls}-close-btn`}
                onClick={this.onClose}
              >
                <CloseOutlined />
              </IconHover>
            )}
          </div>
        </div>
      );
    }
  }
}

export default Notice;
