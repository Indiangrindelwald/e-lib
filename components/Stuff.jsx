import React from "react";
import stockImg from "../public/assets/stock.jpg";
import Projectitem from "./ProjectItem";

const Projects = () => {
  return (
    <div id="projects" className="w-full">
      <div className="max-w-[1240px] mx-auto px-2 py-16">
        <p className="text-xl tracking-widest uppercase ">
          Semester menu
        </p>
        <h2 className="py-4 text-[#826E9C]">Courses</h2>
        <div className="grid md:grid-cols-3 gap-8 ">

        <Projectitem
            title='Sem 1'
            backgroundImg={stockImg}
            projectUrl='/'
            tech='description'
          />
          <Projectitem
            title='Sem 2'
            backgroundImg={stockImg}
            projectUrl='/'
            tech='description'
          />
          <Projectitem
            title='Sem 3'
            backgroundImg={stockImg}
            projectUrl='/'
            tech='description'
          />
          <Projectitem
            title='Sem 4'
            backgroundImg={stockImg}
            projectUrl='/'
            tech='description'
          />
          <Projectitem
            title='Sem 5'
            backgroundImg={stockImg}
            projectUrl='/'
            tech='description'
          />
          <Projectitem
            title='Sem 6'
            backgroundImg={stockImg}
            projectUrl='/'
            tech='description'
          />
          <Projectitem
            title='Sem 7'
            backgroundImg={stockImg}
            projectUrl='/'
            tech='description'
          />
          <Projectitem
            title='Sem 8'
            backgroundImg={stockImg}
            projectUrl='/'
            tech='description'
          />
          <Projectitem
            title='Sem 9'
            backgroundImg={stockImg}
            projectUrl='/'
            tech='description'
          />
          <Projectitem
            title='Sem 10'
            backgroundImg={stockImg}
            projectUrl='/'
            tech='description'
          />

        </div>
      </div>
    </div>
  );
};

export default Projects;
