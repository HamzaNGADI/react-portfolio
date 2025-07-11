import "devicon/devicon.min.css";
import { motion, useInView } from "motion/react";
import { useRef, type JSX } from "react";


function DeveloppedWith() {

const devWith : Record<string, string | JSX.Element > = 
  {
    "devicon-html5-plain colored text-7xl": "HTML5",
    "devicon-css3-plain colored text-7xl": "CSS3",
    "devicon-javascript-plain colored text-7xl": "JavaScript",
    "devicon-typescript-plain colored text-7xl": "TypeScript",
    "devicon-react-plain colored text-7xl": "React.js",
    "devicon-tailwindcss-original colored text-7xl" : "Tailwind CSS",
    "devicon-git-plain colored text-7xl" :"Git",
    "devicon-devicon-plain colored text-7xl" :"Devicon",
    "devicon-framermotion-original colored text-7xl" :(
      <>Motion<br />(Framer Motion)</>),

  };

  const ref3 = useRef(null);
  const inView3 = useInView(ref3, { once: false });


  return (
    <div>
       <h3 className="text-3xl font-serif font-extrabold pt-10 pb-5">
       Ce site est développé avec : </h3>
 

   <div ref={ref3}
    className="flex flex-col pt-8 px-6 flex-wrap md:flex-row items-center justify-center gap-12  ">
 {Object.entries(devWith).map(([key, value], index) => (
      <motion.div 
      key={key}
      initial="hidden"
      variants={{
        hidden: { opacity: 0, transition: { duration: 0.3, ease: "easeOut" } },
        visible: { 
          opacity: 1, 
          transition: { delay: index * 0.3, duration: 0.3, ease: "easeIn" } 
        }
      }}
      animate={inView3 ? "visible" : "hidden"}
            
      className='mx-auto sm:mx-0 sm:shrink-0'>
       <i className={key}></i>

        <p className='text-gray-800 pt-2 mb-2 sm:mb-0 text-lg font-serif font-bold'> {value} </p>
      </motion.div>
      ))}
    </div>


        
 </div>
  )
}

export default DeveloppedWith