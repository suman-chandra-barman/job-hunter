import { RouterProvider } from "react-router-dom";
import AuthProvider from "./context/AuthProvider";
import router from "./routes/routes";

function App() {
  return (
    <AuthProvider>
      <RouterProvider router={router}></RouterProvider>;
    </AuthProvider>
  );
}

export default App;
