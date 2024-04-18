import React from "react";

function Navbar() {
  return (
    <>
    
      <nav class="bg-gray-50 dark:bg-gray-700 ">
        <div class="max-w-screen-xl px-4 py-3">
          <div class="flex items-center text-left">
            <ul class="flex flex-row font-medium mt-0 space-x-8 rtl:space-x-reverse text-sm">
              <li>
                <a
                  href="#"
                  class="text-gray-900 dark:text-white hover:underline"
                  aria-current="page"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#"
                  class="text-gray-900 dark:text-white hover:underline"
                >
                  Skills
                </a>
              </li>
              <li>
                <a
                  href="#"
                  class="text-gray-900 dark:text-white hover:underline"
                >
                  Projects
                </a>
              </li>
              <li>
                <a
                  href="#"
                  class="text-gray-900 dark:text-white hover:underline"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
