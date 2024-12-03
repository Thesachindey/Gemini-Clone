import React from 'react'
import './Main.css'
import { assets } from '../../assets/assets'
const Main = () => {
    return (
        <div className='main'>

            {/* Nav area  */}
            <div className="nav">
                <p>Gemini</p>
                <img src={assets.user_icon} alt="" />
            </div>

            {/* Main area */}
            <div className="main-container">
                {/* greet area */}
                <div className="greet">
                    <p><span>Hello, Dev.</span></p>
                    <p><span>How can I help you today?</span></p>
                </div>

                {/* card area */}
                <div className="cards">
                    <div className="card">
                        <p>Suggest beautiful places to see on an upcoming road trip</p>
                        <img src={assets.compass_icon} alt="" />
                    </div>
                    <div className="card">
                        <p>Briefly summarize this concept: urban planning</p>
                        <img src={assets.bulb_icon} alt="" />
                    </div>
                    <div className="card">
                        <p>Brainstorm team bonding activities for our work retreat</p>
                        <img src={assets.message_icon} alt="" />
                    </div>
                    <div className="card">
                        <p>Tell me about React js and React native</p>
                        <img src={assets.code_icon} alt="" />
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Main
