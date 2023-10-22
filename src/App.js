import './App.css';
import Header from './components/Header';
import { Route, Router, Routes } from 'react-router-dom';
import ContactList from './components/ContactList';
import Landing from './pages/Landing';
import Footer from './components/Footer';
import ViewContact from './components/ViewContact'
import EditContact from './components/EditContact'
function App() {
  return (
    <div>
      <Header/>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/contactlist" element={<ContactList />} />
        <Route path="/viewcontact" element={<ViewContact />} />
        <Route path="/editcontact" element={<EditContact />} />

      </Routes>
      <Footer/>

    </div>
  );
}

export default App;
