/* -----------------------------------------------
/* How to use? : Check the GitHub README
/* ----------------------------------------------- */

/* To load a config file (particles.json) you need to host this demo (MAMP/WAMP/local)... */
/*
particlesJS.load('particles-js', 'particles.json', function() {
  console.log('particles.js loaded - callback');
});
*/

/* Otherwise just put the config content (json): */

particlesJS('particles-js', {
  "particles": {
    "number": {
      "value": 100, // Jumlah partikel
      "density": {
        "enable": true,
        "value_area": 800
      }
    },
    "color": {
      "value": "#ffffff" // Warna partikel (putih)
    },
    "shape": {
      "type": "circle", // Bentuk partikel (lingkaran)
      "stroke": {
        "width": 0,
        "color": "#000000"
      }
    },
    "opacity": {
      "value": 0.5, // Transparansi partikel
      "random": false
    },
    "size": {
      "value": 3, // Ukuran partikel
      "random": true
    },
    "line_linked": {
      "enable": true, // Garis penghubung antar partikel
      "distance": 150,
      "color": "#ffffff", // Warna garis (putih)
      "opacity": 0.4,
      "width": 1
    },
    "move": {
      "enable": true, // Gerakan partikel
      "speed": 6,
      "direction": "none",
      "random": false,
      "straight": false,
      "out_mode": "out",
      "bounce": false
    }
  },
  "interactivity": {
    "detect_on": "canvas",
    "events": {
      "onhover": {
        "enable": true,
        "mode": "repulse" // Efek ketika kursor diarahkan
      },
      "onclick": {
        "enable": true,
        "mode": "push" // Efek ketika diklik
      },
      "resize": true
    },
    "modes": {
      "grab": {
        "distance": 400,
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
        "distance": 200
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
});
