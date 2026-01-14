import { AnimatePresence, motion } from "framer-motion";
import {
	ArrowRightIcon,
	ChevronLeftIcon,
	ChevronRightIcon,
	ZapIcon,
} from "lucide-react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

// CardiacTEK images
const ECGMonitor = "/backgrounds/advanced.jpg";
const AIAnalysis = "/backgrounds/trusted.png";
const Telemedicine = "/backgrounds/innovate.jpg";

// Slides data
const cardiacTekSlides = [
	{
		title: "Real-Time Cardiac Monitoring",
		subtitle: "AI-Powered Insights",
		description:
			"Monitor your heart health 24/7 using smart wearable devices integrated with AI analysis for early detection of abnormalities.",
		image: ECGMonitor,
		buttonText: "Get Started",
		buttonLink: "/auth",
	},
	{
		title: "Predictive Diagnostics",
		subtitle: "Detect & Prevent",
		description:
			"Our AI algorithms analyze ECG data to predict potential cardiac risks, enabling timely interventions.",
		image: AIAnalysis,
		buttonText: "Learn More",
		buttonLink: "#features",
	},
	{
		title: "Telemedicine Integration",
		subtitle: "Care Anywhere",
		description:
			"Connect with cardiologists remotely for consultations and continuous monitoring without leaving your home.",
		image: Telemedicine,
		buttonText: "See How",
		buttonLink: "#contact",
	},
];

export default function CardiacTekHero() {
	const [[currentSlide, direction], setCurrentSlide] = useState([0, 0]);

	// Auto-slide every 5 seconds
	useEffect(() => {
		const interval = setInterval(() => {
			setCurrentSlide(([prev]) => [(prev + 1) % cardiacTekSlides.length, 1]);
		}, 5000);
		return () => clearInterval(interval);
	}, []);

	const handleNext = () => {
		setCurrentSlide(([prev]) => [(prev + 1) % cardiacTekSlides.length, 1]);
	};

	const handlePrev = () => {
		setCurrentSlide(([prev]) => [
			(prev - 1 + cardiacTekSlides.length) % cardiacTekSlides.length,
			-1,
		]);
	};

	// Variants for sideways sliding
	const slideVariants = {
		enter: (direction: number) => ({
			x: direction > 0 ? 300 : -300,
			opacity: 0,
		}),
		center: {
			x: 0,
			opacity: 1,
		},
		exit: (direction: number) => ({
			x: direction < 0 ? 300 : -300,
			opacity: 0,
		}),
	};

	return (
		<section className="relative w-full h-screen overflow-hidden bg-gray-900 flex items-center pt-14">
			{/* Slide */}
			<AnimatePresence initial={false} custom={direction}>
				<motion.div
					key={currentSlide}
					custom={direction}
					variants={slideVariants}
					initial="enter"
					animate="center"
					exit="exit"
					transition={{ type: "tween", duration: 1 }}
					className="absolute top-14 left-0 right-0 bottom-0 w-full h-full"
					style={{
						backgroundImage: `url(${cardiacTekSlides[currentSlide].image})`,
						backgroundSize: 'cover',
						backgroundPosition: 'center',
						backgroundRepeat: 'no-repeat',
					}}>
					<div className="absolute inset-0 bg-gray-900/70" />
				</motion.div>
			</AnimatePresence>

			{/* Hero Content */}
			<div className="container mx-auto max-w-6xl relative z-10 px-6 flex flex-col lg:flex-row items-center lg:items-start gap-8">
				<div className="lg:w-1/2 text-center lg:text-left mt-10">
					<h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold text-white mb-3 leading-snug animate-fade-in">
						{cardiacTekSlides[currentSlide].title}{" "}
						<span className="text-red-400 font-normal">
							{cardiacTekSlides[currentSlide].subtitle}
						</span>
					</h1>

					<p className="text-base sm:text-lg text-gray-300 mb-5 max-w-md mx-auto lg:mx-0 animate-fade-in">
						{cardiacTekSlides[currentSlide].description}
					</p>

					<div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
						<Link
							to={cardiacTekSlides[currentSlide].buttonLink}
							className="bg-red-600 text-white hover:bg-red-700 font-medium text-sm py-2 px-5 rounded-lg transition-colors duration-300 flex items-center justify-center gap-2 animate-fade-in">
							<ZapIcon className="w-4 h-4" />
							{cardiacTekSlides[currentSlide].buttonText}
						</Link>

						<Link
							to="#features"
							className="border border-gray-400 text-white hover:bg-white hover:text-gray-900 font-medium text-sm py-2 px-5 rounded-lg transition-colors duration-300 flex items-center justify-center gap-2 animate-fade-in">
							<ArrowRightIcon className="w-4 h-4" />
							Learn More
						</Link>
					</div>
				</div>
			</div>

			{/* Navigation Arrows */}
			<button
				onClick={handlePrev}
				className="absolute left-6 top-1/2 transform -translate-y-1/2 p-4 rounded-full hover:opacity-90 backdrop-blur-sm transition-all z-10">
				<ChevronLeftIcon className="h-7 w-7 text-white" />
			</button>
			<button
				onClick={handleNext}
				className="absolute right-6 top-1/2 transform -translate-y-1/2 p-4 rounded-full hover:opacity-90 backdrop-blur-sm transition-all z-10">
				<ChevronRightIcon className="h-7 w-7 text-white" />
			</button>

			{/* Dots Navigation */}
			<div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex gap-3 z-10">
				{cardiacTekSlides.map((_, index) => (
					<div
						key={index}
						onClick={() =>
							setCurrentSlide(([prev]) => [
								index,
								index > currentSlide ? 1 : -1,
							])
						}
						className={`w-4 h-4 rounded-full cursor-pointer ${
							index === currentSlide ? "bg-red-600" : "bg-red-600/50"
						}`}
					/>
				))}
			</div>
		</section>
	);
}
