import { QueryClient } from "@tanstack/react-query";
import dynamic from "next/dynamic";
import { getPoke } from "./api.ts";

const DynamicList = dynamic(() => import("./components/List"), {
  ssr: false,
  loading: () => <div>...loading</div>,
});

const Page_InfiniteScroll = async () => {
  return (
    <div>
      <h1>infiniteScroll 페이지</h1>
      <DynamicList />
    </div>
  );
};

export default Page_InfiniteScroll;
