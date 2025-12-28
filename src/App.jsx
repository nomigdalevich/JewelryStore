
import logo from './logo.svg';
import './App.css';
import { createElement, useRef, useState } from 'react';
import { Form, Link, Route, Routes, useNavigate } from 'react-router-dom';
import Login from './commponent/Login';
import ProuductDetails from './commponent/ProuductDetails';
import Cart from './commponent/Cart';
import Pay from './commponent/Pay';
import AddProuduct from './commponent/AddProuduct';
import FormPage from './commponent/FormPage';
import ProuductsPage from './commponent/ProuductsPage';
import LoginAndFormPage from './commponent/LoginAndFormPage';
import Disconnection from './commponent/Disconnection';
import ProuductsCard from './commponent/ProuductsCard';
import Home from './commponent/Home';

//שיניתי בגירסא זו את :
//addTocart- app
//removeFromCart- app
//cart - button

function App() {

    const [cart, setCart] = useState([

    ]);

    const [count, setCount] = useState(cart.length);
    const [sum, setSum] = useState(0);

    const addToCart = (id, src, name, price) => {
    const uniqueId = Date.now(); // מזהה ייחודי לכל פריט שנוסף
    const p = { uniqueId, id, src, name, price }; 
    setCart(prev => [...prev, p]);
    setCount(prev => prev + 1);
    setSum(prev => prev + Number(price));
    }


    const removeFromCart = (uniqueId, price) => {
        const updatedCart = cart.filter(item => item.uniqueId !== uniqueId);
        setCart(updatedCart);
        setSum(prev => prev - Number(price));
        setCount(prev => prev - 1);
    };


    const [thisUser, setThisUser] = useState(null);

    const [users, setUsers] = useState([
        { userName: "NomiG", password: 327738183, state: "manaager" },
        { userName: "Chana", password: 12345, state: "client" },
        { userName: "Moshe", password: 321654, state: "client" }
    ]);

    const [prouducts, setProuducts] = useState([
        { id: 0, src: "1.jpg", name: "Gold necklace", price: 110, desc: "Gold necklace with stone" },
        { id: 1, src: "2.jpg", name: "bracelet", price: 130, desc: "White gold plated bracelet" },
        { id: 2, src: "3.jpg", name: "earrings", price: 90, desc: "Luxurious silver earrings" },
        { id: 3, src: "4.jpg", name: "Silver-plated necklace", price: 110, desc: "Silver-plated necklace with stone combination" },
        { id: 4, src: "5.jpg", name: "Goldfield Rings", price: 140, desc: "beautiful Goldfield Rings" },
        { id: 5, src: "6.jpg", name: "studded earrings", price: 100, desc: "studded earrings for" },
        { id: 6, src: "7.jpg", name: "gold rings", price: 170, desc: "beautiful gold rings" },
        { id: 7, src: "8.jpg", name: "Gold-plated earrings", price: 210, desc: "Gold-plated hoop earrings" }
    ]);

    const id = prouducts.length;
    let defaultSrcImg = "defaultImg.jpg";

    const addProu = (productName, productPrice, productDesc) => {

        const p = { id, src: defaultSrcImg, name: productName, price: productPrice, desc: productDesc };
        const modifiedPro = [...prouducts];
        modifiedPro.push(p);
        setProuducts(modifiedPro);

    }


    const myRef = useRef(null);

    const seeDisconect = () => {

        if (myRef.current) {
            myRef.current.className = "buttonDisConBlock";
        }
    }

    const myRef2 = useRef(null);

    const seeAddProuducts = () => {

        if (myRef2.current) {
            myRef2.current.className = "notSeeLinkAddP";
        }
    }

    const myRef3 = useRef(null);

    const notSeeLogAndForm = () => {

        if (myRef3.current) {
            myRef3.current.className = "NotseeLogAndForm";
        }
    }

    //פונקציה שמוסיפה את השם משתמש למערך עלי ידי העתקה למערך חדש
    //והשמה של המערך החדש במערך הקודם
    const addUser = (UserName, Password) => {
        const u = { userName: UserName, password: Password, state: "client" };
        const modifiedUser = [...users];
        modifiedUser.push(u);
        setUsers(modifiedUser);
        setThisUser({ userName: UserName, password: Password, state: "client" });
        seeDisconect();
        if (u.state == "manaager") {
            seeAddProuducts();
        }

        notSeeLogAndForm();
    };

    let currentUserName = thisUser ? thisUser.userName : null;

    return <>

        <header>
            <h1 className='je'>Welcome to the jewelry website</h1>
        </header>

        <nav>
            <div className="cartWrapper">
                <Link to="/cart">
                    <img src="/images/cart-icon.png" alt="Cart" className="cartIconImg" />
                </Link>
                <div className="countDiv">{count}</div>
            </div>
            <Link ref={myRef3} className="seeLogAndForm" to="/loginAndForm"> login / registration </Link>
            <Link ref={myRef} className='buttonDisConNone' to="/disconnection">disconnection</Link>
            <Link ref={myRef2} className='seeLinkAddP' to="/addProuduct">Add a product</Link>
            <Link to="/prouductsPage"> prouducts </Link>
        </nav>

        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/loginAndForm" element={<LoginAndFormPage />} />
            <Route path="/login" element={<Login users={users} setThisUser={setThisUser} FuncDisconect={seeDisconect} Myref={myRef} seeAddProuducts={seeAddProuducts} myRef3={myRef3} />} />
            <Route path="/prouductsPage" element={<ProuductsPage addToCart={addToCart} prouducts={prouducts} />} />
            <Route path="/prouductDetails/:id/:src/:name/:price/:desc" element={<ProuductDetails addToCart={addToCart} />} />
            <Route path="/cart" element={<Cart cartArr={cart} sum={sum} currentUserName={currentUserName} removeFromCart={removeFromCart} setSum={setSum} />} />
            <Route path="/pay" element={<Pay sum={sum} />} />
            <Route path="/addProuduct" element={<AddProuduct addProu={addProu} />} />
            <Route path="/formPage" element={<FormPage addUser={addUser} />} />
            <Route path="/disconnection" element={<Disconnection setThisUser={setThisUser} Myref={myRef} Myref2={myRef2} myRef3={myRef3} setSum={setSum} cart={cart}/>} />
            <Route path="/prouductsCard" element={<ProuductsCard />} />
        </Routes>
    </>
}

export default App;
