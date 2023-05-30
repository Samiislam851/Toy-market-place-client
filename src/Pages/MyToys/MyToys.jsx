import React, { useEffect, useState, createContext, useContext } from 'react';

import axios from 'axios';
import ShopCard from '../../Component/ShopByCategory/ShopCard';
import { AuthContext } from '../../Provider/AuthContextProvider';
import { Link, Navigate, useLocation } from 'react-router-dom'
import Spinner from '../../Component/Spinner/Spinner';

const MyToys = ({setTitle}) => {
  useEffect(() => {
  setTitle('My Toys')
  }, []);
  const { registerUser, user, logOut, loginUser, isLogged, setIsLogged } = useContext(AuthContext);
  const { toastPush } = useContext(AuthContext);
  const location = useLocation();


  const [loading, setLoading] = useState(true)
  const [renderData, setRenderData] = useState(null);
  const [toysData, setToysData] = useState(null)
  const [currentID, setCurrentID] = useState(null)


  useEffect(() => {
    if (loading && user) {
      axios.get(`/mytoys/${user.email}`)
        .then(response => {
          let data = response.data
          setToysData(data)
          setRenderData(data)
          setLoading(false)

        })
    }
  }, []);

  const deleteButtonHandler = (e) => {
    // console.log(currentID);
    
    axios.delete("/delete/" + e._id)
      .then(response => {
        let data = renderData.filter(e => e._id != currentID)
        setCurrentID(null)
        setRenderData(data)
        toastPush("Deleted Successfully")
      })
      .catch(err => {
        console.log(err)
      })
  }

  const sortByprice = (e) => {
    setLoading(true)
    let id = e.target.id;
    if (user) {
      axios.get(`/mytoys/aesc/${user.email}`)
      .then(response => {
        let data = response.data;
        setToysData(data);
        setRenderData(data);
        setLoading(false);
      })
      .catch(error => {
        console.error(error);
      });
    
    }
  }




  
  return (
    <>
      {user ?
        <>

 {loading?<div><Spinner></Spinner></div>: <div><section className='flex flex-col items-center justify-center mt-20 space-y-8'>

<h1 className='text-4xl font-bold text-center'>My Toys</h1>

<div className="overflow-x-auto w-[75%]">
  <div className='flex justify-end  w-full my-5' >
    <div className="dropdown dropdown-end">
      <label tabIndex={0} className="btn m-1 btn-primary">Sort</label>
      <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
        <li><button id='aesc' onClick={sortByprice}>Ascending By Price</button></li>
      
      </ul>
    </div>
  </div>

  <table className="table w-full">
    <thead>
      <tr>
        <th>Name</th>
        <th>Rating</th>
        <th>Price</th>
        <th>Quantity</th>
        <th>Update</th>
        <th>Delete</th>
      </tr>
    </thead>
    <tbody>



      {loading ? <></> : <>
        {renderData.map(e => {

          return (
            <tr key={e._id}>

              <td>
                <div className="flex items-center space-x-3">
                  <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                      <img src={e.img} alt="Avatar Tailwind CSS Component" />
                    </div>
                  </div>
                  <div>
                    <div className="font-bold">{e.toyname}</div>
                    <div className="text-sm opacity-50">{e.category} </div>
                  </div>
                </div>
              </td>
              <td>
                {e.rating}
              </td>
              <td>{e.price}</td>
              <td>
                {e.quantity}
              </td>
              <th>
                <Link to={`/updatetoy/${e._id}`} className=" px-2 py-1 text-white font-normal bg-gradient-to-r from-blue-700 to-purple-700 rounded ">Update</Link>
              </th>
              <th>
                <label onClick={() => deleteButtonHandler(e)} htmlFor="my-modal" className="px-2 py-1 bg-red-500 text-light hover:bg-red-600 text-white rounded">Delete</label>
              </th>
            </tr>)
            
        
        })}
      </>}






    </tbody>
    {/* foot */}
    <tfoot>
      <tr>
        <th>Name</th>
        <th>Rating</th>
        <th>Price</th>
        <th>Quantity</th>
        <th>Update</th>
        <th>Delete</th>
      </tr>
    </tfoot>

  </table>
</div>

</section></div>}

          
        </> :

        <Navigate to='/login' state={location} ></Navigate>

      }
    </>
  );
}

export default MyToys;












