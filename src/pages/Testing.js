import React from "react";
import "./Testing.css";

class CountryPage extends React.Component {
  state = {
    name: undefined,
    population: undefined,
    topics: undefined,
    essentials: undefined,
    business: undefined,
  };
  getCountry = async (e) => {
    e.preventDefault();
    const country = e.target.elements.country.value;
    const api_call = await fetch(``);
    const data = await api_call.json();
    console.log(data);
    this.setState({
      name: data.name,
      population: data.population,
      topics: data.topics,
      essentials: data.essentials,
      business: data.business,
      error: "",
    });
  };
  render() {
    return (
      <div className="">
        
      </div>
    );
  }
}

export default CountryPage;
