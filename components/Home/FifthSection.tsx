import Image from "next/image";

export default function FifthSection() {
  return (
    <section className="max-w-6xl mx-auto py-[120px]">
        <h2 className="text-center font-semibold mb-10 font-lora text-[39px] leading-[52px]"> Affiliated Companies </h2>
        <div className="flex flex-wrap justify-between items-center">
            <Image src="assets/home/affiliated_companies/sheba.svg" width={200} height={64} alt="Sheba.xyz" />
            <Image src="assets/home/affiliated_companies/banglalink.svg" width={200} height={64} alt="Banglalink" />
            <Image src="assets/home/affiliated_companies/bkash.svg" width={200} height={64} alt="Bkash" />
            <Image src="assets/home/affiliated_companies/samsung.svg" width={200} height={64} alt="Samsung" />
        </div>
    </section>
  )
}
