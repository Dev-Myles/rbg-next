import Image from 'next/image';
import Iowa from '../../public/images/Iowa.svg';

export default function About() {
  return (
    <div className="bg-[#041f13] px-5 py-10 h-fit border-t-[1px] border-white">
      <h1 className="text-3xl md:text-center md:my-4 md:text-5xl">About Us</h1>
      <p className="font-quest text-xl max-w-[50ch] md:text-center md:mx-auto md:text-2xl">
        Rock Bottom Guild is based out of Iowa. We take inspiration from works
        by West Coast Customs, Orange County Choppers, and our blue collar grit
        to create one of a kind, never massed produced pieces.
      </p>

      <div className="max-w-xs mx-auto my-4">
        <Image src={Iowa} alt="Iowa pic" />
      </div>
    </div>
  );
}
