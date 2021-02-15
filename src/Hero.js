import React from 'react';
const Hero = (handleLogout) => {
    return(
        <section className="hero">
            <nav>
                <h2><button onClick={handleLogout}>Logout</button></h2>
            </nav>
        </section>
    )
}
export default Hero;