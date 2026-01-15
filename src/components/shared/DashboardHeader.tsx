import { BellIcon, MenuIcon } from "lucide-react";
import React from "react";

interface DashboardHeaderProps {
	role: "patient" | "doctor";
	userName: string;
	onToggleSidebar?: () => void;
}

const DashboardHeader: React.FC<DashboardHeaderProps> = ({
	role,
	userName,
	onToggleSidebar,
}) => {
	return (
		<header className="bg-gradient-to-r from-red-600 via-pink-500 to-orange-400 text-white shadow-lg">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="flex justify-between items-center py-4">
					<div className="flex items-center">
						{onToggleSidebar && (
							<button
								onClick={onToggleSidebar}
								className="mr-4 p-2 rounded-md hover:bg-white/20 focus:outline-none lg:hidden"
								aria-label="Toggle sidebar">
								<MenuIcon className="h-6 w-6 text-white" />
							</button>
						)}
						<div className="flex items-center">
							<div className="bg-white/20 p-2 rounded-full">
								<svg
									className="h-8 w-8"
									fill="none"
									viewBox="0 0 24 24"
									stroke="currentColor">
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth={2}
										d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
									/>
								</svg>
							</div>
							<div className="ml-4">
								<h1 className="text-xl font-extrabold">
									{role === "doctor" ? `Dr. ${userName}` : `Welcome back, ${userName} ❤️`}
								</h1>
								<p className="text-red-100 text-sm">
									{role === "doctor" ? "Doctor Dashboard" : "Here's how your heart is doing today"}
								</p>
							</div>
						</div>
					</div>
					<div className="flex items-center space-x-4">
						<button className="p-2 text-white/80 hover:text-white hover:bg-white/20 rounded-full transition-colors">
							<BellIcon className="h-6 w-6" />
						</button>
						<img
							className="h-10 w-10 rounded-full border-2 border-white"
							src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${userName}`}
							alt={userName}
						/>
					</div>
				</div>
			</div>
		</header>
	);
};

export default DashboardHeader;
