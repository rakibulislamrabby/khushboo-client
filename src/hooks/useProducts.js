import { useEffect, useState } from "react";

const useProducts = () => {
    const [items, setItems] = useState([]);
    useEffect(() => {
        fetch("https://damp-island-69804.herokuapp.com/inventory")
            .then(res => res.json())
            .then(data => setItems(data))
    }, [])
    return [items, setItems];
}
export default useProducts;