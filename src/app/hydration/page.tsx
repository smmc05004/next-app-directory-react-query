import { dehydrate } from "@tanstack/query-core";
import ListUsers from "./list-users";
import { User } from "../types";
import getQueryClient from "../utils/getQueryClient";
import Hydrate from "../utils/hydrate.client";

async function getUsers() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const users = (await res.json()) as User[];
  return users;
}

const Hydation = async () => {
  const queryClient = getQueryClient();

  await queryClient.prefetchQuery(["hydrate-users"], getUsers);
  const dehydratedState = dehydrate(queryClient);

  return (
    <Hydrate state={dehydratedState}>
      <ListUsers />
    </Hydrate>
  );
};

export default Hydation;
