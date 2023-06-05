import Image from 'next/image';
import { AiOutlineInstagram } from 'react-icons/ai';
import logo from '../../public/images/RBG-logo.svg';
import greenWelder2 from '../../public/images/greenwelder2.png';

export default function Banner() {
  const handleScroll = (e) => {
    e.preventDefault();

    const elem = document.getElementById('form');
    elem?.scrollIntoView({
      behavior: 'smooth',
    });
  };

  return (
    <div className="bg-black">
      <div className="flex justify-between flex-row w-full">
        <div className="ml-5 mt-5 ">
          <Image src={logo} height={40} width={75} alt="logo" />
        </div>
        <div className="p-2 bg-gradient-to-b from-gray-900 to-gray-600  rounded-full m-5">
          <a
            href="https://instagram.com/rock_bottom_guild"
            className="text-3xl"
          >
            <AiOutlineInstagram />
          </a>
        </div>
      </div>

      <div className="font-bas mx-auto  flex flex-col md:flex-row-reverse justify-center text-white">
        <div className=" max-h-screen max-w-2xl block">
          <Image
            src={greenWelder2}
            alt="Image of a Welder"
            layout="intrinsic"
            placeholder="blur"
          />
        </div>

        <div className="-mt-20 sm:-mt-0 z-10 md:my-auto  md:block">
          <h1 className="text-7xl ml-5 md:text-9xl bg-gradient-to-r from-emerald-500 to-lime-600 text-transparent hidden bg-clip-text  md:block ">
            Rock <br />
            Bottom <br />
            Guild <br />
          </h1>
          <div className=" ml-5 z-10  text-5xl font-bold">
            <h1 className="text-6xl">
              <span className="text-3xl md:hidden bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-amber-900 to-yellow-300 text-transparent bg-clip-text">
                Rock Bottom Guild{' '}
              </span>{' '}
              <br />
              Custom <br />{' '}
              <span className="bg-gradient-to-r from-indigo-200 via-slate-600 to-indigo-200 text-transparent bg-clip-text inline-block">
                Metal
              </span>{' '}
              Works
            </h1>
          </div>

          <div className="py-4 ">
            <h3 className="ml-5 mt-5 text-4xl">Get Signs & more!</h3>

            <h5 className="text-xl ml-5">Find out what we can do for you</h5>

            <button
              onClick={handleScroll}
              className="text-2xl ml-5 rounded-full px-16 py-1 mt-8 bg-gradient-to-r from-yellow-200 via-yellow-400 to-yellow-700 text-black"
            >
              Contact Us
            </button>
          </div>
        </div>
      </div>
      <hr className="w-11/12 mx-auto my-10" />
    </div>
  );
}
