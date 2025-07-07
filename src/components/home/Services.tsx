import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import servicesData from './servicesData';
import { slideUpVariants, zoomInVariants } from '../animation';

const Services = () => {
	const [showAll, setShowAll] = useState(false);
	const [expandedCardIndex, setExpandedCardIndex] = useState(null);

	const visibleCards = showAll ? servicesData : servicesData.slice(0, 6);

	const toggleReadMore = (index) => {
		setExpandedCardIndex(expandedCardIndex === index ? null : index);
	};

	return (
		<section id="services" className="min-h-screen py-16">
			<div className="container mx-auto px-4">
				<motion.div
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true }}
					variants={slideUpVariants}
					className="text-center mb-10"
				>
					<h1 className="text-xl font-medium uppercase tracking-wider text-drreddys-blue">Services</h1>
					<h3 className="text-3xl md:text-4xl font-bold mt-2">Explore Our Expert Fabrication Work</h3>
					<p className="text-lg text-gray-600 mt-4 max-w-3xl mx-auto">
						Discover top-quality metal fabrication solutions, crafted to blend innovation, durability, and design. From staircases to skylights — we build what matters.
					</p>
				</motion.div>

				<motion.div
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true }}
					variants={zoomInVariants}
					className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
				>
					{visibleCards.map((card, index) => (
						<div key={index} className="bg-white rounded-lg shadow hover:shadow-lg transition p-4">
							<img
								src={card.image}
								alt={card.title}
								className="w-full h-60 object-cover rounded mb-3"
							/>
							<h4 className="text-lg font-semibold text-drreddys-blue mb-1">{card.title}</h4>
							<p className="text-sm text-gray-600">
								{expandedCardIndex === index || card.description.length <= 60
									? card.description
									: `${card.description.slice(0, 60)}...`}
							</p>
							{card.description.length > 60 && (
								<button
									onClick={() => toggleReadMore(index)}
									className="text-sm text-blue-600 hover:underline mt-1"
								>
									{expandedCardIndex === index ? 'Read less' : 'Read more'}
								</button>
							)}
						</div>
					))}
				</motion.div>

				{!showAll && servicesData.length > 6 && (
					<motion.div
						initial="hidden"
						whileInView="visible"
						viewport={{ once: true }}
						variants={zoomInVariants}
						className="text-center mt-8"
					>
						<button
							onClick={() => setShowAll(true)}
							className="inline-flex items-center px-6 py-3 bg-drreddys-blue text-white font-medium rounded hover:bg-blue-800 transition-colors"
						>
							View All Services
							<ArrowRight size={16} className="ml-2" />
						</button>
					</motion.div>
				)}
			</div>
		</section>
	);
};

export default Services;
