
import SignIn from './components/signin/signin';
import { Route, Routes } from "react-router-dom";
import Home from './components/home/index';
import Layout from './components/layout/Layout';
import RequireAuth from './components/signin/RequireAuth';
import Missing from './components/miscellaneous/Missing';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/login" element={<SignIn />} />

        <Route element={<RequireAuth />}>
          <Route path="/" element={<Home />} />
        </Route>

        {/* catch all */}
        <Route path="*" element={<Missing />} />
      </Route>
    </Routes>
  );
}
