import { useState } from "react";
import ProuductsCard from "./ProuductsCard";

function ProuductsPage({ addToCart, prouducts }) {

    const [filteredArr, setFilteredArr] = useState(prouducts);

    const search = (text) => {

        const copy = [...prouducts];
        const filterArrCopy = copy.filter(c => c.name.includes(text));
        setFilteredArr(filterArrCopy);
    }

    return <>

        <input className="searchP" type="search" placeholder="search" onChange={(e) => { search(e.target.value); }} />

        <div className="Box2">
            {

                filteredArr.map(r => <ProuductsCard
                    id={r.id} src={r.src} name={r.name} price={r.price} desc={r.desc} addToCart={addToCart}
                />)
            }


        </div>

    </>
}

export default ProuductsPage;
