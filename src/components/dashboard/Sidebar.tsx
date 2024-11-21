import { Link, useLocation } from 'react-router-dom';
import {
  LayoutDashboard,
  BookOpen,
  Settings,
  User,
  FileText,
  Bell,
  BarChart,
  FolderTree
} from 'lucide-react';

const navigation = [
  { name: 'Dashboard', href: '/dashboard', icon: LayoutDashboard },
  { name: 'Gestión de Cursos', href: '/dashboard/courses', icon: BookOpen },
  { name: 'Estructura de Curso', href: '/dashboard/course-structure', icon: FolderTree },
  { name: 'Monitoreo en Tiempo Real', href: '/dashboard/monitoring', icon: BarChart },
  { name: 'Notificaciones', href: '/dashboard/notifications', icon: Bell },
  { name: 'Material del Curso', href: '/dashboard/materials', icon: FileText },
  { name: 'Seguimiento Estudiantil', href: '/dashboard/student-tracking', icon: User },
  { name: 'Configuración', href: '/dashboard/settings', icon: Settings },
];

const Sidebar = () => {
  const location = useLocation();

  return (
    <div className="flex flex-col w-64 bg-gray-800">
      <div className="flex h-16 items-center px-4">
        <span className="text-xl font-bold text-white">Trainova</span>
      </div>
      <nav className="flex-1 space-y-1 px-2 py-4">
        {navigation.map((item) => {
          const Icon = item.icon;
          const isActive = location.pathname === item.href;
          return (
            <Link
              key={item.name}
              to={item.href}
              className={`
                flex items-center px-2 py-2 text-sm font-medium rounded-md
                ${isActive
                  ? 'bg-gray-900 text-white'
                  : 'text-gray-300 hover:bg-gray-700 hover:text-white'
                }
              `}
            >
              <Icon className="mr-3 h-6 w-6" />
              {item.name}
            </Link>
          );
        })}
      </nav>
    </div>
  );
};

export default Sidebar;