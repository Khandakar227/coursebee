import ArrowRight from "@/components/common/icons/ArrowRight";
import Image from "next/image";

const enrolledStudents = [
  { image: "/assets/course/stdnt_1.png" },
  { image: "/assets/course/stdnt_2.png" },
  { image: "/assets/course/stdnt_3.png" },
  { image: "/assets/course/stdnt_4.png" },
];

export default function IntroSection() {
  return (
    <section className="pb-[120px] w-full">
      <div className="grid justify-between items-stretch grid-cols-2 max-w-6xl mx-auto pt-[120px] pb-10 px-2">
        <div className="max-w-[410px]">
          <h1 className="font-semibold font-lora text-[31px] leading-[44px] mb-10">
            Full Stack Web Development with MERN
          </h1>
          <p className="font-inter leading-[24px] mt-5 mb-10">
            Morbi enim bibendum ipsum etiam. Accumsan nulla nibh adipiscing
            ornare etiam. Blandit quisque egestas pretium iaculis. Neque justo
            imperdiet duis enim, ut ultrices malesuada proin. Lacus nunc velit
            donec a et feugiat ut.
          </p>
          <p className="font-anek_bangla leading-[24px] mt-5 mb-4 font-semibold text-[31px]">
            <span className="mr-2">৳৬০০০</span>
            <del className="ml-2 text-neutral-500">৳১০০০০</del>
          </p>
          <div className="flex gap-4 items-center">
            <div className="flex">
              {enrolledStudents.map((student, i) => (
                <img
                  key={`student ${i + 1}`}
                  className={`w-8 h-8 -ml-${i > 0 ? 2 : 0}`}
                  src={student.image}
                  alt="Students"
                />
              ))}
            </div>
            <span className="font-anek_bangla">১২০ জন ছাত্রছাত্রী</span>
          </div>

          <button className="my-2 text-white font-inter py-2 px-4 bg-secondary-700 rounded-lg mt-[30px] justify-center flex gap-2 items-center leading-6">
            <span>Enroll Now</span>
            <ArrowRight className="stroke-white" width={24} height={24} />
          </button>
          <p className="font-anek_bangla leading-6">
            পরবর্তী ব্যাচের ক্লাস শুরু <strong> ১৬ অক্টোবর, ২০২২</strong>
          </p>
        </div>

        <div>
          <Image
            src="assets/course/course_img.svg"
            alt="Course"
            height={420}
            width={528}
          />
        </div>
      </div>

      <div className="max-w-6xl mx-auto flex flex-wrap gap-6 justify-between">
            <div className="grid place-items-center bg-neutral-50 rounded-2xl py-6 w-full max-w-[240px]">
                <p className="font-anek_bangla font-semibold text-[39px] leading-6 text-secondary-500 py-2">২১৬</p>
                <p className="dark:text-secondary-500">সফলতার গল্প</p>
            </div>
            <div className="grid place-items-center bg-neutral-50 rounded-2xl py-6 w-full max-w-[240px]">
                <p className="font-anek_bangla font-semibold text-[39px] leading-6 text-secondary-500 py-2">৫৬</p>
                <p className="dark:text-secondary-500">ঘন্টা ভিডিও</p>
            </div>
            <div className="grid place-items-center bg-neutral-50 rounded-2xl py-6 w-full max-w-[240px]">
                <p className="font-anek_bangla font-semibold text-[39px] leading-6 text-secondary-500 py-2">০৩</p>
                <p className="dark:text-secondary-500">টি বড় প্রোজেক্ট</p>
            </div>
            <div className="grid place-items-center bg-neutral-50 rounded-2xl py-6 w-full max-w-[240px]">
                <p className="font-anek_bangla font-semibold text-[39px] leading-6 text-secondary-500 py-2">২৬</p>
                <p className="dark:text-secondary-500">টি পরীক্ষা</p>
            </div>
      </div>
    </section>
  );
}
