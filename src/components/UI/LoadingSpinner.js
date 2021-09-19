import { SpinnerCircular } from "spinners-react";

const LoadingSpinner = ({ className }) => {
  return (
    <SpinnerCircular
      className={className}
      color={"#023fa1"}
      secondaryColor={"#c9c6c5"}
    />
  );
};

export default LoadingSpinner;
