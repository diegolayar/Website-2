import "./Press.css"
import "../../App.css"

import { ReactComponent as Press1 } from '../../assets/navigation-assets/Press1.svg';
import Footer from "../footer/Footer";

const Press = () => {
    return (
        <div className='purple unconstrained-portion'>
            <div id='content'>
                <div id="press-container">
                    <h1 className="press-title">UPCOMING EVENTS</h1>
                    <div className="press-releases-container">
                            <div className="press-article">
                            <div className="press-core">
                                <Press1 className="press-image"/>
                                <div className="press-info-container">
                                    <h4 className="press-date">
                                        <b>COMING SOON</b>
                                    </h4>
                                    <h4 className="press-info-extra">
                                        KUWAIT NATIONAL LIBRARY
                                    </h4>
                                </div>
                            </div>   
                        </div>
                    </div>
                </div>
                <Footer/>
            </div>
        </div>
    );

}

export default Press;