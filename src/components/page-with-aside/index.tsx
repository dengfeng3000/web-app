import React, { useMemo, useState, useEffect } from 'react';
import cs from 'classnames';
import { useMedia } from 'react-use';
import { Icon } from '@blueprintjs/core';
import s from './index.module.scss';
import Drawer from '../drawer';
import { mobileWidth } from '@/setting';

interface PageWithAsideProp {
  title?: string;
  rtl?: boolean;
  asideWidth?: string;
  aside: React.ReactNode;
  children?: React.ReactNode;
}

export default function PageWithAside(props: PageWithAsideProp) {
  const { asideWidth = '240px', rtl = false, aside, children } = props;
  const [mobileActive, setMobileActive] = useState(false);
  const isMobile = useMedia(mobileWidth);

  const asideRtl = rtl ? s.asideRight : s.asideLeft;

  const asideStyle = {
    width: asideWidth,
  };

  const contentStyle = {
    [rtl ? 'paddingRight' : 'paddingLeft']: asideWidth,
  };

  const mobileAsideCN = useMemo(
    () =>
      mobileActive ? cs(s.mobileAside, s.mobileAsideActive) : s.mobileAside,
    [mobileActive]
  );

  useEffect(() => {
    if (!isMobile) {
      setMobileActive(false);
    }
  }, [isMobile]);

  return (
    <>
      <div style={asideStyle} className={cs(s.pageAside, asideRtl)}>
        {aside}
      </div>
      <div style={contentStyle} className={s.pageContent}>
        <div className={s.mobileMenu}>
          <div
            className={s.mobileSwitch}
            onClick={() => setMobileActive(!mobileActive)}
            aria-hidden
          >
            <Icon icon="align-left" />
            <span className={s.switchText}>菜单</span>
          </div>
        </div>
        {children}
      </div>
      {/* mobile */}
      {isMobile ? (
        <Drawer
          visible={mobileActive}
          onClose={() => setMobileActive(!mobileActive)}
        >
          <div style={asideStyle} className={mobileAsideCN}>
            {aside}
          </div>
        </Drawer>
      ) : undefined}
    </>
  );
}
