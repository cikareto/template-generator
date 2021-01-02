import TailwindIcon from "../../assets/tailwind-css-icon.svg";

import './style.css'

const Card = () => {
  return (
    <div className="flex bg-gradient-to-b from-sky-blue-light to-sky-blue rounded-2xl transform -rotate-6">
      <div className="card block bg-white bg-opacity-50 rounded-2xl transform rotate-6 shadow-2xl">
        <div className="flex flex-col space-y-10 m-10 justify-center items-center">
          <div className="flex justify-center items-center bg-white rounded-full h-52 w-52">
            <img src={TailwindIcon} alt="tailwind-icon" className="h-2/4 w-auto" />
          </div>
          <p className="text-black text-center font-bold w-3/5">A React Starter with TailwindCSS</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
