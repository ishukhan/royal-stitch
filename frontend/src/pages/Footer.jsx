import { Link } from "react-router-dom";
import FOOTER_LINKS from "../assets/footer_links";
import FOOTER_CONTACT_INFO from "../assets/footer_contact";
import SOCIALS from "../assets/socials";

const Footer = () => {
  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#f9fafb] text-[#111827] mt-20 border-t">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Top section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand Section */}
          <div>
            <Link to="/" onClick={handleClick} className="text-2xl font-bold text-gray-900">
              <h3 className="text-2xl font-bold text-yellow-500 tracking-wider group-hover:text-yellow-400 transition-colors duration-300 italic drop-shadow-md decoration-wavy underline underline-offset-4">
            Royal Stitch
          </h3>
            </Link>
            <p className="text-sm text-gray-600 mt-4 max-w-xs">
              Discover the art of intricate embroidery at Royal Stich. Where every stitch tells a story, blending tradition with modern elegance.
            </p>
          </div>

          {/* Footer Links */}
          {FOOTER_LINKS.map((col) => (
            <FooterColumn title={col.title} key={col.title}>
              <ul className="space-y-2 text-sm text-gray-600">
                {col.links.map((link) => (
                  <li key={link}>
                    <Link to="/" className="hover:text-black transition-all duration-200">
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </FooterColumn>
          ))}

          {/* Contact Info */}
          <FooterColumn title={FOOTER_CONTACT_INFO.title}>
            <ul className="space-y-2 text-sm text-gray-600">
              {FOOTER_CONTACT_INFO.links.map((link) => (
                <li key={link.label}>
                  <div className="flex flex-col sm:flex-row gap-1">
                    <span className="font-medium">{link.label}:</span>
                    <span>{link.value}</span>
                  </div>
                </li>
              ))}
            </ul>
          </FooterColumn>

          {/* Social Media */}
          <FooterColumn title={SOCIALS.title}>
            <div className="flex gap-4 mt-2">
              {SOCIALS.links.map((link, index) => (
                <a
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:scale-110 transition-transform duration-200"
                >
                  <img src={link.icon} alt="social" width={24} height={24} />
                </a>
              ))}
            </div>
          </FooterColumn>
        </div>

        {/* Divider */}
        <div className="mt-12 border-t pt-6 text-center text-sm text-gray-500">
          © 2025 Shopee. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

// Reusable Footer Column Component
const FooterColumn = ({ title, children }) => (
  <div>
    <h4 className="text-lg font-semibold mb-4">{title}</h4>
    {children}
  </div>
);

export default Footer;
