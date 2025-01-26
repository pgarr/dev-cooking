import BrandImage from "../../svg/dev-hat2.svg?react";

interface BrandIconProps {
  size?: number;
}

const BrandIcon = ({ size }: BrandIconProps) => {
  size = size || 2;
  const style = { fill: "#969696", height: `${size.toString()}rem` };

  return <BrandImage style={style} />;
};

export default BrandIcon;
