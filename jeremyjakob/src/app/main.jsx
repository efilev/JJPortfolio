import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import "./index.css";
import App from './App.jsx'
import Header from '../components/header.jsx';
import About from '../components/about.jsx';
import Blog from '../components/blog.jsx';
import Contact from '../components/contact.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <Header />
    <About />
    <Blog />
    <Contact />
  </StrictMode>,
)
