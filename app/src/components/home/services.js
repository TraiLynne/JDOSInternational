import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardTitle, CardText, CardImg, CardImgOverlay } from 'reactstrap';

import {
    Header,
    ServiceContainer,
    ServiceText,
    ServiceLinksContainer,
    ServiceLinkImage
} from '../../styles/home';

import {
    ConstructionManagement,
    Facilities,
    Programs,
    Engineering
} from '../../assets';

export const HomeServiceArea = () => {
    return (
        <ServiceContainer>
            <Header>Our Services</Header>
            <ServiceText>Comprehensive engineering and management support services, providing clients with the highest level of quality service for each project, on time and within budget.</ServiceText>
            
            <ServiceLinksContainer>
                <Link to='/services/construction-management'>
                    <Card inverse>
                        <ServiceLinkImage width="100%" src={ConstructionManagement}  alt='Construction Management' />
                        <CardImgOverlay>
                            <Header>Construction Management</Header>
                        </CardImgOverlay>
                    </Card>
                </Link>


                <Link to='/services/facilities-maintenance'>
                    <Card inverse>
                        <ServiceLinkImage width="100%" src={Facilities}  alt='Facilities Maintenance & Management' />
                        <CardImgOverlay>
                            <Header>Facilities Maintenance & Management</Header>
                        </CardImgOverlay>
                    </Card>
                </Link>

                <Link to='/services/program-project'>
                    <Card inverse>
                        <ServiceLinkImage width="100%" src={Programs}  alt='Program & Project Management' />
                        <CardImgOverlay>
                            <Header>Program & Project Management</Header>
                        </CardImgOverlay>
                    </Card>
                </Link>
                <Link to='/services/engineering-support'>
                    <Card inverse>
                        <ServiceLinkImage width="100%" src={Engineering}  alt='Engineering Admin Support Services' />
                        <CardImgOverlay>
                            <Header>Engineering Admin Support Services</Header>
                        </CardImgOverlay>
                    </Card>
                    
                </Link>
            </ServiceLinksContainer>
        </ServiceContainer>
    )
}