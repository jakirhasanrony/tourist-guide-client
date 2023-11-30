import { useEffect, useState } from "react";

const useTourPackages = () => {
    const [tourPackages, setTourPackages] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        fetch('http://localhost:5000/tourPackage')
            .then(res => res.json())
            .then(data => {
                setLoading(false);
                setTourPackages(data);
            });
    }, [])
    return [tourPackages, loading]
};

export default useTourPackages;