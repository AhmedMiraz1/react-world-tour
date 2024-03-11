import "./countries.css";
import { useEffect } from "react";
import { useState } from "react";
import Country from "../counrty/Country";

const Countries = () => {
  const [countries, setCountries] = useState([]);
  const [visitedCountries, setVisitedCountries] = useState([]);
  const [visitedFlags, setVisitedFlags]= useState([])

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((data) => setCountries(data));
  }, []);

  const handelVisitedCountry = (country) => {
   
    const newVisitedCountries =[...visitedCountries, country]
    setVisitedCountries(newVisitedCountries)
  };

  const handelVisitedFlags =(flag)=>{
    console.log(flag)
    const newVisitedFlag= [...visitedFlags, flag]
    setVisitedFlags(newVisitedFlag)

  }
  return (
    <div>
      <h3>Countries :{countries.length} </h3>
      <div>
        <h5>Visited countries : {visitedCountries.length}</h5>
        <ul>
            {
                visitedCountries.map( country => <li key={country.cca3}>{country.name.common}</li>)
                
            }
        </ul>
      </div>
      <div className="flag-container">
        {
            visitedFlags.map(flag => <img key={flag.cca3} src={flag}></img>)
        }

      </div>
      <div className="country-container">
        {countries.map((country) => (
          <Country
            key={country.cca3}
            handelVisitedCountry={handelVisitedCountry}
            handelVisitedFlags={handelVisitedFlags}
            country={country}
          ></Country>
        ))}
      </div>
    </div>
  );
};

export default Countries;
