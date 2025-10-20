import { useState } from "react";
import "./Contact.css";

function Contact() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        message: "",
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert("Tack för ditt meddelande! (Thank you for your message)");
        console.log("Form submitted:", formData);
        // Later, send this to your Azure Function endpoint
    };

    return (
        <div className="contact-container">
            <h2>Kontakta oss</h2>
            <p>Fyll i formuläret nedan, så återkommer vi till dig så snart som möjligt.</p>

            <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Namn</label>
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className="form-group">
                    <label>E-post</label>
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className="form-group">
                    <label>Telefonnummer</label>
                    <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                    />
                </div>

                <div className="form-group">
                    <label>Meddelande</label>
                    <textarea
                        name="message"
                        rows="4"
                        value={formData.message}
                        onChange={handleChange}
                        required
                    ></textarea>
                </div>

                <button type="submit" className="btn-send">Skicka</button>
            </form>
        </div>
    );
}

export default Contact;
