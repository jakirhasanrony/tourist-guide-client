import { useEffect, useState } from "react";

const useStories = () => {
    const [stories, setStories] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        fetch('http://localhost:5000/stories')
            .then(res => res.json())
            .then(data => {
                setLoading(false);
                setStories(data);
            });
    }, [])
    return [stories, loading]
};

export default useStories;