import React, { useEffect, useState } from 'react';
import ShopCard from './ShopCard';
import axios from 'axios';
import Spinner from '../Spinner/Spinner';


const ShopByCategory = () => {
    const [loading, setLoading] = useState(true)
    const [renderData, setRenderData] = useState(null);
    const [toysData, setToysData] = useState(null)
    const [showCategory, setShowCategory] = useState('car')
    const [category, setCategory] = useState([
        {
            name: "Car",
            id: "car"
        },


        {
            name: "Bike",
            id: "bike"
        }
        ,
        {
            name: "Truck",
            id: "truck"

        },
        {
            name: "Bus",
            id: "bus"

        }
    ])
    useEffect(() => {
        if (loading) {
            axios.get("/toys")
                .then(response => {
                    let data = response.data
                    setToysData(data)
                    setRenderData(data.filter(e => e.category == showCategory))
                    setLoading(false)

                })
        }
    }, []);
    const handleCategory = (id) => {
        setShowCategory(id)
        console.log(toysData)
        console.log('rendered data', toysData.filter(e => e.category == id))
        setRenderData(toysData.filter(e => e.category == id))
    }
    return (
        <div className='w-5/6 mx-auto'>        <h1 className='text-4xl text-gray-800 font md:text-6xl px-0 mx-0  text-center md:text-right mt-32 mb-5'>Shop By Category</h1>

            <section className='flex flex-col items-center justify-center  space-y-8'>
                <hr className="border-t-2 border-gray-300 w-full bg-black" />


                <div className='flex justify-center'>
                    <p className='w-[90%] text-gray-500 text-start font-normal text-xl'>
                        The Infinity Wheels is an elegant and sturdy miniature representation of a genuine vehicle, specifically designed to provide limitless enjoyment and inspire imaginative play. With its vibrant colors and lifelike details, this toy is perfect for gliding effortlessly on any surface, offering endless hours of thrilling adventures.
                    </p>
                </div>

                <div className="tabs tabs-boxed">
                    {
                        category.map(e => {
                            return <button key={e.id} onClick={() => handleCategory(e.id)} id={e.id} className={`tab hover:bg-blue-200 tab-lg ${e.id == showCategory && "tab-active"}`}>{e.name}</button>
                        })
                    }
                </div>
                {loading ? <Spinner /> : <div className='grid grid-cols-1 md:grid-cols-5 gap-1'>
                    {loading ? <></> : <>
                        {renderData.map(e => {
                            return <ShopCard
                                key={e._id}
                                _id={e._id}
                                seller={e.seller}
                                selleremail={e.selleremail}
                                toyname={e.toyname}
                                category={e.category}
                                price={e.price}
                                quantity={e.quantity}
                                rating={e.rating}
                                img={e.img} />
                        })}
                    </>}
                </div>}


            </section>
        </div>
    );
}

export default ShopByCategory;
