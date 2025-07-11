import type { ProjectData } from "./Projectspub"

type ProjetProps = {
    dt: ProjectData;
  };
  

function ProjectCard({dt}: ProjetProps) {
  return (

       <div className="bg-gradient-to-b from-blue-50 to-blue-100 p-3 rounded-4xl">
          <h5 className="mx-auto text-black text-3xl mt-4 font-serif font-extrabold  ">
            {dt.title} <br />
             <span> {dt.titlee} </span>
        </h5>
	     <br/>
        
         <div className="flex justify-center"><img src={dt.img} />	</div>  	
  		<p className="text-black w-5/6 mx-auto mt-8 text-lg font-semibold leading-loose mb-9">
            {dt.textc}
            <br />
            {dt.textcc}
            <br />
            {dt.textcci}
     
      </p>
      
       <p className="mb-4 mx-auto">  
         <a href={dt.lien}
         className=" hover:bg-blue-900 hover:text-white rounded-full py-3 px-6 border-2 border-blue-800">
         {dt.titrelien}</a>
       </p>
    </div>
 
  )
}

export default ProjectCard