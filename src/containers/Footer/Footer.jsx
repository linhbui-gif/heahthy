import classNames from 'classnames';
import { Link, useLocation } from '@reach/router';
import { dataFooterLinks } from './Footer.data';
import './Footer.scss';

const Footer = () => {
  const { pathname } = useLocation();

  return (
    <div className="Footer">
      <div className="container">
        <div className="Footer-wrapper">
          {dataFooterLinks.map((item, n) => (
            <Link
              key={n}
              to={item.link}
              className={classNames('Footer-description Footer-link', { active: item.link === pathname })}
            >
              {item.title}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Footer;
