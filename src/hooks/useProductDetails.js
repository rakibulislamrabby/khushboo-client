import { useEffect, useState } from "react";

const UseProductDetails = (serviceId) => {
    const [product, setProduct] = useState([]);
    useEffect(() => {
        fetch(`${process.env.PUBLIC_URL}/products.json`)
            .then(res => res.json())
            .then(data => {
                const items = data.find(item => item.id == serviceId)
                setProduct(items)
            })
    }, [])
    return [product]
}
export default UseProductDetails;