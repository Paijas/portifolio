import { MdOutlineKeyboardArrowRight} from "react-icons/md"

export default function Home() {
  return (
    <div
      name="home"
      className="h-screen w-full bg-gradient-to-b from-black  to-slate-900"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div className="flex flex-col justify-center h-full">
          <h2 className="text-4xl sm:text-7xl font-bold text-white">
            Desenvolvedor Frontend
          </h2>
          <p className="text-gray-500 py-4 max-w-md">
            Cursando o 7º período de Engenharia da Computação. Gosto de trabalhar com aplicações web usando tecnologias como JavaScript, ReactJS, Tailwind e NextJS.
          </p>

          <div >
            <span className="text-white flex items-center w-[100px] bg-sky-500 rounded-md justify-center h-[32px]">
                Portifolio <MdOutlineKeyboardArrowRight/>
            </span>
          </div>
        </div>

        <div className=" bg-gradient-to-b rounded-t-none rounded-2xl from-black to-blue-500">
          <img
            src='../assets/foto-perfil.png'
            alt="my profile"
            className=" mx-auto rounded-2xl size-1/2  w-2/3 md:w-full"
          />
        </div>
      </div>
    </div>
  )
}
