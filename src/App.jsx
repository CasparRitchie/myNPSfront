import './/assets/scss/style.scss';

// Importation des composants nécessaires de react-router-dom pour créer une interface de navigation
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Importation des différentes pages de l'application
import Users from './pages/Users';
import Home from './pages/Home';
import Surveys from './pages/Surveys';
import CreateSurvey from './pages/CreateSurvey';
import ShowSurvey from './pages/ShowSurvey';
import ViewUser from './pages/ViewUser';
import CreateUser from './pages/CreateUser';
import ShowChart from './pages/ShowChart';
import ShowChartData from './pages/ShowChartData';
import Login from './pages/Login';

// Fonction de rendu de l'application
function App() {
  return (
    // Enveloppe de l'application
    <div> 
      {/* Enveloppe de l'interface de navigation */}
      <BrowserRouter>
        {/* Définition des différentes routes de l'application et de leur composant associé */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/surveys" element={<Surveys />} />
          <Route path="/surveys/:id" element={<ShowSurvey />} />
          <Route path="/surveys/create" element={<CreateSurvey />} />
          <Route path="/surveys/ShowChart" element={<ShowChart />} />
          <Route path="/surveys/ShowChartData" element={<ShowChartData />} />
          <Route path="/users" element={<Users />} />
          <Route path="/users/:id" element={<ViewUser />} />
          <Route path="/users/create" element={<CreateUser />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

// Export de l'application
export default App