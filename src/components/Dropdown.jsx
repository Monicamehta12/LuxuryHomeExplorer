import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp, faChevronDown } from "@fortawesome/free-solid-svg-icons";

const Dropdown = ({ title, items, isOpen, onToggle }) => {
  return (
    <div className="relative inline-block text-left">
      {/* Dropdown Button */}
      <button
        onClick={onToggle}
        className="flex items-center transition"
      >
        {title}
        {isOpen ? (
            <FontAwesomeIcon icon={faChevronUp} className="ml-2 transition-transform duration-300" />
          ) : (
            <FontAwesomeIcon icon={faChevronDown} className="ml-2 transition-transform duration-300"/>
          )
        }
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div className="absolute bottom-full w-52 mt-2 border-2 border-white bg-white shadow-lg text-neutral-600">
          {items.map((item, index) => (
            <a
              key={index}
              href={item.link}
              className="block px-4 py-2 hover:bg-neutral-600 hover:text-white"
            >
              {item.label}
            </a>
          ))}
        </div>
      )}
    </div>
  );
};

export default Dropdown;
