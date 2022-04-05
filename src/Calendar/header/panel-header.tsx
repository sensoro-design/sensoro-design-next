import React from 'react';
import classNames from '@pansy/classnames';
import LeftOutlined from '@sensoro-design/icons/LeftOutlined';
import RightOutlined from '@sensoro-design/icons/RightOutlined';
import DoubleLeftOutlined from '@sensoro-design/icons/DoubleLeftOutlined';
import DoubleRightOutlined from '@sensoro-design/icons/DoubleRightOutlined';
import { isArray } from '../../_util/is';

function PanelHeader(props) {
  const {
    prefixCls,
    changePageShowDate,
    headerValueFormat,
    mergedPageShowDate,
    innerMode,
    panelOperations,
  } = props;

  const isOperationAvailable = (operation) => {
    return isArray(panelOperations) ? panelOperations.indexOf(operation) > -1 : true;
  };
  const showDoubleLeft = isOperationAvailable('double-left');
  const showLeft = isOperationAvailable('left') && innerMode !== 'year';
  const showDoubleRight = isOperationAvailable('double-right');
  const showRight = isOperationAvailable('right') && innerMode !== 'year';

  const getIconClassName = (isShow) => {
    return classNames(`${prefixCls}-header-icon`, { [`${prefixCls}-header-icon-hidden`]: !isShow });
  };

  return (
    <div className={`${prefixCls}-header`}>
      <div
        className={getIconClassName(showDoubleLeft)}
        onClick={() => showDoubleLeft && changePageShowDate('prev', 'year')}
      >
        {showDoubleLeft && <DoubleLeftOutlined />}
      </div>
      <div
        className={getIconClassName(showLeft)}
        onClick={() => showLeft && changePageShowDate('prev', 'month')}
      >
        {showLeft && <LeftOutlined />}
      </div>
      <div className={`${prefixCls}-header-value`}>
        {mergedPageShowDate.format(headerValueFormat)}
      </div>
      <div
        className={getIconClassName(showRight)}
        onClick={() => showRight && changePageShowDate('next', 'month')}
      >
        {showRight && <RightOutlined />}
      </div>
      <div
        className={getIconClassName(showDoubleRight)}
        onClick={() => showDoubleRight && changePageShowDate('next', 'year')}
      >
        {showDoubleRight && <DoubleRightOutlined />}
      </div>
    </div>
  );
}

export default PanelHeader;
