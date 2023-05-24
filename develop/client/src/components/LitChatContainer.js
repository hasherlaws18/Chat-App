import React, { useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import Home from './pages/Home';
import Groups from '.pages/Groups';
import Messages from '.pages/Messages';
import Login from '.pages/Login';
import Register from '.pages/Register';
import Error404 from '.pages/Error404'
import './styles/style.css';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

export default function LitChatContainer() {
  const [currentPage, setCurrentPage] = useState('Home');

  const renderPage = () => {
    switch (currentPage) {
      case 'Home':
        return <Home />;
      case 'Groups':
        return <Groups />;
      case 'Messages':
        return <Messages />;
      case 'Login':
        return <Login />;
      case 'Register':
        return <Register />;
      default:
        return <Error404 />;
    }
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
      <Header currentPage={currentPage} handlePageChange={handlePageChange} />
      <TransitionGroup>
        <CSSTransition key={currentPage} timeout={500} classNames="fade">
          <div className="page-container">{renderPage()}</div>
        </CSSTransition>
      </TransitionGroup>
      <Footer />
    </div>
  );
}
