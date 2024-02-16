import { AxiosErrorHandler } from "./api/AxiosErrorHandler/AxiosErrorHandler";
import CheckDatePage from "./pages/CheckDatePage/CheckDatePage";

function App() {
  return (
    <AxiosErrorHandler>
      <CheckDatePage />
    </AxiosErrorHandler>
  );
}

export default App;
