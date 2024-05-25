import React from "react";
import Button from "../../components/Button";
import SimplicityBanner from "../../assets/simplicity_logo_final.png";
import AI_Bot from "../../assets/AI_Bot.png";
import Checklist from "../../assets/checklist.png";
import GroupManagement from "../../assets/Group_management.png";

interface MiniCardProps {
  image: string;
  title: string;
  description: string;
  to:string;
}

const MiniCard: React.FC<MiniCardProps> = ({ image, title, description,to }) => {

  const handleNavigation = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block:"nearest" });
    }
  };

  return (
    <div className=" w-[32%] max-w-[210px] flex flex-col border-2 py-2 px-5 bg-blue-300 hover:bg-cyan-400 hover:cursor-pointer dark:bg-blue-400 dark:hover:bg-cyan-500" onClick={()=>handleNavigation(to)}>
      <div className="w-[60px] h-[60px] self-center xl:w-[80px] xl:h-[80px]">
        <img
          src={image}
          alt="simplicity logo"
          className="w-full h-full rounded-full"
        />
      </div>
      <h1 className="text-xl text-center text-black dark:text-white">
        {title}
      </h1>
      <p className="text-center text-white text-base xl:text-lg">
        {description}
      </p>
    </div>
  );
};

const Section1 = () => {
  const handleGeneric = () => {
    console.log("hola");
  };
  const handleTestApp = () => {
    console.log("hola");
  };

  return (
    <div className="w-full h-[calc(100vh-60px)] flex flex-col justify-around lg:flex-row lg:items-center">
      <div className="w-full h-[25%] flex flex-col justify-around lg:w-1/2 lg:h-full lg:justify-center lg:gap-16">
        <div className="w-full flex flex-col justify-around lg:justify-center">
          <img
            src={SimplicityBanner}
            alt="simplicity logo"
            className="w-[190px] lg:max-w-none lg:w-[250px] self-center"
          />
          <h1 className="text-2xl text-center pe-5 font-semibold text-blue-800 dark:text-white md:text-4xl">
            Simplify, Organize, Achive
          </h1>
        </div>
        <div className="hidden lg:flex lg:justify-around">
          <MiniCard
            image={Checklist}
            title="Gestión Tareas"
            description="Herramientas interactivas para gestionarte"
            to="taskManagementSection"
          />
          <MiniCard
            image={GroupManagement}
            title="Trabaja Grupo"
            description="Espacios de trabajo grupales en tiempo real"
            to="GroupmanagementSection"
          />
          <MiniCard
            image={AI_Bot}
            title="Soporte IA"
            description="IA integrada para consultas y recomendaciones"
            to="AiBotSection"
          />
        </div>
      </div>
      <div className="w-full flex flex-col justify-center items-center gap-8 pe-3 md:pe-0 lg:w-1/2 lg:h-[100%] lg:border-none">
        <Button text="Iniciar sesión" onclick={handleGeneric} />
        <Button
          text="Probar aplicación"
          onclick={handleTestApp}
          type="important"
          rol="Link"
          to="/workspace"
        />
        <Button text="Registrarse" onclick={handleGeneric} />
      </div>
    </div>
  );
};

export default Section1;
