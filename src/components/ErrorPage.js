import React from "react";
import { useRouteError } from "react-router";

const ErrorPage = () => {
  const err = useRouteError();
  console.log(err);
  return <div>{err.status}: Oops, {err.error.message}</div>;
};

export default ErrorPage;
