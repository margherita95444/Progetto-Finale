import './App.css';
import { Routes, Route, Outlet } from 'react-router-dom';
import Navbar from './componens/navbar/Navbar';
import Footer from './componens/footer/Footer';
import NotFound from './componens/not-found/NotFound';
import Posts from './componens/posts/Posts';
import PostDetail from './componens/post-detail/PostDetail';
import PostsCategory from './componens/posts-category/PostsCategory';
import Contact from './componens/contact/Contact';
import AboutUs from './componens/about-us/AboutUs';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Outlet />}>
          <Route index element={<Posts />} />
          <Route path="posts/:postId" element={<PostDetail />} />
          <Route path="posts-categories/:categoryId/posts" element={<PostsCategory />} />
        </Route>

        <Route path="/contact/:pageId" element={<Contact />} />
        <Route path="/about-us/:pageId" element={<AboutUs />} />
        <Route path="*" element={<NotFound />} /> 
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
