import { useState } from "react";
import { useNavigate } from "react-router-dom";

function AddProuduct({addProu}) {

    const navigate=useNavigate();

    const [productName, setProductName] = useState("");
    const [productPrice, setProductPrice] = useState("");
    const [productDesc, setProductDesc] = useState("");

    const addPro = () => {

        addProu(productName,productPrice,productDesc);
        navigate("/prouductsPage");
    }

    return <>
        <div className="addP">
            <form>
                <input type="text" placeholder="product name" onChange={(e) => { setProductName(e.target.value); }} />
                <input type="number" placeholder="product price" onChange={(e) => { setProductPrice(e.target.value); }} />
                <input type="text" placeholder="Product description" onChange={(e) => { setProductDesc(e.target.value); }} />
                <button type="button" onClick={() => { addPro(); }}>add</button>
            </form>
        </div>
    </>
}

export default AddProuduct;
