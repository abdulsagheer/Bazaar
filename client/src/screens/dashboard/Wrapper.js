import { useState } from "react";
import AdminNav from "../../components/AdminNav";
import Sidebar from "../../components/Sidebar";
const Wrapper = ({ children }) => {
	const [side, setSide] = useState("-left-64");
	const openSidebar = () => {
		setSide("left-0");
	};
	const closeSidebar = () => {
		setSide("-left-64");
	};
	return (
		<>
			<Sidebar side={side} closeSidebar={closeSidebar} />
			<AdminNav openSidebar={openSidebar} />
			<section className="min-h-screen px-4 ml-0 bg-gray-900 sm:ml-64 pt-28">
				<div className="px-4 py-6 text-white bg-gray-800">{children}</div>
			</section>
		</>
	);
};
export default Wrapper;
