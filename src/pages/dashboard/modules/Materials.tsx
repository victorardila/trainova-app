import { FileText, Video, Download, Upload, Plus } from "lucide-react";
import Modal from "../../../components/common/modal";
import { useState } from "react";

// Define types for material and form field
type Material = {
  id: number;
  name: string;
  type: string;
  size: string;
  uploadedAt: string;
};

type FormField = {
  name: string;
  label: string;
  type: "text" | "select" | "number" | "textarea";
  required: boolean;
  options?: string[];
};

const Materials = () => {
  const [materials, setMaterials] = useState<Material[]>([
    {
      id: 1,
      name: "Introducción a React",
      type: "video",
      size: "256 MB",
      uploadedAt: "2024-03-15",
    },
    {
      id: 2,
      name: "Guía de JavaScript",
      type: "pdf",
      size: "2.4 MB",
      uploadedAt: "2024-03-14",
    },
    {
      id: 3,
      name: "Ejercicios prácticos",
      type: "pdf",
      size: "1.8 MB",
      uploadedAt: "2024-03-13",
    },
  ]);

  const [isModalOpen, setIsModalOpen] = useState(false); // Estado para manejar la visibilidad del modal

  // Define the form config for a new material
  const formConfig: FormField[] = [
    {
      name: "name",
      label: "Nombre del Material",
      type: "text",
      required: true,
    },
    {
      name: "type",
      label: "Tipo de Material",
      type: "select",
      options: ["pdf", "video", "audio", "documento"],
      required: true,
    },
    {
      name: "size",
      label: "Tamaño",
      type: "text",
      required: true,
    },
    {
      name: "uploadedAt",
      label: "Fecha de Subida",
      type: "text",
      required: true,
    },
  ];

  const handleNewMaterial = (materialData: Omit<Material, "id">) => {
    const newMaterial: Material = {
      ...materialData,
      id: materials.length + 1, // Generate a new ID
    };
    setMaterials([...materials, newMaterial]);
  };

  return (
    <div>
      <div className="sm:flex sm:items-center">
        <div className="sm:flex-auto">
          <h1 className="text-2xl font-semibold text-gray-900">
            Material del Curso
          </h1>
          <p className="mt-2 text-sm text-gray-700">
            Gestiona los materiales y recursos de tus cursos
          </p>
        </div>
        <div className="mt-4 sm:mt-0 sm:ml-16 sm:flex-none">
          <button
            type="button"
            onClick={() => setIsModalOpen(true)}
            className="inline-flex items-center justify-center rounded-md border border-transparent bg-blue-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 sm:w-auto"
          >
            <Plus className="h-4 w-4 mr-2" />
            Nuevo Material
          </button>
        </div>
      </div>

      <div className="mt-8">
        <div className="flex flex-col">
          <div className="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
              <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
                <table className="min-w-full divide-y divide-gray-300">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                        Material
                      </th>
                      <th className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                        Tipo
                      </th>
                      <th className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                        Tamaño
                      </th>
                      <th className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                        Fecha de subida
                      </th>
                      <th className="relative py-3.5 pl-3 pr-4 sm:pr-6">
                        <span className="sr-only">Acciones</span>
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200 bg-white">
                    {materials.map((material) => (
                      <tr key={material.id}>
                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-900">
                          <div className="flex items-center">
                            {material.type === "video" ? (
                              <Video className="h-5 w-5 text-gray-400 mr-2" />
                            ) : (
                              <FileText className="h-5 w-5 text-gray-400 mr-2" />
                            )}
                            {material.name}
                          </div>
                        </td>
                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                          {material.type.toUpperCase()}
                        </td>
                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                          {material.size}
                        </td>
                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                          {material.uploadedAt}
                        </td>
                        <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6">
                          <button className="text-blue-600 hover:text-blue-900 mr-4">
                            <Download className="h-4 w-4" />
                          </button>
                          <button className="text-blue-600 hover:text-blue-900">
                            <Upload className="h-4 w-4" />
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

      {/* Upload Section */}
      <div className="mt-8">
        <div className="bg-white shadow sm:rounded-lg">
          <div className="px-4 py-5 sm:p-6">
            <h3 className="text-lg font-medium leading-6 text-gray-900">
              Subir nuevo material
            </h3>
            <div className="mt-2 max-w-xl text-sm text-gray-500">
              <p>Sube archivos PDF, documentos, videos o presentaciones.</p>
            </div>
            <div className="mt-5">
              <div className="flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                <div className="space-y-1 text-center">
                  <Upload className="mx-auto h-12 w-12 text-gray-400" />
                  <div className="flex text-sm text-gray-600">
                    <label
                      htmlFor="file-upload"
                      className="relative cursor-pointer bg-white rounded-md font-medium text-blue-600 hover:text-blue-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-blue-500"
                    >
                      <span>Subir un archivo</span>
                      <input
                        id="file-upload"
                        name="file-upload"
                        type="file"
                        className="sr-only"
                      />
                    </label>
                    <p className="pl-1">o arrastra y suelta</p>
                  </div>
                  <p className="text-xs text-gray-500">
                    PDF, DOC, MP4 hasta 50MB
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Modal
        title="Nuevo Material"
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSubmit={handleNewMaterial}
        formConfig={formConfig} // Pass the form configuration to the modal
      />
    </div>
  );
};

export default Materials;
