import { RenderPage } from "@/classes/renderPage";

export class HomePage extends RenderPage {
  constructor() {
    super();

    this.element = /* html */ `
      <nav class="h-20 w-full flex relative">
      <div class="flex absolute left-0 h-20">
        <div
          class="pl-4 grow h-full bg-light_cyan relative after:absolute after:box-border after:w-[12px] after:border-light_cyan after:left-full after:top-0 after:h-full after:border-[40px] after:border-t-transparent after:border-r-transparent text-dark_blue font-bold text-3xl flex items-center justify-center tracking-widest"
        >
          <img src="/logo.svg" alt="" />
        </div>
      </div>

      <div
        class="h-16 w-full bg-dark_blue border-0 border-b-3 border-light_cyan"
      ></div>
    </nav>

    <div class="grid grid-cols-12 p-14 w-full grow max-w-[1400px] mx-auto">
      <div class="col-span-3 h-full">
        <h2 class="text-3xl text-white font-bold mb-12">TRAINING</h2>

        <div
          class="flex flex-col w-full h-full gap-8 text-2xl text-gray-400 font-medium"
        >
          <span class="cursor-pointer px-3 text-light_cyan">Training</span>
          <span class="cursor-pointer px-3">Settings</span>
          <span class="cursor-pointer px-3">Score</span>
          <span class="cursor-pointer px-3">Reports</span>
        </div>
      </div>

      <div class="col-span-9 text-white h-full">
        <div class="font-bold text-xl leading-10">
          Filter by:
          <select
            name=""
            id=""
            class="bg-dark_blue appearance-none px-3 ml-4"
          >
            <option value="">asd</option>
          </select>
        </div>

        <div
          class="grid grid-cols-12 mt-6 gap-6 h-full max-h-[700px] overflow-scroll overflow-x-hidden pr-2"
        >
          <div class="col-span-4 flex flex-col bg-dark_blue">
            <div
              class="w-full pt-[54%] bg-[url('/spidershot.jpg')] bg-cover bg-center"
            ></div>

            <div class="flex flex-col p-4 gap-4">
              <div class="flex justify-between items-center">
                <div>
                  <h3 class="font-bold text-lg">SPIDER SHOT</h3>
                  <span class="text-light_blue font-medium"
                    >MODE: precision</span
                  >
                </div>

                <i class="fa-solid fa-heart text-lg cursor-pointer"></i>
              </div>

              <span>
                <!-- Three targets will spawn randomly across an invisible grid on
                the screen. Kill one and another spawns so there are always
                three targets on screen. -->
                IMPROVE SPATIAL PERFORMANCE
              </span>
            </div>

            <button class="w-full h-12 bg-light_cyan font-medium text-xl">
              PLAY NOW!
            </button>
          </div>

          <div class="col-span-4 flex flex-col bg-dark_blue">
            <div
              class="w-full pt-[54%] bg-[url('/spidershot.jpg')] bg-cover bg-center"
            ></div>

            <div class="flex flex-col p-4 gap-4">
              <div class="flex justify-between items-center">
                <div>
                  <h3 class="font-bold text-lg">SPIDER SHOT</h3>
                  <span class="text-light_blue font-medium"
                    >MODE: precision</span
                  >
                </div>

                <i class="fa-solid fa-heart text-lg cursor-pointer"></i>
              </div>

              <span>
                <!-- Three targets will spawn randomly across an invisible grid on
                the screen. Kill one and another spawns so there are always
                three targets on screen. -->
                IMPROVE SPATIAL PERFORMANCE
              </span>
            </div>

            <button class="w-full h-12 bg-light_cyan font-medium text-xl">
              PLAY NOW!
            </button>
          </div>

          <div class="col-span-4 flex flex-col bg-dark_blue">
            <div
              class="w-full pt-[54%] bg-[url('/spidershot.jpg')] bg-cover bg-center"
            ></div>

            <div class="flex flex-col p-4 gap-4">
              <div class="flex justify-between items-center">
                <div>
                  <h3 class="font-bold text-lg">SPIDER SHOT</h3>
                  <span class="text-light_blue font-medium"
                    >MODE: precision</span
                  >
                </div>

                <i class="fa-solid fa-heart text-lg cursor-pointer"></i>
              </div>

              <span>
                <!-- Three targets will spawn randomly across an invisible grid on
                the screen. Kill one and another spawns so there are always
                three targets on screen. -->
                IMPROVE SPATIAL PERFORMANCE
              </span>
            </div>

            <button class="w-full h-12 bg-light_cyan font-medium text-xl">
              PLAY NOW!
            </button>
          </div>

          <div class="col-span-4 flex flex-col bg-dark_blue">
            <div
              class="w-full pt-[54%] bg-[url('/spidershot.jpg')] bg-cover bg-center"
            ></div>

            <div class="flex flex-col p-4 gap-4">
              <div class="flex justify-between items-center">
                <div>
                  <h3 class="font-bold text-lg">SPIDER SHOT</h3>
                  <span class="text-light_blue font-medium"
                    >MODE: precision</span
                  >
                </div>

                <i class="fa-solid fa-heart text-lg cursor-pointer"></i>
              </div>

              <span>
                <!-- Three targets will spawn randomly across an invisible grid on
                the screen. Kill one and another spawns so there are always
                three targets on screen. -->
                IMPROVE SPATIAL PERFORMANCE
              </span>
            </div>

            <button class="w-full h-12 bg-light_cyan font-medium text-xl">
              PLAY NOW!
            </button>
          </div>

          <div class="col-span-4 flex flex-col bg-dark_blue">
            <div
              class="w-full pt-[54%] bg-[url('/spidershot.jpg')] bg-cover bg-center"
            ></div>

            <div class="flex flex-col p-4 gap-4">
              <div class="flex justify-between items-center">
                <div>
                  <h3 class="font-bold text-lg">SPIDER SHOT</h3>
                  <span class="text-light_blue font-medium"
                    >MODE: precision</span
                  >
                </div>

                <i class="fa-solid fa-heart text-lg cursor-pointer"></i>
              </div>

              <span>
                <!-- Three targets will spawn randomly across an invisible grid on
                the screen. Kill one and another spawns so there are always
                three targets on screen. -->
                IMPROVE SPATIAL PERFORMANCE
              </span>
            </div>

            <button class="w-full h-12 bg-light_cyan font-medium text-xl">
              PLAY NOW!
            </button>
          </div>

          <div class="col-span-4 flex flex-col bg-dark_blue">
            <div
              class="w-full pt-[54%] bg-[url('/spidershot.jpg')] bg-cover bg-center"
            ></div>

            <div class="flex flex-col p-4 gap-4">
              <div class="flex justify-between items-center">
                <div>
                  <h3 class="font-bold text-lg">SPIDER SHOT</h3>
                  <span class="text-light_blue font-medium"
                    >MODE: precision</span
                  >
                </div>

                <i class="fa-solid fa-heart text-lg cursor-pointer"></i>
              </div>

              <span>
                <!-- Three targets will spawn randomly across an invisible grid on
                the screen. Kill one and another spawns so there are always
                three targets on screen. -->
                IMPROVE SPATIAL PERFORMANCE
              </span>
            </div>

            <button class="w-full h-12 bg-light_cyan font-medium text-xl">
              PLAY NOW!
            </button>
          </div>

          <div class="col-span-4 flex flex-col bg-dark_blue">
            <div
              class="w-full pt-[54%] bg-[url('/spidershot.jpg')] bg-cover bg-center"
            ></div>

            <div class="flex flex-col p-4 gap-4">
              <div class="flex justify-between items-center">
                <div>
                  <h3 class="font-bold text-lg">SPIDER SHOT</h3>
                  <span class="text-light_blue font-medium"
                    >MODE: precision</span
                  >
                </div>

                <i class="fa-solid fa-heart text-lg cursor-pointer"></i>
              </div>

              <span>
                <!-- Three targets will spawn randomly across an invisible grid on
                the screen. Kill one and another spawns so there are always
                three targets on screen. -->
                IMPROVE SPATIAL PERFORMANCE
              </span>
            </div>

            <button class="w-full h-12 bg-light_cyan font-medium text-xl">
              PLAY NOW!
            </button>
          </div>
        </div>
      </div>
    </div>
      `;
  }
}
