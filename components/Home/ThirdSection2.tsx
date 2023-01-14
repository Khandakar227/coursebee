import Image from "next/image";

export default function ThirdSection2() {
  return (
    <section className="max-w-6xl mx-auto py-[60px] grid grid-cols-2 gap-4 justify-center items-stretch">
      <div>
        <h2 className="font-lora text-[31px] leading-[44px] font-semibold max-w-[416px] text-neutral-900 mb-4">
        Freelancers
        <br/>Development
        </h2>
        <p className="font-inter leading-6 max-w-[418px]">
          Nulla pretium ut risus, porta. Sed aliquet scelerisque urna et nunc.
          Odio arcu semper nunc lacus eros nascetur ac. At faucibus et nisl mi
          sed nisl. Non tempus tempor auctor lectus placerat velit. Vel lacus,
          eu morbi cursus tellus.
        </p>
      </div>
      <div className="flex justify-end">
        <Image
          className=""
          src="assets/home/section2_img.svg"
          alt="Section 2"
          width={418}
          height={274}
        />
      </div>
    </section>
  );
}
