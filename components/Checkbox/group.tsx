import React, {
  createContext,
  useContext,
  PropsWithChildren,
  useCallback,
  ReactText,
  useState,
} from 'react';
import Checkbox from './checkbox';
import cs from '../_util/classNames';
import { ConfigContext } from '../ConfigProvider';
import useMergeValue from '../_util/hooks/useMergeValue';
import { isArray, isObject } from '../_util/is';
import { CheckboxGroupProps } from './interface';

export const CheckboxGroupContext = createContext<{
  disabled?: boolean;
  isCheckboxGroup: boolean;
  onGroupChange: (_optionValue, _checked: boolean, e: Event) => void;
  checkboxGroupValue: ReactText[];
  registerValue: (value: ReactText) => void;
  unRegisterValue: (value: ReactText) => void;
}>({
  isCheckboxGroup: false,
  checkboxGroupValue: [],
  onGroupChange: () => {},
  registerValue: () => {},
  unRegisterValue: () => {},
});

function Group<T extends React.ReactText>(props: PropsWithChildren<CheckboxGroupProps<T>>) {
  const [value, setValue] = useMergeValue([], {
    defaultValue: 'defaultValue' in props ? props.defaultValue || [] : undefined,
    value: 'value' in props ? props.value || [] : undefined,
  });
  const [allOptionValues, setAllOptionValues] = useState([]);

  const { getPrefixCls } = useContext(ConfigContext);
  const { disabled, options, style, className, error, children, direction = 'horizontal' } = props;
  const prefixCls = getPrefixCls('checkbox');
  const classNames = cs(
    `${prefixCls}-group`,
    {
      [`${prefixCls}-group-is-error`]: error,
      [`${prefixCls}-group-direction-${direction}`]: direction,
    },
    className
  );

  const onChange = useCallback(
    (optionValue, checked: boolean, e: Event) => {
      const newVal = value.slice();
      if (checked) {
        newVal.push(optionValue);
      } else {
        newVal.splice(value.indexOf(optionValue), 1);
      }

      setValue(newVal);

      props.onChange &&
        props.onChange(
          newVal.filter((v) => allOptionValues.indexOf(v) > -1),
          e
        );
    },
    [value, props.onChange, allOptionValues]
  );

  return (
    <span className={classNames} style={style}>
      <CheckboxGroupContext.Provider
        value={{
          isCheckboxGroup: true,
          checkboxGroupValue: value,
          onGroupChange: onChange,
          disabled,
          registerValue: (value) => {
            setAllOptionValues((allOptionValues) => {
              return Array.from(new Set([...allOptionValues, value]));
            });
          },
          unRegisterValue: (value) => {
            setAllOptionValues((allOptionValues) => {
              return allOptionValues.filter((x) => x !== value);
            });
          },
        }}
      >
        {isArray(options)
          ? options.map((option) => {
              const label = isObject(option) ? option.label : option;
              const checkValue = isObject(option) ? option.value : option;

              return (
                <Checkbox
                  disabled={disabled || (isObject(option) && option.disabled)}
                  key={checkValue}
                  value={checkValue}
                >
                  {label}
                </Checkbox>
              );
            })
          : children}
      </CheckboxGroupContext.Provider>
    </span>
  );
}

Group.displayName = 'CheckboxGroup';

export default Group;

export { CheckboxGroupProps };
