import React, { Component } from 'react'
import SOCIAL_PROFILES from './data/socialProfiles'

class SocialProfile extends Component {
    render() {
        const { link, image, altText } = this.props.socialProfile
        
        return (
            <a target="_blank"
                rel='noreferrer noopener'
                href={link}
            >
                <img src={image} 
                    alt={altText} 
                    style={{ 
                        width: 30, 
                        paddingRight: 10,
                        cursor: 'pointer' 
                    }} 
                />
            </a>
        )
    }
}

class SocialProfiles extends Component {
    render() {
        return (
            <div>
                <h3>Contact or Follow Me</h3>
                <div>
                    {
                        SOCIAL_PROFILES.map(profile => {
                            return (
                                <SocialProfile 
                                    key={profile.id} 
                                    socialProfile={profile} 
                                />
                            )
                        })
                    }
                </div>
            </div>
        )
    }
}

export default SocialProfiles