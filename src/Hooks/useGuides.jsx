import { useEffect, useState } from "react";

const useGuides = () => {
    const [guides, setGuides] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        fetch('http://localhost:5000/guide')
            .then(res => res.json())
            .then(data => {
                setLoading(false);
                setGuides(data);
            });
    }, [])
    return [guides, loading]

}
export default useGuides;