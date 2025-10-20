import "./Home.css";
import { useNavigate } from "react-router-dom";

function Home() {
    const navigate = useNavigate();

    const categories = [
        { name: "Fordon", icon: "🚗" },
        { name: "Kläder & skor", icon: "🧥" },
        { name: "Bostad", icon: "🏠" },
        { name: "För hemmet", icon: "🛋️" },
        { name: "Elektronik", icon: "💻" },
        { name: "Sport & fritid", icon: "⚽" },
        { name: "Djur", icon: "🐾" },
    ];

    const handleCategoryClick = (categoryName) => {
        if (categoryName === "Fordon") {
            navigate("/fordon");
        }
        // later we can add more:
        // else if (categoryName === "Elektronik") navigate("/elektronik");
    };

    return (
        <div className="home-container">
            <h1>Upptäck våra kategorier</h1>
            <div className="category-grid">
                {categories.map((cat, index) => (
                    <div
                        key={index}
                        className="category-card"
                        onClick={() => handleCategoryClick(cat.name)}
                    >
                        <div className="icon">{cat.icon}</div>
                        <p>{cat.name}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Home;
