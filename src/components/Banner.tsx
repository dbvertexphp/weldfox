import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const slides = [
	{ id: 1, image: "/banner1.jpg" },
	{ id: 2, image: "/banner2.jpg" },
];

const containerVariants = {
	hidden: {},
	visible: {
		transition: {
			staggerChildren: 0.3,
		},
	},
};

const childVariants = {
	hidden: { opacity: 0, y: -40 },
	visible: {
		opacity: 1,
		y: 0,
		transition: {
			duration: 0.8,
			ease: "easeOut",
		},
	},
};

const Banner = () => {
	const [currentSlide, setCurrentSlide] = useState(0);
	const [scrollOffset, setScrollOffset] = useState(0);
	const startX = useRef(null);
	const isDragging = useRef(false);

	useEffect(() => {
		const interval = setInterval(() => {
			setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
		}, 3000);
		return () => clearInterval(interval);
	}, []);

	useEffect(() => {
		const handleScroll = () => setScrollOffset(window.scrollY);
		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	const handleDragStart = (e) => {
		startX.current = e.touches ? e.touches[0].clientX : e.clientX;
		isDragging.current = true;
	};

	const handleDragEnd = (e) => {
		if (!isDragging.current) return;
		const endX = e.changedTouches ? e.changedTouches[0].clientX : e.clientX;
		const diff = startX.current - endX;

		if (diff > 50) {
			setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
		} else if (diff < -50) {
			setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
		}
		isDragging.current = false;
	};

	const translateX = Math.sin(scrollOffset / 50) * 50;
	const opacity = 1 - scrollOffset / 200;
	const current = slides[currentSlide];

	return (
		<section
			className="relative h-[600px] sm:h-[650px] md:h-[750px] lg:h-[850px] overflow-hidden px-4 sm:px-6 lg:px-8"
			onMouseDown={handleDragStart}
			onMouseUp={handleDragEnd}
			onTouchStart={handleDragStart}
			onTouchEnd={handleDragEnd}
		>
			{/* Background Image */}
			<div
				className="absolute inset-0 bg-cover bg-center transition-all duration-1000 z-0"
				style={{ backgroundImage: `url('${current.image}')` }}
			/>

			{/* Overlays */}
			<div className="absolute inset-0 bg-[#787878] opacity-30 z-10" />
			<div className="absolute inset-0 bg-black/50 z-20" />

			{/* Content */}
			<motion.div
				variants={containerVariants}
				initial="hidden"
				whileInView="visible"
				viewport={{ once: true }}
				className="relative z-30 w-full max-w-7xl mx-auto pt-[140px] sm:pt-[200px] md:pt-[240px] text-center mt-[100px]"
			>
				<motion.h1
					variants={childVariants}
					className="text-xl sm:text-4xl md:text-5xl lg:text-7xl font-bold text-white uppercase tracking-wide px-2"
					style={{ transform: `translateX(${translateX}px)`, opacity }}
				>
					YES NOW ITS AUTOMATIC & EFFICIENT
				</motion.h1>

				<motion.h2
					variants={childVariants}
					className="mt-3 text-lg sm:text-2xl md:text-5xl text-white font-light px-4"
				>
					HANDYMAN SERVICES
				</motion.h2>

				<motion.div
					variants={childVariants}
					className="mt-[50px] flex flex-col sm:flex-row justify-center items-center gap-4 px-4"
				>
					<Link to="/pages/About-us">
						<button className="relative overflow-hidden group text-white font-semibold px-6 py-3 rounded bg-[#F79D2B]">
							<span className="relative z-10 group-hover:text-[#F79D2B] transition-colors duration-500">
								LEARN MORE
							</span>
							<span className="absolute inset-0 bg-white w-0 group-hover:w-full transition-all duration-500 ease-in-out"></span>
						</button>
					</Link>

					<Link to="/pages/Services/Services">
						<button className="relative overflow-hidden group text-white font-semibold px-6 py-3 rounded border border-white">
							<span className="relative z-10 group-hover:text-[#0f1f3e] transition-colors duration-500">
								OUR SERVICES
							</span>
							<span className="absolute inset-0 bg-white w-0 group-hover:w-full transition-all duration-500 ease-in-out"></span>
						</button>
					</Link>
				</motion.div>
			</motion.div>

			{/* Bottom Menu */}
			<div className="absolute bottom-0 left-0 right-0 z-40">
				<div className="container mx-auto px-4 py-6">
					<div className="flex flex-wrap justify-center items-center gap-4 sm:gap-10 text-white text-sm sm:text-base text-center">
						<Link
							to="/services/rolling-shutters"
							className="cursor-pointer hover:text-[#F79D2B] transition-colors duration-300"
						>
							Rolling Shutters
						</Link>
						<Link
							to="/services/entrance-automation"
							className="cursor-pointer hover:text-[#F79D2B] transition-colors duration-300"
						>
							Entrance Automation
						</Link>
						<Link
							to="/services/general-fabrication"
							className="cursor-pointer hover:text-[#F79D2B] transition-colors duration-300"
						>
							General Fabrication
						</Link>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Banner;
