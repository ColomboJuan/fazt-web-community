/* Copyright 2020 Fazt Community ~ All rights reserved. MIT license. */

import React from 'react';
import Navigation from './components/Navigation/Navigation.jsx';
import SocialLink from './components/SocialLink/SocialLink.jsx';
import ListContributor from './components/ListContributor/ListContributor';
import CardGrid from './components/CardsGrid/CardsGrid'
import Footer from './components/Footer/Footer.jsx';
import Parallax from './components/Parallax/Parallax.jsx';
function App() {

  return (
    <div>
        <Parallax/>
        <Navigation/>
        <CardGrid/>
        <SocialLink/>
        <ListContributor/>
        <Footer/>
    </div>
  );
}

export default App;
