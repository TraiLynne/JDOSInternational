import React from 'react';
import { projectList } from '../../data';
import { FeaturedProject } from './project-item';

import {
    Header,
    SectionContainer,
    SectionTagline
} from '../../styles/home';



export const HomeProjectArea = () => {
    return (
        <SectionContainer>
            <Header>Featured Projects</Header>
            <SectionTagline>Each project has a unique story, and with innovative project management, leadership, and quality of service, we are able to complete and deliver projects that illuminate the area.</SectionTagline>
            
                {
                    projectList.map((i, index) => {
                        if(index < 6){
                            return <FeaturedProject project={i}/>
                        }
                    })
                }
        </SectionContainer>
    )
}