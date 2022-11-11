import React, { createContext, useState, useEffect, useContext } from "react";
import { fetchHeroData } from "../helpers/HeroData";

const HeroContext = createContext({});

export const HeroContextProvider = ({ children }) =>{
    const [selectedHero, setSelectedHero] = useState(null);
    const [heroData, setHeroData] = useState([])
    useEffect(() => {
        const fetchAPI = async () => {
          const data = await fetchHeroData(selectedHero);
          console.log({data})
          setHeroData(data);
        };
        fetchAPI();
      }, [selectedHero]);

      return (
        <HeroContext.Provider value={{ selectedHero, setSelectedHero, heroData }}>
          {children}
        </HeroContext.Provider>
      );
}
export const useHeroContext = () => useContext(HeroContext);


 