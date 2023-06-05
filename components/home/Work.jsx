import Card from '../home/Card';

export default function Work() {
  return (
    <div className="bg-gray-900 px-5 py-10 h-fit border-t-[1px] border-white">
      <h1 className="text-3xl md:text-center md:my-4 md:text-5xl">
        What we do:
      </h1>

      <div className="flex justify-center flex-wrap">
        <Card work="Built from Spec Parts" />
        <Card work="General Fabrication" />
        <Card work="Weld Repair" />
        <Card work="Shirts" />
        <Card work="Hitch Signs" />
        <Card work="Wall Signs" />
      </div>
    </div>
  );
}
