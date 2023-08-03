import React from 'react';
import classNames from 'classnames';

import { EIconName } from './Icon.enums';
import './Icon.scss';

import ArrowLeft from './ArrowLeft';
import ArrowRight from './ArrowRight';
import Google from './Google';
import Facebook from './Facebook';
import Eye from './Eye';
import EyeClosed from './EyeClosed';
import Calendar from './Calendar';
import AngleDown from './AngleDown';
import AngleLeft from './AngleLeft';
import AngleRight from './AngleRight';
import MinusCircle from './MinusCircle';
import Copy from './Copy';
import Bars from './Bars';
import Close from './Close';
import CheckCircle from './CheckCircle';
import Clock from './Clock';
import Info from './Info';
import Memo from './Memo';
import Challenge from './Challenge';
import Knife from './Knife';
import Cup from './Cup';

const Icon = ({ name, className, color, onClick, isNumber }) => {
  const renderIcon = () => {
    switch (name) {
      case EIconName.ArrowLeft:
        return <ArrowLeft color={color} />;
      case EIconName.ArrowRight:
        return <ArrowRight color={color} />;
      case EIconName.Google:
        return <Google color={color} />;
      case EIconName.Facebook:
        return <Facebook color={color} />;
      case EIconName.Eye:
        return <Eye color={color} />;
      case EIconName.EyeClosed:
        return <EyeClosed color={color} />;
      case EIconName.Calendar:
        return <Calendar color={color} />;
      case EIconName.AngleDown:
        return <AngleDown color={color} />;
      case EIconName.AngleLeft:
        return <AngleLeft color={color} />;
      case EIconName.AngleRight:
        return <AngleRight color={color} />;
      case EIconName.MinusCircle:
        return <MinusCircle color={color} />;
      case EIconName.Copy:
        return <Copy color={color} />;
      case EIconName.Bars:
        return <Bars color={color} />;
      case EIconName.Close:
        return <Close color={color} />;
      case EIconName.CheckCircle:
        return <CheckCircle color={color} />;
      case EIconName.Clock:
        return <Clock color={color} />;
      case EIconName.Info:
        return <Info color={color} />;
      case EIconName.Memo:
        return <Memo color={color} />;
      case EIconName.Challenge:
        return <Challenge color={color} />;
      case EIconName.Knife:
        return <Knife color={color} />;
      case EIconName.Cup:
        return <Cup color={color} />;
      default:
        return <></>;
    }
  };

  return (
    <div className={classNames('Icon', 'flex', 'justify-center', 'items-center', className)} onClick={onClick}>
      {renderIcon()}
      {isNumber ? <span>1</span> : ''}
    </div>
  );
};

export default Icon;
