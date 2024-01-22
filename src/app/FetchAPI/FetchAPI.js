//FetchAPI.js
const TopFetch = async () => {
  // Top Anime Fetch
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/top/anime?limit=12`
  );
  return response.json();
};

const RecomFetch = async () => {
  // Recommendation Anime Fetch
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/top/anime?limit=6`
  );
  return response.json();
};

const AnimeFetch = { TopFetch, RecomFetch };
export default AnimeFetch;
