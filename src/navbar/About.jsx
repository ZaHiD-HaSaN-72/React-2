

function About() {
 
 
    return (
    <>  
      <div 
      className=" bg-stone-200 text-white w-[90%] mx-auto p-5 my-6 rounded-xl shadow-[0px_0px_15px_rgba(0,0,0,0.6)]">
      <h1 className='text-3xl text-center font-bold text-amber-500'>About</h1>
      <div 
      className=" w-[90%] bg-slate-50 text-black mx-auto p-10 my-5 Ab-C-box rounded-2xl">
                <p className="text-center text-2xl">Certainly! As a frontend developer, my role is to bring creative designs to life on the web. I'm fluent in the languages of the web: HTML, CSS, and JavaScript. I take pride in crafting pixel-perfect, responsive layouts that work seamlessly across various devices and browsers.Collaboration is at the core of my work, as I liaise with designers to transform their concepts into code and with backend developers to integrate frontend and backend systems. My mission is to create visually appealing, user-friendly websites that leave a lasting impression.</p>
                <div className=" p-3 text-xl">
                    <h3>Name: <span>Zahid Hasan</span></h3>
                    <h3>Date of birth: <span>October 3, 2002</span></h3>
                    <h3>Job: <span>Web development, Mern stack developer</span></h3>
                <h3>Address: <span>Noakhali, Chittogang, Bangladesh</span></h3>
                <h3>Phone: <span>+880 1720063672</span></h3>
                <h3>Email: <span>jahidhasan19368@gmail.com</span></h3>
                </div>
                <div className=" flex w-full justify-between p-6 flex-wrap text-2xl font-bold">
                    <div className=" border-l-4 border-black"><i className="fa-solid fa-person-walking-luggage  ml-2"></i> <span>Travel</span></div>
                    <div className=" border-l-4 border-black"><i className='bx bx-headphone ml-2' ></i><span>Music</span></div>
                    <div className=" border-l-4 border-black"><i className='bx bx-football ml-2'></i><span>Sports</span></div>
                    <div className=" border-l-4 border-black"><i className='bx bx-movie-play ml-2' ></i><span>Movie</span></div>
                </div>
            </div>
      </div>
    </>
  )
}

export default About
