import { Bell, Check, X } from 'lucide-react';

const Notifications = () => {
  const notifications = [
    {
      id: 1,
      type: 'info',
      title: 'Nuevo contenido disponible',
      message: 'Se ha añadido una nueva lección al curso de React Fundamentals',
      time: 'Hace 5 minutos',
      read: false,
    },
    {
      id: 2,
      type: 'success',
      title: 'Hito alcanzado',
      message: 'Has completado el 75% del curso JavaScript Avanzado',
      time: 'Hace 2 horas',
      read: false,
    },
    {
      id: 3,
      type: 'warning',
      title: 'Fecha límite próxima',
      message: 'La entrega del proyecto final vence en 2 días',
      time: 'Hace 1 día',
      read: true,
    },
  ];

  return (
    <div>
      <div className="sm:flex sm:items-center">
        <div className="sm:flex-auto">
          <h1 className="text-2xl font-semibold text-gray-900">Notificaciones</h1>
          <p className="mt-2 text-sm text-gray-700">
            Gestiona tus notificaciones y alertas
          </p>
        </div>
        <div className="mt-4 sm:mt-0 sm:ml-16 sm:flex-none">
          <button
            type="button"
            className="inline-flex items-center justify-center rounded-md border border-transparent bg-blue-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 sm:w-auto"
          >
            <Check className="h-4 w-4 mr-2" />
            Marcar todo como leído
          </button>
        </div>
      </div>

      <div className="mt-8">
        <div className="flow-root">
          <ul className="-my-5 divide-y divide-gray-200">
            {notifications.map((notification) => (
              <li key={notification.id} className={`py-5 ${notification.read ? 'opacity-75' : ''}`}>
                <div className="relative focus-within:ring-2 focus-within:ring-indigo-500">
                  <div className="flex justify-between items-start">
                    <div className="flex items-start space-x-3">
                      <div className="flex-shrink-0">
                        <Bell className={`h-6 w-6 ${
                          notification.type === 'info' ? 'text-blue-600' :
                          notification.type === 'success' ? 'text-green-600' :
                          'text-yellow-600'
                        }`} />
                      </div>
                      <div className="min-w-0 flex-1">
                        <div className="text-sm font-medium text-gray-900">
                          {notification.title}
                        </div>
                        <p className="text-sm text-gray-500 mt-1">
                          {notification.message}
                        </p>
                        <div className="mt-2 text-xs text-gray-500">
                          {notification.time}
                        </div>
                      </div>
                    </div>
                    <div className="ml-4 flex-shrink-0 flex">
                      <button
                        type="button"
                        className="bg-white rounded-md inline-flex text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                      >
                        <span className="sr-only">Cerrar</span>
                        <X className="h-5 w-5" />
                      </button>
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Notification Settings */}
      <div className="mt-8">
        <h2 className="text-lg font-medium text-gray-900 mb-4">Configuración de Notificaciones</h2>
        <div className="bg-white shadow sm:rounded-lg">
          <div className="px-4 py-5 sm:p-6">
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="flex items-center h-5">
                  <input
                    id="comments"
                    name="comments"
                    type="checkbox"
                    className="focus:ring-blue-500 h-4 w-4 text-blue-600 border-gray-300 rounded"
                    defaultChecked
                  />
                </div>
                <div className="ml-3 text-sm">
                  <label htmlFor="comments" className="font-medium text-gray-700">
                    Nuevos contenidos
                  </label>
                  <p className="text-gray-500">Recibe notificaciones cuando se añada nuevo contenido a tus cursos.</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex items-center h-5">
                  <input
                    id="candidates"
                    name="candidates"
                    type="checkbox"
                    className="focus:ring-blue-500 h-4 w-4 text-blue-600 border-gray-300 rounded"
                    defaultChecked
                  />
                </div>
                <div className="ml-3 text-sm">
                  <label htmlFor="candidates" className="font-medium text-gray-700">
                    Hitos y logros
                  </label>
                  <p className="text-gray-500">Recibe notificaciones sobre tu progreso y logros alcanzados.</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex items-center h-5">
                  <input
                    id="offers"
                    name="offers"
                    type="checkbox"
                    className="focus:ring-blue-500 h-4 w-4 text-blue-600 border-gray-300 rounded"
                    defaultChecked
                  />
                </div>
                <div className="ml-3 text-sm">
                  <label htmlFor="offers" className="font-medium text-gray-700">
                    Fechas límite
                  </label>
                  <p className="text-gray-500">Recibe recordatorios sobre fechas límite de entregas y evaluaciones.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Notifications;