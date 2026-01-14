import { motion } from "framer-motion";
import {
	ActivityIcon,
	ArrowRightIcon,
	ChevronDownIcon,
	ClockIcon,
	HeartOff,
	ShieldIcon,
	UserIcon,
	UsersIcon,
	XIcon,
} from "lucide-react";
import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

const motionVariants = {
	fadeInUp: {
		initial: { opacity: 0, y: 30 },
		animate: { opacity: 1, y: 0 },
		transition: { duration: 0.6 },
	},
	fadeIn: {
		initial: { opacity: 0 },
		animate: { opacity: 1 },
		transition: { duration: 0.6 },
	},
	staggerContainer: {
		animate: {
			transition: {
				staggerChildren: 0.2,
			},
		},
	},
	staggerItem: {
		initial: { opacity: 0, y: 50 },
		animate: { opacity: 1, y: 0 },
		transition: { duration: 0.6 },
	},
	zoomIn: {
		initial: { opacity: 0, scale: 0.9 },
		animate: { opacity: 1, scale: 1 },
		transition: { duration: 0.6 },
	},
};

import CardiacTekHero from "../../components/Homepage/CardiacTekHero";
import Navbar from "../../components/Homepage/Navbar";
import RequestDemoModal from "../../components/Homepage/RequestDemoModal";
import "../../styles/homepage.css";

interface LazyImageProps {
	src: string;
	alt: string;
	className?: string;
	width: number;
	height: number;
	eager?: boolean;
}

const LazyImage: React.FC<LazyImageProps> = ({
	src,
	alt,
	className = "",
	width,
	height,
	eager = false,
}) => {
	const [isLoaded, setIsLoaded] = useState(false);
	const imgRef = useRef<HTMLImageElement>(null);

	useEffect(() => {
		if (eager) return;

		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting && imgRef.current) {
						imgRef.current.src = imgRef.current.dataset.src!;
						imgRef.current.removeAttribute("data-src");
						observer.unobserve(imgRef.current);
					}
				});
			},
			{ rootMargin: "100px 0px", threshold: 0.01 }
		);

		if (imgRef.current) observer.observe(imgRef.current);

		return () => observer.disconnect();
	}, [eager]);

	return (
		<img
			ref={imgRef}
			src={eager ? src : undefined}
			data-src={eager ? undefined : src}
			alt={alt}
			width={width}
			height={height}
			className={`${className} ${
				isLoaded ? "opacity-100" : "opacity-0"
			} transition-opacity duration-500`}
			loading={eager ? "eager" : "lazy"}
			decoding="async"
			onLoad={() => setIsLoaded(true)}
		/>
	);
};

interface Slide {
	src: string;
	alt: string;
	caption: string;
	eager?: boolean;
}

interface SlideshowProps {
	slides: Slide[];
	heightClass: string;
}

const Slideshow: React.FC<SlideshowProps> = ({ slides, heightClass }) => {
	const [currentSlide, setCurrentSlide] = useState(0);

	useEffect(() => {
		const interval = setInterval(() => {
			setCurrentSlide((prev) => (prev + 1) % slides.length);
		}, 4000);
		return () => clearInterval(interval);
	}, [slides.length]);

	return (
		<div
			className={`relative w-full ${heightClass} rounded-xl overflow-hidden shadow-lg`}>
			{slides.map((slide, index) => (
				<div
					key={index}
					className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
						index === currentSlide
							? "opacity-100 scale-100"
							: "opacity-0 scale-105"
					}`}>
					<LazyImage
						src={slide.src}
						alt={slide.alt}
						className="w-full h-full object-cover"
						width={1200}
						height={600}
						eager={slide.eager ?? index === 0}
					/>
					<div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4 sm:p-6">
						<h3 className="text-white text-lg sm:text-2xl font-bold">
							{slide.caption}
						</h3>
					</div>
				</div>
			))}
			<div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 flex space-x-2">
				{slides.map((_, index) => (
					<button
						key={index}
						className={`w-2 h-2 rounded-full ${
							index === currentSlide ? "bg-white" : "bg-white/50"
						} hover:bg-white/80 transition-colors duration-300`}
						onClick={() => setCurrentSlide(index)}
						aria-label={`Slide ${index + 1}`}
					/>
				))}
			</div>
		</div>
	);
};

interface LearnMoreModalProps {
	isOpen: boolean;
	onClose: () => void;
	title: string;
	content: string;
	link?: string;
}

const LearnMoreModal: React.FC<LearnMoreModalProps> = ({
	isOpen,
	onClose,
	title,
	content,
	link,
}) => {
	if (!isOpen) return null;

	return (
		<div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4 animate-fade-in">
			<div className="bg-white rounded-2xl max-w-lg w-full p-6 sm:p-8 relative max-h-[90vh] overflow-y-auto shadow-2xl animate-slide-up">
				<button
					onClick={onClose}
					className="absolute top-4 right-4 text-gray-600 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-red-600"
					aria-label="Close modal">
					<XIcon className="w-6 h-6" />
				</button>
				<h3 className="text-2xl font-bold text-gray-900 mb-4">{title}</h3>
				<p className="text-gray-600 mb-6 leading-relaxed">{content}</p>
				{link && (
					<Link
						to={link}
						className="bg-red-600 hover:bg-red-700 text-white font-medium py-2 px-6 rounded-lg transition-colors duration-300 inline-flex items-center gap-2">
						Explore More
					</Link>
				)}
			</div>
		</div>
	);
};

const LearnMoreButton: React.FC<{
	onClick: () => void;
	label: string;
}> = ({ onClick, label }) => (
	<button
		onClick={onClick}
		className="group inline-flex items-center gap-2 text-red-600 font-medium py-2 px-4 rounded-lg bg-red-50 hover:bg-red-100 transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-red-600">
		<span>{label}</span>
		<ArrowRightIcon className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" />
	</button>
);

const SectionBackground: React.FC = () => (
	<div className="absolute inset-0">
		{/* Background Image with Overlay */}
		<div className="absolute inset-0">
			<div className="w-full h-full bg-cover bg-center bg-no-repeat" />
			<div className="absolute inset-0 bg-gray-900/60 backdrop-blur-sm" />
		</div>

		{/* Floating Elements */}
		<div className="absolute inset-0 overflow-hidden">
			<motion.div
				animate={{
					y: [0, -20, 0],
					x: [0, 10, 0],
				}}
				transition={{
					duration: 6,
					repeat: -1,
					ease: "easeInOut",
				}}
				className="absolute top-20 left-10 w-32 h-32 bg-red-600 opacity-10 rounded-full blur-xl"
			/>
			<motion.div
				animate={{
					y: [0, 20, 0],
					x: [0, -10, 0],
				}}
				transition={{
					duration: 8,
					repeat: -1,
					ease: "easeInOut",
					delay: 2,
				}}
				className="absolute bottom-32 right-16 w-40 h-40 bg-blue-600 opacity-10 rounded-full blur-xl"
			/>
			<motion.div
				animate={{
					y: [0, -15, 0],
					x: [0, 15, 0],
				}}
				transition={{
					duration: 7,
					repeat: -1,
					ease: "easeInOut",
					delay: 1,
				}}
				className="absolute top-1/2 left-1/4 w-24 h-24 bg-purple-600 opacity-10 rounded-full blur-xl"
			/>
		</div>
	</div>
);

const Homepage: React.FC = () => {
	const [modalState, setModalState] = useState<{
		isOpen: boolean;
		title: string;
		content: string;
		link?: string;
	}>({
		isOpen: false,
		title: "",
		content: "",
		link: "",
	});

	const [requestDemoOpen, setRequestDemoOpen] = useState(false);
	const [showMoreSolutions, setShowMoreSolutions] = useState(false);
	const [expandedCards, setExpandedCards] = useState<boolean[]>([
		false,
		false,
		false,
		false,
	]);

	const openModal = (title: string, content: string, link?: string) => {
		setModalState({ isOpen: true, title, content, link });
	};

	const closeModal = () => {
		setModalState({ isOpen: false, title: "", content: "", link: "" });
	};

	return (
		<div className="flex flex-col min-h-screen bg-gray-800">
			<Navbar />
			<CardiacTekHero />
			{/* About CardiacTek */}
			<section className="relative overflow-hidden py-6 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
				<SectionBackground />

				<div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 text-center">
					{/* Animated Heading */}
					<motion.h2
						initial={{ opacity: 0, y: 50 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8, ease: "easeOut" }}
						viewport={{ once: true }}
						className="text-4xl sm:text-5xl lg:text-6xl font-semibold text-white mb-3 leading-snug animate-fade-in">
						About <span className="text-red-400">CardiacTek</span>
					</motion.h2>

					{/* Tagline */}
					<motion.p
						initial={{ opacity: 0, y: 30 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
						viewport={{ once: true }}
						className="text-xl sm:text-2xl text-gray-300 max-w-3xl mx-auto mb-10 italic">
						Revolutionizing Cardiac Care with AI Precision
					</motion.p>

					{/* Animated Content Block */}
					<motion.div
						initial="hidden"
						whileInView="visible"
						viewport={{ once: true }}
						variants={{
							hidden: { opacity: 0 },
							visible: {
								opacity: 1,
								transition: { staggerChildren: 0.25 },
							},
						}}
						className="grid md:grid-cols-2 gap-8 text-gray-300 w-full mb-20">
						<motion.div
							variants={{
								hidden: { opacity: 0, y: 30 },
								visible: { opacity: 1, y: 0 },
							}}
							transition={{ duration: 0.8, ease: "easeOut" }}
							className="md:col-span-1">
							<motion.img
								initial={{ opacity: 0 }}
								animate={{ opacity: 1 }}
								transition={{ duration: 0.6 }}
								src="/backgrounds/aboutus.jpg"
								alt="About CardiacTek"
								className="w-full object-cover rounded-lg border border-gray-700 shadow-md"
							/>
						</motion.div>
						<div className="md:col-span-1 space-y-4">
							<motion.p
								variants={{
									hidden: { opacity: 0, y: 30 },
									visible: { opacity: 1, y: 0 },
								}}
								transition={{ duration: 0.8, ease: "easeOut" }}
								className="text-lg leading-relaxed font-normal mt-12 italic">
								"CardiacTek is transforming cardiovascular healthcare through
								AI-driven diagnostics, empowering clinicians and patients with
								real-time insights for more accurate, timely, and personalized
								cardiac care."
							</motion.p>

							{/* Commitment Section */}
							<motion.div
								initial={{ opacity: 0, scale: 0.95 }}
								whileInView={{ opacity: 1, scale: 1 }}
								transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
								viewport={{ once: true }}
								className="bg-gray-700/50 border border-gray-700 backdrop-blur-md p-6 rounded-2xl shadow-lg">
								<div className="text-red-400 text-left">
									<h3 className="text-lg font-bold mb-2 text-center">
										Our Mission & Vision
									</h3>
									<p className="text-white italic">
										"To make advanced, affordable cardiac diagnostics accessible
										to every healthcare provider and patient."
									</p>
									<p>— Our Mission</p>
									<p className="text-white mt-4 italic">
										"A future where preventable cardiac deaths are reduced
										through early detection powered by AI."
									</p>
									<p>— Our Vision</p>
								</div>
							</motion.div>
						</div>
					</motion.div>

					{/* Floating Illustration or Glow Effect */}
					<motion.div
						initial={{ opacity: 0, y: 30, scale: 0.95 }}
						whileInView={{ opacity: 0.8, y: 0, scale: 1 }}
						transition={{ duration: 0.9, delay: 0.5, ease: "easeOut" }}
						viewport={{ once: true }}
						className="absolute inset-0 -z-10 flex justify-center items-center">
						<div className="w-72 h-72 bg-red-500/10 rounded-full blur-3xl" />
					</motion.div>

					{/* The Challenge: Cardiovascular Diseases */}
					<motion.div
						className="relative mb-24 text-center px-6"
						initial={{ opacity: 0, y: 40 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8, ease: "easeOut" }}
						viewport={{ once: true }}>
						{/* Decorative gradient ring (subtle background accent) */}
						<div className="absolute -top-32 left-1/2 -translate-x-1/2 w-96 h-96 bg-red-500/10 rounded-full blur-3xl pointer-events-none" />

						{/* Heading */}
						<motion.h2
							initial={{ opacity: 0, y: 50 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.8, ease: "easeOut" }}
							viewport={{ once: true }}
							className="text-4xl sm:text-5xl lg:text-6xl font-semibold text-white mb-3 leading-snug animate-fade-in">
							The Challenge:{" "}
							<span className="text-red-400">Cardiovascular Diseases</span>
						</motion.h2>

						{/* Divider line */}
						<motion.div
							className="mx-auto mb-8 h-1 w-24 bg-gradient-to-r from-red-400 to-pink-500 rounded-full"
							initial={{ scaleX: 0 }}
							whileInView={{ scaleX: 1 }}
							transition={{ duration: 0.8, ease: "easeOut" }}
							viewport={{ once: true }}
						/>

						{/* Main Paragraph */}
						<motion.p
							className="text-gray-300 max-w-3xl mx-auto mb-8 text-lg leading-relaxed"
							initial={{ opacity: 0, y: 30 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.8, delay: 0.2 }}
							viewport={{ once: true }}>
							Cardiovascular diseases claim nearly{" "}
							<span className="text-red-400 font-semibold">
								18 million lives annually
							</span>
							with{" "}
							<span className="text-red-400 font-semibold">
								over 80% being preventable.
							</span>{" "}
							Yet, across much of Africa, access to timely cardiac diagnostics
							and preventive care remains critically limited.
						</motion.p>

						{/* Supporting paragraph */}
						<motion.p
							className="text-gray-300 max-w-3xl mx-auto text-lg leading-relaxed"
							initial={{ opacity: 0, y: 30 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.8, delay: 0.4 }}
							viewport={{ once: true }}>
							<strong className="text-white">CardiacTek</strong> bridges this
							gap through{" "}
							<span className="text-red-400 font-medium">
								AI-powered ECG interpretation
							</span>
							, enabling early detection, continuous monitoring, and equitable
							access to life-saving cardiac insights.
						</motion.p>

						{/* Optional: Impact Stats */}
						<motion.div
							className="mt-12 flex flex-wrap justify-center gap-8 text-center"
							initial="hidden"
							whileInView="visible"
							viewport={{ once: true }}
							variants={{
								hidden: {},
								visible: { transition: { staggerChildren: 0.15 } },
							}}>
							{[
								{
									stat: "18M+",
									label: "Annual deaths globally",
									icon: <HeartOff size={48} className="text-red-600" />,
								},
								{
									stat: "80%",
									label: "Preventable with early diagnosis",
									icon: <ShieldIcon size={48} className="text-red-600" />,
								},
								{
									stat: "1 in 3",
									label: "Africans lack cardiac screening access",
									icon: <UsersIcon size={48} className="text-red-600" />,
								},
							].map((item, i) => (
								<motion.div
									key={i}
									className="min-w-[200px] bg-white/5 border border-white/10 rounded-2xl p-6 shadow-lg backdrop-blur-sm hover:shadow-2xl transition-all duration-500"
									variants={{
										hidden: { opacity: 0, y: 40 },
										visible: { opacity: 1, y: 0 },
									}}
									transition={{ duration: 0.7, ease: "easeOut" }}
									whileHover={{ scale: 1.05 }}>
									<div className="flex justify-center mb-4">{item.icon}</div>
									<h3 className="text-3xl font-bold text-white mb-2">
										{item.stat}
									</h3>
									<p className="text-gray-400 text-sm">{item.label}</p>
								</motion.div>
							))}
						</motion.div>
					</motion.div>

					{/* How CardiacTek Works */}
					<motion.div
						whileInView={motionVariants.fadeInUp}
						viewport={{ once: true }}>
						<motion.h2
							className="text-4xl sm:text-5xl lg:text-6xl font-semibold text-white mb-3 leading-snug animate-fade-in"
							whileInView={motionVariants.fadeInUp}
							viewport={{ once: true }}>
							How <span className="text-red-400">CardiacTek</span> Works
						</motion.h2>
						<motion.p
							className="text-xl sm:text-2xl text-gray-300 max-w-3xl mx-auto mb-10 italic"
							whileInView={motionVariants.fadeIn}
							viewport={{ once: true }}
							transition={{ delay: 0.2 }}>
							AI-Powered ECG Analysis at 90% Acuracy
						</motion.p>

						{/* Step-by-Step Process */}
						<motion.div
							className="mb-16"
							variants={motionVariants.staggerContainer}
							whileInView="animate"
							viewport={{ once: true }}>
							<div className="grid md:grid-cols-4 gap-8 relative">
								{/* Connecting lines for desktop */}
								<div className="hidden md:block absolute top-24 left-0 right-0 h-0.5 bg-gradient-to-r from-red-200 via-red-400 to-red-200 z-0"></div>
								{[
									{
										step: "01",
										title: "Upload or Capture ECG Images",
										description:
											"Capture directly from a device or upload up to three ECG images (JPEG/PNG).",
										color: "from-blue-500 to-blue-600",
									},
									{
										step: "02",
										title: "Configure Settings",
										description:
											"Choose your lead type, voltage, speed, and specify the reason for ECG.",
										color: "from-green-500 to-green-600",
									},
									{
										step: "03",
										title: "AI-Powered Processing",
										description:
											"Our model interprets the ECG in seconds, analyzing morphology and waveform features with clinical precision.",
										color: "from-yellow-500 to-orange-500",
									},
									{
										step: "04",
										title: "Review & Download Results",
										description:
											"Get a detailed report highlighting detected abnormalities, risk scores, and diagnostic recommendations.",
										color: "from-purple-500 to-purple-600",
									},
								].map((item, idx) => (
									<motion.div
										key={idx}
										variants={motionVariants.staggerItem}
										whileHover={{ scale: 1.05, y: -5 }}
										className="relative bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 text-center z-10">
										{/* Step number badge */}
										<div
											className={`inline-flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-r ${item.color} text-white font-bold text-lg mb-4 shadow-lg`}>
											{item.step}
										</div>
										<h3 className="text-xl font-semibold text-gray-900 mb-3">
											{item.title}
										</h3>
										<p className="text-gray-600 text-sm">{item.description}</p>
									</motion.div>
								))}
							</div>
						</motion.div>
						{/* Comprehensive AI-Powered Cardiac Solutions */}
						<motion.div
							className="mb-20 text-center"
							initial={{ opacity: 0, y: 40 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.8, ease: "easeOut" }}
							viewport={{ once: true }}>
							<p className="text-gray-300 max-w-3xl mx-auto mb-14 text-lg leading-relaxed">
								Our platform offers an integrated suite of tools that redefine
								cardiac diagnostics and patient monitoring.
							</p>

							{/* Cards Section */}
							<motion.div
								className="flex flex-wrap justify-center gap-8 items-start"
								initial="hidden"
								whileInView="visible"
								variants={{
									hidden: {},
									visible: { transition: { staggerChildren: 0.15 } },
								}}
								viewport={{ once: true }}>
								{[
									{
										img: "/backgrounds/innovate.jpg",
										title: "12-Lead ECG Analysis",
										desc: "Automated interpretation of complex ECG patterns with clinician review workflow.",
										moreInfo: [
											"STEMI detection",
											"QT interval measurement",
											"Bundle branch block identification",
										],
										link: "/ecg-analysis",
									},
									{
										img: "/backgrounds/insights.jpg",
										title: "ASCVD Integration",
										desc: "AI-driven risk scoring aligned with AHA/ACC guidelines for informed prevention strategies.",
										moreInfo: [
											"10-year risk prediction",
											"Lifestyle factors analysis",
											"Prevention strategies",
										],
										link: "/risk-profile",
									},
									{
										img: "/backgrounds/advanced.jpg",
										title: "Longitudinal Tracking (In Progress)",
										desc: "Track cardiac health trends over time for proactive interventions.",
										moreInfo: [
											"ECG trend visualization",
											"Medication impact tracking",
											"Automated report generation",
										],
										link: "/longitudinal-tracking",
									},
									{
										img: "/backgrounds/telemedicine.jpg",
										title: "EHR Integration (In Progress)",
										desc: "Planned integration with major systems for real-time synchronization.",
										moreInfo: [
											"Real-time data synchronization",
											"Bidirectional data flow",
											"HIPAA compliance",
										],
										link: "/ehr-integration",
									},
								].map((solution, idx) => (
									<motion.div
										key={idx}
										variants={{
											hidden: { opacity: 0, y: 40 },
											visible: { opacity: 1, y: 0 },
										}}
										transition={{ duration: 0.7, ease: "easeOut" }}
										whileHover={{ scale: 1.05 }}
										className="flex-1 min-w-[260px] max-w-[300px] relative group bg-white/10 backdrop-blur-sm border border-white/10 p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden flex flex-col">
										{/* Background Image */}
										<div className="absolute inset-0 opacity-5 group-hover:opacity-15 transition-opacity duration-700">
											<motion.img
												initial={{ opacity: 0 }}
												whileInView={{ opacity: 1 }}
												transition={{ duration: 0.8 }}
												src={solution.img}
												alt={solution.title}
												className="w-full h-full object-cover"
											/>
										</div>

										{/* Card Content */}
										<div className="relative z-10 text-left flex flex-col justify-between flex-grow">
											<div>
												<h4 className="text-xl font-bold text-white mb-3">
													{solution.title}
												</h4>
												<p className="text-gray-300 text-sm mb-4 leading-relaxed">
													{solution.desc}
												</p>
												{expandedCards[idx] && (
													<motion.ul
														initial={{ opacity: 0, height: 0 }}
														animate={{ opacity: 1, height: "auto" }}
														exit={{ opacity: 0, height: 0 }}
														transition={{ duration: 0.3 }}
														className="text-gray-300 text-sm mb-4 leading-relaxed list-disc list-inside">
														{solution.moreInfo.map((item, i) => (
															<li key={i}>{item}</li>
														))}
													</motion.ul>
												)}
											</div>

											{/* Show More and Learn More */}
											<div className="flex justify-between items-center mt-auto">
												<button
													onClick={() =>
														setExpandedCards((prev) =>
															prev.map((e, i) => (i === idx ? !e : e))
														)
													}
													className="text-red-400 hover:text-red-500 text-sm font-medium flex items-center transition-colors duration-300">
													Show {expandedCards[idx] ? "Less" : "More"}{" "}
													<ChevronDownIcon
														className={`w-4 h-4 ml-1 transition-transform duration-300 ${
															expandedCards[idx] ? "rotate-180" : ""
														}`}
													/>
												</button>
												<Link
													to={solution.link}
													className="text-red-400 hover:text-red-500 text-sm font-medium flex items-center transition-colors duration-300">
													Learn More <ArrowRightIcon className="w-4 h-4 ml-1" />
												</Link>
											</div>
										</div>
									</motion.div>
								))}
							</motion.div>
						</motion.div>
						{/* Why Choose CardiacTek */}
						<motion.div
							className="mb-16"
							variants={motionVariants.staggerContainer}
							whileInView="animate"
							viewport={{ once: true }}>
							<h3 className="text-3xl font-bold text-white mb-8 text-center">
								Why Choose CardiacTek
							</h3>
							<div className="grid md:grid-cols-3 gap-8">
								{[
									{
										img: "https://via.placeholder.com/300x200/ffffff/000000?text=High+Accuracy",
										icon: (
											<ShieldIcon
												size={48}
												className="text-red-600 mx-auto mb-4"
											/>
										),
										title: "High Accuracy",
										description:
											"90% detection precision across diverse cardiac conditions.",
									},
									{
										img: "https://via.placeholder.com/300x200/ffffff/000000?text=Real-Time+Insights",
										icon: (
											<ClockIcon
												size={48}
												className="text-red-600 mx-auto mb-4"
											/>
										),
										title: "Real-Time Insights",
										description:
											"Instant analysis and critical alerts for life-saving decisions.",
									},
									{
										img: "https://via.placeholder.com/300x200/ffffff/000000?text=Clinician+Integration",
										icon: (
											<UsersIcon
												size={48}
												className="text-red-600 mx-auto mb-4"
											/>
										),
										title: "Clinician Integration",
										description:
											"Seamless workflow and EHR-ready architecture for verified use in hospitals and clinics.",
									},
								].map((benefit, idx) => (
									<motion.div
										key={idx}
										variants={motionVariants.staggerItem}
										whileHover={{ scale: 1.05 }}
										className="relative group bg-white/10 backdrop-blur-sm border border-white/20 p-6 rounded-2xl text-center overflow-hidden">
										{/* Background Image */}
										<div className="absolute inset-0 opacity-5 group-hover:opacity-15 transition-opacity duration-700">
											<motion.img
												initial={{ opacity: 0 }}
												whileInView={{ opacity: 1 }}
												transition={{ duration: 0.8 }}
												src={benefit.img}
												alt={benefit.title}
												className="w-full h-full object-cover"
											/>
										</div>

										{/* Card Content */}
										<div className="relative z-10">
											<div className="mb-4">{benefit.icon}</div>
											<h4 className="text-xl font-bold text-white mb-3">
												{benefit.title}
											</h4>
											<p className="text-gray-300 text-sm">
												{benefit.description}
											</p>
										</div>
									</motion.div>
								))}
							</div>
						</motion.div>

						{/* How Our AI Engine Works Behind the Scenes */}
						<motion.div
							className="mb-16"
							variants={motionVariants.staggerContainer}
							whileInView="animate"
							viewport={{ once: true }}>
							<h3 className="text-3xl font-bold text-white mb-8 text-center">
								Behind the AI: Clinical-Grade Intelligence
							</h3>
							<div className="grid md:grid-cols-4 gap-6">
								{[
									{
										img: "https://via.placeholder.com/300x200/ffffff/000000?text=Data+Ingestion",
										step: "Data Ingestion",
										description:
											"Upload ECG image → AI preprocessing → Noise filtering",
									},
									{
										img: "https://via.placeholder.com/300x200/ffffff/000000?text=Signal+Analysis",
										step: "Signal Analysis",
										description:
											"Detects P, QRS, T, and U waves; calculates key intervals",
									},
									{
										img: "https://via.placeholder.com/300x200/ffffff/000000?text=Classification+Scoring",
										step: "Classification & Scoring",
										description:
											"Determines rhythm, ischemic patterns, and risk level",
									},
									{
										img: "https://via.placeholder.com/300x200/ffffff/000000?text=Report+Generation",
										step: "Report Generation",
										description:
											"Produces a structured diagnostic summary with visualization",
									},
								].map((engineStep, idx) => (
									<motion.div
										key={idx}
										variants={motionVariants.staggerItem}
										className="relative bg-white/5 border border-white/10 p-4 rounded-xl text-center overflow-hidden">
										{/* Background Image */}
										<div className="absolute inset-0 opacity-5 transition-opacity duration-700">
											<motion.img
												initial={{ opacity: 0 }}
												whileInView={{ opacity: 1 }}
												transition={{ duration: 0.8 }}
												src={engineStep.img}
												alt={engineStep.step}
												className="w-full h-full object-cover"
											/>
										</div>

										{/* Card Content */}
										<div className="relative z-10">
											<h4 className="font-semibold text-white mb-2">
												{engineStep.step}
											</h4>
											<p className="text-gray-400 text-sm">
												{engineStep.description}
											</p>
										</div>
									</motion.div>
								))}
							</div>
							<motion.div
								className="mt-8 text-center"
								whileInView={motionVariants.fadeInUp}
								viewport={{ once: true }}
								transition={{ delay: 0.5 }}>
								<LearnMoreButton
									onClick={() =>
										openModal(
											"Our Technology",
											"Learn more about the advanced AI technology powering CardiacTek.",
											"/technology"
										)
									}
									label="Learn More About Our Technology"
								/>
							</motion.div>
						</motion.div>
					</motion.div>
				</div>
			</section>
			{/* Key Benefits */}
			<section className="relative overflow-hidden py-16 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
				<SectionBackground />

				<div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8">
					<div className="text-center mb-16">
						<motion.h2
							className="text-4xl sm:text-5xl font-semibold text-white mb-4"
							initial={{ opacity: 0, y: 30 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.6 }}
							viewport={{ once: true }}>
							Key <span className="text-red-400">Benefits</span>
						</motion.h2>
						<motion.p
							className="text-gray-300 max-w-3xl mx-auto"
							initial={{ opacity: 0 }}
							whileInView={{ opacity: 1 }}
							transition={{ delay: 0.3, duration: 0.6 }}
							viewport={{ once: true }}>
							Transforming cardiac care for patients, clinicians, and systems.
						</motion.p>
					</div>
					<div className="grid md:grid-cols-3 gap-10">
						{[
							{
								icon: <UsersIcon size={48} className="text-red-600" />,
								title: "For Patients",
								description:
									"Empower patients with real-time cardiac monitoring and personalized insights.",
							},
							{
								icon: <UserIcon size={48} className="text-red-600" />,
								title: "For Clinicians",
								description:
									"Streamline diagnostics with AI-powered ECG interpretation, integrated EHR, and clinical decision support for faster, more accurate care.",
							},
							{
								icon: <ActivityIcon size={48} className="text-red-600" />,
								title: "For Healthcare Systems",
								description:
									"Reduce costs, improve outcomes, and scale cardiac care with our HIPAA-compliant, EHR-integrated platform designed for hospitals and clinics.",
							},
						].map((benefit, idx) => (
							<motion.div
								key={idx}
								variants={motionVariants.staggerItem}
								whileHover={{ scale: 1.05 }}
								className="bg-white/10 backdrop-blur-sm border border-white/20 p-6 rounded-2xl text-center">
								<div className="mb-4">{benefit.icon}</div>
								<h4 className="text-xl font-bold text-white mb-3">
									{benefit.title}
								</h4>
								<p className="text-gray-300 text-sm">{benefit.description}</p>
							</motion.div>
						))}
					</div>
				</div>
			</section>
			<RequestDemoModal
				isOpen={requestDemoOpen}
				onClose={() => setRequestDemoOpen(false)}
			/>
			<LearnMoreModal
				isOpen={modalState.isOpen}
				onClose={closeModal}
				title={modalState.title}
				content={modalState.content}
				link={modalState.link}
			/>
		</div>
	);
};

export default Homepage;
