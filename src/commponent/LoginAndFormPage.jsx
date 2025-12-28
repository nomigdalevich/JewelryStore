import { Link } from 'react-router-dom';

function LoginAndFormPage() {


    return <>
    <div className='links'>
        <Link className='link2' to="/formPage">registration</Link>
        <Link className='link2' to="/login">login</Link>      
    </div>
    </>
}

export default LoginAndFormPage;

//    return <>
//     <nav className='links'>
//         <Link className='link2' to="/login">login</Link>
//         <Link className='link2' to="/formPage">registration</Link>
//         </nav>
//     </>