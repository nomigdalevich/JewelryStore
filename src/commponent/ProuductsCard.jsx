import { useState } from "react";
import { useNavigate } from "react-router-dom";

function ProuductsCard({ id, src, name,price,desc,addToCart}){

    const navigate = useNavigate();

    const goToDetails = () => {

        navigate(`/ProuductDetails/${id}/${src}/${name}/${price}/${desc}`);
    }
    return  <>
       <div key={id}>
        <div className="jewlery">
        <img src={"/images/"+src}></img>
        <h3>{name}</h3>
        <button onClick={() => {goToDetails();}}>for details</button>
        </div>
    </div>

    </>

}

export default ProuductsCard;