import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import rootStore from "./app-redux/store";
import AppRoutes from "./routes/AppRoutes";
import AppDataProvider from "./routes/Providers/AppDataProvider";

function App() {
  return (
    <Provider store={rootStore}>
      <AppDataProvider>
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
      </AppDataProvider>
      
    </Provider>
  );
}

export default App;
