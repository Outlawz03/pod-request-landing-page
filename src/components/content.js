import { useState } from 'react';
//import { ToastContainer, toast } from 'react-toastify';

const Content = () => { 
  const [email, setEmail] = useState('');
  const [inError, setInError] = useState(false);
  
  const handleSubmit = event => {
    event.preventDefault();    
    setInError((/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email)) ? false : true);
  };

  const handleChange = ({ target }) => {
    setEmail(target.value);
  };

  return (
    <>
      <div className="z-10 flex flex-col items-center md:bg-blue-dark md:items-start md:ml-12 md:mr-20 xl:ml-12">
        <h1 className="text-white text-3xl font-light uppercase text-center md:pr-12 md:text-5xl md:text-left md:mt-24 xl:text-6xl">
          <span className="text-green">Publish your podcasts</span>
          <br />
          everywhere.
        </h1>
        <h2 className="text-base text-gray font-light mt-4 text-center w-80 md:w-104 md:text-lg md:text-left md:mt-8 xl:mt-6">
          Upload your audio to Pod with a single click. We’ll then distribute your podcast to Spotify, Apple Podcasts, Google Podcasts, Pocket Casts and more!        
        </h2>
        <div className="flex flex-col md:flex-col-reverse">
          <div className="flex justify-between items-center w-80 mt-8 mb-12 md:w-120 md:mt-28">
            <img className="w-14 md:w-24" src="images/spotify.svg" alt="spotify logo"/>
            <img className="w-14 md:w-24" src="images/apple-podcast.svg" alt="apple podcast logo"/>
            <img className="w-14 md:w-24" src="images/google-podcasts.svg" alt="google podcast logo"/>
            <img className="w-14 md:w-24" src="images/pocket-casts.svg" alt="pocket casts logo"/>
          </div>
          <form className="flex flex-col relative md:block md:mt-10" action="#">
            <input
              className="w-80 h-12 outline-none bg-blue-light rounded-full pl-6 text-white text-sm opacity-50 md:absolute md:top-0 md:left-0 md:w-104 md:h-14 ring-gray focus:ring-1"
              type="email"
              placeholder="Email address"
              aria-label="Enter Email Address"
              value={ email }
              onChange={event=>handleChange(event)}
            />
            <button 
              className="w-80 h-12 bg-green rounded-full mt-4 text-sm border-0 font-bold text-blue-dark md:absolute md:left-64 md:top-1 md:m-0 md:h-13 md:w-39 hover:bg-green-light" type="submit"
              onClick={event => handleSubmit(event)}
            >
              Request Access
            </button>
            {inError && <p className="absolute font-bold text-red -top-8 left-12">Oops! Please check your email.</p>}
            {/*!ToastContainer />*/}
          </form>  
        </div>    
        <img className="hidden md:block md:mt-28 xl:hidden" src="images/bg-pattern-dots.svg" alt="dots"/>
      </div>
      <img className="hidden absolute bottom-0 -right-20 xl:block" src="images/bg-pattern-dots.svg" alt="" />    
    </>
  );
  };

export default Content;