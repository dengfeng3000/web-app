import React, {
  useEffect, useRef, useMemo, SyntheticEvent,
} from 'react';
import cs from 'classnames';
import Portal from '../portal';
import s from './index.module.scss';

interface MaskProp {
  visible: boolean
  onClick?: Func;
  onClose?: Func;
  onMounted?: Func;
  children?: React.ReactNode;
}

function Mask(props: MaskProp) {
  const container = useRef(document.createElement('div'));

  const {
    visible, onClick, children,
  } = props;

  const maskRef = useRef(null);

  // class name
  const maskCN = useMemo(() => {
    if (visible) {
      return cs(s.mask, s.maskActive);
    }
    return cs(s.mask, s.maskHide);
  }, [visible]);

  const clickHandler = (e: SyntheticEvent) => {
    if (e.target === maskRef.current && onClick) {
      onClick();
    }
  };

  useEffect(() => {
    const element = container.current;

    if (element) {
      document.body.appendChild(element);
    }

    // remove element
    return () => {
      if (element) element.remove();
    };
  }, []);

  return (
    <Portal container={container.current}>
      <div ref={maskRef} className={maskCN} onClick={clickHandler} aria-hidden>
        {children}
      </div>
    </Portal>
  );
}

export default Mask;
