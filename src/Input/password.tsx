import React, { useContext } from 'react';
import { InputPasswordProps, RefInputType } from './interface';
import classNames from '@pansy/classnames';
import Input from './input';
import EyeOutlined from '@sensoro-design/icons/EyeOutlined';
import EyeInvisibleOutlined from '@sensoro-design/icons/EyeInvisibleOutlined';
import { ConfigContext } from '../ConfigProvider';
import useMergeValue from '../_util/hooks/useMergeValue';
import omit from '../_util/omit';

const Password = React.forwardRef<RefInputType, InputPasswordProps>(
  (props: InputPasswordProps, ref) => {
    const [visibility, setVisibility] = useMergeValue(false, {
      defaultValue: props.defaultVisibility,
      value: props.visibility,
    });
    const { getPrefixCls } = useContext(ConfigContext);
    const { className, visibilityToggle, onVisibilityChange, ...rest } = props;

    const prefixCls = getPrefixCls('input-password');
    const classes = classNames(
      prefixCls,
      {
        [`${prefixCls}-visibility`]: visibilityToggle,
      },
      className
    );

    const onClickVisibility = (v: boolean) => {
      if (!('visibility' in props)) {
        setVisibility(v);
      }
      onVisibilityChange && onVisibilityChange(v);
    };

    let icon = props.suffix;

    if (visibilityToggle) {
      const IconProps = {
        onClick: () => onClickVisibility(!visibility),
        // 预防focus丢失
        onMouseDown: (e) => e.preventDefault(),
        onMouseUp: (e) => e.preventDefault(),
      };

      if (props.suffix) {
        icon = <span {...IconProps}>{props.suffix}</span>;
      } else {
        const IconComponent = visibility ? EyeOutlined : EyeInvisibleOutlined;

        icon = <IconComponent {...IconProps} />;
      }
    }

    return (
      <Input
        {...omit(rest, ['visibility', 'defaultVisibility'])}
        type={visibility ? 'text' : 'password'}
        className={classes}
        ref={ref}
        suffix={icon}
      />
    );
  }
);

Password.displayName = 'Password';

Password.defaultProps = {
  visibilityToggle: true,
};
export default Password;

export { InputPasswordProps };
