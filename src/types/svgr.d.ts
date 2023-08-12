/// <reference types="react"/>

declare module '*.svg' {
  const SvgComponent: React.FC<React.SVGProps<SVGAElement>>;
  export default SvgComponent;
}
