import useData from "./useData";

export interface Genre {
  id: number;
  name: string;
  image_background: string;
}

const useGenre = () => {
  return useData<Genre>(["genres"], "/genres");
};

export default useGenre;
