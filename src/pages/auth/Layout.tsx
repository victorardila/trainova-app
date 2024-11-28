import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { GraduationCap } from "lucide-react";
import Login from "./modules/Login";
import Register from "./modules/Register";
import ResetPassword from "./modules/ResetPassword";

const Layout = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [currentView, setCurrentView] = useState<
    "login" | "register" | "reset"
  >("login");

  // funcion para cambiar la vista actual
  const handleChangeView = (view: "login" | "register" | "reset") => {
    setCurrentView(view);
  };

  const handleSubmitWithRequest = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Iniciar sesión con email:", email, "y contraseña:", password);

    // Realizar la petición al backend
    try {
      const response = await fetch("http://localhost:3001/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        // Manejar respuesta exitosa
        console.log("Inicio de sesión exitoso", data);
        navigate("/dashboard");
      } else {
        // Manejar error de autenticación
        console.error("Error de inicio de sesión", data);
      }
    } catch (error) {
      console.error("Hubo un error en la solicitud", error);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md flex-grow">
        <div className="flex justify-center">
          <GraduationCap className="h-12 w-12 text-blue-600" />
        </div>
        <h2 className="mt-6 text-center text-3xl font-bold text-gray-900">
          {currentView === "login"
            ? "Inicia sesión en tu cuenta"
            : currentView === "register"
            ? "Regístrate en tu cuenta"
            : "Restablecer contraseña"}
        </h2>
      </div>

      <div className="mt-8 flex-grow">
        <div>
          {currentView === "login" && (
            <Login
              email={email}
              setEmail={setEmail}
              password={password}
              setPassword={setPassword}
              handleSubmit={handleSubmitWithRequest}
              setCurrentView={handleChangeView}
            />
          )}
          {currentView === "register" && (
            <Register setCurrentView={handleChangeView} />
          )}
          {currentView === "reset" && (
            <ResetPassword setCurrentView={handleChangeView} />
          )}
        </div>
      </div>
    </div>
  );
};

export default Layout;
