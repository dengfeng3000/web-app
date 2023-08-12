import React, {
  useEffect, useMemo, useState,
} from 'react';
import cs from 'classnames';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useMedia } from 'react-use';
import { Icon } from '@blueprintjs/core';
import { useDispatch, useSelector } from 'react-redux';
import { mobileWidth } from '@/setting';
import s from './index.module.scss';
import { SiteState } from '@/store';
import { updateTheme } from '@/store/theme';

type MenuItem = {
  title: string;
  link?: string;
  children?: MenuItem[];
}

type MenuItems = MenuItem[]

interface MenuProp {
  menuItems: MenuItems;
  onClick?: (menuItem: MenuItem)=>void;
}

// theme switch
function ThemeSwitch(props: { className?: string }) {
  const { className } = props;
  // theme
  const theme = useSelector<SiteState>((state) => state.theme);
  // dispatch
  const dispatch = useDispatch();

  const toggleTheme = (nextTheme: SiteTheme) => {
    dispatch(updateTheme(nextTheme));
  };

  if (theme === 'dark') {
    return <Icon icon="flash" className={cs(s.themeSwitch, className)} onClick={() => toggleTheme('light')} />;
  }
  return <Icon icon="moon" className={cs(s.themeSwitch, className)} onClick={() => toggleTheme('dark')} />;
}

function Menu(props: MenuProp) {
  const { menuItems } = props;

  return (
    <>
      {menuItems.map((menuItem) => (
        <Link
          className={cs(s.menuItem, 'text-link')}
          to={menuItem.link!}
          key={menuItem.link}
        >
          {menuItem.title}
        </Link>
      ))}
      <ThemeSwitch className={s.menuItem} />
    </>
  );
}

function MobileMenu(props: MenuProp) {
  const { menuItems, onClick } = props;

  return (
    <div className={s.mobileMenuContent}>
      {menuItems.map((menuItem) => (
        <Link
          className={cs(s.mobileMenuItem, 'text-link')}
          to={menuItem.link!}
          key={menuItem.link}
          onClick={() => { if (onClick) onClick(menuItem); }}
        >
          {menuItem.title}
        </Link>
      ))}
      <div className={s.mobileTheme}>
        <span>主题</span>
        <ThemeSwitch />
      </div>
    </div>
  );
}

export default function Head() {
  const [mobileMenuActive, setMobileMenuActive] = useState(false);
  const isMobile = useMedia(mobileWidth);

  const [menuItems, setMenuItems] = useState<MenuItems>([]);

  const fetchMenu = async () => {
    const { data } = await axios.get('/data/nav.json');
    setMenuItems(data);
  };

  // fetch nav links
  useEffect(() => {
    fetchMenu();
  }, []);

  // control mobile menu display
  const mobileMenuCN = useMemo(() => (mobileMenuActive
    ? cs(s.mobileMenu, s.mobileMenuActive)
    : s.mobileMenu), [mobileMenuActive]);

  // control screen change
  useEffect(() => {
    if (!isMobile) {
      setMobileMenuActive(false);
    }
  }, [isMobile]);

  return (
    <>
      <div className={s.header}>
        <div className={cs(s.headerInner, 'mx-auto')}>
          {/* content */}
          <div className={s.headerContent}>
            {/* brand */}
            <div className={s.headerBrand}>
              <a href="/" className={s.brandLink}>
                #brand
              </a>
            </div>
            {/* menu */}
            <div className={s.headerMenu}>
              <Menu menuItems={menuItems} />
            </div>
            <div className={s.headerMobileMenu}>
              <Icon icon="menu" className={s.mobileMenuSwitch} onClick={() => setMobileMenuActive(!mobileMenuActive)} />
            </div>
          </div>
        </div>
      </div>
      {/* mobile */}
      <div className={mobileMenuCN}>
        <MobileMenu menuItems={menuItems} onClick={() => setMobileMenuActive(false)} />
      </div>
    </>
  );
}
