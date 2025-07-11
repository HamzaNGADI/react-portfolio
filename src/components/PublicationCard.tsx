import type {MyDictionaryPublication} from "./Projectspub"
import { motion, useInView } from "motion/react";
import { useRef } from "react";

type PublicateProps = {
    dtpub: MyDictionaryPublication;
    index : number
  };

function PublicationCard({dtpub, index}: PublicateProps) {
    const refpub = useRef(null);
    const inViewpub = useInView(refpub, { once: false });

  return (
    <div ref={refpub}>

      <motion.div 
      key={index}
      initial="hidden"
      variants={{
        hidden: { opacity: 0, transition: { duration: 0.2, ease: "easeOut" } },
        visible: { 
          opacity: 1, 
          transition: { delay: index * 0.2, duration: 0.2, ease: "easeIn" } 
        }
      }}
      animate={inViewpub ? "visible" : "hidden"}

      className="flex flex-col gap-2 p-8 sm:flex-row sm:items-center sm:gap-6 sm:py-4 rounded-4xl border-blue-800 border-2">

        <img className="mx-auto block h-24 rounded-full sm:mx-0 sm:shrink-0" src={dtpub.logo}  />
        <div className="space-y-2 text-center sm:text-left">
            <div className="space-y-0.5">
            <p className="text-lg font-semibold text-black">{dtpub.nom}</p>
            <p className="font-medium text-gray-500 mt-3">{dtpub.type}</p>
            </div>
            <p className="mb-4 mx-auto mt-6">  
         <a href={dtpub.url}
         className="inline-block max-w-full break-words hover:bg-blue-700 hover:text-white rounded-full py-3 px-6 border-2 border-blue-600">
              {dtpub.urltext}  </a>
       </p>
        </div>

      </motion.div>
  </div>


  )
}

export default PublicationCard