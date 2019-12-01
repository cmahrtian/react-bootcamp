import React, { Component } from 'react'
import SOCIAL_PROFILES from './data/socialProfiles'

class ProfileLinks extends Component {
    render() {
        return (
            <div>
                <h3>Contact or Follow Me</h3>
                <div>
                    {
                        SOCIAL_PROFILES.map(profile => {
                            return (
                                <a target="_blank"
                                    rel='noreferrer noopener'
                                    href={profile.link}
                                    key={profile.id}
                                >
                                    <img src={profile.image} 
                                        alt={profile.altText} 
                                        style={{ 
                                            width: 30, 
                                            paddingRight: 10,
                                            cursor: 'pointer' 
                                        }} 
                                    />
                                </a>
                            )
                        })
                    }
                </div>
            </div>
        )
    }
}

export default ProfileLinks