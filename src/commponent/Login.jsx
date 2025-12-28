import { useState,useRef } from "react";
import { Link, useNavigate } from "react-router-dom";

function Login({users,setThisUser,FuncDisconect,Myref,seeAddProuducts,myRef3}) {

    const navigate = useNavigate();

    const [UserName, setUserName] = useState("");
    const [Password, setPassword] = useState("");

    const searchUser = () => {

        // if(myRef3.current){
        //     myRef3.current.className="NotseeLogAndForm";
        // }

        let isFinde=false;

        for (let i = 0; i < users.length && !isFinde; i++) {

            if (users[i].userName ==UserName && users[i].password == Password)
            {
                isFinde=true
                setThisUser({ userName: users[i].userName, password: users[i].password, state: users[i].state });
                FuncDisconect();
                navigate("/prouductsPage");
                if(users[i].state=="manaager")
                {
                    seeAddProuducts();
                }

                if(myRef3.current){
                myRef3.current.className="NotseeLogAndForm";
        }


            }    
        }

        if(!isFinde)
        {         
            navigate("/formPage");
        }
    }


    return <>
        <div className="Box">
             <div className="text">
                <p>, To login</p>
                <p>enter your username and password</p>
            </div>
            <form>
                <input className="P" placeholder='User name' onChange={(e) => { setUserName(e.target.value); }} />
                <input className="P" type='password' placeholder='Password' onChange={(e) => { setPassword(e.target.value); }} />
                <button type="button" onClick={() => { searchUser(); }}>connection</button>
                <Link className='Register' to="/formPage">Don't have an account? Register now</Link>
            </form>
        </div>
    </>
}

export default Login;