import React from "react";
import "./Projects.css";
import { FaReact, FaHardHat, FaJava } from "react-icons/fa";
import {
  SiBlockchaindotcom,
  SiHtml5,
  SiMaterialui,
  SiChai,
  SiEthereum,
  SiExpress,
  SiSocketdotio,
  SiTailwindcss,
  SiReactrouter,
  SiJavascript,
  SiMongodb,
  SiNodedotjs,
  SiPhp,
  SiCss3,
} from "react-icons/si";
import { DiCss3, DiJavascript, DiWindows, DiWordpress } from "react-icons/di";
import { VscJson } from "react-icons/vsc";
import { IoLogoJavascript } from "react-icons/io";
export const Projects = () => {
  return (
    <>
      <div className="section">
        <h2 className="section__title different">Projects</h2>
        <div className="allProjects">
          <div className="projects_container" data-aos="fade-right">
            <div className="project">
              <div className="project_videocontainer">
                <div>
                  <img
                    src="https://i.ibb.co/kB72ZYT/Screen-Shot-Tool-20221219155848.png" alt="Screen-Shot-Tool-20221219155848" 
                  />
                </div>
              </div>
              <div className="project_information">
                <h2>Urban Vision</h2>
                <p>
                  E-commerce website for my personal brand that uses Odoo technology to sell hoodies to everyone.
                </p>
                <div>
                  <SiNodedotjs />
                  
                  
                  <FaReact />
                  <SiMaterialui />
                </div>
                <div>
                  <a
                    href="https://urbanvision1.odoo.com/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt onbt">
                      See this Live
                    </span>
                  </a>
                 
                </div>
              </div>
            </div>
          </div>
          <div className="projects_container" data-aos="fade-right">
            <div className="project">
              <div className="project_videocontainer">
                <div>
                  <img
                    src="https://i.ibb.co/Wkf4BMx/Screen-Shot-Tool-20221219160218.png" alt="Screen-Shot-Tool-20221219160218"
                  />
                </div>
              </div>
              <div className="project_information">
                <h2>GoldAlafrah</h2>
                <p>
                  Creating e-commerce website for gold agency.
                </p>
                <div>
                  <DiWordpress/>
                </div><br />
                <div>
                  <a
                    href="https://goldalafrah.ma/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt">
                      See this Live
                    </span> 
                  </a>
                  
                </div>
              </div>
            </div>
          </div>
          <div className="projects_container" data-aos="fade-right">
            <div className="project">
              <div className="project_videocontainer">
                <div>
                  <img src="https://i.ibb.co/Qdnszjh/houssni.png" alt="houssni" border="0"/>
                </div>
              </div>
              <div className="project_information">
                <h2>FranceGranulé</h2>
                <p>
                  I work with the HoussniJob agency to develop a website that prompts users to request heating for their homes.
                  Using HTML, CSS, JavaScript, and PHP for the backend
                </p>
                <div>
                  <SiNodedotjs />
                  <SiCss3 />
                  <SiHtml5 />
                  <SiPhp />
                </div>
                <div>
                  <a
                    href=""
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt onbt">
                    See this Live
                    </span>
                  </a>
                  <a
                    href="https://github.com/IsmailMaaji/France_granule"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt">
                      View Code
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="projects_container" data-aos="fade-right">
            <div className="project">
              <div className="project_videocontainer">
                <div>
                  <img
                    src="https://i.ibb.co/g76ywVc/active-states.jpg" alt="active-states" 
                  />
                </div>
              </div>
              <div className="project_information">
                <h2>Product preview card component</h2>
                <p>
                  Also another Challenge from FrontendMentor that help a lot to understand Css.
                </p>
                <div>
                  <DiCss3 />
                  <SiHtml5 />
                  
                </div>
                <div>
                  <a
                    href="https://product-preview-card-component-main-plum.vercel.app/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt onbt">
                    See this Live
                    </span>
                  </a>
                  <a
                    href="https://github.com/IsmailMaaji/product-preview-card-component-main"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt">
                      View Code
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="projects_container" data-aos="fade-right">
            <div className="project">
              <div className="project_videocontainer">
                <div>
                  <img
                    src="https://i.ibb.co/tB69Zst/tajin.png" alt="tajin"
                  />
                </div>
              </div>
              <div className="project_information">
                <h2>TajinBladi</h2>
                <p>
                    Website for a restaurant that displays every sort of tajin they provide
                </p>
                <div>
                
                  <DiCss3 />
                  <SiHtml5 />
                  <SiJavascript />
                  
                </div>
                <div>
                  <a
                    href="https://tajinbladi-github-io.vercel.app/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt onbt">
                      See this Live
                    </span>
                  </a>
                  <a
                    href="https://github.com/IsmailMaaji/tajinbladi.github.io"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt">
                      View Code
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="projects_container" data-aos="fade-right">
            <div className="project">
              <div className="project_videocontainer">
                <div>
                <img src="https://i.ibb.co/MBwfbCy/car.jpg" alt="car" />
                </div>
              </div>
              <div className="project_information">
                <h2>Car Rental</h2>
                <p>
                  Car Rental is an website application for online rent
                  cars from your house.
                </p>
                <div>
                  <SiPhp />
                  <DiCss3 />
                  <SiHtml5 />
                  <IoLogoJavascript />
                </div>
                <div>
                  <a
                    href=""
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt onbt">
                      See this Live
                    </span>
                  </a>
                  <a
                    href=""
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt">
                      View Code
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
    </>
  );
};
