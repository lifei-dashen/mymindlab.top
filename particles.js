// particles.js - 强制刷新版
(function() {
    // 1. 创建背景画布
    const canvas = document.createElement('canvas');
    canvas.id = 'bg-canvas';
    document.body.prepend(canvas);

    const ctx = canvas.getContext('2d');
    let particlesArray;

    // 2. 窗口适配
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    window.addEventListener('resize', function() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        init();
    });

    // 3. 鼠标交互
    const mouse = { x: null, y: null, radius: 150 }
    window.addEventListener('mousemove', function(event) {
        mouse.x = event.x;
        mouse.y = event.y;
    });
    window.addEventListener('mouseout', function() {
        mouse.x = undefined;
        mouse.y = undefined;
    });

    // 4. 粒子对象
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
            ctx.fillStyle = '#e0e0e0'; /* ✅ 颜色已改为浅银色 */
            ctx.fill();
        }
        update() {
            if (this.x > canvas.width || this.x < 0) this.directionX = -this.directionX;
            if (this.y > canvas.height || this.y < 0) this.directionY = -this.directionY;
            
            // 简单的鼠标排斥
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

    // 5. 初始化
    function init() {
        particlesArray = [];
        let numberOfParticles = (canvas.height * canvas.width) / 10000; // 减少密度
        for (let i = 0; i < numberOfParticles; i++) {
            let size = (Math.random() * 3) + 1;
            let x = (Math.random() * ((innerWidth - size * 2) - (size * 2)) + size * 2);
            let y = (Math.random() * ((innerHeight - size * 2) - (size * 2)) + size * 2);
            let directionX = (Math.random() * 0.5) - 0.25; // 减慢速度
            let directionY = (Math.random() * 0.5) - 0.25;
            let color = '#e0e0e0';
            particlesArray.push(new Particle(x, y, directionX, directionY, size, color));
        }
    }

    // 6. 连线 (核心修复)
    function connect() {
        let opacityValue = 1;
        for (let a = 0; a < particlesArray.length; a++) {
            for (let b = a; b < particlesArray.length; b++) {
                let distance = ((particlesArray[a].x - particlesArray[b].x) * (particlesArray[a].x - particlesArray[b].x))
                + ((particlesArray[a].y - particlesArray[b].y) * (particlesArray[a].y - particlesArray[b].y));
                
                // ✅✅✅ 这里的数值 20000 是固定死的值，绝对不会再出现满屏连线 ✅✅✅
                if (distance < 20000) { 
                    opacityValue = 1 - (distance / 20000);
                    ctx.strokeStyle = 'rgba(200, 200, 200,' + opacityValue + ')'; /* ✅ 连线颜色变淡 */
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
