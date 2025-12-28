import { useParams } from "react-router-dom";

function ProuductDetails({addToCart}){

    const {id, src, name,price,desc} = useParams();

    return <>
    <div key={id}>
        <div className="jewleryDetails">
        <div className="BoxJ">
        <div className="textDiv">
        <h3>{name}</h3>
        <h3>{desc}</h3>
        <h3>{price}₪</h3>
        </div>
        <button className="buttAddCart" onClick={ () => addToCart(id , src , name, price)}>add to cart</button>
        </div>
        <img src={"/images/"+src}></img>
        </div>
        
    </div>
    </>
}

export default ProuductDetails;