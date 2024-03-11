import { useState } from "react";
import "./country.css";
const Country = ({ country, handelVisitedCountry, handelVisitedFlags }) => {

    console.log(country)
  const { name, flags, area, capital,population,cca3 } = country;

  const [visited, setVisited]= useState(false)
  const handelVisited=()=>{
    setVisited(!visited)
  }
  return (
    <div style={{textAlign: 'center'}} className={`country ${visited ? 'visited' : 'going'}`}>
      <h4>{name?.common}</h4>
      <img src={flags.png} alt="" />
      <p>Area : {area}</p>
      <p>Capital : {capital}</p>
      <p>population : {population}</p>
      <p><small>Code : {cca3}</small></p>
      <button onClick={() =>handelVisitedCountry(country)}>Mark As Visited</button>
      <br/>
      <button onClick={() => handelVisitedFlags(country.flags.png)}>Add Flags</button>
      <button style={{marginRight: "10px", marginTop:"10px"}} onClick={handelVisited}>{ visited? "visited" : "Going "}</button>
      {visited ? "I have Visited" : "I go to visit"}
     
    </div>
  );
};

export default Country;
