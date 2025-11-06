import { useEffect, useState } from "react";
import "./CarList.css"; 

export default function CarList() {
    const [cars, setCars] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchCars() {
            try {
                const response = await fetch("https://localhost:7009/api/cars");
                const data = await response.json();
                console.log("Loaded cars:", data);
                setCars(data);
            } catch (error) {
                console.error("Error loading cars:", error);
            } finally {
                setLoading(false);
            }
        }

        fetchCars();
    }, []);

    if (loading) {
        return <p style={{ textAlign: "center", marginTop: "30px" }}>⏳ Laddar fordon...</p>;
    }

    if (cars.length === 0) {
        return <p style={{ textAlign: "center", marginTop: "30px" }}>🚫 Inga fordon upplagda ännu.</p>;
    }

    return (
        <div className="car-grid">
            {cars.map((car) => (
                <div key={car.id} className="car-card">
                    <img src={car.imageUrl} alt={car.title} className="car-image" />
                    <h3>{car.title}</h3>
                    <p>{car.year}</p>
                    <p>{car.price.toLocaleString("sv-SE")} kr</p>
                </div>
            ))}
        </div>
    );
}
