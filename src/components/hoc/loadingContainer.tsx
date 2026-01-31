import { PropsWithChildren } from "react";
import { Spinner } from "@/components/ui/spinner";

interface LoadingContainerProps extends PropsWithChildren {
  isLoading: boolean;
}

const LoadingContainer = ({ isLoading, children }: LoadingContainerProps) => {
  const display = isLoading ? <Spinner className="m-auto" /> : children;

  return display;
};

export default LoadingContainer;
