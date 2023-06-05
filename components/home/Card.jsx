export default function Card({ work }) {
  return (
    <div className="font-bas h-fit  py-2 w-1/3 p-1 align-middle m-2 text-xl rounded-lg shadow-2xl max-w-xs bg-white">
      <h1 className="text-black text-center">{work}</h1>
    </div>
  );
}
