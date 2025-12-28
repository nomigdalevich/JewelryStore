import { useState } from "react";
import { useNavigate } from "react-router-dom";

function FormPage({ addUser }) {

    const navigate = useNavigate();

    const formUser = () => {

        addUser(UserName, Password);
        navigate("/prouductsPage");
    }

    const [UserName, setUserName] = useState("");
    const [Password, setPassword] = useState("");

    return <>
        <div className="Box">
            <div className="text">
                <p>Please, enter your details</p>
            </div>
            <form>
                <input placeholder='First name' />
                <input placeholder='Last name' />
                <input className="P" placeholder='User name' onChange={(e) => { setUserName(e.target.value); }} />
                <input className="P" placeholder='Password' onChange={(e) => { setPassword(e.target.value); }} />
                <button type="button" onClick={() => { formUser(); }}>Create an account</button>
                
            </form>
        </div>

    </>
}

export default FormPage;