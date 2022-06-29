import { ChildrenProps } from '@/types';

import globalStyles from '@/sass/main.module.scss';

interface ColProps extends ChildrenProps {
  sm?: boolean | number;
  md?: boolean | number;
  lg?: boolean | number;
  xl?: boolean | number;
  xxl?: boolean | number;
}



export function Col({ children, sm, md, lg, xl, xxl }: ColProps) {

  let smClass = "";
  let mdClass = "";
  let lgClass = "";
  let xlClass = "";
  let xxlClass = "";
  let stringClass = "";
  const hasProps = () => (sm || md || lg || xl || xxl);


  if (typeof sm === "number") {
    stringClass = "col-sm-" + sm;
    smClass = globalStyles[stringClass] + " ";
  }
  if (typeof md === "number") {
    stringClass = "col-md-" + md;
    mdClass = globalStyles[stringClass] + " ";
  }
  if (typeof lg === "number") {
    stringClass = "col-lg-" + lg;
    lgClass = globalStyles[stringClass] + " ";
  }
  if (typeof xl === "number") {
    stringClass = "col-xl-" + xl;
    xlClass = globalStyles[stringClass] + " ";
  }
  if (typeof xxl === "number") {
    stringClass = "col-xl-" + xxl;
    xxlClass = globalStyles[stringClass] + " ";
  }

  if (typeof sm === "boolean") {
    smClass = "col-sm-auto ";
  }
  if (typeof md === "boolean") {
    mdClass = "col-md-auto ";
  }
  if (typeof lg === "boolean") {
    lgClass = "col-lg-auto ";
  }
  if (typeof xl === "boolean") {
    xlClass = "col-xl-auto ";
  }
  if (typeof xxl === "boolean") {
    xxlClass = "col-xxl-auto ";
  }


  return (
    <div className={hasProps() ? smClass + mdClass + lgClass + xlClass + xxlClass : "col-auto"}>{children}</div>
  )
}

