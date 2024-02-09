import Particles from "react-tsparticles";
import { loadFull } from 'tsparticles';

function Particle() {
    const particlesInit = async (main) => {
        try {
            await loadFull(main);
        } catch (error) {
            console.error('Error loading tsParticles:', error);
        }
    };

    const particlesLoaded = (container) =>{
        //console.log(container)
    };

    return (
        <Particles
            id="tsparticles"
            init={particlesInit}
            loaded={particlesLoaded}
            options={{
                fullScreen: {
                    enable: false,
                    zIndex: 0,
                },
                background: {
                    color: {
                        value: "",
                    },
                },
                fpsLimit: 120,
                interactivity: {
                    events: {
                        onClick: {
                            enable: false,
                            mode: "",
                        },
                        onHover: {
                            enable: false,
                            mode: "repulse",
                        },
                        resize: true,
                    },
                    modes: {
                        push: {
                            quantity: 4,
                        },
                        repulse: {
                            distance: 100,
                            duration: 0.4,
                        },
                    },
                },
                particles: {
                    color: {
                        value: "#ffff",
                    },
                    links: {
                        color: "#ffffff",
                        distance: 150,
                        enable: false,
                        opacity: 0.1,
                        width: 0.2,
                    },
                    move: {
                        direction: "none",
                        enable: true,
                        outModes: {
                            default: "bounce",
                        },
                        random: false,
                        speed: 0.5,
                        straight: false,
                    },
                    number: {
                        density: {
                            enable: true,
                            area: 500,
                        },
                        value: 80,
                    },
                    opacity: {
                        value: 0.5,
                    },
                    shape: {
                        type: "star",
                    },
                    size: {
                        value: { min: 1, max: 2 },
                    },
                },
                detectRetina: true,
            }}
        />
    );
}

export default Particle;
