import axios from "axios";

const API_KEY=process.env.NEXT_PUBLIC_API_KEY;
const API_URL=process.env.NEXT_PUBLIC_HERO_BASE_URL;

  export const fetchHeroData = async(heroName) => {
  const trimmedaName = heroName?.replace(/\s/g, '')
  return await axios.get(`${API_URL}?s=${trimmedaName}&apikey=${API_KEY}`)
  .then(data =>data.data)
  .catch(error => console.log(error));
}

