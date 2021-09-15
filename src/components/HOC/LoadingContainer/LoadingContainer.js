import styled from "styled-components";
import LoadingSpinner from "../../UI/LoadingSpinner";

const Container = styled.div`
  display: flex;
  align-items: center;
`;

const LoadingContainer = ({ isLoading, children }) => {
  const display = isLoading ? (
    <Container>
      <LoadingSpinner />
    </Container>
  ) : (
    children
  );

  return display;
};

export default LoadingContainer;
