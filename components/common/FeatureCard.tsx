import { ReactNode } from "react";

const FeatureCard = ({
    icon,
    heading,
    description,
    className,
  }: {
    icon: ReactNode;
    heading: ReactNode;
    description: ReactNode;
    className?: string;
  }) => {
    return (
      <div className={`rounded-xl bg-white p-6 ${className}`}>
        {icon}
        <h3 className="font-inter text-[20px] font-medium mb-4 leading-5">
          {heading}
        </h3>
        <p className="font-inter leading-6 grid">{description}</p>
      </div>
    );
  };

  export default FeatureCard;