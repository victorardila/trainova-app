import { useState } from 'react';
import { LineChart, BarChart3, Users, Clock } from 'lucide-react';

const Monitoring = () => {
  const [students] = useState([
    { id: 1, name: 'Ana García', course: 'React Fundamentals', progress: 75, lastAccess: '2024-03-15' },
    { id: 2, name: 'Carlos López', course: 'JavaScript Avanzado', progress: 45, lastAccess: '2024-03-14' },
    { id: 3, name: 'María Rodríguez', course: 'Node.js Básico', progress: 90, lastAccess: '2024-03-15' },
  ]);

  return (
    <div>
      <h1 className="text-2xl font-semibold text-gray-900">Monitoreo en Tiempo Real</h1>

      {/* Stats Overview */}
      <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        <div className="bg-white overflow-hidden shadow rounded-lg">
          <div className="p-5">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <Users className="h-6 w-6 text-blue-600" />
              </div>
              <div className="ml-5 w-0 flex-1">
                <dl>
                  <dt className="text-sm font-medium text-gray-500 truncate">
                    Estudiantes Activos Hoy
                  </dt>
                  <dd className="text-lg font-semibold text-gray-900">156</dd>
                </dl>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white overflow-hidden shadow rounded-lg">
          <div className="p-5">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <LineChart className="h-6 w-6 text-green-600" />
              </div>
              <div className="ml-5 w-0 flex-1">
                <dl>
                  <dt className="text-sm font-medium text-gray-500 truncate">
                    Promedio de Progreso
                  </dt>
                  <dd className="text-lg font-semibold text-gray-900">67%</dd>
                </dl>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white overflow-hidden shadow rounded-lg">
          <div className="p-5">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <Clock className="h-6 w-6 text-purple-600" />
              </div>
              <div className="ml-5 w-0 flex-1">
                <dl>
                  <dt className="text-sm font-medium text-gray-500 truncate">
                    Tiempo Promedio de Estudio
                  </dt>
                  <dd className="text-lg font-semibold text-gray-900">2.5h</dd>
                </dl>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Student Progress Table */}
      <div className="mt-8">
        <div className="sm:flex sm:items-center">
          <div className="sm:flex-auto">
            <h2 className="text-lg font-medium text-gray-900">Progreso de Estudiantes</h2>
            <p className="mt-2 text-sm text-gray-700">
              Lista detallada del progreso de los estudiantes en tiempo real
            </p>
          </div>
        </div>

        <div className="mt-4 flex flex-col">
          <div className="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
              <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
                <table className="min-w-full divide-y divide-gray-300">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                        Estudiante
                      </th>
                      <th className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                        Curso
                      </th>
                      <th className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                        Progreso
                      </th>
                      <th className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                        Último Acceso
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200 bg-white">
                    {students.map((student) => (
                      <tr key={student.id}>
                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-900">
                          {student.name}
                        </td>
                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                          {student.course}
                        </td>
                        <td className="whitespace-nowrap px-3 py-4 text-sm">
                          <div className="flex items-center">
                            <div className="w-full bg-gray-200 rounded-full h-2.5">
                              <div
                                className="bg-blue-600 h-2.5 rounded-full"
                                style={{ width: `${student.progress}%` }}
                              ></div>
                            </div>
                            <span className="ml-2 text-gray-900">{student.progress}%</span>
                          </div>
                        </td>
                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                          {student.lastAccess}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Real-time Notifications */}
      <div className="mt-8">
        <h2 className="text-lg font-medium text-gray-900">Notificaciones en Tiempo Real</h2>
        <div className="mt-4 bg-white shadow sm:rounded-lg">
          <div className="px-4 py-5 sm:p-6">
            <div className="space-y-4">
              {[
                { message: 'Ana García completó el módulo 3 de React Fundamentals', time: 'Hace 5 minutos' },
                { message: 'Carlos López alcanzó el 45% del curso JavaScript Avanzado', time: 'Hace 15 minutos' },
                { message: 'María Rodríguez inició una nueva lección', time: 'Hace 30 minutos' },
              ].map((notification, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <BarChart3 className="h-5 w-5 text-blue-500 mt-0.5" />
                  <div className="flex-1">
                    <p className="text-sm text-gray-900">{notification.message}</p>
                    <p className="text-xs text-gray-500">{notification.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Monitoring;