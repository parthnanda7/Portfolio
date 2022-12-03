const toggleSwitch = document.querySelector('input[type="checkbox"]');
const nav = document.getElementById('nav');
const toggleIcon = document.getElementById('toggle-icon');
const sunMoon = toggleIcon.querySelector('i');

document.documentElement.setAttribute('data-theme', 'light');
document.addEventListener('DOMContentLoaded', () => {
    const input = document.querySelector('#themeInput')
    const switchTheme = ({ target: { checked } }) =>

        document.documentElement.setAttribute('data-theme', checked ? 'dark' : 'light')
    input.addEventListener('change', switchTheme)
})
function setParticles(color, secondColor) {
    // let MainColor = color
    particlesJS('particles-js',

        {
            "particles": {
                "number": {
                    "value": 15,
                    "density": {
                        "enable": false,
                        "value_area": 4000
                    }
                },
                "color": {
                    "value": "#ffac00"
                },
                "shape": {
                    "type": "circle",
                    "stroke": {
                        "width": 10,
                        "color": color
                    },
                    "polygon": {
                        "nb_sides": 4
                    },
                    "image": {
                        "src": "img/github.svg",
                        "width": 100,
                        "height": 100
                    }
                },
                "opacity": {
                    "value": 1,
                    "random": false,
                    "anim": {
                        "enable": false,
                        "speed": 1,
                        "opacity_min": 0.1,
                        "sync": false
                    }
                },
                "size": {
                    "value": 3,
                    "random": true,
                    "anim": {
                        "enable": false,
                        "speed": 50,
                        "size_min": 0.1,
                        "sync": false
                    }
                },
                "line_linked": {
                    "enable": true,
                    "distance": 150,
                    "color": "#ffac00",
                    "opacity": 0.6,
                    "width": 1
                },
                "move": {
                    "enable": true,
                    "speed": 1,
                    "direction": "none",
                    "random": true,
                    "straight": false,
                    "out_mode": "out",
                    "bounce": false,
                    "attract": {
                        "enable": false,
                        "rotateX": 600,
                        "rotateY": 600
                    }
                }
            },
            "interactivity": {
                "detect_on": "canvas",
                "events": {
                    "onhover": {
                        "enable": true,
                        "mode": "grab"
                    },
                    "onclick": {
                        "enable": true,
                        "mode": "push"
                    },
                    "resize": true
                },
                "modes": {
                    "grab": {
                        "distance": 100,
                        "line_linked": {
                            "opacity": 1
                        }
                    },
                    "bubble": {
                        "distance": 400,
                        "size": 40,
                        "duration": 2,
                        "opacity": 8,
                        "speed": 3
                    },
                    "repulse": {
                        "distance": 200,
                        "duration": 0.4
                    },
                    "push": {
                        "particles_nb": 4
                    },
                    "remove": {
                        "particles_nb": 2
                    }
                }
            },
            "retina_detect": true
        }

    );
}
const tag = document.getElementById('particles-js');
const styles = window.getComputedStyle(tag);
const tagColor = styles.getPropertyValue('color');
setParticles(tagColor, tagColor);