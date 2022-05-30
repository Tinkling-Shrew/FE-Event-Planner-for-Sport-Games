import { useState, useEffect } from "react";
import axios from "../apis/KowApi";

const useAxiosFetch = (dataUrl) => {
	const [data, setData] = useState([]);
	const [error, setError] = useState(null);
	const [loading, setLoading] = useState(null);

	useEffect(() => {
		let isMounted = true;

		const source = axios.CancelToken.source();

		const fetchData = async (url) => {
			setLoading(true);
			try {
				const response = await axios({
					url: dataUrl,
					method: "get",
					timeout: 8000,
					headers: { cancelToken: source.token },
				});
				if (isMounted) {
					setData(response.data);
					setError(null);
				}
			} catch (err) {
				if (isMounted) {
					setError(err.message);
					setData([]);
				}
			} finally {
				isMounted && setLoading(false);
			}
		};

		fetchData(dataUrl);

		const cleanUp = () => {
			console.log("Cleanup function");
			isMounted = false;
			source.cancel();
		};

		return cleanUp;
	}, [dataUrl]);

	return [data, error, loading];
};

export default useAxiosFetch;