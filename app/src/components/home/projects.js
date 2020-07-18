import React from 'react';
import { projectList } from '../../data/projects';
import { FeaturedProject } from './project-item';

export const HomeProjectArea = () => {
    return (
        <section>
            <h3>Featured Projects</h3>
            <p>Each project has a unique story, and with innovative project management, leadership, and quality of service, we are able to complete and deliver projects that illuminate the area.</p>
            
                {
                    projectList.map((i, index) => {
                        if(index < 6){
                            return <FeaturedProject project={i}/>
                        }
                    })
                }
        </section>
    )
}