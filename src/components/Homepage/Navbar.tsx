import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

// Add Google Font
const fontLink = document.createElement("link");
fontLink.href =
	"https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap";
fontLink.rel = "stylesheet";
if (!document.querySelector('link[href*="Inter"]')) {
	document.head.appendChild(fontLink);
}

const Navbar = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const [isScrolled, setIsScrolled] = useState(false);
	const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
	const location = useLocation();

	useEffect(() => {
		const handleScroll = () => {
			setIsScrolled(window.scrollY > 20);
		};
		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	const handleDropdownToggle = (dropdown: string) => {
		setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
	};

	const isActivePath = (path: string) => location.pathname === path;

	return (
		<nav
			style={{
				fontFamily:
					"'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
			}}
			className={`fixed z-50 left-1/2 -translate-x-1/2 transition-all duration-500 ${
				isScrolled
					? "top-4 w-[95%] max-w-7xl rounded-3xl bg-white/90 backdrop-blur-xl border border-gray-200/60"
					: "top-0 w-full rounded-none bg-white/98 backdrop-blur-md"
			}`}>
				<div
					className={`mx-auto transition-all duration-500 ${
						isScrolled ? "px-4 md:px-6 lg:px-10" : "px-4 md:px-8 lg:px-12"
					}`}>
				<div className="flex justify-between items-center h-14">
					{/* Logo with premium animation */}
					<Link to="/" className="flex items-center group relative">
						<div className="relative overflow-hidden rounded-2xl p-1">
							<div className="absolute inset-0 bg-gradient-to-r from-red-50 to-red-100 opacity-0  transition-opacity duration-500 rounded-2xl"></div>
							<img
								src="/logos/real_logo.png"
								alt="Logo"
								className="h-16 w-auto relative z-10 transition-all duration-500 group-hover:scale-105 filter group-hover:drop-shadow-md"
							/>
						</div>
					</Link>

					{/* Desktop Navigation */}
					<div className="hidden md:flex space-x-1.5 items-center">
						<Link
							to="/"
							className={`relative px-3 py-1.5 text-sm font-medium transition-all duration-400 rounded-xl shadow-xl group overflow-hidden ${
								isActivePath("/")
									? "text-red-600"
									: "text-gray-600 hover:text-red-600"
							}`}>
							<span className="relative z-10 tracking-wide">About</span>
							<span
								className={`absolute inset-0 bg-gradient-to-r from-red-50 via-red-100/80 to-red-50 rounded-xl transition-all duration-400 ${
									isActivePath("/")
										? "scale-100 opacity-100"
										: "scale-90 opacity-0 group-hover:scale-100 group-hover:opacity-100"
								}`}></span>
						</Link>

						{/* Product Dropdown */}
						<div className="relative">
							<button
								onClick={() => handleDropdownToggle("product")}
								className="relative px-3 py-1.5 text-sm font-medium text-gray-600 hover:text-red-600 transition-all duration-400 rounded-xl shadow-xl overflow-hidden"
							>
								<span className="relative z-10 tracking-wide">Product</span>
								<span className="absolute inset-0 bg-gradient-to-r from-red-50 via-red-100/80 to-red-50 rounded-xl scale-90 opacity-0 transition-all duration-400 hover:scale-100 hover:opacity-100"></span>
							</button>
							<div className={`absolute left-0 mt-4 w-72 bg-white backdrop-blur-xl border border-gray-100 rounded-3xl shadow-2xl transform transition-all duration-400 ease-out ${activeDropdown === "product" ? "opacity-100 translate-y-0 scale-100 pointer-events-auto" : "opacity-0 translate-y-4 scale-95 pointer-events-none"} overflow-hidden`}>
								<div className="p-4 space-y-1">
									<Link
										to="/for-doctors"
										className="flex items-center justify-between px-6 py-4 text-gray-600 hover:bg-gradient-to-r hover:from-red-50 hover:via-red-50/90 hover:to-transparent hover:text-red-600 font-medium tracking-wide rounded-xl transition-all duration-300 group/item border border-transparent hover:border-red-100">
										<span className="transform transition-all duration-300 group-hover/item:translate-x-2 text-base">
											For Doctors
										</span>
										<span className="opacity-0 group-hover/item:opacity-100 transform translate-x-3 group-hover/item:translate-x-0 transition-all duration-300 text-red-600">
											→
										</span>
									</Link>
									<Link
										to="/for-patients"
										className="flex items-center justify-between px-6 py-4 text-gray-600 hover:bg-gradient-to-r hover:from-red-50 hover:via-red-50/90 hover:to-transparent hover:text-red-600 font-medium tracking-wide rounded-xl transition-all duration-300 group/item border border-transparent hover:border-red-100">
										<span className="transform transition-all duration-300 group-hover/item:translate-x-2 text-base">
											For Patients
										</span>
										<span className="opacity-0 group-hover/item:opacity-100 transform translate-x-3 group-hover/item:translate-x-0 transition-all duration-300 text-red-600">
											→
										</span>
									</Link>
								</div>
							</div>
						</div>

						{/* Resources Dropdown */}
						<div className="relative group">
							<button className="relative px-3 py-1.5 text-sm font-medium text-gray-600 hover:text-red-600 transition-all duration-400 rounded-xl shadow-xl overflow-hidden">
								<span className="relative z-10 tracking-wide">Resources</span>
								<span className="absolute inset-0 bg-gradient-to-r from-red-50 via-red-100/80 to-red-50 rounded-xl scale-90 opacity-0 transition-all duration-400 group-hover:scale-100 group-hover:opacity-100"></span>
							</button>
							<div className="absolute left-0 mt-4 w-72 bg-white backdrop-blur-xl border border-gray-100 rounded-3xl shadow-2xl transform opacity-0 translate-y-4 scale-95 pointer-events-none transition-all duration-400 ease-out group-hover:opacity-100 group-hover:translate-y-0 group-hover:scale-100 group-hover:pointer-events-auto overflow-hidden">
								<div className="p-4">
									<Link
										to="/blog"
										className="flex items-center justify-between px-6 py-4 text-gray-600 hover:bg-gradient-to-r hover:from-red-50 hover:via-red-50/90 hover:to-transparent hover:text-red-600 font-medium tracking-wide rounded-xl transition-all duration-300 group/item border border-transparent hover:border-red-100">
										<span className="transform transition-all duration-300 group-hover/item:translate-x-2 text-base">
											Blog
										</span>
										<span className="opacity-0 group-hover/item:opacity-100 transform translate-x-3 group-hover/item:translate-x-0 transition-all duration-300 text-red-600">
											→
										</span>
									</Link>
								</div>
							</div>
						</div>

						<Link
							to="/contact"
							className={`relative px-3 py-1.5 text-sm font-medium transition-all duration-400 rounded-xl shadow-xl group overflow-hidden ${
								isActivePath("/contact")
									? "text-red-600"
									: "text-gray-600 hover:text-red-600"
							}`}>
							<span className="relative z-10 tracking-wide">Contact</span>
							<span
								className={`absolute inset-0 bg-gradient-to-r from-red-50 via-red-100/80 to-red-50 rounded-xl transition-all duration-400 ${
									isActivePath("/contact")
										? "scale-100 opacity-100"
										: "scale-90 opacity-0 group-hover:scale-100 group-hover:opacity-100"
								}`}></span>
						</Link>
					</div>

					{/* Authentication Buttons - CTA */}
					<div className="hidden md:flex items-center space-x-1.5">
						<Link
							to="/auth"
							className="relative px-3 py-1.5 text-sm font-medium text-gray-600 hover:text-red-400 transition-all duration-400 rounded-xl shadow-xl group overflow-hidden">
							<span className="relative z-10 tracking-wide">Log In</span>
							<span className="absolute inset-0 bg-gradient-to-r from-gray-50 to-gray-100 rounded-xl transform scale-90 opacity-0 transition-all duration-400 group-hover:scale-100 group-hover:opacity-100"></span>
						</Link>
						<Link
							to="/auth"
							className="relative px-3 py-1.5 text-sm font-semibold text-white rounded-xl shadow-xl overflow-hidden group transform transition-all duration-400 hover:shadow-2xl hover:-translate-y-0.5">
							<span className="absolute inset-0 bg-gradient-to-r from-red-600 via-red-600 to-red-700 transition-all duration-400"></span>
							<span className="absolute inset-0 bg-gradient-to-r from-red-700 via-red-800 to-red-900 opacity-0 transition-opacity duration-400 group-hover:opacity-100"></span>
							<span className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-400">
								<span className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent transform -translate-x-full group-hover:translate-x-full transition-transform duration-700"></span>
							</span>
							<span className="relative z-10 flex items-center tracking-wide">
								Sign Up
								<span className="ml-1 transform transition-transform duration-400 group-hover:translate-x-1"></span>
							</span>
						</Link>
					</div>

					{/* Mobile Menu Button */}
					<div className="md:hidden">
						<button
							onClick={() => setIsMenuOpen(!isMenuOpen)}
							className="relative p-3 text-gray-600 hover:text-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 rounded-xl transition-all duration-400 hover:bg-red-50"
							aria-label={isMenuOpen ? "Close menu" : "Open menu"}
							aria-expanded={isMenuOpen}>
							<div className="relative w-6 h-6">
								<Menu
									className={`absolute inset-0 h-6 w-6 transition-all duration-400 ${
										isMenuOpen
											? "rotate-180 opacity-0 scale-50"
											: "rotate-0 opacity-100 scale-100"
									}`}
								/>
								<X
									className={`absolute inset-0 h-6 w-6 transition-all duration-400 ${
										isMenuOpen
											? "rotate-0 opacity-100 scale-100"
											: "-rotate-180 opacity-0 scale-50"
									}`}
								/>
							</div>
						</button>
					</div>
				</div>
			</div>

			{/* Mobile Menu */}
			<div
				className={`md:hidden bg-white backdrop-blur-xl border-t border-gray-100 transition-all duration-500 ease-in-out shadow-2xl ${
					isScrolled ? "rounded-b-3xl" : ""
				} ${
					isMenuOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
				} overflow-hidden`}
				aria-hidden={!isMenuOpen}>
				<div className="px-6 pt-6 pb-8 space-y-2">
					<Link
						to="/"
						onClick={() => setIsMenuOpen(false)}
						className={`block px-5 py-4 rounded-2xl font-medium text-base transition-all duration-400 transform hover:translate-x-1 ${
							isActivePath("/")
								? "bg-gradient-to-r from-red-50 via-red-100/80 to-red-50 text-red-600 border border-red-200"
								: "text-gray-600 hover:bg-gradient-to-r hover:from-gray-50 hover:to-transparent hover:text-red-600"
						}`}>
						About
					</Link>

					{/* Mobile Product Dropdown */}
					<div className="space-y-2">
						<button
							onClick={() => handleDropdownToggle("product")}
							className="w-full flex items-center justify-between px-5 py-4 text-gray-600 font-medium text-base rounded-2xl hover:bg-gradient-to-r hover:from-gray-50 hover:to-transparent transition-all duration-400">
							<span>Product</span>
							<span
								className={`transform transition-transform duration-400 text-red-600 ${
									activeDropdown === "product" ? "rotate-90" : ""
								}`}>
								›
							</span>
						</button>
						<div
							className={`pl-4 space-y-2 transition-all duration-400 overflow-hidden ${
								activeDropdown === "product"
									? "max-h-60 opacity-100"
									: "max-h-0 opacity-0"
							}`}>
							<Link
								to="/for-doctors"
								onClick={() => setIsMenuOpen(false)}
								className="block px-5 py-3.5 text-gray-600 hover:bg-gradient-to-r hover:from-red-50 hover:via-red-50/80 hover:to-transparent hover:text-red-600 rounded-xl font-medium text-base tracking-wide transition-all duration-400 transform hover:translate-x-1 border border-transparent hover:border-red-100">
								For Doctors
							</Link>
							<Link
								to="/for-patients"
								onClick={() => setIsMenuOpen(false)}
								className="block px-5 py-3.5 text-gray-700 hover:bg-gradient-to-r hover:from-red-50 hover:via-red-50/80 hover:to-transparent hover:text-red-600 rounded-xl font-medium text-base tracking-wide transition-all duration-400 transform hover:translate-x-1 border border-transparent hover:border-red-100">
								For Patients
							</Link>
						</div>
					</div>

					{/* Mobile Resources Dropdown */}
					<div className="space-y-2">
						<button
							onClick={() => handleDropdownToggle("resources")}
							className="w-full flex items-center justify-between px-5 py-4 text-gray-700 font-medium text-base rounded-2xl hover:bg-gradient-to-r hover:from-gray-50 hover:to-transparent transition-all duration-400">
							<span>Resources</span>
							<span
								className={`transform transition-transform duration-400 text-red-600 ${
									activeDropdown === "resources" ? "rotate-90" : ""
								}`}>
								›
							</span>
						</button>
						<div
							className={`pl-4 space-y-2 transition-all duration-400 overflow-hidden ${
								activeDropdown === "resources"
									? "max-h-60 opacity-100"
									: "max-h-0 opacity-0"
							}`}>
							<Link
								to="/blog"
								onClick={() => setIsMenuOpen(false)}
								className="block px-5 py-3.5 text-gray-700 hover:bg-gradient-to-r hover:from-red-50 hover:via-red-50/80 hover:to-transparent hover:text-red-600 rounded-xl font-medium text-base tracking-wide transition-all duration-400 transform hover:translate-x-1 border border-transparent hover:border-red-100">
								Blog
							</Link>
						</div>
					</div>

					<Link
						to="/contact"
						onClick={() => setIsMenuOpen(false)}
						className={`block px-5 py-4 rounded-2xl font-medium text-base transition-all duration-400 transform hover:translate-x-1 ${
							isActivePath("/contact")
								? "bg-gradient-to-r from-red-50 via-red-100/80 to-red-50 text-red-600 border border-red-200"
								: "text-gray-700 hover:bg-gradient-to-r hover:from-gray-50 hover:to-transparent hover:text-red-600"
						}`}>
						Contact
					</Link>

					<div className="border-t border-gray-200 my-4"></div>

					<Link
						to="/auth"
						onClick={() => setIsMenuOpen(false)}
						className="block px-5 py-4 text-gray-700 hover:bg-gradient-to-r hover:from-gray-50 hover:to-transparent hover:text-red-600 rounded-2xl font-medium text-base transition-all duration-400 transform hover:translate-x-1">
						Log In
					</Link>

					<Link
						to="/auth"
						onClick={() => setIsMenuOpen(false)}
						className="relative block px-5 py-4 bg-gradient-to-r from-red-600 via-red-600 to-red-700 text-white hover:from-red-700 hover:via-red-800 hover:to-red-900 rounded-2xl font-semibold text-base shadow-xl transition-all duration-400 transform hover:scale-102 text-center overflow-hidden group">
						<span className="relative z-10">Sign Up</span>
						<span className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-400">
							<span className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent transform -translate-x-full group-hover:translate-x-full transition-transform duration-700"></span>
						</span>
					</Link>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
