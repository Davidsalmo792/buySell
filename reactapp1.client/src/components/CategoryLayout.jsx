import React, { useState } from "react";
import "./CategoryLayout.css";

function CategoryLayout({ title, children }) {
    const [selectedLocation, setSelectedLocation] = useState("");

    const regions = [
        "Hela Sverige", "Blekinge", "Dalarna", "Gotland", "Gävleborg", "Göteborg",
        "Halland", "Jämtland", "Jönköping", "Kalmar", "Kronoberg", "Norrbotten",
        "Skåne", "Stockholm", "Södermanland", "Uppsala", "Värmland", "Västerbotten",
        "Västernorrland", "Västmanland", "Västra Götaland", "Örebro", "Östergötland"
    ];

    return (
        <div className="category-layout">
            {/* 🔍 Search and Location Section */}
            <div className="search-section">
                <input
                    type="text"
                    placeholder="Sök efter annonser..."
                    className="search-input"
                />
                <select
                    className="location-select"
                    value={selectedLocation}
                    onChange={(e) => setSelectedLocation(e.target.value)}
                >
                    <option value="">Välj plats</option>
                    {regions.map((region, index) => (
                        <option key={index} value={region}>
                            {region}
                        </option>
                    ))}
                </select>
            </div>

            {/* 🧩 Filter bar placeholder */}
            <div className="filter-bar">
                <p>
                    Filtersektion – här kan du filtrera efter pris, märke, årsmodell, m.m.
                </p>
            </div>

            {/* 🏷️ Category content */}
            <div className="category-content">
                <h1>{title}</h1>
                {children}
            </div>
        </div>
    );
}

export default CategoryLayout;
