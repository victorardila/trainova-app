import { Bell, DollarSign } from "lucide-react";

const Header = () => {
  return (
    <header className="bg-white border-b border-gray-200">
      <div className="px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex-1" />
        <div className="flex items-center space-x-4">
          <div className="flex items-center bg-gray-100 px-3 py-1 rounded-lg">
            <DollarSign className="h-5 w-5 text-gray-600" />
            <span className="ml-1 text-gray-900 font-medium">1,234.56</span>
          </div>
          <button className="relative p-2 text-gray-600 hover:text-gray-900">
            <Bell className="h-6 w-6" />
            <span className="absolute top-0 right-0 block h-2 w-2 rounded-full bg-red-500 ring-2 ring-white" />
          </button>
          <div className="flex items-center space-x-2">
            <img
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
              alt="Profile"
              className="h-8 w-8 rounded-full"
            />
            <span className="text-sm font-medium text-gray-900">John Doe</span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
