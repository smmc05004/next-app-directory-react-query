import axios from "axios";

interface Props {
  offset: number;
}

export const getPoke = async ({ offset = 0 }: Props) => {
  console.log("offset: ", offset);
  const { data } = await axios.get(
    `https://pokeapi.co/api/v2/pokemon?limit=20&offset=${offset}`
  );
  return data;
};
