import { useLoaderData, useParams } from "react-router-dom";

const ServiceDetails = () => {
  const { id } = useParams();
  const intId = parseInt(id);

  const services = useLoaderData();

  const clickedService = services.find((service) => service.id === intId);
  console.log(clickedService);

  const {
   
    cover_img,
   
    themes,
    price,
    service_info,
  } = clickedService;

  return (
    <div className="max-w-7xl mx-auto grid grid-cols-3 gap-20 mt-20">
      <div className="col-span-2 flex flex-col items-start gap-16">
        <div className="h-2/5 w-full ">
          <img className="h-full w-full  rounded-3xl " src={cover_img} alt="" />
        </div>

        <h3 className="text-[#676767] font-bold text-lg">{service_info}</h3>

        <div className="border w-fit p-4 rounded-lg bg-rose-500">
            <h1 className="text-2xl text-white  font-semibold ">Base Price: {price}</h1>
            
          </div>
      </div>

      <div>
        <div className="overflow-x-auto mb-16">
          <table className="table table-xs table-pin-rows table-pin-cols">
            <thead>
              <tr>
                <th></th>
                <td className="text-lg font-medium">Themes</td>
                <td className="text-lg font-medium">Category</td>
                <td className="text-lg font-medium">Plan</td>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {themes.map((theme, idx) => (
                <tr key={idx}>
                  <th className="text-lg font-medium">{idx + 1}</th>
                  <td className="text-lg font-medium">{theme.theme_name}</td>
                  <td className="text-base text-blue-700 font-bold">
                    {theme.theme_quality}
                  </td>
                  <td className="text-lg text-red-600 font-bold">
                    {theme.theme_price}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="">
          <div className="mb-10 border w-fit p-4 rounded-lg bg-[#f4f4f1]">
            <h1 className="text-xl font-semibold mb-2">Open Hours</h1>
            <p className="ml-10">Monday – Friday</p>
            <p className="ml-10">8.30am – 5.00 pm</p>
            <p className="ml-10">Weekend Closed</p>
          </div>
          <div className="border w-fit p-2 rounded-lg bg-[#f4f4f1]">
          <h1 className="text-xl font-semibold mb-2">Phone & E-mail</h1>
          <p className="ml-10">Phone: 1-800-64-38</p>
          <p className="ml-10">Fax: 1-800-64-39</p>
          <p className="ml-10">office@fable.com</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetails;
