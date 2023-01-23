import { ReactNode } from "react";
import Briefcase from "../common/icons/Briefcase";
import Category from "../common/icons/Category";
import Send from "../common/icons/Send";
import Play from "../common/icons/Play";
import Star from "../common/icons/Star";
import FeatureCard from "../common/FeatureCard";

export default function FourthSection() {
  return (
    <section className="bg-neutral-50 dark:bg-neutral-800 py-[120px]">
      <h2 className="font-lora text-[40px] leading-[52px] font-semibold text-center mb-10">
        Why Coursebee
      </h2>
      <div className="max-w-6xl mx-auto grid gap-6 justify-center items-stretch grid-cols-3">
        <FeatureCard
          className="dark:bg-neutral-900 group dark:hover:bg-secondary-900 hover:bg-secondary-900 hover:text-white transition-all"
          icon={
            <Briefcase
              width={48}
              height={48}
              className="fill-secondary-300 bg-secondary-50 group-hover:fill-secondary-50 group-hover:bg-secondary-500 transition-all p-3 rounded-lg mb-4"
            />
          }
          heading={
            <>
              Posuere orci <span className="font-extrabold">elit sapien</span>
              bibendum eu dui.
            </>
          }
          description={
            "Lorem dui quam tincidunt id eget. Eget cursus proin adipiscing nisi ultrices amet."
          }
        />
        <FeatureCard
          className="dark:bg-neutral-900 group dark:hover:bg-secondary-900 hover:bg-secondary-900 hover:text-white transition-all"
          icon={
            <Category
              width={48}
              height={48}
              className="fill-secondary-300 bg-secondary-50 group-hover:fill-secondary-50 group-hover:bg-secondary-500 transition-all p-3 rounded-lg mb-4"
            />
          }
          heading={
            <>
              Step-by-step
              <span className="font-extrabold">learning by doing</span>
              approach.
            </>
          }
          description={
            "Quis amet velit sed sed vel vulputate iaculis donec. Dolor diam vestibulum, amet, cursus."
          }
        />
        <FeatureCard
          className="row-span-2 dark:bg-neutral-900 group dark:hover:bg-secondary-900 hover:bg-secondary-900 hover:text-white transition-all"
          icon={
            <Star
              width={48}
              height={48}
              className="fill-secondary-300 bg-secondary-50 group-hover:fill-secondary-50 group-hover:bg-secondary-500 transition-all p-3 rounded-lg mb-4"
            />
          }
          heading={
            <>
              <span className="font-extrabold">Pellentesque</span> mattis
              rhoncus quis <span className="font-extrabold">sagittis</span>.
            </>
          }
          description={
            <>
              <span className="pb-4">
                Non leo in enim faucibus fringilla euismod nisl integer. Neque,
                semper elementum tempor adipiscing purus, maecenas eget.
              </span>
              <span className="pb-4">
                Adipiscing mi vulputate non posuere sit. Vel velit, feugiat a
                vulputate vulputate curabitur netus. Praesent ante ut fames quis
                consectetur ut placerat mauris.
              </span>
              <span className="pb-4">
                Duis tincidunt diam sollicitudin dignissim massa. Varius lectus
                sed quis ultricies neque.
              </span>
            </>
          }
        />
        <FeatureCard
          className="dark:bg-neutral-900 group dark:hover:bg-secondary-900 hover:bg-secondary-900 hover:text-white transition-all"
          icon={
            <Send
              width={48}
              height={48}
              className="fill-secondary-300 bg-secondary-50 group-hover:fill-secondary-50 group-hover:bg-secondary-500 transition-all p-3 rounded-lg mb-4"
            />
          }
          heading={
            <>
              Multiple assignments and
              <span className="font-extrabold">Real-time projects</span>
            </>
          }
          description={
            "Duis tincidunt diam sollicitudin dignissim massa. Varius lectus sed quis ultricies neque."
          }
        />
        <FeatureCard
          className="dark:bg-neutral-900 group dark:hover:bg-secondary-900 hover:bg-secondary-900 hover:text-white transition-all"
          icon={
            <Play
              width={48}
              height={48}
              className="fill-secondary-300 bg-secondary-50 group-hover:fill-secondary-50 group-hover:bg-secondary-500 transition-all p-3 rounded-lg mb-4"
            />
          }
          heading={
            <>
              Live support from <span className="font-extrabold">experts</span>.
            </>
          }
          description={
            "Urna rutrum sit duis cursus eu tortor leo. Vulputate mi, mi vitae pretium nascetur tristique tortor cursus."
          }
        />
      </div>
    </section>
  );
}

