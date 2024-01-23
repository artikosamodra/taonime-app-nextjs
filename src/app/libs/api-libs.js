// this file is the same as FetchAPI, this just example for simple use API


//I tried to implement this fetch in the anime recommendations section in mainpage
export const getAnimeResponse = async (resource, query) => {
  //if example 'top/anime?limit=8' .. top/anime is resource and limit=8 is query
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/${resource}?${query}`
  );
  return response.json();
};
