import logo from './logo.svg';
import './App.css';
import { userRoutes } from './routes/userRoute';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ContentHOC from './HOC/ContentHOC';

function App() {
  return (
    <BrowserRouter >

      <Routes>
        {userRoutes.map((route, index) => {
          return (
            <Route
              key={index}
              path={route.path}
              element={route.component}
            />
          );
        })}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
