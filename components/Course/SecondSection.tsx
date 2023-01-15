import Briefcase from "../common/icons/Briefcase";
import ClockFilled from "../common/icons/ClockFilled";
import Star from "../common/icons/Star";
import Ticket from "../common/icons/Ticket";

export default function SecondSection() {
  return (
    <section className="py-[120px] max-w-6xl mx-auto">
      <h2 className="font-anek_bangla font-semibold text-[31px] leading-10 mb-6">কোর্সটির বিশেষত্ব</h2>
      <div className="flex justify-between items-center flex-wrap">
        <div className="max-w-[240px] max-h-[160px] w-full py-4 px-6 rounded-2xl shadow-xl text-center">
        <ClockFilled
              width={48}
              height={48}
              className="mx-auto fill-secondary-300 bg-secondary-50 group-hover:fill-secondary-50 group-hover:bg-secondary-500 transition-all p-3 rounded-lg mb-6"
            />
          <p className="font-anek_bangla text-xl leading-7">বড় কোম্পানিতে <strong>জব প্লেসমেন্ট</strong> কোচ</p>
        </div>
        <div className="max-w-[240px] max-h-[160px] w-full py-4 px-6 rounded-2xl shadow-xl text-center">
        <Ticket
              width={48}
              height={48}
              className="mx-auto fill-secondary-300 bg-secondary-50 group-hover:fill-secondary-50 group-hover:bg-secondary-500 transition-all p-3 rounded-lg mb-6"
            />
          <p className="font-anek_bangla text-xl leading-7">বড় কোম্পানিতে <strong>জব প্লেসমেন্ট</strong> কোচ</p>
        </div>
        <div className="max-w-[240px] max-h-[160px] w-full py-4 px-6 rounded-2xl shadow-xl text-center">
        <Star
              width={48}
              height={48}
              className="mx-auto fill-secondary-300 bg-secondary-50 group-hover:fill-secondary-50 group-hover:bg-secondary-500 transition-all p-3 rounded-lg mb-6"
            />
          <p className="font-anek_bangla text-xl leading-7">বড় কোম্পানিতে <strong>জব প্লেসমেন্ট</strong> কোচ</p>
        </div>
        <div className="max-w-[240px] max-h-[160px] w-full py-4 px-6 rounded-2xl shadow-xl text-center">
        <Briefcase
              width={48}
              height={48}
              className="mx-auto fill-secondary-300 bg-secondary-50 group-hover:fill-secondary-50 group-hover:bg-secondary-500 transition-all p-3 rounded-lg mb-6"
            />
          <p className="font-anek_bangla text-xl leading-7">বড় কোম্পানিতে <strong>জব প্লেসমেন্ট</strong> কোচ</p>
        </div>
      </div>
    </section>
  )
}
