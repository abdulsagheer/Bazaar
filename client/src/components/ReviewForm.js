import { useEffect } from "react";
import { useForm } from "../hooks/Form";
import toast, { Toaster } from "react-hot-toast";
import { usePostReviewMutation } from "../store/services/userOrdersService";
const ReviewForm = ({ state, toggleReview, data }) => {
	console.log("form data: ", data);
	const { state: ratingState, onChange } = useForm({
		rating: "",
		message: "",
	});
	const [submitReview, response] = usePostReviewMutation();
	console.log("Response: ", response);
	const addReview = (e) => {
		e.preventDefault();
		submitReview({
			...ratingState,
			user: data?.details?.userId?._id,
			product: data?.details?.productId?._id,
			id: data.details?._id,
		});
	};
	console.log("response: ", response);
	useEffect(() => {
		if (response.isSuccess) {
			toast.success(response?.data?.msg);
			toggleReview();
		}
	}, [response.isSuccess]);
	return state ? (
		<>
			<Toaster position="top-right" reverseOrder={false} />
			<div className="fixed inset-0 w-full h-full bg-black/40 z-[1000] flex items-center justify-center">
				<div className="w-[90%] sm:w-8/12 md:w-6/12 lg:w-4/12">
					<div className="p-5 bg-white">
						<h1 className="mb-3 text-base font-medium text-gray-700 capitalize">
							add a review
						</h1>
						{response.isError &&
							response?.error?.data?.errors.map((err) => (
								<p
									key={err}
									className="bg-rose-50 px-4 py-2.5 text-rose-900 rounded mb-2 font-medium">
									{err.msg}
								</p>
							))}
						<form onSubmit={addReview}>
							<div className="mb-3">
								<label
									htmlFor="rating"
									className="block mb-2 text-sm font-medium capitalize">
									rating
								</label>
								<select
									name="rating"
									id="rating"
									className="form-input"
									onChange={onChange}
									value={ratingState.rating}>
									<option value="">Choose a rating</option>
									<option value="1">1</option>
									<option value="2">2</option>
									<option value="3">3</option>
									<option value="4">4</option>
									<option value="5">5</option>
								</select>
							</div>
							<label
								htmlFor="rating"
								className="block mb-2 text-sm font-medium capitalize">
								message
							</label>
							<textarea
								name="message"
								id=""
								cols="30"
								rows="5"
								className="form-input"
								placeholder="Write a message"
								onChange={onChange}
								value={ratingState.message}></textarea>
							<div className="flex justify-between mt-3">
								<input
									type="submit"
									value="add reivew"
									className="rounded btn-indigo"
								/>
								<button
									className="px-4 py-2 text-sm font-medium text-white capitalize rounded bg-rose-600"
									onClick={() => toggleReview()}>
									close
								</button>
							</div>
						</form>
					</div>
				</div>
			</div>
		</>
	) : (
		""
	);
};
export default ReviewForm;
