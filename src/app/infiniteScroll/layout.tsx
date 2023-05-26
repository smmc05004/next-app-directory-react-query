import { FC, PropsWithChildren } from "react";

const Layout_InfiniteScroll: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div>
      <h1>infiniteScroll layout</h1>
      {children}
    </div>
  );
};

export default Layout_InfiniteScroll;
