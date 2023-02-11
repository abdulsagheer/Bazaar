import { useState, useEffect } from "react";
import { useAuthLoginMutation } from "../../store/services/authService";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setAdminToken } from "../../store/reducers/authReducer";
const AdminLogin = () => {
	const navigate = useNavigate();
	const [state, setState] = useState({
		email: "",
		password: "",
	});
	const handleInputs = (e) => {
		setState({ ...state, [e.target.name]: e.target.value });
	};
	const [login, response] = useAuthLoginMutation();
	console.log("my response", response);
	const errors = response?.error?.data?.errors
		? response?.error?.data?.errors
		: [];
	const adminLoginFunction = (e) => {
		e.preventDefault();
		login(state);
	};
	const dispatch = useDispatch();
	useEffect(() => {
		if (response.isSuccess) {
			localStorage.setItem("admin-token", response?.data?.token);
			dispatch(setAdminToken(response?.data?.token));
			navigate("/dashboard/products");
		}
	}, [response.isSuccess]);
	return (
		<div className="flex items-center justify-center h-screen bg-black1">
			<form
				className="w-10/12 p-5 rounded bg-black2 sm:w-8/12 md:w-6/12 lg:w-3/12"
				onSubmit={adminLoginFunction}>
				<h3 className="mb-4 text-lg font-semibold text-white capitalize">
					dashboard login
				</h3>
				{errors.length > 0 &&
					errors.map((error, key) => (
						<div key={key}>
							<p className="alert-danger">{error.msg}</p>
						</div>
					))}
				<div className="mt-4 mb-4">
					<input
						type="email"
						name="email"
						className="w-full p-4 text-white rounded outline-none bg-black1"
						onChange={handleInputs}
						value={state.email}
						placeholder="Enter email..."
					/>
				</div>
				<div className="mb-4">
					<input
						type="password"
						name="password"
						className="w-full p-4 text-white rounded outline-none bg-black1"
						onChange={handleInputs}
						value={state.password}
						placeholder="Enter password..."
					/>
				</div>
				<div className="mb-4">
					<input
						type="submit"
						value={response.isLoading ? "Loading..." : "sign in"}
						className="w-full p-4 font-semibold text-white uppercase bg-indigo-600 rounded cursor-pointer"
					/>
				</div>
			</form>
		</div>
	);
};
export default AdminLogin;
