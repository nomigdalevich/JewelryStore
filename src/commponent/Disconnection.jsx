import { useNavigate } from "react-router-dom";
import { useRef } from "react";

function Disconnection({setThisUser,Myref,Myref2,myRef3,cart,setSum}) {

    const notSeeDisconect = ()=> {

        if(Myref.current){
            Myref.current.className = "buttonDisConNone";
        }

        if(Myref2.current){
            Myref2.current.className="seeLinkAddP";
        }

        if(myRef3.current){
            myRef3.current.className="seeLogAndForm";
        }

    }
    const navigate = useNavigate();

    const disconnectFunc = () => {
        setThisUser(null);
        navigate("/prouductsPage");
        notSeeDisconect();
        setSum(0);
    }

    const cancelFunc = () => {
        navigate("/prouductsPage");
    }

    return <>
        <div className="Box">

            <form>
                <div className="text">
                    <p> Are you sure </p>
                     <p>? you want to log out</p>
                </div>
                <div className="divDisConect">
                <button type="button" className="buttonConect" onClick={() => { cancelFunc(); }}>cancel</button>
                <button type="button" className="buttonConect" onClick={() => { disconnectFunc(); }}>disconnect</button>
                </div>
            </form>
        </div>
    </>
}

export default Disconnection;