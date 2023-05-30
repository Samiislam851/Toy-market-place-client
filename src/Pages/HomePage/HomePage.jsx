import React, { useEffect, useState } from 'react';
import { useLoaderData, useNavigate, useNavigation } from 'react-router-dom';
import Header from '../../Layout/Header/Header';
import Gallery from '../../Component/Gallery/Gallery';
import ShopByCategory from '../../Component/ShopByCategory/ShopByCategory';
import BestSeller from '../../Component/BestSellers/BestSeller';
import Customize from '../../Component/Customize/Customize';
import Contact from '../../Component/Contact/Contact';
const HomePage = ({setTitle}) => {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (loading) {
      setTitle("Homepage")
      setLoading(false)
    }


  }, []);

  return (


    <> 


{/* gallery section */}
<Gallery/>
<ShopByCategory/>
<Customize></Customize>
<BestSeller></BestSeller>
<Contact></Contact>

    </>


  );
}

export default HomePage;
