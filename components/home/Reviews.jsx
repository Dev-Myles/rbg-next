import Image from 'next/image';
import { AiFillStar } from 'react-icons/ai';
import { FcGoogle } from 'react-icons/fc';
import welder from '../../public/images/welder-pic.svg';

export default function Reviews() {
  return (
    <div className="[&>q]:ml-5 [&>q]:italic font-bold pb-12 p-3 font-quest [&>q]:max-w-prose ml-5 md:text-xl">
      <h1 className="text-3xl font-bas md:text-5xl">Customer Reviews:</h1>
      <br />
      <q>
        Professional quality. Built to last. Endless possibilities and a whole
        lot of fun.
      </q>
      <br />
      <br />
      <q>
        I have owned several different benches... cookie cutter, boring design.
        Then I found Rock Bottom Guild.
      </q>

      <div className="flex items-center justify-center mt-5 font-bas flex-row">
        <div className="max-w-[200px] my-4">
          <Image src={welder} alt="Welder pic" />
          <h6 className="text-center bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-amber-900 text-transparent bg-clip-text text-xs to-yellow-300 block ">
            Rock Bottom Guild
          </h6>
        </div>
        <div className="flex w-fit flex-row items-center mt-5">
          <span className="mx-3">On</span>
          <FcGoogle size={40} />:<span className="text-xl ml-2"> 5.0</span>
          <div className="text-yellow-500 flex flex-row">
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
          </div>
        </div>
      </div>
    </div>
  );
}
