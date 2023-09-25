import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector ,useDispatch} from 'react-redux'

const Header = () => {
    const user=useSelector((state)=>state.auth.user)
    console.log(user?.user?.name);
    return (
        <>
            <div className='bg-gray-400 flex justify-between text-white p-4 font-bold'>
                <h1>Ecommerce</h1>
                <p>All store</p>
                <div className='flex gap-3 '>
                <Link to='/register'>
                    <button className=''> {`Register->`} </button>
                </Link>
                <Link to='/login'>
                    <button className=''> {`login->`} </button>
                </Link>
<p>{user?.user?.xname}</p>
                </div>
              

            </div>

        </>
    )
}

export default Header