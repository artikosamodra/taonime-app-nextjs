// this file is the same as FetchAPI, this just example for simple use API

//example for top anime
export const getAnimeResponse = async (resource, query) => {
  //if example 'top/anime?limit=8' .. top/anime is resource and limit=8 is query
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/${resource}?${query}`
  );
  return response.json();
};

//I tried to implement this fetch in the anime recommendations section in mainpage >> because have array 'entry'
export const getNestedAnimeResponse = async (resource, objectProp) => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/${resource}`
  );
  return response.json();

  // //get an array of response data, then flatmap it again to get data from the item/array entry. The final result is all the data in the entry array
  // return response.data.flatMap((item) => item.entry);
};

export const getNewSeasonAnimeResponse = async (resource, query) => {
  const response = await getAnimeResponse(resource, query); //same of await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/${resource} this just reuseable api getAnimeResponse
  return response;
};

export const getTopCharacterAnime = async (resource, query) => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/${resource}?${query}`
  );
  return response.json();
};
