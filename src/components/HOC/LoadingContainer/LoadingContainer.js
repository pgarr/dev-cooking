import styled from "styled-components";
import LoadingSpinner from "../../UI/LoadingSpinner";

const StyledSpinner = styled(LoadingSpinner)`
  display: block;
  margin: 0 auto;
`;

const LoadingContainer = ({ isLoading, children }) => {
  const display = isLoading ? <StyledSpinner /> : children;

  return display;
};

export default LoadingContainer;
