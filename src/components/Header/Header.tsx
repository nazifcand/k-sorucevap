import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="w-full h-[60px] min-h-[60px] bg-gray-100 border-b">
      <div className="container mx-auto h-full flex items-center justify-center">
        <Link to="/">Home</Link>
      </div>
    </header>
  );
};

export default Header;
