import { useEffect, useState } from "react"

const useWatch = () => {
    const [watches, setWatches] = useState([]);

    useEffect(() => {
        fetch('watch.json')
            .then(res => res.json())
            .then(data => setWatches(data))
    }, []);
    return [watches, setWatches];
}

export default useWatch;