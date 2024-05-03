import React, { useRef } from "react";
import programmer from "../../images/developer.png";
import Navbar from "../Pages/Navbar.jsx";
import { Link } from "react-router-dom";
import SkillComponent from "../Pages/Skills.jsx";
import Html from '..//../images/html.png'
import Css from '..//../images/CSS3_logo.svg.png'
import TailwindCss from '..//../images/tailwind-css-logo-5AD4175897-seeklogo.com.png'
import Js from '..//../images/Javascript.png'
import ReactIcon from '..//../images/images__3_-removebg-preview.png'
import Git from '..//../images/git.svg'
import  Footer  from "../Pages/Footer.jsx";
import Projects from "../Pages/Projects.jsx";





function Hero() {
  // You can use this or the other method
  // const skillsRef = useRef(null)

  // const scrollToSkills = () => {
  //   skillsRef.current.scrollView({behavior: "smooth"})
  // }

  // this is easy to implement
  const scrollToSkills = () => {
    const skillsSection = document.getElementById("skills");
    skillsSection.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <main className="bg-custom-blue">
      <section>
        <Navbar />

        <div className="flex justify-between px-10">
          <div className="sm:w-3/5">
            <p
              style={{ fontFamily: "Roboto Mono, monospace" }}
              class="text-[#309543] font-semibold"
            >
              Hi, my name is
            </p>
            <h2 class="text-3xl lg:text-5xl xl:text-6xl	font-bold text-[#cccccc] mt-3 lg:mt-4">
              KEZIA BAIDOO.
            </h2>
            <h2 class="text-4xl lg:text-3xl xl:text-4xl font-bold text-[#247032] mt-3 lg:mt-4">
              Front-End Developer.
            </h2>
            <p className="mt-6 lg:mt-5 max-w-md text-[#cccccc] tracking-tight leading-7">
              Here are the biggest enterprise technology acquisitions of 2021 so
              far, in reverse chronological order.
              <br />I love to build products that can be used by millions of
              people.
            </p>
            <span
              style={{ fontFamily: "Roboto Mono, monospace" }}
              class="font-bold text-[#309543]"
            >
              Open for Work &amp; Collaboration.
            </span>
            <div className="my-6">
              <Link
                to="#skills"
                onClick={scrollToSkills}
                style={{ fontFamily: "Roboto Mono , monospace" }}
                className="inline-flex items-center px-6 py-3 text-sm font-medium  text-[#007D31] border-4 border-[#007D31]  rounded-md hover:bg-[#30954232]"
              >
                Check out My Skills !
                <svg
                  className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 10"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M1 5h12m0 0L9 1m4 4L9 9"
                  />
                </svg>
              </Link>
            </div>
          </div>

          <div className="hidden sm:block sm:w-2/5">
            <img src={programmer} alt="frontend-developer" className="" />
          </div>
        </div>

        {/* soccial links */}
        <div className="mt-1">
          <ul className="flex gap-3 mx-10">
            <li class="mr-2 flex justify-center items-center">
              <a
                href="https://www.linkedin.com/in/keziabaidoo/"
                target="_blank"
                class="w-[35px] h-[35px]"
              >
                <ion-icon
                  name="logo-linkedin"
                  class="text-[#CCCCCC] w-[35px] h-[35px] transition-all hover:text-[#309543] md hydrated color-white"
                  role="img"
                  aria-label="logo linkedin"
                ></ion-icon>
              </a>
            </li>
            <li class="mr-2 flex justify-center items-center">
              <a
                href="https://github.com/keziabaidoo"
                target="_blank"
                class="w-[35px] h-[35px]"
              >
                <ion-icon
                  name="logo-github"
                  class="text-[#CCCCCC] w-[35px] h-[35px] transition-all hover:text-[#309543] md hydrated"
                  role="img"
                  aria-label="logo github"
                ></ion-icon>
              </a>
            </li>

            <li class="mr-2 flex justify-center items-center">
              <a
                href="https://twitter.com/@AhenkorahK40722
"
                target="_blank"
                class="w-[35px] h-[35px]"
              >
                <ion-icon
                  name="logo-twitter"
                  class=" text-[#CCCCCC] w-[35px] h-[35px] transition-all hover:text-[#309543] md hydrated"
                  role="img"
                  aria-label="logo twitter"
                ></ion-icon>
              </a>
            </li>

            <li class="mr-2 flex justify-center items-center">
              <a
                href="https://www.instagram.com/majkazy/?hl=en"
                target="_blank"
                class="w-[35px] h-[35px]"
              >
                <ion-icon
                  name="logo-instagram"
                  class="text-[#CCCCCC] w-[35px] h-[35px] transition-all hover:text-[#309543] md hydrated"
                  role="img"
                  aria-label="logo instagram"
                ></ion-icon>
              </a>
            </li>

            <li class="mr-2 flex justify-center items-center">
              <a
                href="mailto: keziabaidoo100@gmail.com"
                target="_blank"
                class="w-[35px] h-[35px]"
              >
                <ion-icon
                  name="mail"
                  class="text-[#CCCCCC] w-[35px] h-[35px] transition-all hover:text-[#309543] md hydrated"
                  role="img"
                  aria-label="mail"
                ></ion-icon>
              </a>
            </li>
          </ul>
        </div>
      </section>

      <SkillComponent />

      <section>

  <div class="grid grid-cols-3  sm:grid-cols-5 gap-8 " style={{fontFamily:'Roboto Mono monospace'}}>

{/* <!-- Skill 01 --> */}
<div class="flex flex-col items-center gap-2">
  <img src={Html} alt="html icon" class="w-24 h-24" />
  <p class="font-semibold text-[#cccccc]">HTML</p>
</div>


{/* <!-- Skill 02 --> */}

<div class="flex flex-col items-center gap-2">
  <img src={Css} alt="css icon" class="w-24 h-24" />
  <p class="font-semibold text-[#cccccc]">CSS</p>
</div>

{/* <!-- Skill 03 --> */}

<div class="flex flex-col items-center gap-2 ">
  <img src={TailwindCss} alt="tailwind css icon" class="w-24 h-24" />
  <p class="font-semibold text-[#cccccc] text-center">Tailwind CSS</p>
</div>


{/* <!-- Skill 04 --> */}

<div class="flex flex-col items-center gap-2">
  <img src={Js} alt="javascript icon" class="w-24 h-24" />
  <p class="font-semibold text-[#cccccc]">JavaScript</p>
</div>
{/* <!-- Skill 04 --> */}

<div class="flex flex-col items-center gap-2">
  <img src={ReactIcon} alt="javascript icon" class="w-24 h-24" />
  <p class="font-semibold text-[#cccccc]">React</p>
</div>


{/* <!-- Skill 05 --> */}

<div class="flex flex-col items-center gap-2">
  <img src={Git} alt="git icon" class="w-24 h-24" />
  <p class="font-semibold text-[#cccccc]">Git</p>
</div>

</div>
      {/* <div class="flex flex-col items-center gap-2">
          <img src={Html} alt="html icon" class="w-24 h-24" />
          <p class="font-semibold text-[#cccccc]">HTML</p>
        </div> */}
      </section>

      <Projects />

    <Footer />
    </main>
  );
}

export default Hero;
