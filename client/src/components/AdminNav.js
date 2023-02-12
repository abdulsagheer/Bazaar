import { useDispatch } from "react-redux";
import { logout } from "../store/reducers/authReducer";
const AdminNav = ({ openSidebar }) => {
	const dispatch = useDispatch();
	const adminLogout = () => {
		dispatch(logout("admin-token"));
	};
	return (
		<nav className="fixed left-0 right-0 mx-4 sm:left-64 top-4">
			<div className="flex items-center justify-between w-full p-4 bg-gray-800 sm:justify-end">
				<i
					className="block text-2xl text-white cursor-pointer bi bi-filter-left sm:hidden"
					onClick={openSidebar}></i>
				<button
					className="px-4 py-2 text-white capitalize bg-indigo-600 rounded-md"
					onClick={adminLogout}>
					logout
				</button>
			</div>
		</nav>
	);
};
export default AdminNav;
