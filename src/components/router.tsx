import React, {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useState,
} from "react";

interface RouterInter {
  children: ReactNode;
}

export const RouteContext = createContext({
  path: window.location.pathname,
  setpath: Function as Dispatch<SetStateAction<string>>,
});

const Router = ({ children }: RouterInter) => {
  const [path, setpath] = useState(window.location.pathname);
  return (
    <RouteContext.Provider value={{ path, setpath }}>
      <section>{children}</section>
    </RouteContext.Provider>
  );
};

export default Router;
