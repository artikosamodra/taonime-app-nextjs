//FetchAPI.js
const TopFetch = async () => {
  // Top Anime Fetch
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/top/anime?limit=14`
  );
  return response.json();
};

const AnimeFetch = { TopFetch };
export default AnimeFetch;
