import type {techLang} from "./ExpFormations"
import { motion, useInView } from "motion/react";
import { useRef } from "react";

type techProps = {
    techData: techLang;
    index: number;
  };


function TechCard({techData, index}: techProps) {
    const ref = useRef(null);
    const inView = useInView(ref, { once: false });
    const refbar = useRef(null);
    const inViewbar = useInView(refbar, { once: false });

  return (
    <motion.div 
    ref={ref}
    key={index}
    initial="hidden"
    variants={{
      hidden: { opacity: 0, transition: { duration: 0.2, ease: "easeOut" } },
      visible: { 
        opacity: 1, 
        transition: { duration: 0.8, ease: "easeIn" } 
      }
    }}
    animate={inView ? "visible" : "hidden"}
    >

<div className="flex flex-col p-8 px-6 sm:flex-row items-center justify-center sm:gap-6 sm:py-3 rounded-4xl border-blue-800 border-2 w-full mx-auto min-w-[280px] max-w-[400px]">

      <div className='mx-auto blockrounded-full sm:mx-0 sm:shrink-0'>
       <i className={techData.logo}></i>

        <p className='text-gray-800 mb-2 sm:mb-0 text-lg font-serif font-bold'>{techData.langage}</p>
      </div>

        <div className=" space-y-2 text-center">
            <div className="space-y-0.5">
                <div className="min-w-40 max-w-50 bg-gray-200 rounded-full h-4 overflow-hidden">
                    <motion.div

                      ref={refbar}
                      initial="hidden"
                      variants={{
                        hidden: { width: 0, transition: { duration: 0.2, ease: "easeOut" } },
                        visible: { 
                          width: `${techData.percentage}%`,
                          transition: {delay: 0.1, duration: 0.5, ease: "easeIn" } 
                        }
                      }}
                      animate={inViewbar ? "visible" : "hidden"}

                        className="bg-blue-600 h-full rounded-full transition-all duration-500"
                        style={{ width: `${techData.percentage}%` }}>

                    </motion.div>
                </div>
           
            </div>
            
        </div>

        </div>

        
    </motion.div>
  )
}

export default TechCard