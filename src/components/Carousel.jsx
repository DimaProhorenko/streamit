import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import PropTypes from 'prop-types';
import { Navigation } from 'swiper/modules';

function Carousel({ children, settings = {}, ...restProps }) {
	const swiperRef = useRef(null);

	const $handlePrevClick = () => {
		swiperRef?.current.slidePrev();
	};
	const $handleNextClick = () => {
		swiperRef?.current.slideNext();
	};

	const swiperSettings = {
		modules: [Navigation],
		grabCursor: true,
		loop: true,
		slidesPerView: 2,
		spaceBetween: 20,
		breakpoints: {
			640: {
				slidesPerView: 3,
			},
			920: {
				slidesPerView: 4,
			},
			1020: {
				slidesPerView: 5,
			},
			1220: {
				slidesPerView: 6,
			},
		},
		...settings,
	};

	return (
		<Swiper
			{...swiperSettings}
			className="relative"
			ref={swiperRef}
			onBeforeInit={(swiper) => {
				swiperRef.current = swiper;
			}}
			{...restProps}
		>
			{React.Children.map(children, (child) => {
				if (React.isValidElement(child)) {
					return React.cloneElement(child, {
						$handlePrevClick,
						$handleNextClick,
					});
				}
				return child;
			})}
		</Swiper>
	);
}

Carousel.propTypes = {
	children: PropTypes.any.isRequired,
	settings: PropTypes.object,
};

Carousel.Slide = function CarouselSlide({ children }) {
	return <SwiperSlide>{children}</SwiperSlide>;
};

Carousel.Slide.displayName = 'SwiperSlide';

Carousel.Slide.propTypes = {
	children: PropTypes.any.isRequired,
};

Carousel.Button = function CarouselButton({
	children,
	className,
	handleClick,
}) {
	return (
		<button
			className={`${className} w-8 h-8 lg:w-10 lg:h-10 rounded-full bg-black bg-opacity-30 text-white border border-white flex items-center justify-center hover:bg-white hover:text-black`}
			onClick={handleClick}
		>
			{children}
		</button>
	);
};

Carousel.Button.propTypes = {
	children: PropTypes.any.isRequired,
	className: PropTypes.string,
	handleClick: PropTypes.func,
};

Carousel.Prev = function CarouselPrev({ $handlePrevClick, ...restProps }) {
	return (
		<Carousel.Button
			className="absolute top-1/2 left-1 z-10 -translate-y-1/2"
			handleClick={$handlePrevClick}
			{...restProps}
		>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				fill="none"
				viewBox="0 0 24 24"
				strokeWidth={1.5}
				stroke="currentColor"
				className="w-6 h-6"
			>
				<path
					strokeLinecap="round"
					strokeLinejoin="round"
					d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
				/>
			</svg>
		</Carousel.Button>
	);
};

Carousel.Prev.propTypes = {
	$handlePrevClick: PropTypes.func,
};

Carousel.Next = function CarouselNext({ $handleNextClick, ...restProps }) {
	return (
		<Carousel.Button
			className="absolute top-1/2 right-1 z-10 -translate-y-1/2"
			handleClick={$handleNextClick}
			{...restProps}
		>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				fill="none"
				viewBox="0 0 24 24"
				strokeWidth={1.5}
				stroke="currentColor"
				className="w-6 h-6"
			>
				<path
					strokeLinecap="round"
					strokeLinejoin="round"
					d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
				/>
			</svg>
		</Carousel.Button>
	);
};

Carousel.Next.propTypes = {
	$handleNextClick: PropTypes.func,
};

export default Carousel;
