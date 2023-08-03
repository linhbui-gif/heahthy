import React, { useRef, useState } from 'react';
import classNames from 'classnames';

import { Link, useLocation } from '@reach/router';
import { Paths } from '@/pages/routers';
import Logo from '@/assets/images/logo.svg';
import { dataHeaderMenu } from './Header.data';
import './Header.scss';
import Icon, { EIconName } from '@/components/Icon';

const Header = () => {
  const { pathname } = useLocation();
  const [open, setOpen] = useState(false);
  const ref = useRef(null);
  const openMenuToggle = () => {
    setOpen(!open);
  };

  return (
    <>
      <header className={classNames('Header')}>
        <div className="container">
          <div className="Header-wrapper flex items-center justify-between">
            <Link className="Header-logo" to={Paths.Home}>
              <img src={Logo} alt="" />
            </Link>
            <nav className="Header-nav">
              <ul className="Header-nav-list flex items-center">
                <li className={`Header-nav-list-item ${pathname === Paths.Record ? 'active' : ''}`}>
                  <Icon name={EIconName.Memo} color="#FF963C" />
                  <Link to={Paths.Record}>自分の記録</Link>
                </li>
                <li className={`Header-nav-list-item ${pathname === Paths.Record ? 'Home' : ''}`}>
                  <Icon name={EIconName.Challenge} color="#FF963C" />
                  <Link to={Paths.Home}>チャレンジ</Link>
                </li>
                <li className={`Header-nav-list-item ${pathname === Paths.Record ? 'Home' : ''}`}>
                  <Icon name={EIconName.Info} color="#FF963C" isNumber={true} />
                  <Link to={Paths.Home}>お知らせ</Link>
                </li>
              </ul>
              <div className={`Header-nav-mobile ${open ? 'open' : ''}`} ref={ref}>
                <ul className="Header-nav-list flex">
                  {dataHeaderMenu.map((item, n) => (
                    <li className={`Header-nav-list-item`} key={n}>
                      <Link to={item.link}>{item.title}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            </nav>
            <div className="Header-wrapper-toggle" onClick={openMenuToggle}>
              {open ? <Icon name={EIconName.Close} color="#FF963C" /> : <Icon name={EIconName.Bars} color="#FF963C" />}
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
