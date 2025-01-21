import BrandImage from "../../svg/dev-hat2.svg?react";

const BrandIcon = ({ size }) => {
  size = size || 2;
  const style = { fill: "#969696", height: size + "rem" };

  return <BrandImage style={style} />;
};

export default BrandIcon;
