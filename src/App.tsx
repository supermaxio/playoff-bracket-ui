
import { Route, Routes } from "react-router-dom";
import Layout from './components/layout/Layout';
import SignIn from './components/signin/SignIn';
import LocalRequireAuth from './components/signin/LocalRequireAuth';
import PersistLogin from './components/signin/PersistLogin';
import Missing from './components/miscellaneous/Missing';
import MyBracket from './components/brackets/MyBracket';
import Dashboard from './components/dashboard/Dashboard';
import UserDashboard from './components/dashboard/UserDashboard';
import CreateBracket from "./components/brackets/CreateBracket";

export default function App() {

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/login" element={<SignIn />} />

        <Route element={<PersistLogin />}>
          <Route element={<LocalRequireAuth />}>
            <Route path="/" element={<CreateBracket />} />
            {/* <Route path="/bracket" element={<MyBracket />} /> */}
            <Route path="/users">

              <Route path=":userId" element={<UserDashboard />} />
            </Route>
            {/* <Route path="/" element={<Dashboard />} /> */}

          </Route>
        </Route>

        {/* catch all */}
        <Route path="*" element={<Missing />} />
      </Route>
    </Routes>
  );
}
