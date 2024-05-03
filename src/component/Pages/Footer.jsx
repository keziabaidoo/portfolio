import React from 'react'

function Footer() {
    return (
        <section  className='px-8 sm:px-1 py-5 max-w-screen-xl mx-auto' id="skills">
           
           <div class="flex items-center py-10"> 
        <hr class="flex-grow border-t border-[#309543]" /> 
        <span class="px-3 text-[#cccccc] font-bold text-4xl "> 
            Get In Touch
        </span> 
        <hr class="flex-grow border-t  border-[#309543]" /> 
    </div> 

     {/* soccial links */}
     <div className="flex mt-1 justify-center">
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
    )
}

export default Footer
