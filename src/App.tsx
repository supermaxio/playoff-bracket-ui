
import SignIn from './components/signin/signin';
import { Route, Routes } from "react-router-dom";
import Home from './components/home/index';
import Layout from './components/layout/Layout';
import RequireAuth from './components/signin/RequireAuth';
import Missing from './components/miscellaneous/Missing';
import CreateBracket from './components/brackets/CreateBracket';
import Dashboard from './components/dashboard/Dashboard';

export default function App() {

  return (
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/login" element={<SignIn />} />

          <Route element={<RequireAuth />}>
            <Route path="/" element={<CreateBracket />} />
            <Route path="/dashboard" element={<Dashboard />} />
          </Route>

          {/* catch all */}
          <Route path="*" element={<Missing />} />
        </Route>
      </Routes>
  );
}
