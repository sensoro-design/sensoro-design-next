import React, { useContext } from 'react';
import { RefInputType, InputSearchProps } from './interface';
import classNames from '@pansy/classnames';
import Input, { formatValue } from './input';
import Button from '../Button';
import SearchOutlined from '@sensoro-design/icons/SearchOutlined';
import omit from '../_util/omit';
import { ConfigContext } from '../ConfigProvider';
import useMergeValue from '../_util/hooks/useMergeValue';
import IconLoading from '../../icon/react-icon/IconLoading';

const Search = React.forwardRef<RefInputType, InputSearchProps>((props: InputSearchProps, ref) => {
  const { getPrefixCls } = useContext(ConfigContext);

  const [value, setValue] = useMergeValue('', {
    defaultValue:
      'defaultValue' in props ? formatValue(props.defaultValue, props.maxLength) : undefined,
    value: 'value' in props ? formatValue(props.value, props.maxLength) : undefined,
  });

  const { className, style, placeholder, disabled, searchButton, loading, defaultValue, ...rest } =
    props;
  const prefixCls = getPrefixCls('input-search');
  const classes = classNames(
    prefixCls,
    {
      [`${prefixCls}-button`]: searchButton,
    },
    className
  );

  const onSearch = (e) => {
    !disabled && props.onSearch && props.onSearch(value);
    props.onPressEnter && props.onPressEnter(e);
  };

  return (
    <Input
      {...omit(rest, ['onSearch'])}
      disabled={disabled}
      className={classes}
      style={style}
      ref={ref}
      placeholder={placeholder}
      addAfter={
        searchButton ? (
          <Button
            disabled={disabled}
            size={rest.size}
            className={`${prefixCls}-btn`}
            type="primary"
            onClick={onSearch}
            loading={loading}
            loadingFixedWidth
            icon={searchButton === true && !loading && <SearchOutlined />}
          >
            {searchButton !== true && searchButton}
          </Button>
        ) : null
      }
      suffix={!searchButton && (loading ? <IconLoading /> : <SearchOutlined onClick={onSearch} />)}
      onChange={(value, e) => {
        setValue(value);
        props.onChange && props.onChange(value, e);
      }}
      defaultValue={defaultValue}
      onPressEnter={onSearch}
    />
  );
});

Search.displayName = 'Search';

export default Search;

export { InputSearchProps };
