import { useState } from "react";
import axios from "../apis/KowApi";

function usePost(url) {
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);

	const postData = async (body, headers) => {
		await axios
			.post(url, body, { headers })
			.then((res) => {
				console.log(res.data);
			})
			.catch((err) => setError(err))
			.finally(setLoading(false));
	};

	return [loading, error, postData];
}

export default usePost;
