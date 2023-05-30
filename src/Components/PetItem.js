import { useState } from "react";
import PetsList from "./PetsList";

function PetItem({ pet, handleAdopt }) {
  const [img, setImg] = useState(pet.image);
  const petImage2 = () => {
    setImg(pet.image2);
  };
  return (
    <div className="col-lg-4 col-md-8 col-sm-10">
      <div className="single-doctor">
        <img className="image" alt={pet.name} src={img} />
        <div className="content">
          <h3>{pet.name}</h3>
          <button onClick={petImage2} type="button" className="btn btn-info">
            Pet
          </button>
          <button onClick={()=>handleAdopt(pet.id)} type="button" className="btn btn-info  m-2">
            Adopt
          </button>
        </div>
      </div>
    </div>
  );
}

export default PetItem;
