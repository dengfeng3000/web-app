import React, { useMemo } from 'react';
import cs from 'classnames';
import Mask from '../mask';
import s from './index.module.scss';

interface DrawerProp {
  visible: boolean;
  children?: React.ReactNode;
  onClose: (visible: boolean)=>void;
}

export default function Drawer(props: DrawerProp) {
  const { visible, children, onClose } = props;

  const drawerCN = useMemo(() => {
    if (visible) {
      return cs(s.drawer, s.drawerActive);
    }
    return cs(s.drawer, s.drawerHide);
  }, [visible]);

  return (
    <Mask visible={visible} onClick={onClose}>
      <div className={drawerCN}>
        {children}
      </div>
    </Mask>
  );
}
