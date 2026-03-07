// @ts-ignore
import { Splide, SplideTrack, SplideSlide } from "@splidejs/react-splide";
import { AutoScroll } from "@splidejs/splide-extension-auto-scroll";
import "@splidejs/splide/dist/css/splide.min.css";
import Item from "./Item";

import { reviews } from "@/mocks/reviews";

type ReviewsProps = {};

const Reviews = ({}: ReviewsProps) => {
    const pairs = [];

    for (let i = 0; i < reviews.length; i += 2) {
        pairs.push([reviews[i], reviews[i + 1]]);
    }

    return (
        <div className="pt-22 pb-24 xl:pb-22 md:pt-12 md:pb-6">
            <div className="container">
                <div className="mb-12 xl:mb-8 md:mb-4">
                    <div className="stage">Testimonial</div>
                    <div className="text-h2 xl:text-h3 md:text-h4">
                        What Customer Says
                    </div>
                </div>
                <div className="relative py-6 overflow-hidden before:absolute before:top-0 before:left-0 before:bottom-0 before:z-2 before:w-1/5 before:bg-gradient-to-r before:from-white before:to-white/0 after:absolute after:top-0 after:right-0 after:bottom-0 after:z-2 after:w-1/5 after:bg-gradient-to-l after:from-white after:to-white/0 lg:-mx-12 lg:before:w-24 lg:after:w-24 md:-mx-6 md:before:w-18 md:after:w-18">
                    <Splide
                        options={{
                            type: "loop",
                            gap: "2rem",
                            drag: "free",
                            arrows: false,
                            pagination: false,
                            autoWidth: true,
                            autoScroll: {
                                pauseOnHover: false,
                                pauseOnFocus: false,
                                rewind: false,
                                speed: 0.3,
                            },
                            breakpoints: {
                                1179: {
                                    gap: "1.5rem",
                                },
                            },
                        }}
                        extensions={{ AutoScroll }}
                        hasTrack={false}
                    >
                        <SplideTrack className="!overflow-visible">
                            {pairs.map((review, index) => (
                                <SplideSlide
                                    className="w-[22.875rem]"
                                    key={index}
                                >
                                    {review[0] && <Item item={review[0]} />}
                                    {review[1] && <Item item={review[1]} />}
                                </SplideSlide>
                            ))}
                        </SplideTrack>
                    </Splide>
                </div>
            </div>
        </div>
    );
};

export default Reviews;
