import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { ReactNode, useState } from "react";

function Carousel({ children }: { children: ReactNode | ReactNode[] }) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const [sliderRef, instanceRef] = useKeenSlider({
    initial: 0,
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
    created() {
      setLoaded(true);
    },
  });

  return (
    <>
      <div className="navigation-wrapper relative">
        <div ref={sliderRef} className="keen-slider">
          {children}
        </div>
      </div>

      {loaded && instanceRef.current && (
        <div className="flex gap-2 justify-center items-center -translate-y-20">
          {[
            ...Array(instanceRef.current.track.details.slides.length).keys(),
          ].map((idx) => {
            return (
              <button
                key={idx}
                onClick={() => {
                  instanceRef.current?.moveToIdx(idx);
                }}
                className={
                  "rounded-full p-1" +
                  (currentSlide === idx
                    ? " bg-white border-neutral-700"
                    : " bg-neutral-700")
                }
              ></button>
            );
          })}
        </div>
      )}
    </>
  );
}

export const CarouselItem = ({
  children,
}: {
  children: ReactNode | ReactNode[];
}) => {
  return <div className="keen-slider__slide">{children}</div>;
};
export default Carousel;
