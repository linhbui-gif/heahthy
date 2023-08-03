import React from 'react';
import { Button as AntdButton } from 'antd';
import classNames from 'classnames';
import { navigate } from '@reach/router';
import Icon, { EIconName } from '@/components/Icon';
import imgGradient from '@/assets/images/gradient-btn.png';
import './ButtonHexagon.scss';
const ButtonHexagon = ({
  className,
  size,
  iconName,
  shadow = true,
  drink = true,
  type,
  htmlType,
  title,
  danger,
  reverse,
  link,
  disabled,
  loading,
  onClick,
}) => {
  const handleClickButton = () => {
    if (link) navigate(link);
    else onClick?.();
  };
  return (
    <div className={classNames('ButtonHexagon', className, { shadow, 'only-icon': !title && iconName, reverse })}>
      <img src={imgGradient} />
      <AntdButton
        size={size}
        type={type}
        htmlType={htmlType}
        onClick={handleClickButton}
        danger={danger}
        disabled={disabled}
        loading={loading}
      >
        {drink ? <Icon name={EIconName.Cup} color="#FFFFFF" /> : <Icon name={EIconName.Knife} color="#FFFFFF" />}
        <span className="Button-title">{title}</span>
      </AntdButton>
    </div>
  );
};

export default ButtonHexagon;
