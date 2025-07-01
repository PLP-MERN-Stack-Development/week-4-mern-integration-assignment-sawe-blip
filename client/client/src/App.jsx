import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import PostPage from './pages/PostPage';
import NewPostPage from './pages/NewPostPage';
import CategoryList from "./components/CategoryList";



export default function App() {
  return (
    <Router>
      <Navbar />
      <CategoryList />
      <div className="container">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/posts/:id" element={<PostPage />} />
          <Route path="/new" element={<NewPostPage />} />
        </Routes>
      </div>
    </Router>
  );
}

