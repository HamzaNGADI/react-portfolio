import image from "../assets/themain.jpeg"
import DeveloppedWith from './DeveloppedWith'
import { motion, useInView } from "motion/react";
import { useRef } from "react";



function Presentation() {
  const ref1 = useRef(null);
  const inView1 = useInView(ref1, { once: false });
  const ref2 = useRef(null);
  const inView2 = useInView(ref2, { once: false });

  return (
    
    <div className=" min-h-screen py-10">
  <div className="flex flex-col items-center space-y-10">

    <motion.div 
    ref={ref1}
    initial={{ opacity: 0, x: 100 }}
    animate={inView1 ? { opacity: 1, x: 0 } : {}}
    transition={{ duration: 0.8, ease: "easeInOut" }}
    
    className="bg-gradient-to-b from-blue-950 to-blue-800 text-white rounded-xl shadow-lg w-11/12 md:w-4/5 lg:w-3/5 p-8">
      <h5 className="text-3xl font-serif font-extrabold mb-4 text-center">
        Présentation : Dr Hamza NGADI
      </h5>
      <p className="text-lg font-normal leading-loose tracking-wide text-justify">
      Titulaire d’un doctorat en informatique et architecture numérique, à l'<a className="underline hover:text-blue-400" href="https://www.univ-brest.fr/ufr-sciences">Université de Bretagne Occidentale de Brest</a>, traitant le sujet de la modélisation d’une plateforme de jumeau numérique pour les villes intelligentes.<br/>
		Ce sujet avait pour but de modéliser des jumeaux numériques de voitures, dédiés à l'environnement de trafic routier, afin d’étudier divers scénarios liés aux concepts et aux problèmes des points bordure, ainsi, utiliser les réseaux de neurones pour prédire l'enveloppe polygonale d'un ensemble de voitures, suite à des modifications sur les données de l'environnement.<br/>
						Cherchant activement de nouvelles opportunités en ingénierie et développement informatique, je vous présente une sélection de mes projets et prototypes développés. <br /> 
            Une synthèse sous forme de points clés, de mes expériences professionnelles, formations et compétences techniques est disponible dans l'onglet "Expériences & formations".
    
                  </p>
    </motion.div>

    <motion.div 
    ref={ref2}
    initial={{ opacity: 0, x: -100 }}
    animate={inView2 ? { opacity: 1, x: 0 } : {}}
    transition={{ duration: 0.8, ease: "easeInOut" }}
    
    className="w-11/12 md:w-4/5 lg:w-3/5 text-center">
      <h2 className="text-3xl font-serif font-extrabold py-5">
        Présentation des projets
      </h2>
      <p className="text-lg font-normal leading-loose tracking-wide text-justify">
      Les projets développés au cours de mon cursus universitaire, varient entre des programmes desktop, des modèles IA et de réseaux de neurones, des sites web dynamiques, ainsi que des prototypes de jeux et simulations dans un environnement virtuel. <br />
Ces projets sont développés avec divers langages de programmation, frameworks, APIs et bibliothèques qui les distinguent, ciblant plus d’autonomie en apprentissage des nouvelles technologies.  <br />

l'onglet "Publications & projets" regroupe une sélection des projets développés ainsi que les publications scientifiques pertinentes, produites lors de ma thèse de doctorat.<br />
              </p>
    </motion.div>

    <div 

    className="flex justify-center w-full">
      <img src={image} className="max-w-md w-11/12 rounded-lg shadow-md" alt="Présentation" />
    </div>
  
  
    

        <DeveloppedWith />
    
    
  
  
  </div>

</div>
  )
}

export default Presentation