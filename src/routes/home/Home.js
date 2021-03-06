/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';
import Header from '../../components/Header';
import Catalog from '../../components/Catalog';
import AboutUs from '../../components/AboutUs';
import Galery from '../../components/Galery';
import ContactForm from '../../components/ContactForm';
import Footer from '../../components/Footer';


export default class Home extends React.Component {

  render() {
    return (
      <div >
        <Header type="home" />
        <Catalog/>
        <AboutUs/>
        <Galery/>
        <ContactForm />
        <Footer />
      </div>
    );
  }
}
