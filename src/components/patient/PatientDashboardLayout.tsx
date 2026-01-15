import { Menu } from "lucide-react";
import React, { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import PatientSidebar from "./PatientSidebar";

interface PatientDashboardLayoutProps {
	children: React.ReactNode;
	userName: string;
}

const 	PatientDashboardLayout: React.FC<PatientDashboardLayoutProps> = ({ children, userName }) => {
	const location = useLocation();
	const [sidebarOpen, setSidebarOpen] = useState(false);
	const sidebarRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		function handleClickOutside(event: MouseEvent) {
			if (
				sidebarRef.current &&
				!sidebarRef.current.contains(event.target as Node) &&
				sidebarOpen
			) {
				setSidebarOpen(false);
			}
		}
		if (sidebarOpen) {
			document.addEventListener("mousedown", handleClickOutside);
		} else {
			document.removeEventListener("mousedown", handleClickOutside);
		}
		return () => {
			document.removeEventListener("mousedown", handleClickOutside);
		};
	}, [sidebarOpen]);

	useEffect(() => {
		setSidebarOpen(false);
	}, [location.pathname]);

	useEffect(() => {
		if (sidebarOpen) {
			document.body.style.overflow = "hidden";
		} else {
			document.body.style.overflow = "";
		}
	}, [sidebarOpen]);

	const toggleSidebar = () => {
		setSidebarOpen(!sidebarOpen);
	};

	const sidebarProps = {
		isCollapsed: !sidebarOpen,
		onToggle: toggleSidebar,
		isMobileOpen: sidebarOpen,
	};

	const currentPath = location.pathname.split("/").pop() || "";
	const formattedTitle =
		currentPath.length > 0
			? currentPath.replace(/-/g, " ").charAt(0).toUpperCase() +
			  currentPath.slice(1).replace(/-/g, " ")
			: "Dashboard";

	// Calculate sidebar width based on collapsed state
	const sidebarWidth = !sidebarOpen ? "w-16" : "w-64";

	return (
		<div className="h-screen bg-gray-50 flex flex-col overflow-hidden">
			<div className="flex flex-1 h-full">
				<aside
					ref={sidebarRef}
					className={`${sidebarWidth} bg-white border-r border-gray-200 transition-all duration-300 ease-in-out flex-shrink-0 hidden lg:flex`}
					aria-label="Sidebar"
				>
					<PatientSidebar {...sidebarProps} />
				</aside>

				{/* Mobile sidebar overlay */}
				{sidebarOpen && (
					<>
						<aside
							ref={sidebarRef}
							className="fixed inset-y-0 left-0 z-50 w-64 bg-white border-r border-gray-200 lg:hidden"
						>
							<PatientSidebar {...sidebarProps} />
						</aside>
						<div
							className="fixed inset-0 bg-black bg-opacity-40 z-40 lg:hidden"
							onClick={toggleSidebar}
							aria-hidden="true"
						/>
					</>
				)}

				<div className="flex-1 flex flex-col min-w-0 h-full">
					{/* Custom Header - Clean, white, no border like homepage */}
					<header className="sticky top-0 z-40 bg-white flex-shrink-0">
						<div className="flex items-center justify-between h-14 px-4 sm:px-6">
							<div className="flex items-center">
								<button
									onClick={toggleSidebar}
									className="lg:hidden p-2 -ml-2 text-gray-600 hover:text-red-600 hover:bg-red-50 rounded-xl transition-all duration-400"
									aria-label="Toggle sidebar">
									<Menu className="h-5 w-5" />
								</button>
								<h1 className="ml-2 lg:ml-0 text-lg font-semibold text-gray-900 tracking-tight">
									{formattedTitle}
								</h1>
							</div>
							<div className="flex items-center space-x-4">
								<span className="text-sm text-gray-600 font-medium hidden sm:block">
									Welcome, {userName}
								</span>
								<div className="h-8 w-8 rounded-full bg-gradient-to-r from-red-500 to-red-600 flex items-center justify-center text-white font-semibold text-sm shadow-lg">
									{userName.charAt(0).toUpperCase()}
								</div>
							</div>
						</div>
					</header>
					<main className="flex-1 overflow-y-auto bg-gray-50 p-3 sm:p-4 lg:p-4">
						{children}
					</main>
				</div>
			</div>
		</div>
	);
};

export default PatientDashboardLayout;
