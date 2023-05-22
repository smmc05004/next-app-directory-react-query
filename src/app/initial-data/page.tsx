import ListUsers from "./list-users";
import { User } from "../types";
import axios from "axios";

async function getUsers() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const users = (await res.json()) as User[];
  return users;
}

async function getTests() {
  const res = (await axios("http://localhost:3000/api/hello")).data;
  return res;
}

const InitialData = async () => {
  const users = await getUsers();

  return <ListUsers users={users} />;
};

export default InitialData;
