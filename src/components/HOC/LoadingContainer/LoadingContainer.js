import React from "react";
import { Spinner } from "react-bootstrap";

const LoadingContainer = ({ isLoading, children }) => {
  const display = isLoading ? (
    <div>
      <Spinner animation="border" role="status">
        <span className="sr-only">Loading...</span>
      </Spinner>
    </div>
  ) : (
    children
  );

  return display;
};

export default LoadingContainer;
