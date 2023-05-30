import pets from "../petsData";
import PetItem from "./PetItem";
import { useState } from "react";

function PetsList() {
  const [query, setQuery] = useState("");
  const [type, setType] = useState("");
  const [adopt, setAdopt] = useState(pets);
  const filteredPets = adopt.filter((pet) => {
    return (
      pet.name.toLowerCase().includes(query.toLowerCase()) &&
      pet.type.includes(type)
    );
  });
  const handleAdopt = (petId) => {
    setAdopt(adopt.filter((pet) => pet.id != petId));
  };
  const petList = filteredPets.map((pet) => (
    <PetItem pet={pet} key={pet.id} handleAdopt={handleAdopt} />
  ));
  const handleChange = (event) => {
    setQuery(event.target.value);
  };
  const handleType = (event) => {
    setType(event.target.value);
  };

  return (
    <section id="doctors" className="doctor-section pt-140">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xxl-5 col-xl-6 col-lg-7">
            <div className="section-title text-center mb-30">
              <h1 className="mb-25 wow fadeInUp" data-wow-delay=".2s">
                Fur-ends
              </h1>
              <div className="input-group rounded">
                <input
                  type="search"
                  onChange={handleChange}
                  className="form-control rounded"
                  placeholder="Search"
                  aria-label="Search"
                  aria-describedby="search-addon"
                />
              </div>
              <br />
              Type:
              <select className="form-select" onChange={handleType}>
                <option value="" selected>
                  All
                </option>
                <option value="Cat">Cat</option>
                <option value="Dog">Dog</option>
                <option value="Rabbit">Rabbit</option>
              </select>
            </div>
          </div>
        </div>

        <div className="row justify-content-center">{petList}</div>
      </div>
    </section>
  );
}

export default PetsList;
