
import SignIn from './components/signin/SignIn';
import { Route, Routes } from "react-router-dom";
import Layout from './components/layout/Layout';
import LocalRequireAuth from './components/signin/LocalRequireAuth';
import PersistLogin from './components/signin/PersistLogin';
import Missing from './components/miscellaneous/Missing';
import CreateBracket from './components/brackets/CreateBracket';
import Dashboard from './components/dashboard/Dashboard';

export default function App() {

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/login" element={<SignIn />} />

        <Route element={<PersistLogin />}>
          <Route element={<LocalRequireAuth />}>
            <Route path="/bracket" element={<CreateBracket />} />
            <Route path="/" element={<Dashboard />} />
          </Route>
        </Route>

        {/* catch all */}
        <Route path="*" element={<Missing />} />
      </Route>
    </Routes>
  );
}
