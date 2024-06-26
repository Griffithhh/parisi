import {useState} from "react";

import Hero from "./components/Hero/Hero.jsx";
import Header from "./components/Header/Header.jsx";
import Title from "./components/Title/Title.jsx";
import Features from "./components/Features/Features.jsx";
import About from "./components/About/About.jsx";
import Notes from "./components/Notes/Notes.jsx";
import VideoPlayer from "./components/VideoPlayer/VideoPlayer.jsx";
import Testimonials from "./components/Testimonials/Testimonials.jsx";
import Contact from "./components/Contact/Contact.jsx";

function App() {
  const [playState, setPlayState] = useState(false);

  return (
   <div>
   <Header />
   <Hero />
       <div className='container'>
           <Title subTitle='Features'  title='Our Advantages'  />
           <Features />
           <About    setPlayState={setPlayState} />
           <Title subTitle='Notes'  title='Our aromas'  />
           <Notes />
           <Title subTitle='OPINIONS'  title='What People says'  />
           <Testimonials />
           <Title subTitle='review'  title='Leave your opinion  '  />
           <Contact />
       </div>
       <VideoPlayer playState={playState} setPlayState={setPlayState} />
   </div>
  )
}

export default App