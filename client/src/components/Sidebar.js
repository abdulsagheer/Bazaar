import { Link } from "react-router-dom";
const Sidebar = ({ side, closeSidebar }) => {
	return (
		<div
			className={`fixed top-0 ${side} sm:left-0 w-64 h-screen bg-gray-800 z-10 transition-all`}>
			<i
				className="absolute block text-lg cursor-pointer bi bi-x-lg top-4 right-4 sm:hidden"
				onClick={closeSidebar}></i>
			<div className="p-4 bg-white">
				<img src="/logo.svg" alt="logo" />
			</div>
			<ul className="mt-4">
				<li className="flex items-center px-4 py-3 text-white transition-all cursor-pointer hover:bg-gray-600">
					<i className="inline-block mr-2 text-lg bi bi-card-list"></i>{" "}
					<Link to="/dashboard/products" className="text-base capitalize">
						products
					</Link>
				</li>
				<li className="flex items-center px-4 py-3 text-white transition-all cursor-pointer hover:bg-gray-600">
					<i className="inline-block mr-2 text-lg bi bi-bag-check"></i>{" "}
					<Link to="/dashboard/orders" className="text-base capitalize">
						orders
					</Link>
				</li>
				<li className="flex items-center px-4 py-3 text-white transition-all cursor-pointer hover:bg-gray-600">
					<i className="inline-block mr-2 text-lg bi bi-people-fill"></i>{" "}
					<Link to="/dashboard/products" className="text-base capitalize">
						customers
					</Link>
				</li>
				<li className="flex items-center px-4 py-3 text-white transition-all cursor-pointer hover:bg-gray-600">
					<i className="inline-block mr-2 text-lg bi bi-bar-chart"></i>{" "}
					<Link to="/dashboard/categories" className="text-base capitalize">
						categories
					</Link>
				</li>
			</ul>
		</div>
	);
};
export default Sidebar;
