import React, { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import DashboardHeader from "../shared/DashboardHeader";
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
	};

	const currentPath = location.pathname.split("/").pop() || "";
	const formattedTitle =
		currentPath.length > 0
			? currentPath.replace(/-/g, " ").charAt(0).toUpperCase() +
			  currentPath.slice(1).replace(/-/g, " ")
			: "Dashboard";

	return (
		<div className="min-h-screen bg-gray-50 flex flex-col">
			<div className="flex flex-1">
				<aside
					ref={sidebarRef}
					className={`fixed inset-y-0 left-0 z-50 w-64 bg-white border-r border-gray-200 transform transition-transform duration-300 ease-in-out
            ${sidebarOpen ? "translate-x-0" : "-translate-x-full"}
            lg:translate-x-0 lg:static lg:inset-auto`}
					aria-label="Sidebar"
				>
					<PatientSidebar {...sidebarProps} />
				</aside>

				{sidebarOpen && (
					<div
						className="fixed inset-0 bg-black bg-opacity-40 z-40 lg:hidden"
						onClick={toggleSidebar}
						aria-hidden="true"
					/>
				)}

				<div className="flex-1 flex flex-col min-w-0">
					<header className="sticky top-0 z-40">
						<DashboardHeader
							role="patient"
							userName={userName}
							onToggleSidebar={toggleSidebar}
						/>
					</header>
					<main className="flex-1 overflow-y-auto bg-gray-50 p-4 sm:p-6 lg:p-8">
						{children}
					</main>
				</div>
			</div>
		</div>
	);
};

export default PatientDashboardLayout;
