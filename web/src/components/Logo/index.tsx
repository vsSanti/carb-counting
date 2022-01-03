import { FC, ImgHTMLAttributes } from 'react';

import { CarbCounting, CarbCountingPurple } from 'assets';

type LogoProps = ImgHTMLAttributes<HTMLImageElement> & {
  color: 'white' | 'purple';
};

export const Logo: FC<LogoProps> = ({ color, ...rest }) => {
  return (
    <img
      alt="Logo"
      src={color === 'purple' ? CarbCountingPurple : CarbCounting}
      {...rest}
    />
  );
};
