import './styled/about.css'
function About(params) {
    return(
        <div>
            
            <section id="section-about" class="about-section my-5">
                <h2>Who WE are .... ?</h2>
                <div class="all-sections">
                    <div data-aos="fade-right" class="mini-section">
                    <div class="hexagon">
                        <i class="fa fa-fighter-jet" aria-hidden="true"></i>
                    </div>
                    <div class="text-mini-section">
                        <h1>Fast</h1>
                        <p>
                        Fast load times and lag free interaction, my highest priority.
                        </p>
                    </div>
                    </div>
                    <div data-aos="fade-up" class="mini-section">
                    <div class="hexagon">
                        <i class="fa fa-window-restore" aria-hidden="true"></i>
                    </div>
                    <div class="text-mini-section">
                        <h1>Responsive</h1>
                        <p>My layouts will work on any device, big or small.</p>
                    </div>
                    </div>
                    <div data-aos="fade-up" class="mini-section">
                    <div class="hexagon">
                        <i class="fa fa-rocket" aria-hidden="true"></i>
                    </div>
                    <div class="text-mini-section">
                        <h1>Intuitive</h1>
                        <p>Strong preference for easy to use, intuitive UX/UI.</p>
                    </div>
                    </div>
                    <div data-aos="fade-left" class="mini-section">
                    <div class="hexagon">
                        <i class="fa fa-bolt" aria-hidden="true"></i>
                    </div>
                    <div class="text-mini-section">
                        <h1>Dynamic</h1>
                        <p>
                        Websites don't have to be static, I love making pages come to life
                        </p>
                    </div>
                    </div>
                </div>
               
                </section>
                
                
        </div>
    )
}

export default About