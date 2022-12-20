
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Users from './pages/Users';
import Home from './pages/Home';
import Surveys from './pages/Surveys';
import CreateSurvey from './pages/CreateSurvey';
import ShowSurvey from './pages/ShowSurvey';
import ViewUser from './pages/ViewUser';
import CreateUser from './pages/CreateUser';


function App() {
  return (
    <div> 
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/surveys" element={<Surveys />} />
        <Route path="/surveys/:id" element={<ShowSurvey />} />
        <Route path="/surveys/create" element={<CreateSurvey />} />
        <Route path="/users" element={<Users />} />
        <Route path="/users/:id" element={<ViewUser />} />
        <Route path="/users/create" element={<CreateUser />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;
