import { useState } from "react";
import axios from "../apis/KowApi";

function usePost(url) {
	const [response, setResponse] = useState(null);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);

	const postData = async (body, headers) => {
		await axios
			.post(url, body, { headers })
			.then((response) => {
				setResponse(response.data);
			})
			.catch((err) => setError(err))
			.finally(() => {
				setLoading(false);
				return response;
			});
	};

	return [response, loading, error, postData];
}

export default usePost;
