import { useEffect, useState } from "react";
import axios from "../apis/KowApi";

function usePost(url, body) {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        axios
            .post(url, body)
            .then((response) => {
                console.log(response);
            })
            .catch((err) => setError(err))
            .finally(() => {
                setLoading(false);
            });
    }, [url, body]);

    return { loading, error };
}

export default usePost;
