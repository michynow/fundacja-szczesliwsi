"use client";

import { ChevronLeft } from "@/public/icons/ChevronLeft";
import { ChevronRight } from "@/public/icons/ChevronRight";
import { EmblaCarouselType } from "embla-carousel";
import useEmblaCarousel from "embla-carousel-react";
import { ReactNode, useCallback, useEffect, useState } from "react";

const usePrevNextButtons = (emblaApi?: EmblaCarouselType) => {
  const [prevBtnDisabled, setPrevBtnDisabled] = useState(true);
  const [nextBtnDisabled, setNextBtnDisabled] = useState(true);

  const onPrevButtonClick = useCallback(
    () => emblaApi?.scrollPrev(),
    [emblaApi]
  );
  const onNextButtonClick = useCallback(
    () => emblaApi?.scrollNext(),
    [emblaApi]
  );

  const onSelect = useCallback((api: EmblaCarouselType) => {
    const selected = api.selectedScrollSnap();
    const last = api.scrollSnapList().length - 1;
    setPrevBtnDisabled(selected <= 0);
    setNextBtnDisabled(selected >= last);
  }, []);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect(emblaApi);
    emblaApi
      .on("reInit", onSelect)
      .on("select", onSelect)
      .on("settle", onSelect);
  }, [emblaApi, onSelect]);

  return {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  };
};

export const Carousel = ({ items }: { items: ReactNode[] }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: false,
    align: "start",
    containScroll: "trimSnaps",
    dragFree: false,
    skipSnaps: false,
  });

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaApi);

  return (
    <div className="carousel-wrapper">
      <div className="embla" ref={emblaRef}>
        <div className="embla__container">
          {items.map((item, i) => (
            <div key={i} className="embla__slide">
              {item}
            </div>
          ))}
        </div>
      </div>
      <button
        className="embla__prev"
        disabled={prevBtnDisabled}
        onClick={onPrevButtonClick}
      >
        <ChevronLeft />
      </button>
      <button
        className="embla__next"
        disabled={nextBtnDisabled}
        onClick={onNextButtonClick}
      >
        <ChevronRight />
      </button>
    </div>
  );
};
