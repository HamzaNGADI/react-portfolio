import "devicon/devicon.min.css";


function Footer() {
  return (

    <div className="bg-blue-950 pb-6 mt-12">
			  	<h2 className="text-white text-3xl font-serif font-extrabold py-5 pb-5 px-5">Contact </h2>
					<h3  className="text-white md:inline font-bold">Téléphone : </h3>
					<p className="text-white md:inline " ><a className="cursor-pointer hover:text-blue-400 focus:text-blue-400 focus:outline-none" >+33 7 88 91 53 60</a></p>
		    <div>
					<h3 className="text-white md:inline font-bold">E-mail : </h3>
					<p className="text-white md:inline "><a className="cursor-pointer hover:text-blue-400 focus:text-blue-400 focus:outline-none">ngadihamza@gmail.com</a></p>
        </div>	

            <div className="pt-4 ">

            <a href="https://github.com/HamzaNGADI?tab=repositories" className="mr-5 text-3xl md:text-4xl text-white cursor-pointer hover:text-blue-400 focus:text-blue-400 focus:outline-none">
            <i className="devicon-github-original text-4xl sm:text-5xl"></i>
            </a>
            <a href="https://www.linkedin.com/in/hamzangadi" className="text-3xl md:text-4xl text-white cursor-pointer hover:text-blue-400 focus:text-blue-400 focus:outline-none">
            <i className="devicon-linkedin-plain text-4xl sm:text-5xl"></i>
            </a>

            </div>

 
    </div>
  )
}

export default Footer