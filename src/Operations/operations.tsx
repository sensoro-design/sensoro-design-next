import React from 'react';
import Space from '../Space';
import Button from '../Button';
import Link from '../Link';
import Menu from '../Menu';
import Dropdown from '../Dropdown';
import IconMoreVertical from '../../icon/react-icon/IconMoreVertical';
import IconDown from '../../icon/react-icon/IconDown';

import useMergeProps from '../_util/hooks/useMergeProps';

import type { OperationsProps, Option } from './interface';

const defaultProps: OperationsProps = {
  space: 12,
  maxCount: 3,
  type: 'button',
  position: 'left'
};

export const Operations: React.FC<OperationsProps> = (baseProps) => {
  const {
    maxCount,
    space,
    options = [],
    type,
    position,
    disabled,
    onClick
  } = useMergeProps<OperationsProps>(baseProps, defaultProps);

  let baseOptions: Option[] = [];
  let moreOptions: Option[] = [];

  if (options.length <= maxCount) {
    baseOptions = options;
  } else {
    baseOptions = options.slice(0, maxCount - 1);
    moreOptions = options.slice(2, options.length)
  }

  const handleClick = (key: string | number) => {
    onClick?.(key)
  }

  const renderOption = (option: Option, index: number) => {
    const key = option.value ?? index;

    if (type === 'button') {
      return (
        <Button
          icon={option.icon}
          type={index == 0 ? 'primary' : option.type}
          key={key}
          // @ts-ignore
          icon={option.icon}
          status={option.status === 'error' ? 'danger' : option.status}
          disabled={disabled || option.disabled}
          onClick={() => {
            handleClick(key);
          }}
        >
          {option.label}
        </Button>
      )
    }

    return (
      <Link
        icon={option.icon}
        key={key}
        // @ts-ignore
        icon={option.icon}
        status={option.status}
        disabled={disabled || option.disabled}
        onClick={() => {
          handleClick(key);
        }}
      >
        {option.label}
      </Link>
    )
  }

  const renderExtra = () => {
    const dropList = (
      <Menu>
        {moreOptions.map((option, index) => {
          const key = option.value ?? index + maxCount - 1;
          return (
            <Menu.Item
              key={key as string}
              disabled={disabled || option.disabled}
              onClick={() => {
                handleClick(key);
              }}
            >
              {option.label}
            </Menu.Item>
          )
        })}
      </Menu>
    )

    return (
      <Dropdown droplist={dropList} disabled={disabled}>
        {type === 'button'
          ? <Button icon={<IconMoreVertical />} />
          : (
            <Link>
              更多 <IconDown />
            </Link>
          )
        }
      </Dropdown>
    )
  }

  const children = [
    ...baseOptions.map(renderOption),
  ]

  if (moreOptions.length > 0) {
    children.push(
      renderExtra()
    )
  }

  return (
    <Space size={space}>
      {position === 'left' ? children : children.reverse()}
    </Space>
  )
}
