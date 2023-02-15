import { Link } from "react-router-dom";
import { FiSearch } from "react-icons/fi";
import { BsHandbag } from "react-icons/bs";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import Search from "./Search";
import { toggleSearchBar } from "../../store/reducers/globalReducer";
const Nav = () => {
	const { userToken, user } = useSelector((state) => state.authReducer);
	const { searchBar } = useSelector((state) => state.globalReducer);
	const { items, total } = useSelector((state) => state.cartReducer);
	console.log(total);
	const dispatch = useDispatch();
	return (
		<>
			<nav className="nav">
				<div className="my-container">
					<div className="flex items-center justify-between">
						<Link to="/">
							<img src="/logo.svg" className="object-cover h-full" alt="logo" />
						</Link>
						<ul className="flex items-center">
							<li className="cursor-pointer nav-li">
								<FiSearch
									size={22}
									onClick={() => dispatch(toggleSearchBar())}
								/>
							</li>
							{userToken ? (
								<li className="nav-li">
									<Link to="/user" className="nav-link">
										{user?.name}
									</Link>
								</li>
							) : (
								<li className="nav-li">
									<Link to="/login" className="nav-link">
										sign in
									</Link>
								</li>
							)}

							<li className="relative nav-li">
								<Link to="/cart">
									<BsHandbag size={20} />
									<span className="nav-circle">{items}</span>
								</Link>
							</li>
						</ul>
					</div>
				</div>
			</nav>
			<Search />
		</>
	);
};
export default Nav;
