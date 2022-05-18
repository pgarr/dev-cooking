import LoadingSpinner from "../../UI/LoadingSpinner";

const LoadingContainer = ({ isLoading, children }) => {
  const display = isLoading ? <LoadingSpinner /> : children;

  return display;
};

export default LoadingContainer;
