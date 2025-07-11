import TimelineFE from './TimelineFE';
import TechCard from './TechCard';
import "devicon/devicon.min.css";



export type timelinetype = {
    title: string;
    univOrCompany: string;
    period: string;
    location: string;
    description1: string;
    description2: string;
    description3: string;
  };

export type techLang = {
    logo: string;
    langage: string;
    percentage: number;
  };
function ExpFormations() {

const timelineEXP : timelinetype[] = [
    {
      title: "Doctorant chercheur",
    univOrCompany: "Université de Bretagne Occidentale - Labsticc",
    period: "Octobre 2021 - Novembre 2024",
    location: "Brest, France",
    description1: "- Développement d'une plateforme de jumeaux numériques de voitures dédiés à l'environnement routier, utilisant le protocole MQTT, le simulateur Sumo et l'outil IoT CupCarbon.",
    description2: "- Développement des modèles de réseaux de neurones, dédiées aux problèmes de points bordure utilisant Pytorch et Tensorflow.",
    description3: "- Publication de divers articles scientifiques, présentant les travaux techniques et bibliographiques réalisés.",
    },
    {
      title: "Stagiaire en recherche et développement",
      univOrCompany: "Centre Européen de Réalité Virtuelle",
      period: "Février 2019 - Juin 2019",
      location: "Brest, France",
      description1: "Stage sous le thème de la réalité virtuelle : ",
      description2: "Développement d'une application ciblant la génération et coarticulation de gestes pour un agent virtuel sous le moteur de jeu Unity.",
      description3: "",
     
    },
    {
      
      title: "Stagiaire en recherche et développement",
      univOrCompany: "Université de Bretagne Occidentale",
      period: "Mai 2017",
      location: "Brest, France",
      description1: "Travail d'étude et de recherche développant un algorithme de path planning adaptatif aux ressources.",
      description2: "", 
      description3: "",
    },
    {

      title: "Stagiaire en développement Web",
      univOrCompany: "Banque Marocaine pour le Commerce et l’Industrie",
      period: "Juillet 2016 - Août 2016",
      location: "Oujda, Maroc",
      description1: "Développement d'un site web de réservation des formations et stages avec les technologies web avancées et bases de données.",
      description2: "", 
      description3: "",
    },
    {
    
      title: "Stagiaire en développement Web",
      univOrCompany: "LOGIMA",
      period: "Mai 2014 - Avril 2015",
      location: "Oujda, Maroc",
      description1: "Développement des applications et sites web :",
      description2: "- Une formation pratique en réalisant des applications et sites web en utilisant les technologies web.", 
      description3: "- Création d'un site web dynamique pour un forum de communication « FORCOM ».",
    },
    {
    
      title: "Stagiaire en développement de programmes",
      univOrCompany: "Intelligent ANT",
      period: "Juillet 2014 - Janvier 2015",
      location: "Oujda, Maroc",
      description1: "Développement d’un programme qui génère une liaison d'un SGBD externe avec une application Android.",
      description2: "", 
      description3: "",
    },
    {
      
      title: "Stagiaire en développement de programmes",
      univOrCompany: "Banque Marocaine pour le Commerce et l’Industrie",
      period: "Mai 2014 - Juin 2014",
      location: "Oujda, Maroc",
      description1: "Développement d’un programme de gestion des clients et leurs transactions bancaires.",
      description2: "", 
      description3: "",
    },
    {
     
      title: "Stagiaire en développement de programmes",
      univOrCompany: "Groupe Index-Info",
      period: "Novembre 2013 - Janvier 2014",
      location: "Oujda, Maroc",
      description1: "Optimisation du programme de gestion des étudiants/employés du centre de formation en intégrant le SGBD MySQL.",
      description2: "", 
      description3: "",
    },
    {

      title: "Stagiaire en développement Web",
      univOrCompany: "École Supérieure de Technologie d'Oujda",
      period: "Mai 2013 - Juin 2013",
      location: "Oujda, Maroc",
      description1: "Développement d'une application web pour la gestion des rapports de stages et projets de fin d’études.",
      description2: "", 
      description3: "",
    },
    {
      title: "Stagiaire en développement de programmes",
      univOrCompany: "Groupe Index-Info",
      period: "Avril 2012",
      location: "Oujda, Maroc",
      description1: "Développement d'un programme de gestion des étudiants/employés du centre de formation.",
      description2: "", 
      description3: "",
    },
  ];
/**       
 * 
 * STUDIES
 */
const timelineStudies : timelinetype[] = [
  
  {
    title: "Doctorat en informatique et architecture numérique",
    univOrCompany: "Université de Bretagne Occidentale",
    period: "2021 - 2024",
    location: "Brest, France",
    description1: "Sujet de thèse : Modélisation d’une plateforme de jumeau numérique pour les villes intelligentes.",
    description2: "", 
    description3: "",
  },
  {
    
    title: "Licence - Langues, Littératures et Civilisations étrangères et Régionales",
    univOrCompany: "Université de Bretagne Occidentale",
    period: "2019 - 2021",
    location: "Brest, France",
    description1: "Formation en langues :",
    description2: "- Parcours : Anglais.", 
    description3: "- Niveau : L1.",
  },
  {

    title: "Master en Informatique",
    univOrCompany: "Université de Bretagne Occidentale",
    period: "2016 - 2019",
    location: "brest, France",
    description1: "2018-2019 : M2 - Parcours Systèmes Interactifs, Intelligents et Autonomes.",
    description2: "2017-2018 : M1 - Parcours Systèmes Interactifs, Intelligents et Autonomes.", 
    description3: "2016-2017 : M1 - Parcours Systèmes Informatiques Complexes et Logiciels Embarqués.",
  },
  {


    title: "Licence Professionnelle Informatique",
    univOrCompany: "École Supérieure de Technologie d'Oujda",
    period: "2015 - 2016",
    location: "Oujda, Maroc",
    description1: "Mention Bien.",
    description2: "", 
    description3: "",
  },
  {

    title: "Diplôme d'ingénieur - Informatique et Systèmes d'Information",
    univOrCompany: "Conservatoire National des Arts et Métiers",
    period: "2013 - 2015",
    location: "Oujda, Maroc",
    description1: "Réorientation pour une licence professionnelle.",
    description2: "", 
    description3: "",
  },
  {
    title: "Diplôme Universitaire de Technologie - Génie Informatique",
    univOrCompany: "École Supérieure de Technologie d'Oujda",
    period: "2011 - 2013",
    location: "Oujda, Maroc",
    description1: "Option : Développeur Java/C++.",
    description2: "Mention Très Bien", 
    description3: "",
  },
];
/**       
 * 
 *   
 * 
 */  

const techLangs: techLang[] = [
  {
    logo: "devicon-html5-plain colored text-7xl",
    langage: "HTML5",
    percentage: 85,
  },
  {
    logo: "devicon-css3-plain colored text-7xl",
    langage: "CSS3",
    percentage: 80,
  },
  {
    logo: "devicon-javascript-plain colored text-7xl",
    langage: "JavaScript",
    percentage: 80,
  },
  {
    logo: "devicon-typescript-plain colored text-7xl",
    langage: "TypeScript",
    percentage: 70,
  },
  {
    logo: "devicon-vuejs-plain colored text-7xl",
    langage: "Vue.js",
    percentage: 60,
  },
  {
    logo: "devicon-react-plain colored text-7xl",
    langage: "React.js",
    percentage: 70,
  },
  {
    logo: "devicon-tailwindcss-original colored text-7xl",
    langage: "Tailwind CSS",
    percentage: 70,
  },
  {
    logo: "devicon-c-plain colored text-7xl",
    langage: "C",
    percentage: 70,
  },
  {
    logo: "devicon-cplusplus-plain colored text-7xl",
    langage: "C++",
    percentage: 70,
  },
  {
    logo: "devicon-csharp-plain colored text-7xl",
    langage: "C#",
    percentage: 60,
  },
  {
    logo: "devicon-java-plain colored text-7xl",
    langage: "Java",
    percentage: 85,
  },
  {
    logo: "devicon-mysql-plain colored text-7xl",
    langage: "SQL",
    percentage: 70,
  },
  {
    logo: "devicon-xml-plain colored text-7xl",
    langage: "XML",
    percentage: 65,
  },
  {
    logo: "devicon-php-plain colored text-7xl",
    langage: "PHP",
    percentage: 65,
  },
  
  {
    logo: "devicon-pandas-plain colored text-7xl",
    langage: "Pandas",
    percentage: 70,
  },
  {
    logo: "devicon-tensorflow-original colored text-7xl",
    langage: "Tensorflow",
    percentage: 80,
  },
  {
    logo: "devicon-pytorch-plain colored text-7xl",
    langage: "Pytorch",
    percentage: 70,
  },
  {
    logo: "devicon-git-plain colored text-7xl",
    langage: "Git",
    percentage: 80,
  },
  {
    logo: "devicon-python-plain colored text-7xl",
    langage: "Python",
    percentage: 80,
  },
  {
    logo: "devicon-maven-plain colored text-7xl",
    langage: "Maven",
    percentage: 90,
  },
  {
    logo: "devicon-junit-plain colored text-7xl",
    langage: "JUnit",
    percentage: 85,
  },
  {
    logo: "devicon-spring-plain colored text-7xl",
    langage: "Spring Boot",
    percentage: 75,
  },
  {
    logo: "devicon-unity-plain colored text-7xl",
    langage: "Unity",
    percentage: 70,
  },
  

];

  return (
    <div className=''>

       <div className=" flex flex-col justify-center lg:flex-row lg:justify-between items-start">
           
                <div className=" max-w-screen-xl max-w mx-auto my-12 pl-3">
                <h5 className="text-gray-800 ml-2 text-2xl text-left font-serif font-extrabold py-8 pb-1 px-2 mt-10">Formations & diplômes</h5>
 
              <div className="relative border-l-4 border-blue-600 ml-2">
                {timelineStudies.map((item, index) => (
                  <TimelineFE timelineData={item} key={index} />
                ))}
              </div>
            </div>
                
   
            <div className=" max-w-screen-xl max-w mx-auto my-12 pl-3">
            <h5 className="text-gray-800 ml-2 text-2xl text-left font-serif font-extrabold py-8 pb-1 px-2 mt-10">Expériences professionnelles</h5>

              <div className="relative border-l-4 border-blue-600 ml-2">
                {timelineEXP.map((item, index) => (
                  <TimelineFE timelineData={item} key={index} />
                ))}
              </div>
            </div>
         
           
        </div>

        <h5 className="text-gray-800 text-3xl font-serif font-extrabold py-8 pb-1 px-5 mt-10"> Compétences techniques</h5>

        <div className="flex items-center justify-center ">
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 pt-8 mt-3 px-5 md:px-12">
             
               {techLangs.map((item, index) => (
                  <TechCard techData={item} index={index} key={index} />
                ))}
          
          </div>
        </div>



    </div>
  )
}

export default ExpFormations


