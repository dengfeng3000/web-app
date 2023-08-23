import React from 'react';
import s from './index.module.scss';
import PageWithAside from '@/components/page-with-aside';

export default function Example() {
  return (
    <PageWithAside aside={'#example aside'}>
      <div className="bg-black p-5">example</div>
    </PageWithAside>
  );
}
