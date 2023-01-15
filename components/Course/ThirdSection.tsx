import FeatureCard from "../common/FeatureCard";
import Category from "../common/icons/Category";
import Chat from "../common/icons/Chat";
import Graph from "../common/icons/Graph";
import Play from "../common/icons/Play";
import Ticket from "../common/icons/Ticket";

export default function ThirdSection() {
  return (
    <section className="bg-neutral-50 py-[120px] font-inter">
      <div className="max-w-6xl mx-auto">
        <h2 className="font-anek_bangla font-semibold text-center pb-10 text-[31px] leading-10"> এই কোর্স থেকে যা যা শিখতে পারবেন </h2>

        <div className="grid sm:grid-col-2 md:grid-cols-3 gap-10 justify-between items-center">
          <FeatureCard className="group hover:bg-secondary-900 hover:text-white transition-all shadow-sm"
            icon={
              <Category
                width={48}
                height={48}
                className="fill-secondary-300 bg-secondary-50 group-hover:fill-secondary-50 group-hover:bg-secondary-500 transition-all p-3 rounded-lg mb-4"
              />
            }
            heading={<><span className="font-extrabold">Bootstrap</span> এর খুটিনাটি</>}
            description={"Quis amet velit sed sed vel vulputate iaculis donec. Dolor diam vestibulum, amet, cursus."}
          />

          <FeatureCard className="group hover:bg-secondary-900 hover:text-white transition-all shadow-sm"
            icon={
              <Category
                width={48}
                height={48}
                className="fill-secondary-300 bg-secondary-50 group-hover:fill-secondary-50 group-hover:bg-secondary-500 transition-all p-3 rounded-lg mb-4"
              />
            }
            heading={<><span className="font-extrabold">Javascript</span> এর এডভান্সড</>}
            description={"Quis amet velit sed sed vel vulputate iaculis donec. Dolor diam vestibulum, amet, cursus."}
          />
          <FeatureCard className="group hover:bg-secondary-900 hover:text-white transition-all shadow-sm"
            icon={
              <Graph
                width={48}
                height={48}
                className="fill-secondary-300 bg-secondary-50 group-hover:fill-secondary-50 group-hover:bg-secondary-500 transition-all p-3 rounded-lg mb-4"
              />
            }
            heading={<>HTML, CSS দিয়ে <span className="font-extrabold">ওয়েবসাইট</span></>}
            description={"Quis amet velit sed sed vel vulputate iaculis donec. Dolor diam vestibulum, amet, cursus."}
          />

          <FeatureCard className="group hover:bg-secondary-900 hover:text-white transition-all shadow-sm"
            icon={
              <Chat
                width={48}
                height={48}
                className="fill-secondary-300 bg-secondary-50 group-hover:fill-secondary-50 group-hover:bg-secondary-500 transition-all p-3 rounded-lg mb-4"
              />
            }
            heading={<><span className="font-extrabold">Messaging</span> Application Build</>}
            description={"Quis amet velit sed sed vel vulputate iaculis donec. Dolor diam vestibulum, amet, cursus."}
          />
          <FeatureCard className="group hover:bg-secondary-900 hover:text-white transition-all shadow-sm"
            icon={
              <Play
                width={48}
                height={48}
                className="fill-secondary-300 bg-secondary-50 group-hover:fill-secondary-50 group-hover:bg-secondary-500 transition-all p-3 rounded-lg mb-4"
              />
            }
            heading={<><span className="font-extrabold">Live Project</span> তৈরি</>}
            description={"Quis amet velit sed sed vel vulputate iaculis donec. Dolor diam vestibulum, amet, cursus."}
          />
          <FeatureCard className="group hover:bg-secondary-900 hover:text-white transition-all shadow-sm"
            icon={
              <Ticket
                width={48}
                height={48}
                className="fill-secondary-300 bg-secondary-50 group-hover:fill-secondary-50 group-hover:bg-secondary-500 transition-all p-3 rounded-lg mb-4"
              />
            }
            heading={<><span className="font-extrabold">Firebase</span> Authentication</>}
            description={"Quis amet velit sed sed vel vulputate iaculis donec. Dolor diam vestibulum, amet, cursus."}
          />
        </div>
      </div>
    </section>
  )
}
