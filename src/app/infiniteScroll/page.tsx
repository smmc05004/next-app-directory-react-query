import dynamic from "next/dynamic";
import { getPoke } from "./api.ts";
import getQueryClient from "../utils/getQueryClient";
import { dehydrate } from "@tanstack/react-query";
import Hydrate from "../utils/hydrate.client";

const DynamicList = dynamic(() => import("./components/List"), {
  ssr: true,
  loading: () => <div>...loading</div>,
});

const Page_InfiniteScroll = async () => {
  const queryClient = getQueryClient();

  await queryClient.prefetchQuery(["poke"], () => getPoke({ offset: 0 }));

  const dehydratedState = dehydrate(queryClient);

  return (
    <Hydrate state={dehydratedState}>
      <h1>infiniteScroll 페이지</h1>
      <DynamicList />
    </Hydrate>
  );
};

export default Page_InfiniteScroll;
