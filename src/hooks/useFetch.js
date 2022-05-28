import { useEffect, useState } from "react";
import axios from "../apis/KowApi";

function useFetch(url, headers) {
	const [data, setData] = useState(null);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);

	const fetchData = async () => {
		console.log("URL: " + url);
		return axios({ url: url, method: "get", timeout: 8000, headers: headers })
			.then((res) => {
				setData(res.data);
			})
			.catch((err) => {
				setError(err.message);
			})
			.finally(setLoading(false));
	};

	return [data, loading, error, fetchData];
}

export default useFetch;
