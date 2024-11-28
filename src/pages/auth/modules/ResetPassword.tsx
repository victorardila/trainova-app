interface ResetPasswordProps {
  setCurrentView: (view: "login" | "register" | "reset") => void;
}

const ResetPassword = ({ setCurrentView }: ResetPasswordProps) => {
  return (
    <div>
      <h2>Reset Password View</h2>
      <button onClick={() => setCurrentView("login")}>Back to Login</button>
    </div>
  );
};

export default ResetPassword;
