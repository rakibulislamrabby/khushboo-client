import { useState } from "react";

const useproducts = () => {
    const [items, setItems] = useState([]);
    useEffect(() => {
        fetch("http://localhost:5000/inventory")
            .then(res => res.json())
            .then(data => setItems(data))
    }, [])
}