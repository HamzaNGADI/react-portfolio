import type { timelinetype } from "./ExpFormations"
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

type timelineProps = {
    timelineData: timelinetype;
  };


function TimelineFE({timelineData}: timelineProps) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: false });
  const refpoint = useRef(null);
  const inViewpoint = useInView(refpoint, { once: false });


  return (
    
    <div className="max-w-100 mx-10 my-12 px-4">
      <div className="mb-6 ml-1 ">
            {/* Point sur la ligne */}
            <motion.div 
            ref={refpoint}
            initial={{ opacity: 0 }}
            animate={inViewpoint ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="absolute w-3 h-3 bg-blue-600 rounded-full -left-2 mt-1.5"></motion.div>

            {/* Contenu à droite */}
            <motion.div
            ref={ref}
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            >
              <h2 className="text-lg text-gray-600 font-medium">{timelineData.period}</h2>
              <h3 className="text-xl font-semibold text-gray-800">{timelineData.title}</h3>
              <h3 className="text-lg text-gray-800">{timelineData.univOrCompany}</h3>

              <p className=" text-left text-lg text-gray-800"> {timelineData.location}</p>
              <p className=" text-left text-sm text-gray-800"> {timelineData.description1}</p>
              <p className=" text-left text-sm text-gray-800"> {timelineData.description2}</p>
              <p className=" text-left text-sm text-gray-800"> {timelineData.description3}</p>  
            </motion.div>
          </div>
    </div>
  )
}

export default TimelineFE