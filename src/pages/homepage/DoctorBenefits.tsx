import { motion } from "framer-motion";
import {
	ArrowRightIcon,
	XIcon,
	Heart,
	BarChart,
	TrendingUp
} from "lucide-react";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../../components/Homepage/Navbar";
import RequestDemoModal from "../../components/Homepage/RequestDemoModal";

// LearnMoreModal Component
const LearnMoreModal: React.FC<{
	isOpen: boolean;
	onClose: () => void;
	title: string;
	content: string;
	link?: string;
}> = ({ isOpen, onClose, title, content, link }) => {
	if (!isOpen) return null;

	return (
		<div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50 p-4 animate-fade-in">
			<div className="bg-white rounded-2xl max-w-lg w-full p-6 sm:p-8 relative max-h-[90vh] overflow-y-auto shadow-2xl animate-slide-up">
				<button
					onClick={onClose}
					className="absolute top-4 right-4 text-gray-600 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-600"
					aria-label="Close modal">
					<XIcon className="w-6 h-6" />
				</button>
				<h3 className="text-2xl font-bold text-gray-900 mb-4">{title}</h3>
				<p className="text-gray-600 mb-6 leading-relaxed">{content}</p>
				{link && (
					<Link
						to={link}
						className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded-lg transition-colors duration-300 inline-flex items-center gap-2">
						Explore More
					</Link>
				)}
			</div>
		</div>
	);
};

// LearnMoreButton Component
const LearnMoreButton: React.FC<{
	onClick: () => void;
	label: string;
}> = ({ onClick, label }) => (
	<button
		onClick={onClick}
		className="group inline-flex items-center gap-2 text-blue-600 font-medium py-2 px-4 rounded-lg bg-blue-50 hover:bg-blue-100 transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-600">
		<span>{label}</span>
		<ArrowRightIcon className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" />
	</button>
);

// Main DoctorBenefits Component
const DoctorBenefits: React.FC = () => {
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

	const openModal = (title: string, content: string, link?: string) => {
		setModalState({ isOpen: true, title, content, link });
	};

	const closeModal = () => {
		setModalState({ isOpen: false, title: "", content: "", link: "" });
	};

	return (
		<div className="flex flex-col min-h-screen bg-white">
			<Navbar />
			{/* Hero Section */}
			<section className="relative py-20 bg-white overflow-hidden">
				<div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-red-600 to-red-700 opacity-10"></div>
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="grid md:grid-cols-2 gap-12 items-center">
						<motion.div
							initial={{ opacity: 0, x: -50 }}
							animate={{ opacity: 1, x: 0 }}
							transition={{ duration: 0.8 }}>
							<h1 className="text-6xl font-bold mb-6 text-gray-900 leading-tight" style={{ fontSize: '56px' }}>
								Transform Cardiac Outcomes with{" "}
								<span className="text-red-600">AI Precision</span>
							</h1>
							<p className="text-xl mb-8 text-gray-600 leading-relaxed" style={{ fontSize: '22px' }}>
								Clinical-grade diagnostics, seamless workflow integration, and predictive analytics trusted by cardiologists worldwide.
							</p>
							<div className="flex gap-4 mb-6">
								<button
									onClick={() => setRequestDemoOpen(true)}
									className="bg-red-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-red-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
									style={{ padding: '14px 32px' }}>
									Schedule Live Demo
								</button>
								<button className="border-2 border-red-600 text-red-600 px-8 py-3 rounded-lg font-semibold hover:bg-red-50 transition-all duration-300"
									style={{ padding: '14px 32px' }}>
									Explore Platform
								</button>
							</div>
							
						</motion.div>
						<motion.div
							initial={{ opacity: 0, x: 50 }}
							animate={{ opacity: 1, x: 0 }}
							transition={{ duration: 0.8, delay: 0.2 }}>
							<img src="/backgrounds/telemedicine.jpg" alt="Mobile Image" className="h-96 w-auto" />
						</motion.div>
					</div>
				</div>
			</section>

			{/* Core Value Proposition */}
			<section className="py-20 bg-white">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="grid md:grid-cols-3 gap-8">
						{[
							{
								icon: (
									<div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
										<div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center">
											<span className="text-white font-bold text-lg">AI</span>
										</div>
									</div>
								),
								title: "AI-Powered Clinical Intelligence",
								description: "12-lead automated interpretation, arrhythmia & MI detection, STEMI alerts with red priority flag.",
								metric: "98.7% diagnostic accuracy",
							},
							{
								icon: (
									<div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
										<div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center">
											<span className="text-white font-bold text-lg">🔗</span>
										</div>
									</div>
								),
								title: "Integrated Care Coordination",
								description: "Secure team messaging, shared treatment plans, real-time collaboration across your care network.",
								metric: "50% faster care decisions",
							},
							{
								icon: (
									<div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
										<div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center">
											<span className="text-white font-bold text-lg">💓</span>
										</div>
									</div>
								),
								title: "Continuous Patient Intelligence",
								description: "24/7 monitoring, predictive alerts, engagement tracking for proactive cardiac care management.",
								metric: "73% reduction in readmissions",
							},
						].map((item, idx) => (
							<motion.div
								key={idx}
								className="bg-gray-50 border border-gray-200 rounded-lg p-8 hover:shadow-lg hover:border-red-200 transition-all duration-300 group cursor-pointer"
								initial={{ opacity: 0, y: 30, scale: 0.9 }}
								whileInView={{ opacity: 1, y: 0, scale: 1 }}
								whileHover={{
									scale: 1.05,
									y: -10,
									boxShadow: "0 25px 50px 0 rgba(0, 0, 0, 0.25)"
								}}
								transition={{ duration: 0.6, delay: idx * 0.2 }}
								viewport={{ once: true }}>
								<div className="relative">
									<motion.div
										initial={{ scale: 0, rotate: -180 }}
										whileInView={{ scale: 1, rotate: 0 }}
										transition={{ duration: 0.8, delay: idx * 0.2 + 0.3, type: "spring", stiffness: 200 }}
										viewport={{ once: true }}>
										{item.icon}
									</motion.div>
									<div className="absolute -top-1 transform -translate-x-1/2 w-full h-1 bg-red-600 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ left: '50%' }}></div>
								</div>
								<motion.h3
									className="text-2xl font-semibold mb-4 text-gray-900"
									initial={{ opacity: 0 }}
									whileInView={{ opacity: 1 }}
									transition={{ delay: idx * 0.2 + 0.5 }}
									viewport={{ once: true }}>
									{item.title}
								</motion.h3>
								<motion.p
									className="text-gray-600 mb-4 leading-relaxed"
									initial={{ opacity: 0 }}
									whileInView={{ opacity: 1 }}
									transition={{ delay: idx * 0.2 + 0.6 }}
									viewport={{ once: true }}>
									{item.description}
								</motion.p>
								<motion.div
									className="inline-block bg-red-600 text-white px-3 py-1 rounded-full text-sm font-medium"
									initial={{ scale: 0 }}
									whileInView={{ scale: 1 }}
									transition={{ delay: idx * 0.2 + 0.7, type: "spring" }}
									viewport={{ once: true }}>
									{item.metric}
								</motion.div>
							</motion.div>
						))}
					</div>
				</div>
			</section>



			{/* Diagnostic Command Center */}
			<section className="py-20 bg-white">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<motion.h2
						className="text-4xl font-bold text-center mb-12 text-gray-900"
						initial={{ opacity: 0, y: 30 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}>
						Diagnostic Command Center
					</motion.h2>
					<div className="bg-gray-50 rounded-lg p-8 shadow-2xl">
						{/* Tab Navigation */}
						<div className="flex border-b border-gray-200 mb-8">
							{[
								"Real-Time Dashboard",
								"Critical Alert System",
								"360° Patient Records",
								"Diagnostic Reports Hub"
							].map((tab, idx) => (
								<button
									key={idx}
									className={`px-6 py-3 text-sm font-medium border-b-2 transition-colors ${
										idx === 0
											? "border-red-600 text-red-600"
											: "border-transparent text-gray-600 hover:text-gray-900"
									}`}
								>
									{tab}
								</button>
							))}
						</div>
						<div className="grid md:grid-cols-2 gap-8 items-center">
							<div>
								<h3 className="text-2xl font-bold mb-6 text-gray-900">Real-Time ECG Analysis</h3>
								<div className="space-y-4">
									<div className="flex items-center space-x-3">
										<div className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
										<span className="text-gray-700">STEMI Alert - Priority Red</span>
									</div>
									<div className="flex items-center space-x-3">
										<div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
										<span className="text-gray-700">Atrial Fibrillation Detected</span>
									</div>
									<div className="flex items-center space-x-3">
										<div className="w-3 h-3 bg-green-400 rounded-full"></div>
										<span className="text-gray-700">Normal Sinus Rhythm</span>
									</div>
								</div>
								<div className="mt-8">
									<div className="bg-white rounded-lg p-4 border border-gray-200">
										<div className="flex justify-between items-center mb-2">
											<span className="text-sm font-medium text-gray-600">AI Confidence</span>
											<span className="text-sm font-bold text-red-600">98.7%</span>
										</div>
										<div className="w-full bg-gray-200 rounded-full h-2">
											<div className="bg-red-600 h-2 rounded-full" style={{ width: '98.7%' }}></div>
										</div>
									</div>
								</div>
							</div>
							<div className="relative">
								<div className="bg-white rounded-lg p-6 shadow-lg border border-gray-200">
									<div className="flex space-x-2 mb-4">
										<div className="w-3 h-3 bg-red-500 rounded-full"></div>
										<div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
										<div className="w-3 h-3 bg-green-400 rounded-full"></div>
									</div>
									<div className="space-y-3">
										<div className="h-2 bg-red-200 rounded animate-pulse"></div>
										<div className="h-2 bg-gray-300 rounded" style={{ width: '75%' }}></div>
										<div className="h-2 bg-gray-300 rounded w-1/2"></div>
										<div className="h-2 bg-yellow-200 rounded w-5/6"></div>
										<div className="h-2 bg-gray-300 rounded w-2/3"></div>
									</div>
									<div className="mt-6 flex justify-between">
										<button className="bg-red-600 text-white px-4 py-2 rounded text-sm font-medium hover:bg-red-700 transition-colors">
											Accept AI
										</button>
										<button className="border border-gray-300 text-gray-700 px-4 py-2 rounded text-sm font-medium hover:bg-gray-50 transition-colors">
											Review
										</button>
									</div>
								</div>
								<div className="absolute -top-3 -right-3 bg-red-600 text-white px-2 py-1 rounded text-xs font-bold">
									LIVE
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Advanced Diagnostic Tools */}
			<section className="py-20 bg-white">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<motion.h2
						className="text-4xl font-bold text-center mb-12"
						initial={{ opacity: 0, y: 30 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}>
						Advanced Diagnostic Tools
					</motion.h2>
					<div className="grid md:grid-cols-3 gap-8">
						{[
							{
								icon: () => <Heart className="w-6 h-6 text-red-600" />,
								title: "AI-ECG Analysis",
								description: "AI-driven precision for 12-lead ECGs:",
								features: [
									"98.7% interpretation accuracy",
									"Arrhythmia and myocardial infarction detection",
									"Annotated waveforms and downloadable reports",
								],
							},
							{
								icon: () => <BarChart className="w-6 h-6 text-red-600" />,
								title: "Holter Monitoring",
								description: "Continuous rhythm analysis made simple:",
								features: [
									"24/48/72-hour recording capability",
									"Correlation with stress and sleep patterns",
									"Direct integration with mobile recorders",
								],
							},
							{
								icon: () => <TrendingUp className="w-6 h-6 text-red-600" />,
								title: "Risk Stratification",
								description: "Proactive prevention through predictive analytics:",
								features: [
									"ASCVD 10-year risk estimation",
									"Heart failure and stroke risk flags",
									"Evidence-based clinical recommendations",
								],
							},
						].map((item, idx) => (
							<motion.div
								key={idx}
								className="p-6 bg-gray-50 rounded-lg shadow-lg"
								initial={{ opacity: 0, y: 30 }}
								whileInView={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.6, delay: idx * 0.1 }}
								viewport={{ once: true }}>
								<h3 className="text-2xl font-semibold mb-4 flex items-center gap-2">{item.icon()} {item.title}</h3>
								<p className="mb-4">{item.description}</p>
								<ul className="list-disc list-inside mb-4">
									{item.features?.map((feature, i) => (
										<li key={i}>{feature}</li>
									))}
								</ul>
								<LearnMoreButton onClick={() => openModal(item.title, 'Details about ' + item.title)} label="Learn More" />
							</motion.div>
						))}
					</div>
				</div>
			</section>

			{/* Care Coordination & Workflow */}
			<section className="py-20 bg-gray-50">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<motion.h2
						className="text-4xl font-bold text-center mb-12"
						initial={{ opacity: 0, y: 30 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}>
						Care Coordination & Workflow
					</motion.h2>
					<div className="grid md:grid-cols-2 gap-12">
						{[
							{
								icon: "📋",
								title: "Treatment Plans",
								description: "Dynamic, trackable care pathways for every patient:",
								features: [
									"Personalized medication and rehab schedules",
									"Lifestyle modification protocols",
									"Care goal tracking and milestone analytics",
								],
							},
							{
								icon: "💬",
								title: "Secure Messaging",
								description: "Confidential communication for care teams:",
								features: [
									"Patient Q&A inbox",
									"Specialist referrals and direct team chat",
									"Attach ECGs, imaging, and lab reports securely",
								],
							},
							{
								icon: "📱",
								title: "Device Integration",
								description: "Connect patient devices directly into care workflows:",
								features: [
									"Apple Watch, Fitbit, KardiaMobile",
									"BP cuffs, oximeters, pacemakers, and implants",
									"Continuous data syncing to clinical dashboards",
								],
							},
							{
								icon: "📹",
								title: "Telemedicine",
								description: "Integrated telehealth for real-time cardiac care:",
								features: [
									"Live video consults with vitals overlay",
									"E-prescriptions and diagnostic test ordering",
									"Auto-generated visit summaries and reports",
								],
							},
						].map((item, idx) => (
							<motion.div
								key={idx}
								className="p-6 bg-white rounded-lg shadow-lg"
								initial={{ opacity: 0, y: 30 }}
								whileInView={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.6, delay: idx * 0.1 }}
								viewport={{ once: true }}>
								<h3 className="text-2xl font-semibold mb-4 flex items-center gap-2">{item.icon} {item.title}</h3>
								<p className="mb-4">{item.description}</p>
								<ul className="list-disc list-inside mb-4">
									{item.features?.map((feature, i) => (
										<li key={i}>{feature}</li>
									))}
								</ul>
								<LearnMoreButton onClick={() => openModal(item.title, 'Details about ' + item.title)} label="Learn More" />
							</motion.div>
						))}
					</div>
				</div>
			</section>

			{/* Continuous Patient Monitoring & Engagement */}
			<section className="py-20 bg-white">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<motion.h2
						className="text-4xl font-bold text-center mb-12"
						initial={{ opacity: 0, y: 30 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}>
						Continuous Patient Monitoring & Engagement
					</motion.h2>
					<div className="grid md:grid-cols-2 gap-12">
						{[
							{
								icon: "📅",
								title: "Follow-Up Scheduler",
								description: "Never miss a follow-up:",
								features: [
									"Auto-scheduled post-discharge and review visits",
									"Smart reminders for doctors, nurses, and patients",
									"Seamless integration with your daily workflow",
								],
							},
							{
								icon: "✅",
								title: "Patient Adherence Tracker",
								description: "See beyond the clinic visit:",
								features: [
									"Monitors medication and lifestyle adherence",
									"Tracks daily vitals and patient-reported data",
									"Flags non-compliance for proactive engagement",
								],
							},
							{
								icon: "📢",
								title: "Patient Engagement Feed",
								description: "Keep up with patients in real time:",
								features: [
									"AI-generated daily summaries of key health events",
									"Highlights irregular patterns for review",
									"Suggests personalized check-in actions",
								],
							},
							{
								icon: "🔮",
								title: "Predictive Analytics Dashboard",
								description: "See what's coming before it happens:",
								features: [
									"AI-driven risk forecasting for deterioration and readmission",
									"Trend visualization across ECG, vitals, and labs",
									"Supports data-informed early interventions",
								],
							},
						].map((item, idx) => (
							<motion.div
								key={idx}
								className="p-6 bg-gray-50 rounded-lg shadow-lg"
								initial={{ opacity: 0, y: 30 }}
								whileInView={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.6, delay: idx * 0.1 }}
								viewport={{ once: true }}>
								<h3 className="text-2xl font-semibold mb-4 flex items-center gap-2">{item.icon} {item.title}</h3>
								<p className="mb-4">{item.description}</p>
								<ul className="list-disc list-inside mb-4">
									{item.features?.map((feature, i) => (
										<li key={i}>{feature}</li>
									))}
								</ul>
								<LearnMoreButton onClick={() => openModal(item.title, 'Details about ' + item.title)} label="Learn More" />
							</motion.div>
						))}
					</div>
				</div>
			</section>

			{/* Performance & Outcomes Analytics */}
			<section className="py-20 bg-gray-50">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<motion.h2
						className="text-4xl font-bold text-center mb-12"
						initial={{ opacity: 0, y: 30 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}>
						Performance & Outcomes Analytics
					</motion.h2>
					<div className="grid md:grid-cols-2 gap-12">
						{[
							{
								icon: "📊",
								title: "Patient Outcomes Dashboard",
								description: "Quantify your clinical impact:",
								features: [
									"Patient outcomes and recovery dashboards",
									"Efficiency and compliance metrics",
									"Benchmarking against peer institutions",
								],
							},
							{
								icon: "👥",
								title: "Care Team Collaboration Hub",
								description: "Your command center for multidisciplinary care:",
								features: [
									"Assign cases to team members",
									"Centralize updates, notes, and tasks",
									"Visualize workflow and team efficiency in real-time",
								],
							},
						].map((item, idx) => (
							<motion.div
								key={idx}
								className="p-6 bg-white rounded-lg shadow-lg"
								initial={{ opacity: 0, y: 30 }}
								whileInView={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.6, delay: idx * 0.1 }}
								viewport={{ once: true }}>
								<h3 className="text-2xl font-semibold mb-4 flex items-center gap-2">{item.icon} {item.title}</h3>
								<p className="mb-4">{item.description}</p>
								<ul className="list-disc list-inside mb-4">
									{item.features?.map((feature, i) => (
										<li key={i}>{feature}</li>
									))}
								</ul>
								<LearnMoreButton onClick={() => openModal(item.title, 'Details about ' + item.title)} label="Learn More" />
							</motion.div>
						))}
					</div>
				</div>
			</section>



			<div>
				<LearnMoreModal
					isOpen={modalState.isOpen}
					onClose={closeModal}
					title={modalState.title}
					content={modalState.content}
					link={modalState.link}
				/>
				<RequestDemoModal
					isOpen={requestDemoOpen}
					onClose={() => setRequestDemoOpen(false)}
				/>
			</div>
		</div>
	);
};

export default DoctorBenefits;
