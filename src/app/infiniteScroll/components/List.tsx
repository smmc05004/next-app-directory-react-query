"use client";

import { useInfiniteQuery } from "@tanstack/react-query";
import { useRef } from "react";
import useIntersectionObserver from "../hooks/useIntersectionObserver";
import { getPoke } from "../api";

const List = () => {
  const loadMoreButtonRef = useRef<HTMLDivElement>(null);

  const { data, hasNextPage, fetchNextPage } = useInfiniteQuery(
    ["poke"],
    ({ pageParam = 0 }) => getPoke(pageParam),
    {
      getNextPageParam: (lastPage) => {
        const lastOffset =
          lastPage.results[lastPage.results.length - 1].url.split("/")[6];

        return {
          offset: lastOffset > 1118 ? undefined : lastOffset,
        };
      },
      staleTime: 3000,
    }
  );

  useIntersectionObserver({
    root: null,
    target: loadMoreButtonRef,
    onIntersect: fetchNextPage,
    enabled: hasNextPage,
  });

  return (
    <>
      <ul>
        {data?.pages?.map((page) =>
          page?.results.map((poke: any) => (
            <li key={poke.name} style={{ padding: "20px", fontWeight: "bold" }}>
              {poke.name}
            </li>
          ))
        )}
      </ul>

      <div ref={loadMoreButtonRef} />
    </>
  );
};

export default List;
