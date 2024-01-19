import { Route, Routes } from 'react-router-dom';
import Layout from './Layout';
import About from './pages/About';
import Article from './pages/Article';
import Articles from './pages/Articles';
import Home from './pages/Home';
import Login from './pages/Login';
import MyPage from './pages/MyPage';
import NotFound from './pages/NotFound';
import Mealplans from './pages/Mealplans';
import BottomNav from './BottomNav';
import First from "./pages/Home";
import Second from "./pages/Second";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/Mealplans" element={<Mealplans />} />
      </Route>
      <Route path="/articles" element={<Articles />}>
      <Route path=":id" element={<Article />} />
        </Route>
      <Route path="/login" element={<Login />} />
      <Route path="/mypage" element={<MyPage />} />
      <Route path="*" element={<NotFound />} />
      <Route index element={<BottomNav />} />
    </Routes>
  );
};

export default App;
