import { Swiper, SwiperSlide } from 'swiper/react';
import PropTypes from 'prop-types';

function Carousel({ children }) {
	return (
		<Swiper
			grabCursor={true}
			loop={true}
			slidesPerView={2}
			spaceBetween={20}
			breakpoints={{
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
			}}
		>
			{children}
		</Swiper>
	);
}

Carousel.propTypes = {
	children: PropTypes.any.isRequired,
};

Carousel.Slide = function CarouselSlide({ children, ...restProps }) {
	return <SwiperSlide {...restProps}>{children}</SwiperSlide>;
};

Carousel.Slide.displayName = 'SwiperSlide';

Carousel.Slide.propTypes = {
	children: PropTypes.any.isRequired,
};

export default Carousel;
