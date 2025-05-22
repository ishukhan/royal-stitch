import { FaWhatsapp } from "react-icons/fa";

const WhatsAppButton = ({ product = null, className = "" }) => {
  const phoneNumber = "917667049362"; // Replace with your WhatsApp number

const message = product
  ? `Hi, I'm interested in this product:\n\n` +
    `🧵 *${product.name}*\n💰 Price: ₹${product.new_price}.00\n` +
    `⭐ Rating: 4.5\n\n` +
    `📝 Description: ${product.description}\n\n` +
    `🖼️ Image: ${product.image}\n\n` +
    `Please share more details.`
  : "Hi, I would like to enquire about your services.";


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
