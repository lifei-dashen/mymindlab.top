/* === 背景特效配置 (清爽连线版) === */
if (typeof particlesJS !== 'undefined') {
    particlesJS("particles-js", {
        "particles": {
            "number": {
                "value": 80,
                "density": { "enable": true, "value_area": 800 }
            },
            "color": { "value": "#dadada" }, /* 粒子颜色：浅灰 */
            "shape": { 
                "type": "circle", /* 关键！形状改为圆形，不要 polygon */
                "stroke": { "width": 0, "color": "#000000" }
            },
            "opacity": {
                "value": 0.5,
                "random": false
            },
            "size": {
                "value": 3,
                "random": true
            },
            "line_linked": {
                "enable": true,
                "distance": 150,
                "color": "#dadada", /* 连线颜色：浅灰 */
                "opacity": 0.4,
                "width": 1
            },
            "move": {
                "enable": true,
                "speed": 4, /* 运动速度 */
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
                "onhover": { "enable": true, "mode": "grab" }, /* 鼠标悬停连线 */
                "onclick": { "enable": true, "mode": "push" },
                "resize": true
            },
            "modes": {
                "grab": { "distance": 140, "line_linked": { "opacity": 1 } }
            }
        },
        "retina_detect": true
    });
}
