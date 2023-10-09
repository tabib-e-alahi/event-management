
// import PropTypes from 'prop-types';

import { useLoaderData } from "react-router-dom";
import Banner from "./Banner";
import Service from "./Service";
// import Footer from "./Footer";
 // #f4f4f1
const Home = () => {
    const services = useLoaderData();
    // console.log(services);

   
    return (
        <div>
        
            <Banner ></Banner>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
                {
                    services.map(service => <Service key={service.id} service={service}></Service> )
                }
            </div>
            
        </div>
    );
};

Home.propTypes = {
    
};

export default Home;