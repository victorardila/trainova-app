import { Users, BarChart, Clock, Calendar } from 'lucide-react';

const StudentTracking = () => {
  const students = [
    {
      id: 1,
      name: 'Ana García',
      email: 'ana.garcia@example.com',
      progress: 75,
      lastAccess: '2024-03-15',
      coursesCompleted: 3,
      totalTime: '45h 30m',
    },
    {
      id: 2,
      name: 'Carlos López',
      email: 'carlos.lopez@example.com',
      progress: 45,
      lastAccess: '2024-03-14',
      coursesCompleted: 1,
      totalTime: '23h 15m',
    },
    {
      id: 3,
      name: 'María Rodríguez',
      email: 'maria.rodriguez@example.com',
      progress: 90,
      lastAccess: '2024-03-15',
      coursesCompleted: 5,
      totalTime: '78h 45m',
    },
  ];

  return (
    <div>
      <h1 className="text-2xl font-semibold text-gray-900">Seguimiento Estudiantil</h1>

      {/* Stats Overview */}
      <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
        <div className="bg-white overflow-hidden shadow rounded-lg">
          <div className="p-5">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <Users className="h-6 w-6 text-blue-600" />
              </div>
              <div className="ml-5 w-0 flex-1">
                <dl>
                  <dt className="text-sm font-medium text-gray-500 truncate">
                    Total Estudiantes
                  </dt>
                  <dd className="text-lg font-semibold text-gray-900">1,234</dd>
                </dl>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white overflow-hidden shadow rounded-lg">
          <div className="p-5">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <BarChart className="h-6 w-6 text-green-600" />
              </div>
              <div className="ml-5 w-0 flex-1">
                <dl>
                  <dt className="text-sm font-medium text-gray-500 truncate">
                    Tasa de Finalización
                  </dt>
                  <dd className="text-lg font-semibold text-gray-900">78%</dd>
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
                    Tiempo Promedio
                  </dt>
                  <dd className="text-lg font-semibold text-gray-900">45h</dd>
                </dl>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white overflow-hidden shadow rounded-lg">
          <div className="p-5">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <Calendar className="h-6 w-6 text-yellow-600" />
              </div>
              <div className="ml-5 w-0 flex-1">
                <dl>
                  <dt className="text-sm font-medium text-gray-500 truncate">
                    Retención Mensual
                  </dt>
                  <dd className="text-lg font-semibold text-gray-900">92%</dd>
                </dl>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Student List */}
      <div className="mt-8">
        <div className="sm:flex sm:items-center">
          <div className="sm:flex-auto">
            <h2 className="text-lg font-medium text-gray-900">Lista de Estudiantes</h2>
            <p className="mt-2 text-sm text-gray-700">
              Detalle del progreso y actividad de los estudiantes
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
                        Progreso General
                      </th>
                      <th className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                        Cursos Completados
                      </th>
                      <th className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                        Tiempo Total
                      </th>
                      <th className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                        Último Acceso
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200 bg-white">
                    {students.map((student) => (
                      <tr key={student.id}>
                        <td className="whitespace-nowrap px-3 py-4">
                          <div className="flex items-center">
                            <div className="h-10 w-10 flex-shrink-0">
                              <img
                                className="h-10 w-10 rounded-full"
                                src={`https://ui-avatars.com/api/?name=${student.name}&background=random`}
                                alt=""
                              />
                            </div>
                            <div className="ml-4">
                              <div className="font-medium text-gray-900">{student.name}</div>
                              <div className="text-gray-500">{student.email}</div>
                            </div>
                          </div>
                        </td>
                        <td className="whitespace-nowrap px-3 py-4">
                          <div className="flex items-center">
                            <div className="w-full bg-gray-200 rounded-full h-2.5">
                              <div
                                className="bg-blue-600 h-2.5 rounded-full"
                                style={{ width: `${student.progress}%` }}
                              ></div>
                            </div>
                            <span className="ml-2 text-sm text-gray-900">{student.progress}%</span>
                          </div>
                        </td>
                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                          {student.coursesCompleted}
                        </td>
                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                          {student.totalTime}
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
    </div>
  );
};

export default StudentTracking;