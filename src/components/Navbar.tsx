import React from 'react'
import { useState, useEffect } from 'react'
import { Link } from "react-router";

import { motion, useScroll, useMotionValueEvent } from "motion/react" 


function Navbar() {

    const [toogle, setToogle] = useState<boolean>(false)

    const [hidden, setHidden] = useState<boolean>(false)
    const {scrollY} = useScroll()
    
    useMotionValueEvent(scrollY, "change", handleScroll);

    function handleScroll(value: number) {
      if(toogle) return;
      const prev : number|undefined = scrollY.getPrevious();
      if (prev && value > prev && value > 100) {
        setHidden(true);
      } else {
        setHidden(false);
      }
      //console.log(value)
    }

    useEffect(() => {
      const mediaQuery = window.matchMedia("(min-width: 768px)");
    
      const handleResize = () => {
        if (mediaQuery.matches) {
          setToogle(false);
        }
       
      };

        mediaQuery.addEventListener("change", handleResize);

      return () => mediaQuery.removeEventListener("change", handleResize);
    }, []);




    function handleToggle(e : React.MouseEvent<HTMLDivElement | SVGElement, MouseEvent>) {
        e.stopPropagation(); 
        setToogle(!toogle);     
      }


  return (
    <>
      <motion.div className='sticky top-0 mx-0 my-0 px-8 py-5 bg-blue-950 z-50'
         variants={{
            hidden: { y: "-100%" },
            visible: { y:0 },
          }}
          animate={hidden ? "hidden" : "visible"}
          transition={{ duration: 0.5, ease: "easeInOut" }}
      >
         <div className='flex justify-between items-center'>
            <div className='text-white mx-5'> H.NGADI Portfolio</div>
            <svg className="md:hidden cursor-pointer h-8 w-8 fill-current text-white" viewBox="0 0 24 24" onClick={handleToggle}>
              {toogle ? <path fill-rule="evenodd" d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"/> : <path fill-rule="evenodd" d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"/>}
            
            </svg>

            <div className="hidden md:flex gap-5 items-center border border-white bg-white rounded-3xl px-7 py-2 mr-2">
                 <Link to="/" className="text-blue-950 font-semibold hover:underline">Présentation</Link> |
                 <Link to="/ExpFormations" className="text-blue-950 font-semibold hover:underline">Expériences & formations</Link> |
                 <Link to="/Projectspub" className="text-blue-950 font-semibold hover:underline">Publications & projets</Link>
            </div>

           
        </div>
         {toogle ?
        <div className='md:hidden block'>
            <div className="w-full h-px bg-white opacity-50"></div>
            
              <Link to="/" onClick={() => setToogle(false)} className='mt-5 block'><span className='mx-1 px-2 py-1 text-white font-semibold rounded hover:bg-white hover:text-blue-950'> Présentations </span></Link> 
              <Link to="/ExpFormations" onClick={() => setToogle(false)} className='mt-3 block'><span className='mx-1 px-2 py-1 text-white font-semibold rounded hover:bg-white hover:text-blue-950'> Expériences & formations </span></Link> 
              <Link to="/Projectspub" onClick={() => setToogle(false)} className='block mt-3 md:mt-0'> <span className='mx-1 px-2 py-1 text-white font-semibold rounded hover:bg-white hover:text-blue-950'> Publications & projets </span></Link>
            
        </div>
          : <></>
          }
                  
      </motion.div>
    
    
    </>
  )
}

export default Navbar