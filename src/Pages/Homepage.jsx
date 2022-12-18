import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'
import anatomyPark from '../assets/anatomy-park-bg.jpg';
import './HomepageStyles.css'


export const Homepage = () => {

    

    return (
        <Fragment>

            <main id='main-container'style={{ backgroundImage: `url(${anatomyPark})` }}>                
                <div className="container-buttons">
                    <Link className="link-main" to='/all-gifs'>All Gifs</Link>
                </div>          
                
            </main>

            
        </Fragment>           
        
        
    )
}
