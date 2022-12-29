
import SignIn from './components/signin/signin';
import { Route, Routes } from "react-router-dom";
import { RequireAuth } from 'react-auth-kit';
import Home from './components/home/index'


export default function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <RequireAuth loginPath="/login">
            <Home />
          </RequireAuth>
        }
      />
      <Route
        path="/login"
        element={
          <SignIn />
        }
      />
    </Routes>
  );
}
