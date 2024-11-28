import { useState } from "react";
import { Plus, Pencil, Trash2, Search } from "lucide-react";
import Modal from "../../../components/common/modal";

// Define types for course and form field
type Course = {
  id: number;
  name: string;
  modality: string;
  duration: string;
  status: string;
};

type FormField = {
  name: string;
  label: string;
  type: "text" | "select" | "number" | "textarea";
  required: boolean;
  options?: string[];
};

const CourseManagement = () => {
  const [courses, setCourses] = useState<Course[]>([
    {
      id: 1,
      name: "React Fundamentals",
      modality: "En línea",
      duration: "8 semanas",
      status: "Activo",
    },
    {
      id: 2,
      name: "JavaScript Avanzado",
      modality: "Híbrido",
      duration: "12 semanas",
      status: "Activo",
    },
  ]);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState(""); // Estado para la búsqueda

  // Define the form config for a new course
  const formConfig: FormField[] = [
    {
      name: "name",
      label: "Nombre del Curso",
      type: "text",
      required: true,
    },
    {
      name: "modality",
      label: "Modalidad",
      type: "select",
      options: ["En línea", "Híbrido", "Presencial"],
      required: true,
    },
    {
      name: "duration",
      label: "Duración",
      type: "text",
      required: true,
    },
    {
      name: "status",
      label: "Estado",
      type: "select",
      options: ["Activo", "Inactivo"],
      required: true,
    },
  ];

  const handleNewCourse = (courseData: Omit<Course, "id">) => {
    const newCourse: Course = {
      ...courseData,
      id: courses.length + 1, // Generate a new ID
    };
    setCourses([...courses, newCourse]);
  };

  // Filtrar los cursos según la búsqueda
  const filteredCourses = courses.filter((course) =>
    course.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div>
      <div className="sm:flex sm:items-center">
        <div className="sm:flex-auto">
          <h1 className="text-2xl font-semibold text-gray-900">
            Gestión de Cursos
          </h1>
          <p className="mt-2 text-sm text-gray-700">
            Administra todos los cursos de la plataforma
          </p>
        </div>
        <div className="mt-4 sm:mt-0 sm:ml-16 sm:flex-none">
          <button
            type="button"
            onClick={() => setIsModalOpen(true)}
            className="inline-flex items-center justify-center rounded-md border border-transparent bg-blue-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 sm:w-auto"
          >
            <Plus className="h-4 w-4 mr-2" />
            Nuevo Curso
          </button>
        </div>
      </div>

      <div className="mt-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          {" "}
          {/* Añadir justify-between */}
          <div className="relative flex-1 max-w-lg">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="text"
              className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              placeholder="Buscar cursos..."
              value={searchQuery} // Vincula el valor de la búsqueda
              onChange={(e) => setSearchQuery(e.target.value)} // Actualiza el estado de la búsqueda
            />
          </div>
          {/* Total de cursos al lado derecho de la barra */}
          <div className="ml-4 text-sm font-semibold text-gray-700">
            Total de Cursos:
            <span className="text-gray-900 ml-1 font-awakenning text-4xl">
              {filteredCourses.length}
            </span>
          </div>
        </div>

        <div className="mt-8 flex flex-col">
          <div className="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
              <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
                <table className="min-w-full divide-y divide-gray-300">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                        Nombre
                      </th>
                      <th className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                        Modalidad
                      </th>
                      <th className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                        Duración
                      </th>
                      <th className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                        Estado
                      </th>
                      <th className="relative py-3.5 pl-3 pr-4 sm:pr-6">
                        <span className="sr-only">Acciones</span>
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200 bg-white">
                    {filteredCourses.map((course) => (
                      <tr key={course.id}>
                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-900">
                          {course.name}
                        </td>
                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                          {course.modality}
                        </td>
                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                          {course.duration}
                        </td>
                        <td className="whitespace-nowrap px-3 py-4 text-sm">
                          <span className="inline-flex rounded-full bg-green-100 px-2 text-xs font-semibold leading-5 text-green-800">
                            {course.status}
                          </span>
                        </td>
                        <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6">
                          <button className="text-blue-600 hover:text-blue-900 mr-4">
                            <Pencil className="h-4 w-4" />
                          </button>
                          <button className="text-red-600 hover:text-red-900">
                            <Trash2 className="h-4 w-4" />
                          </button>
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

      <Modal
        title="Nuevo curso"
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSubmit={handleNewCourse}
        formConfig={formConfig} // Pass the form configuration to the modal
      />
    </div>
  );
};

export default CourseManagement;
