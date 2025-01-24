import { PropsWithChildren } from "react";
import LoadingSpinner from "../../UI/LoadingSpinner";

interface LoadingContainerProps extends PropsWithChildren {
  isLoading: boolean;
}

const LoadingContainer = ({ isLoading, children }: LoadingContainerProps) => {
  const display = isLoading ? <LoadingSpinner /> : children;

  return display;
};

export default LoadingContainer;
