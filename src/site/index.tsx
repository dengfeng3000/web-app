import React from 'react';
import { Outlet } from 'react-router-dom';
import cs from 'classnames';
import s from './index.module.scss';
import Head from '../components/head';

export default function Site() {
  return (
    <>
      <header className={s.siteHeader}>
        <Head />
      </header>
      <main className={s.siteMain}>
        <div className={cs(s.siteContainer, 'mx-auto')}>
          <Outlet />
        </div>
      </main>
    </>
  );
}
