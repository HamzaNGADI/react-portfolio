
import unityp from "../assets/unity.png"
import ecore from "../assets/ecore.png"
import javap from "../assets/javapic.png"
import mazy from "../assets/mzy.png"
import webavi from "../assets/webav.jpeg"
import bnk from "../assets/banklab.jpeg"
import dt from "../assets/dt.png"
import ml from "../assets/ml.png"

import PublicationCard from "./PublicationCard" 
import phdlogo from "../assets/phdLogo.png"
import articlelogo from "../assets/articleLogo.png"
import ProjectCarousel from './ProjectCarousel'

export type ProjectData = {
  title: string;
  titlee: string;
  img: string; 
  textc: string;
  textcc: string;
  textcci: string;
  lien: string;
  titrelien: string;
};


const data: ProjectData[] = [
  { title: 'Projets de réseaux de neurones - IA',  
         titlee:'Python - Jupyter Notebook',
          img: ml, 
          textc: "Les modèles développés d’IA et de réseaux de neurones, dédiés aux jumeaux numériques de trafic routier, parcourent les possibilités de construction de modèles adaptés à l’apprentissage du fonctionnement et raisonnement, à partir d’un algorithme existant, pour but de classifier et prédire les points bordures, dans une zone géographique ciblée.",
          textcc: "Les frameworks Tensorflow et Pytorch, sont utilisés pour la construction des deux types de réseaux de neurones, séquentielle (ANN) et de graphes (GNN). Les versions fédérées de ces modèles, dédiées à l’outil CupCarbon, sont implémentées à l’aide du framework Flower.", 
          textcci: "",
          lien: 'https://github.com/NgadiUniv/PhdHN/tree/main/mod%C3%A9ls%20IA_ML',
          titrelien:'Accès aux projets' 
        },
      { title: 'Jumeaux numériques de voitures', 
         titlee:'Java - Sumo',
          img: dt, 
          textc: "Le projet de construction des jumeaux numériques, de voitures pour les trafics routiers, est développé et implémenté en langage Java, utilisant le simulateur Sumo pour la collection des données des voitures simulées.",
          textcc: "L’outil CupCarbon est utilisé pour la visualisation des jumeaux numériques, ainsi qu’un programme implémenté en JavaScript, dédié à la visualisation des jumeaux de voitures, sous une carte géographique, avec les données d’enveloppes polygonales calculées, transmises via le protocole MQTT.", 
          textcci: "",
          lien: 'https://github.com/NgadiUniv/PhdHN/tree/main/Java%20Projets/SumoLPCN',
          titrelien:'Accès au projet' 
        },
        { title: 'Projets Unity', 
         titlee:'',
          img: unityp, 
          textc: "Les projets et prototypes de jeux sont développés avec le langage C#, que le moteur de jeu Unity utilise.",
          textcc: "La nature de ces prototypes varie entre les jeux de type endless et les jeux de tir, avec une intégration basique d’un mode multijoueur.", 
          textcci: "",
          lien: 'https://github.com/HamzaNGADI/unity-projects.git',
          titrelien:'Accès aux projets' 
        },
        {
         title: 'Méta-modélisation', 
          titlee:'Java',
          img: ecore, 
          textc: "Le projet consiste à découvrir la méta-modélisation en créant un générateur de code du langage SDL, à titre d’exemple, provenant d’une description XML.",
          textcc: "L’outil de méta-modélisation utilisé est Ecore qui permet de modéliser des méta-modèles après l’identification des entités d’un système, ainsi que les différents liens entre ces entités.", 
            textcci: "",
          lien: 'https://github.com/HamzaNGADI/javaEcore.git',
          titrelien:'Accès au projet' 
        },
        {
         title: 'Projets',
           titlee:'Java & JEE',
          img: javap, 
          textc: "Les divers projets Java/JEE développés, ont pour but d’acroitre les compétences techniques par l'autoformation, de découvrir le développement Android, CORBA et RMI, ainsi que d’acquérir plus de savoir sur les design patterns, les interactions homme-machine, les systèmes de gestion de bases de données, les servlets et JSP coté web, avec l’intégration des tests unitaires pour le bon fonctionnement du code rédigé.",
          textcc: "", 
          textcci: "",
          lien: 'https://github.com/HamzaNGADI/java-work.git',
          titrelien:'Accès aux projets' 
        },
         {
         title: 'Mazaya éducation', 
          titlee:'Site web dynamique',
          img: mazy, 
          textc: "Le site web Mazaya est dédié à la réservation des stages et formations, celui-ci se compose de plusieurs fonctionnalités telles que :",
          textcc: "Une inscription facile et intuitive, la navigation par onglets pour une meilleure prise en main, un espace dédié aux clients pour gérer leurs coordonnées ou réservations ainsi, imprimer les reçus des réservations en format PDF.", 
            textcci: "Bibliothèques et outils externes : jQuery - Bootstrap – FPDF.",
          lien: 'https://github.com/HamzaNGADI/web-Mazaya-project.git',
          titrelien:'Accès au projet' 
        },



        {
         title: 'Mini-projets', 
         titlee:'Web avancé',
          img: webavi, 
          textc: "Les mini-projets permettent de se former par la pratique aux langages et technologies du web, à savoir la mise en forme d'un document HTML incluant CSS, la programmation avec les langages JavaScript et PHP ainsi que l’utilisation d’AJAX, DOM et XML.",
          textcc: "", 
          textcci: "",
          lien: 'https://github.com/HamzaNGADI/mini-projects.git',
          titrelien:'Accès aux projets' 
        },
         {
         title: 'Bank Lab', 
         titlee:'Java & MySQL',
          img: bnk, 
          textc: "Bank Lab est un programme de gestion des clients et leurs transactions bancaires, destiné à la Banque Marocaine pour le Commerce et l’Industrie.",
          textcc: "Ce programme a été développé lors d’un stage d’initiation sous le langage Java, lié à l’application web phpMyAdmin destinée à la gestion de base de données MySQL.", 
            textcci: "",
          lien: 'https://github.com/HamzaNGADI/banklab.git',
          titrelien:'Accès au projet' 
        }
]

/* 
-------
------
----
----
----
---
*/

export type MyDictionaryPublication = {
  nom: string;
  type: string;
  logo: string; 
  url: string;
  urltext: string;
};

const publicate: MyDictionaryPublication[] = [{
  nom: "Modélisation d'une plateforme de jumeau numérique pour les villes intelligentes",
  type: "Thèse de doctorat",
  logo:phdlogo,
  url:"https://theses.hal.science/tel-05005601/",
  urltext:"Accès à la thèse"

   },
   {
    nom: "From Simulation to Digital Twins, the Case of Internet of Things Research and Tools",
    type: "Article",
    logo:articlelogo,
    url : "https://dl.acm.org/doi/abs/10.1145/3584202.3584302",
    urltext:"Accès à l'article"
  
     },
     {
      nom: "Toward A Digital Twin IoT for the Validation of AI Algorithms in Smart-City Applications",
      type: "Article",
      logo:articlelogo,
      url : "https://link.springer.com/chapter/10.1007/978-3-031-59933-0_8",
      urltext:"Accès à l'article"
    
       },
       {
        nom: "A Lightweight Leader Election Algorithm for IoT: Cloud Storage Use Case",
        type: "Article",
        logo:articlelogo,
        url : "https://www.researchsquare.com/article/rs-2572235/v1",
        urltext:"Accès à l'article"
      
         },
]

function Projectspub() {
  return (
    <div>

        <h5 className="text-gray-800 text-3xl font-serif font-extrabold py-8 pb-1 px-5 mt-10">Publications scientifiques</h5>
        <div className="flex items-center justify-center ">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-5 pt-8 mt-3 px-5 md:px-12">
          {publicate.map((dtapub, idx) => (
             <PublicationCard key={idx} dtpub={dtapub} index={idx}  />
             ))}
          </div>
        </div>


        <h5 className="text-gray-800 text-3xl font-serif font-extrabold py-8 pb-1 px-5 mt-10">Sélection de projets</h5>
        <div className="flex items-center justify-center "> 
          <ProjectCarousel data={data} />

          </div>

         
     </div>  
       
    
  )
}

export default Projectspub