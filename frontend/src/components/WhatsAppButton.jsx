import { FaWhatsapp } from "react-icons/fa";

const WhatsAppButton = ({ product = null, className = "" }) => {
  const phoneNumber = "917667049362"; // Replace with your WhatsApp number

const message = `
Hi, I'm interested in this product:

🧵 *${product.name}*
💰 Price: ₹${product.new_price}.00
⭐ Rating: 4.5

📝 Description: ${product.description}

${product.image}  // <- image URL on its own line

Please share more details.
`;


  const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center justify-center gap-2 text-white  ${className}`}
    >
      <FaWhatsapp className="text-3xl text-green-600" />
      Enquire Now
    </a>
  );
};

export default WhatsAppButton;
