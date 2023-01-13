import Carousel, { CarouselItem } from "@/components/Home/Carousel";
import FifthSection from "@/components/Home/FifthSection";
import FourthSection from "@/components/Home/FourthSection";
import SecondSection from "@/components/Home/SecondSection";
import SliderContent from "@/components/Home/SliderContent";
import ThirdSection from "@/components/Home/ThirdSection";
import CourseCard from "@/components/common/CourseCard";
import ArrowRight from "@/components/common/icons/ArrowRight";
import Head from "next/head";
import Image from "next/image";

const courses = [
  {image:"assets/home/card_img.svg", title:"Fullstack web development with MERN",starting_time:"১৬ অক্টোবর শুরু", price:"৳৬০০০", previous_price:"৳৮৫০০"},
  {image:"assets/home/card_img.svg", title:"Complete Python Bootcamp Zero to Hero ",starting_time:"১৬ অক্টোবর শুরু", price:"৳৬০০০", previous_price:"৳৮৫০০"},
  {image:"assets/home/card_img.svg", title:"Wordpress for Beginners",starting_time:"১৬ অক্টোবর শুরু", price:"৳৬০০০", previous_price:"৳৮৫০০"},
  {image:"assets/home/card_img.svg", title:"Microsoft excel Beginners to Advanced",starting_time:"১৬ অক্টোবর শুরু", price:"৳৬০০০", previous_price:"৳৮৫০০"},
]

export default function Home() {
  return (
    <>
      <Head>
        <title>Course bee</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/assets/favicon.png" />
      </Head>
      <main>
        <Carousel>
          <CarouselItem>
            <SliderContent />
          </CarouselItem>
          <CarouselItem>
            <SliderContent />
          </CarouselItem>
          <CarouselItem>
            <SliderContent />
          </CarouselItem>
          <CarouselItem>
            <SliderContent />
          </CarouselItem>
          <CarouselItem>
            <SliderContent />
          </CarouselItem>
          <CarouselItem>
            <SliderContent />
          </CarouselItem>
        </Carousel>
        <div className="mx-auto pt-[120px]">
          <section className="max-w-6xl mx-auto">
            <div className="mb-[24px] flex justify-between">
              <h2 className="font-bold text-neutral-900 font-lora text-[39px] leading-[52px]">
                Our Courses
              </h2>
              <div className="text-secondary-500 font-inter font-bold">
                <button className="flex gap-2 items-center">
                  <span>View All Courses</span>
                  <ArrowRight
                    className="w-4 stroke-secondary-700"
                    width={16}
                    height={16}
                  />
                </button>
              </div>
            </div>

            <div className="pb-[120px] flex gap-6 justify-between items-center">
              {
                courses.map(course => <CourseCard
                  key={course.title}
                  image={course.image}
                  title={course.title}
                  starting_time={course.starting_time}
                  price={course.price}
                  previous_price={course.previous_price}
                />)
              }
            </div>
          </section>
          
          <SecondSection />
          <ThirdSection />
          <FourthSection />
          <FifthSection />
        </div>
      </main>
    </>
  );
}
