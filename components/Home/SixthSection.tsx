import Image from "next/image";
import { ReactNode, useEffect, useRef, useState } from "react";
import ArrowRight from "../common/icons/ArrowRight";
import ArrowLeft from "../common/icons/ArrowLeft";

type Expert = {
  image: string;
  title: string;
  company: string;
  position: string;
  company_logo?: ReactNode;
};

export default function SixthSection({ experts = [] }: { experts: Expert[] }) {
  const srollElement = useRef<HTMLDivElement>({} as HTMLDivElement);
  const [containerHeight, setHeight] = useState(0);

  useEffect(() => {
    setHeight(srollElement.current?.clientHeight);
  }, []);

  return (
    <section className="py-[120px]">
      <h2 className="max-w-6xl mx-auto mb-6 font-lora text-[39px] leading-[52px]">
        Connecting <strong>Industrial Experts </strong> <br />
        through our courses
      </h2>
      <div className="relative max-w-7xl mx-auto">
        <button className="p-4 rounded-full border border-neutral-500 bg-white top-1/2 left-0 absolute shadow-md">
          <ArrowLeft className="hover:stroke-secondary-500" stroke="#A9B1BC" width={24} height={24} />
        </button>
        <div
          className="overflow-hidden"
          style={{ height: containerHeight || "100%" }}
        >
          <div
            className="flex gap-6 overflow-x-scroll w-full h-full box-content pb-6 max-w-6xl mx-auto px-20"
            ref={srollElement}
          >
            {experts.length
              ? experts.map((expert, i) => (
                  <Card key={`${i} ${expert.title}`} {...expert} />
                ))
              : ""}
          </div>
        </div>
        <button className="p-4 rounded-full border border-neutral-500 bg-white top-1/2 right-0 absolute shadow-md">
          <ArrowRight className="hover:stroke-secondary-500" stroke="#A9B1BC" width={24} height={24} />
        </button>
      </div>
    </section>
  );
}

const Card = ({ image, title, company, position, company_logo }: Expert) => {
  return (
    <div className="grid overflow-hidden rounded-xl shadow-lg min-w-max">
      <Image src={image} alt={title} width={240} height={160} />
      <div className="p-4">
        <h4 className="font-inter font-bold text-xl leading-7 mb-2">{title}</h4>
        <p className="flex gap-4 items-center">
          {company_logo}
          <span className="leading-6 font-semibold">{company}</span>
        </p>
        <p className="leading-5 text-neutral-700 text-sm">{position}</p>
      </div>
    </div>
  );
};
