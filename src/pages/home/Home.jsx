import React from 'react';
import Featured from '../../components/featured/Featured';
import Footer from '../../components/footer/Footer';
import Header from '../../components/header/Header';
import MailList from '../../components/mailList/MailList';
import './Home.css';

const Home = () => {
  return (
    <>
      <Header />
      <Featured />
      <MailList />
      <Footer />
    </>
  )
}

export default Home