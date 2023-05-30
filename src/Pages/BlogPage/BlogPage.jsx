import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Spinner from '../../Component/Spinner/Spinner';
import BlogCard from '../../Component/BlogCard/BlogCard';




const ref = React.createRef();


const BlogPage = ({setTitle}) => {
  useEffect(() => {

    setTitle("Blogs")
}, []);


  const [loading, setLoading] = useState(true)
  const [blogData, setBlogData] = useState();
  const { blogDataLoad } = useLoaderData();

  useEffect(() => {
    if (loading) {





      Promise.all([blogDataLoad])
        .then(values => {
          setBlogData(values[0].data)
          setLoading(false)
        })


    }



  }, []);

  return (
    <>


      <div ref={ref} className="max-w-screen-xl mx-auto px-5  md:px-6 relative  mt-12 ">


        {loading ? <>
          <Spinner />
        </> : <>

 <h1 className='text-5xl text-center py-24'>Questions and Answers</h1>

          {blogData.map(e => <BlogCard key={e._id} question={e.question} answer={e.answer} />)}
        </>}

        {/* <Pdf targetRef={ref} filename="code-example.pdf">
        {({ toPdf }) => 
        
        <div className='flex justify-center items-center'>

<button className='px-6 py-3 rounded-lg bg-green-700 text-white font-semibold' onClick={toPdf}>Generate Pdf</button>
        </div>

       
        
        
        }
      </Pdf> */}
      </div>
    </>


  );
}

export default BlogPage;
