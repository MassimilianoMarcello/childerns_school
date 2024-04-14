
import Link from 'next/link';
import "./Dropdown.css";

const Dropdown = ({ items, title }) => {
  // const [opendrop, setOpendrop] = useState(false);
  // const handleClick = () => {
  //   setOpendrop(!opendrop);
  // };

  return (
    <div className="dropdown">
      <h3>{title}</h3>
      
      <ul>
        {items.map((link, index) => (
          <li key={index}>
          
            <Link href={link.to}>{link.label}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Dropdown;

