import { useLoaderData } from "react-router-dom";


const Gallery = () => {
    const images = useLoaderData();
    return (
       <div className="">
        <h1 className="text-center text-4xl font-bold my-10 lg:my-16 ">Gallery</h1>
         <div className="grid grid-cols-2  lg:grid-cols-3 gap-2 lg:gap-10 px-2 md:px-0 max-w-7xl mx-auto">
            {
                images.map((image,idx) => <img className=" w-full  h-52 lg:h-72 mx-auto rounded-md" key={idx} src={image.image} alt=""></img>)
            }
        </div>
       </div>
    );
};

export default Gallery;