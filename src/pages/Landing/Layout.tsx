import { useNavigate } from 'react-router-dom';
import { GraduationCap, BookOpen, Users, Award } from 'lucide-react';

const LandingPage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <GraduationCap className="h-8 w-8 text-blue-600" />
            <span className="text-xl font-bold text-gray-900">Trainova</span>
          </div>
          <button
            onClick={() => navigate('/login')}
            className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
          >
            Iniciar Sesión
          </button>
        </nav>
      </header>

      {/* Hero Section */}
      <main>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              Aprende sin límites
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Descubre una nueva forma de aprender con nuestra plataforma de cursos en línea.
              Accede a contenido de calidad y desarrolla tus habilidades a tu propio ritmo.
            </p>
            <button
              onClick={() => navigate('/login')}
              className="bg-blue-600 text-white px-8 py-3 rounded-lg text-lg hover:bg-blue-700 transition-colors"
            >
              Comienza ahora
            </button>
          </div>

          {/* Features */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20">
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <BookOpen className="h-12 w-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Cursos de Calidad</h3>
              <p className="text-gray-600">
                Accede a contenido actualizado y relevante para tu desarrollo profesional.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <Users className="h-12 w-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Aprende en Comunidad</h3>
              <p className="text-gray-600">
                Conecta con otros estudiantes y expertos en tu área de interés.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <Award className="h-12 w-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Certificaciones</h3>
              <p className="text-gray-600">
                Obtén certificados reconocidos que avalen tus conocimientos.
              </p>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-50 border-t">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h4 className="text-sm font-semibold text-gray-900 mb-4">Sobre Nosotros</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-600 hover:text-gray-900">Acerca de</a></li>
                <li><a href="#" className="text-gray-600 hover:text-gray-900">Carreras</a></li>
                <li><a href="#" className="text-gray-600 hover:text-gray-900">Blog</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-sm font-semibold text-gray-900 mb-4">Recursos</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-600 hover:text-gray-900">Guías</a></li>
                <li><a href="#" className="text-gray-600 hover:text-gray-900">Documentación</a></li>
                <li><a href="#" className="text-gray-600 hover:text-gray-900">Tutoriales</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-sm font-semibold text-gray-900 mb-4">Legal</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-600 hover:text-gray-900">Privacidad</a></li>
                <li><a href="#" className="text-gray-600 hover:text-gray-900">Términos</a></li>
                <li><a href="#" className="text-gray-600 hover:text-gray-900">Cookies</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-sm font-semibold text-gray-900 mb-4">Contacto</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-600 hover:text-gray-900">Soporte</a></li>
                <li><a href="#" className="text-gray-600 hover:text-gray-900">Ventas</a></li>
                <li><a href="#" className="text-gray-600 hover:text-gray-900">Prensa</a></li>
              </ul>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t text-center text-gray-600">
            <p>&copy; 2024 Trainova. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;