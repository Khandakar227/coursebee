import Image from "next/image";
import ArrowRight from "../common/icons/ArrowRight";
import Link from "next/link";

export default function SliderContent() {
  return (
    <div className="bg-neutral-800 pb-[104px] w-full">
    <div className="grid justify-between items-stretch grid-cols-2 max-w-6xl mx-auto py-[80px] px-2">
      <div className="max-w-[410px]">
        <h1 className="font-semibold text-white font-lora text-[39px] leading-[52px] mb-5">
          Sed eget amet aliquet vulputate lobortis ac, arcu odio duis.
        </h1>
        <p className="text-white font-lora text-base leading-[24px] mt-5 mb-[30px]">
        Aliquet condimentum morbi netus sociis hac pharetra cras lorem odio. Nunc, sagittis, massa venenatis ac tristique donec purus pretium nisi. Cursus facilisis vehicula proin eget lacus, diam tortor at. Volutpat orci pretium lectus duis fusce pharetra leo quis. In a, id nisi massa aliquam.
        </p>
        <Link href='/course'>
          <button className="font-inter py-2 px-4 bg-secondary-700 rounded-lg text-white mt-[30px] justify-center flex gap-2 items-center">
            <span>View courses</span>
            <ArrowRight className="stroke-white" width={24} height={24}/>
          </button>
        </Link>
      </div>

      <div> 
        <Image src="assets/home/hero_img.svg" alt="Hero section" height={420} width={528}/>
      </div>
    </div>
  </div>
  )
}
