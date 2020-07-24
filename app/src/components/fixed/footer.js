import React from 'react';

import {
    FooterContainer,
    SubContainer
  } from '../../styles/footer';

const Footer = () => {
    return (
        <FooterContainer>
            <SubContainer>
                <h3>About</h3>
                <p>
                    For more than 18 years, JDos has been committed to providing quality management for civil infrastructure and facilities projects.
                </p>
            </SubContainer>
            <SubContainer>
                <h3>JDOS Internationalé</h3>
                <p>
                    4506 14th St, N.W.<br/>
                    Washington, D.C. 20011<br/>
                    Tel: 202 726 8650
                </p>
            </SubContainer>
            <SubContainer>
                <h3>Office Hours</h3>
                <p>
                    M-F: 08:00-19:00<br/>
                    Sa: Closed<br/>
                    Su: Closed<br/>
                </p>
            </SubContainer>
            <SubContainer>
                <h3>Latest Projects</h3>
                <div>Project Place Holder 1</div>
                <div>Project Place Holder 2</div>
                <div>Project Place Holder 3</div>
                <div>Project Place Holder 4</div>
            </SubContainer>
        </FooterContainer>
    );
}

export default Footer; 