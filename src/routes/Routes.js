import React, { useState, useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from '../components/home/Home.js'
import Program from '../components/program/Program.js'
import ProyectoPlay from '../components/proyecto-play/ProyectoPlay.js'
import Resources from '../components/resources/Resources.js';
import About from '../components/about/About.js';

const Routes = () => {
    return (
        <Switch>
            <Route exact path="/" render={() => <Home />} />
            <Route exact path="/home" render={() => <Home />} />
            <Route exact path="/about" render={() => <About />} />
            <Route exact path="/program" render={() => <Program />} />
            <Route exact path="/proyecto-play" render={() => <ProyectoPlay />} />
            <Route exact path="/resources" render={() => <Resources />} />
        </Switch>
    );

}

export default Routes;