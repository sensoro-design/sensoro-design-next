import React, { ReactNode } from 'react';
import Checkbox from '../../Checkbox';
import { LoadingOutlined } from '../../IconLoading';
import CheckOutlined from '@sensoro-design/icons/CheckOutlined';
import RightOutlined from '@sensoro-design/icons/RightOutlined';
import Node from '../base/node';
import { OptionProps } from '../interface';

export interface CascaderOptionProps<T> {
  prefixCls?: string;
  multiple?: boolean;
  selected?: boolean;
  isLeaf?: boolean;
  option: Node<T>;
  renderOption?: () => ReactNode;
  onClickOption?: () => void;
  onDoubleClickOption?: () => void;
  onMouseEnter?: () => void;
  onMultipleChecked?: (checked: boolean) => void;
}

const Option = <T extends OptionProps>(props: CascaderOptionProps<T>) => {
  const { prefixCls, multiple, option, renderOption, selected } = props;

  const checkboxDisabled = option.disabled || (multiple && option.disableCheckbox);

  return (
    <>
      {multiple ? (
        <Checkbox
          disabled={checkboxDisabled}
          checked={option._checked}
          indeterminate={option._halfChecked}
          onChange={props.onMultipleChecked}
          value={option.value}
        />
      ) : (
        ''
      )}
      <div
        className={`${prefixCls}-list-item-label`}
        onClick={option.disabled ? undefined : props.onClickOption}
        onMouseEnter={option.isLeaf || option.disabled ? undefined : props.onMouseEnter}
        onDoubleClick={checkboxDisabled ? undefined : props.onDoubleClickOption}
      >
        {renderOption ? renderOption() : option.label}
        {option.isLeaf ? (
          selected && <CheckOutlined />
        ) : option.loading ? (
          <LoadingOutlined />
        ) : (
          <RightOutlined />
        )}
      </div>
    </>
  );
};
export default Option;
