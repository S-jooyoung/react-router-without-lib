import React, { useContext } from "react";
import { RouteContext } from "./router";

interface RouteInter {
  path: string;
  component: JSX.Element;
}

const Route = ({ path, component }: RouteInter) => {
  const { path: currentPath, setpath } = useContext(RouteContext);

  window.onpopstate = () => {
    setpath(window.location.pathname);
  };

  if (currentPath !== path) return <></>;

  return component;
};

export default Route;
