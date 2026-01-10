// particles.js - 最终修正版 (修复了连线过密的问题)

(function() {
    // 1. 创建 Canvas
    const canvas = document.createElement('canvas');
    canvas.id = 'bg-canvas';
    document.body.prepend(canvas);

    const ctx = canvas.getContext('2d');
    let particlesArray;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    window.addEventListener('resize', function() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        init();
    });

    const mouse = { x: null, y: null, radius: 150 }

    window.addEventListener('mousemove', function(event) {
        mouse.x = event.x;
        mouse.y = event.y;
    });

    window.addEventListener('mouseout', function() {
        mouse.x = undefined;
        mouse.y = undefined;
    });

    // 2. 粒子类
    class Particle {
        constructor(x, y, directionX, directionY, size, color) {
            this.x = x;
            this.y = y;
            this.directionX = directionX;
            this.directionY = directionY;
            this.size = size;
            this.color = color;
        }

        draw() {
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2, false);
            /* 👇 修改1：颜色改浅，变成银灰色 */
            ctx.fillStyle = '#e0e0e0'; 
            ctx.fill();
        }

        update() {
            if (this.x > canvas.width || this.x < 0) this.directionX = -this.directionX;
            if (this.y > canvas.height || this.y < 0) this.directionY = -this.directionY;

            // 鼠标交互
            let dx = mouse.x - this.x;
            let dy = mouse.y - this.y;
            let distance = Math.sqrt(dx*dx + dy*dy);
            if (distance < mouse.radius + this.size) {
                if (mouse.x < this.x && this.x < canvas.width - this.size * 10) this.x += 1;
                if (mouse.x > this.x && this.x > this.size * 10) this.x -= 1;
                if (mouse.y < this.y && this.y < canvas.height - this.size * 10) this.y += 1;
                if (mouse.y > this.y && this.y > this.size * 10) this.y -= 1;
            }
            this.x += this.directionX;
            this.y += this.directionY;
            this.draw();
        }
    }

    // 3. 初始化
    function init() {
        particlesArray = [];
        let numberOfParticles = (canvas.height * canvas.width) / 9000;
        
        for (let i = 0; i < numberOfParticles; i++) {
            let size = (Math.random() * 3) + 1;
            let x = (Math.random() * ((innerWidth - size * 2) - (size * 2)) + size * 2);
            let y = (Math.random() * ((innerHeight - size * 2) - (size * 2)) + size * 2);
            let directionX = (Math.random() * 1) - 0.5;
            let directionY = (Math.random() * 1) - 0.5;
            
            /* 👇 修改2：初始颜色也改浅 */
            let color = '#e0e0e0';

            particlesArray.push(new Particle(x, y, directionX, directionY, size, color));
        }
    }

    // 4. 连线动画 (关键修复)
    function connect() {
        let opacityValue = 1;
        for (let a = 0; a < particlesArray.length; a++) {
            for (let b = a; b < particlesArray.length; b++) {
                let distance = ((particlesArray[a].x - particlesArray[b].x) * (particlesArray[a].x - particlesArray[b].x))
                + ((particlesArray[a].y - particlesArray[b].y) * (particlesArray[a].y - particlesArray[b].y));
                
                /* 👇👇👇 核心修复：把那个屏幕公式改成固定值 20000 👇👇👇 */
                /* 这样就不会出现满屏乱连的蜘蛛网了 */
                if (distance < 20000) { 
                    opacityValue = 1 - (distance / 20000);
                    /* 👇 修改3：连线颜色改极淡 */
                    ctx.strokeStyle = 'rgba(210, 210, 210,' + opacityValue + ')'; 
                    ctx.lineWidth = 1;
                    ctx.beginPath();
                    ctx.moveTo(particlesArray[a].x, particlesArray[a].y);
                    ctx.lineTo(particlesArray[b].x, particlesArray[b].y);
                    ctx.stroke();
                }
            }
        }
    }

    function animate() {
        requestAnimationFrame(animate);
        ctx.clearRect(0, 0, innerWidth, innerHeight);
        
        for (let i = 0; i < particlesArray.length; i++) {
            particlesArray[i].update();
        }
        connect();
    }

    init();
    animate();
})();
