import Spinner from "react-bootstrap/Spinner";

import styled from "styled-components";

const LoadingSpinner = () => {
  return <Spinner animation="border" variant="primary" />;
};

const StyledLoadingSpinner = styled(LoadingSpinner)`
  display: block;
  margin: 0 auto;
`;

export default StyledLoadingSpinner;
