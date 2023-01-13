import Image from "next/image";
import ArrowRight from "./icons/ArrowRight";
import Clock from "./icons/Clock";

export default function CourseCard({
  image,
  title,
  starting_time,
  price,
  previous_price,
}: {
  image: string;
  title: string;
  starting_time: string;
  price: string;
  previous_price: string;
}) {
  return (
    <div className="card shadow-xl rounded-xl">
      <Image className="rounded-xl" src={image} alt={title} height={160} width={240} />
      <div className="p-4 pb-6">
        <h1 className="font-bold leading-6 font-inter text-neutral-900 mb-[10px]">
          {title}
        </h1>
        <p className="text-neutral-700 font-anek_bangla leading-5 text-sm mb-4 flex gap-2">
          <Clock />
          <span>{starting_time}</span>
        </p>
        <p className="flex items-center gap-2 mb-4">
          <span className="text-neutral-900 font-bold font-anek_bangla text-xl">{price}</span>
          <del className="text-neutral-500 font-bold font-anek_bangla text-xl">{previous_price}</del>
        </p>
          <button className="w-full text-secondary-700 bg-secondary-50 py-2 px-4 rounded-lg leading-6 justify-center flex gap-2 items-center">
            <span>কোর্সের বিস্তারিত</span>
            <ArrowRight className="stroke-secondary-700" width={24} height={24}/>
          </button>
      </div>
    </div>
  );
}
