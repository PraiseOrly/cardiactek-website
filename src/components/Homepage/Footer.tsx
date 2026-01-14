import React from "react";
import { Link } from "react-router-dom";

const Footer: React.FC = () => {
	return (
		<footer className="bg-gray-950 text-gray-300 pt-16 pb-12 px-6 border-t border-red-700/40">
			<div className="container mx-auto max-w-7xl">
				{/* CTA Section */}
				<section className="text-center mb-16">
					<h2 className="text-2xl sm:text-3xl font-semibold text-white mb-4">
						Join the Future of Cardiac Care
					</h2>
					<p className="text-gray-400 max-w-2xl mx-auto mb-8">
						Ready to experience next-generation cardiac diagnostics? Get in
						touch to explore how CardiacTek can transform your clinical
						practice.
					</p>

					<div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
						<Link
							to="/request-demo"
							className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg font-medium transition-colors">
							Request Demo
						</Link>
						<Link
							to="/join-beta"
							className="bg-transparent border border-red-600 hover:bg-red-600 hover:text-white text-red-500 px-6 py-3 rounded-lg font-medium transition-colors">
							Join Beta
						</Link>
						<Link
							to="/partners"
							className="bg-transparent border border-gray-600 hover:border-red-600 hover:text-red-500 text-gray-300 px-6 py-3 rounded-lg font-medium transition-colors">
							Partner with Us
						</Link>
					</div>
				</section>

				{/* Main Footer Grid */}
				<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-8 mb-10">
					{/* Logo & Intro */}
					<div className="md:col-span-2 -mt-24">
						<img
							src="/logos/real_logo white.png"
							alt="CardiacTek Logo"
							className="w-56 h-auto rounded"
						/>
						<p className="text-sm leading-relaxed text-gray-400 max-w-sm">
							Empowering clinicians and patients with AI-driven insights for
							precise cardiac diagnostics and improved outcomes.
						</p>
					</div>

					{/* Clinical Tools */}
					<div>
						<h4 className="font-semibold mb-4 text-base border-b border-red-600 pb-2">
							Clinical Tools
						</h4>
						<ul className="space-y-3 text-sm">
							<li>
								<Link
									to="/ecg-analysis"
									className="hover:text-red-500 transition-colors font-medium">
									ECG Analysis
								</Link>
							</li>
							<li>
								<Link
									to="/risk-assessment"
									className="hover:text-red-500 transition-colors font-medium">
									Risk Assessment
								</Link>
							</li>
							<li>
								<Link
									to="/treatment-guidelines"
									className="hover:text-red-500 transition-colors font-medium">
									Treatment Guidelines
								</Link>
							</li>
						</ul>
					</div>

					{/* Resources */}
					<div>
						<h4 className="font-semibold mb-4 text-base border-b border-red-600 pb-2">
							Resources
						</h4>
						<ul className="space-y-3 text-sm">
							<li>
								<Link
									to="/clinical-guidance"
									className="hover:text-red-500 transition-colors font-medium">
									Clinical Guidance
								</Link>
							</li>
							<li>
								<Link
									to="/research-library"
									className="hover:text-red-500 transition-colors font-medium">
									Research Library
								</Link>
							</li>
							<li>
								<Link
									to="/training"
									className="hover:text-red-500 transition-colors font-medium">
									Clinician Training
								</Link>
							</li>
						</ul>
					</div>

					{/* Contact & Compliance */}
					<div>
						<h4 className="font-semibold mb-4 text-base border-b border-red-600 pb-2">
							Compliance
						</h4>
						<ul className="space-y-3 text-sm">
							<li>
								<Link
									to="/hipaa"
									className="hover:text-red-500 transition-colors font-medium">
									HIPAA Compliance
								</Link>
							</li>
							<li>
								<Link
									to="/gdpr"
									className="hover:text-red-500 transition-colors font-medium">
									GDPR
								</Link>
							</li>
							<li>
								<Link
									to="/quality"
									className="hover:text-red-500 transition-colors font-medium">
									Quality Management
								</Link>
							</li>
						</ul>
					</div>
				</div>

				{/* Bottom Footer Section */}
				<div className="border-t border-gray-700/50 pt-6 text-center">
					<p className="text-sm text-gray-500">
						© {new Date().getFullYear()}{" "}
						<span className="font-semibold text-gray-300">CardiacTek</span>. All
						rights reserved. For professional use only.
					</p>

					<div className="mt-3 flex gap-6 justify-center text-sm">
						<Link
							to="/privacy"
							className="hover:text-red-500 transition-colors font-medium">
							Privacy Policy
						</Link>
						<Link
							to="/terms"
							className="hover:text-red-500 transition-colors font-medium">
							Terms of Use
						</Link>
						<Link
							to="/contact"
							className="hover:text-red-500 transition-colors font-medium">
							Contact Us
						</Link>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
