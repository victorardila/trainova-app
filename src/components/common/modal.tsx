import { useState } from "react";
import { X } from "lucide-react";

// Define un tipo genérico para los datos del formulario
interface DynamicFormModalProps<T = Record<string, unknown>> {
  title: string;
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (data: T) => void;
  formConfig: FormField[];
}

interface FormField {
  name: string;
  label: string;
  type: "text" | "select" | "textarea" | "number";
  options?: string[]; // Usado solo para select
  required?: boolean;
}

// Usa un tipo genérico para el formulario
const Modal = <T extends Record<string, unknown>>({
  title,
  isOpen,
  onClose,
  onSubmit,
  formConfig,
}: DynamicFormModalProps<T>): JSX.Element | null => {
  const [formData, setFormData] = useState<T>(
    formConfig.reduce((acc, field) => {
      acc[field.name as keyof T] = "" as T[keyof T]; // Inicializa las claves con valores vacíos
      return acc;
    }, {} as T)
  );

  if (!isOpen) return null;

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >,
    field: string
  ) => {
    setFormData({
      ...formData,
      [field]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full flex justify-center items-center">
      <div className="relative bg-white rounded-lg shadow-xl p-8 w-full max-w-md">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
        >
          <X className="h-6 w-6" />
        </button>
        <h2 className="text-2xl font-bold mb-4">{title}</h2>
        <form onSubmit={handleSubmit}>
          {formConfig.map((field) => (
            <div key={field.name} className="mb-4">
              <label
                htmlFor={field.name}
                className="block text-sm font-medium text-gray-700"
              >
                {field.label}
              </label>
              {field.type === "text" || field.type === "number" ? (
                <input
                  type={field.type}
                  id={field.name}
                  value={(formData[field.name as keyof T] as string) || ""}
                  onChange={(e) => handleInputChange(e, field.name)}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                  required={field.required}
                />
              ) : field.type === "select" ? (
                <select
                  id={field.name}
                  value={(formData[field.name as keyof T] as string) || ""}
                  onChange={(e) => handleInputChange(e, field.name)}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                >
                  {field.options?.map((option, idx) => (
                    <option key={idx} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              ) : field.type === "textarea" ? (
                <textarea
                  id={field.name}
                  value={(formData[field.name as keyof T] as string) || ""}
                  onChange={(e) => handleInputChange(e, field.name)}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                  rows={4}
                  required={field.required}
                />
              ) : null}
            </div>
          ))}
          <div className="mt-6">
            <button
              type="submit"
              className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-600 text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              Guardar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Modal;
