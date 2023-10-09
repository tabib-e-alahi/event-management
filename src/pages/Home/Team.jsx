import Marquee from "react-fast-marquee";


const Team = () => {
  return (
    <div className="lg:mt-10 mb-10 lg:mb-16">
        <h1 className="text-4xl text-bold text-center mb-10">Our Team</h1>
      <Marquee speed={100} pauseOnHover className="py-10">
        <div className="card w-96 bg-base-100 shadow-xl mx-16">
          <figure className="px-10 pt-10">
            <img 
              src="https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg?size=626&ext=jpg&ga=GA1.1.2072948433.1684702501&semt=sph"
              alt="Shoes"
              className="rounded-xl w-52 h-52"
            />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">Joseph</h2>
            <p>Chief Event Engineer</p>
          </div>
        </div>

        <div className="card w-96 bg-base-100 shadow-xl mx-16 ">
          <figure className="px-10 pt-10">
            <img
              src="https://scontent.fjsr13-1.fna.fbcdn.net/v/t39.30808-6/315237623_1748811638852414_70366495279715018_n.jpg?stp=dst-jpg_p640x640&_nc_cat=105&ccb=1-7&_nc_sid=0df3a7&_nc_eui2=AeF7YB74cQ2C6lmXZkhk_l6E2ZLebPiWF47Zkt5s-JYXjhCnJAM9CSGKtJ9SIheLKIaSZ59kM288qP4J_JxwYCM2&_nc_ohc=fcfrXdSiiV0AX-50aAm&_nc_ht=scontent.fjsr13-1.fna&oh=00_AfBahnghrUJSlagUuypQsy_Ct3aUk6VeSZRk7DVREtCZIA&oe=65295FA7"
              alt="Shoes"
              className="rounded-xl w-52 h-52"
            />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">Tabib E Alahi</h2>
            <p>CEO</p>
          </div>
        </div>

        <div className="card w-96 bg-base-100 shadow-xl mx-16 ">
          <figure className="px-10 pt-10">
            <img
              src="https://scontent.fjsr13-1.fna.fbcdn.net/v/t39.30808-6/328108799_1066974977577249_6610358777186338599_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=a2f6c7&_nc_eui2=AeG4CeH4zGqmcZ7D99ZN6kl_VoFRys5pgn1WgVHKzmmCfQ4lwcGhg25-jgC442-XuwWSYvBPXROO3Q_8ww4Q3dqI&_nc_ohc=AIrtRCrOAE0AX_Vaqky&_nc_ht=scontent.fjsr13-1.fna&oh=00_AfCgWQEY4axF-kEw6Pizl1UEZ8SzHknhmUe8egJ7ZuozYg&oe=6528392F"
              alt="Shoes"
              className="rounded-xl w-52 h-52"
            />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">Tanzim Ahmed</h2>
            <p>Chief Technical Officer</p>
          </div>
        </div>
      </Marquee>
    </div>
  );
};

export default Team;
