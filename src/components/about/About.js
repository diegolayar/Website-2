import { React, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';

import '../../App.css';
import './About.css'
import { ReactComponent as AJugar } from '../../assets/navigation-assets/AJugar.svg';
import { ReactComponent as AJugarMobile } from '../../assets/navigation-assets/AJugarMobile.svg';
import { ReactComponent as MainGoal } from '../../assets/navigation-assets/MainGoal.svg';
import { ReactComponent as MainGoalMobile } from '../../assets/navigation-assets/MainGoalMobile.svg';
import { ReactComponent as Founder } from '../../assets/navigation-assets/Founder.svg';
import { ReactComponent as FounderMobile } from '../../assets/navigation-assets/FounderMobile.svg';
import { ReactComponent as Loany } from '../../assets/navigation-assets/Loany.svg';
import { ReactComponent as LoanyMobile } from '../../assets/navigation-assets/LoanyMobile.svg';
import { ReactComponent as Jennifer } from '../../assets/navigation-assets/Jennifer.svg';
import { ReactComponent as JenniferMobile } from '../../assets/navigation-assets/JenniferMobile.svg';
import { ReactComponent as Laura } from '../../assets/navigation-assets/Laura.svg';
import { ReactComponent as LauraMobile } from '../../assets/navigation-assets/LauraMobile.svg';
import { ReactComponent as Mariana } from '../../assets/navigation-assets/Mariana.svg';
import { ReactComponent as MarianaMobile } from '../../assets/navigation-assets/MarianaMobile.svg';

import Footer from '../footer/Footer.js';

const About = () => {
    return (
        <div className='unconstrained-portion teal'>
            <div id='a-jugar-container'>
                <AJugar id='a-jugar'/>
                <AJugarMobile id='a-jugar-mobile'/>
            </div>
            <MainGoal id='main-goal'/>           
            <MainGoalMobile id='main-goal-mobile'/>
            <p id='main-goal-description'>
                Based on the principles of Theraplay, the teaching method allows
                children to not only learn a second language, but to enhance the 
                positive relationships and increase self-esteem and self-regulation 
                through engaging, fun and nurturing activities.
            </p>
            <div id='our-team-parent'>
                <div className='orange-button'>OUR TEAM</div>
                <Founder id='founder'/>
                <FounderMobile id='founder-mobile'/>
            </div>
            <div id='tutors-title' className='orange-button'>TUTORS</div>
            <div className='tutors'>
                <Loany className='tutor'/>
                <LoanyMobile className='tutor-mobile'/>
                <Jennifer className='tutor'/>
                <JenniferMobile className='tutor-mobile'/>
            </div>
            <div className='tutors'>
                <Laura className='tutor'/>
                <LauraMobile className='tutor-mobile'/>
                <Mariana className='tutor'/>
                <MarianaMobile className='tutor-mobile'/>
            </div>
            <div id='footer-parent'>
                <Footer id='footer-on-about'/>
            </div>
        </div>
    );
}

export default About;