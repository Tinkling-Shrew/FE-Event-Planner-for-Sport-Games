import { useEffect, useState } from "react";
import axios from "../apis/KowApi";

function useFetch(url, headers) {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const fetchData = async () => {
        await axios
            .get(url, { headers }, { timeout: 8 })
            .then((response) => {
                console.log(response.data);
                setData(response.data);
            })
            .catch((err) => setError(err.message))
            .finally(setLoading(false));
    };

    useEffect(() => {
        fetchData();
    }, [url, headers]);

    return [data, loading, error];
}

export default useFetch;
