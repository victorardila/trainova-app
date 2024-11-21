import { useState } from "react";
import { FolderTree, Plus, ChevronRight, ChevronDown } from "lucide-react";
import Modal from "../../../components/common/modal";

// Define tipos para la unidad y los campos del formulario
type Unit = {
  id: number;
  title: string;
  contentType: string;
  duration: number;
  description: string;
  idCourse: number;
};

type FormField = {
  name: string; // Agregamos el 'name' como obligatorio
  title: string;
  label: string;
  type: "text" | "select" | "number" | "textarea";
  required: boolean;
  options?: string[];
};

const CourseUnits = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [units, setUnits] = useState<Unit[]>([
    {
      id: 1,
      title: "Contexts y hooks",
      contentType: "Video",
      duration: 90,
      description:
        "En esta unidad veremos el uso de los contextos y la aplicabilidad de lo estados globales",
      idCourse: 1,
    },
    {
      id: 2,
      title: "UseState y UseEffect",
      contentType: "Quiz",
      duration: 24,
      description: "Evaluacion del componente de aprendizaje",
      idCourse: 2,
    },
  ]);

  const handleNewUnit = (data: Record<string, string>) => {
    const newUnit: Unit = {
      id: units.length + 1, // Incrementar el ID basado en la cantidad actual de unidades
      title: data["title"],
      contentType: data["contentType"],
      duration: parseInt(data["duration"]),
      description: data["description"],
      idCourse: 1, // Asumimos que la unidad pertenece al curso con ID 1 por ahora
    };
    setUnits([...units, newUnit]);
  };

  // Configuración del formulario para crear una nueva unidad
  const formConfig: FormField[] = [
    {
      name: "title", // Asegúrate de que cada campo tenga el 'name'
      title: "Título de la Unidad",
      label: "Título de la Unidad",
      type: "text",
      required: true,
    },
    {
      name: "contentType",
      title: "Tipo de Contenido",
      label: "Tipo de Contenido",
      type: "select",
      options: ["Video", "Quiz", "Texto", "Enlace"],
      required: true,
    },
    {
      name: "duration",
      title: "Duración (en minutos)",
      label: "Duración",
      type: "number",
      required: true,
    },
    {
      name: "description",
      title: "Descripción",
      label: "Descripción",
      type: "textarea",
      required: true,
    },
  ];

  return (
    <div>
      <div className="sm:flex sm:items-center">
        <div className="sm:flex-auto">
          <h1 className="text-2xl font-semibold text-gray-900">
            Unidades por curso
          </h1>
          <p className="mt-2 text-sm text-gray-700">
            Organiza el contenido y estructura de tus cursos
          </p>
        </div>
        <div className="mt-4 sm:mt-0 sm:ml-16 sm:flex-none">
          <button
            type="button"
            onClick={() => setIsModalOpen(true)}
            className="inline-flex items-center justify-center rounded-md border border-transparent bg-blue-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 sm:w-auto"
          >
            <Plus className="h-4 w-4 mr-2" />
            Nueva Unidad
          </button>
        </div>
      </div>

      <div className="mt-8 grid grid-cols-12 gap-6">
        {/* Contenido del Curso */}
        <div className="col-span-4 bg-white rounded-lg shadow">
          <div className="p-4 border-b">
            <h2 className="text-lg font-medium text-gray-900">
              Contenido del Curso
            </h2>
          </div>
          <div className="p-4">
            <div className="space-y-4">
              {units.map((unit) => (
                <div key={unit.id}>
                  <div className="flex items-center space-x-2 text-gray-900 font-medium">
                    <ChevronDown className="h-4 w-4" />
                    <FolderTree className="h-4 w-4" />
                    <span>{unit.title}</span>
                  </div>
                  <div className="ml-6 mt-2 space-y-2">
                    <div className="flex items-center space-x-2 text-gray-600">
                      <ChevronRight className="h-4 w-4" />
                      <span>{unit.description}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        {/* Content Editor */}
        <div className="col-span-8 bg-white rounded-lg shadow">
          <div className="col-span-8 bg-white rounded-lg shadow">
            <div className="p-4 border-b">
              <h2 className="text-lg font-medium text-gray-900">
                Editor de Contenido
              </h2>
            </div>
            <div className="p-4">
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Título de la Lección
                  </label>
                  <input
                    type="text"
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                    placeholder="Ingrese el título"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Tipo de Contenido
                  </label>
                  <select className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm">
                    <option>Video</option>
                    <option>Texto</option>
                    <option>Quiz</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Duración Estimada (minutos)
                  </label>
                  <input
                    type="number"
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Descripción
                  </label>
                  <textarea
                    rows={4}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                    placeholder="Ingrese una descripción"
                  />
                </div>

                <div className="flex justify-end space-x-3">
                  <button
                    type="button"
                    className="inline-flex items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                  >
                    Cancelar
                  </button>
                  <button
                    type="button"
                    className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                  >
                    Guardar
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Modal
        title="Nueva Unidad"
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSubmit={handleNewUnit}
        formConfig={formConfig}
      />
    </div>
  );
};

export default CourseUnits;
