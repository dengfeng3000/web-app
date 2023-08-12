import React from 'react';
import { createPortal } from 'react-dom';

interface PortalProp {
  container?: Element;
  children?: React.ReactNode;
}

const Portal = (props: PortalProp) => {
  const { container = document.body, children } = props;
  return createPortal(children, container);
};

export default Portal;
