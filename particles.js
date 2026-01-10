// particles.js
// 独立背景特效脚本 - 不会影响答题逻辑

(function() {
    // 1. 创建 Canvas 元素并插入到 body 最前面
    const canvas = document.createElement('canvas');
    canvas.id = 'bg-canvas';
    document.body.prepend(canvas);

    const ctx = canvas.getContext('2d');
    let particlesArray;

    // 设置 Canvas 尺寸
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // 处理窗口大小调整
    window.addEventListener('resize', function() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        init();
    });

    // 鼠标交互位置
    const mouse = {
        x: null,
        y: null,
        radius: 150 // 鼠标互动半径
    }

    window.addEventListener('mousemove', function(event) {
        mouse.x = event.x;
        mouse.y = event.y;
    });

    window.addEventListener('mouseout', function() {
        mouse.x = undefined;
        mouse.y = undefined;
    });

    // 2. 粒子类定义
    class Particle {
        constructor(x, y, directionX, directionY, size, color) {
            this.x = x;
            this.y = y;
            this.directionX = directionX;
            this.directionY = directionY;
            this.size = size;
            this.color = color;
        }

        // 绘制粒子
        draw() {
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2, false);
            ctx.fillStyle = '#888888'; // 粒子颜色 (灰色)
            ctx.fill();
        }

        // 更新粒子位置
        update() {
            // 边界反弹
            if (this.x > canvas.width || this.x < 0) {
                this.directionX = -this.directionX;
            }
            if (this.y > canvas.height || this.y < 0) {
                this.directionY = -this.directionY;
            }

            // 鼠标排斥/互动 (可选，不喜欢可以注释掉下面这块)
            let dx = mouse.x - this.x;
            let dy = mouse.y - this.y;
            let distance = Math.sqrt(dx*dx + dy*dy);
            if (distance < mouse.radius + this.size) {
                if (mouse.x < this.x && this.x < canvas.width - this.size * 10) {
                    this.x += 1;
                }
                if (mouse.x > this.x && this.x > this.size * 10) {
                    this.x -= 1;
                }
                if (mouse.y < this.y && this.y < canvas.height - this.size * 10) {
                    this.y += 1;
                }
                if (mouse.y > this.y && this.y > this.size * 10) {
                    this.y -= 1;
                }
            }

            // 移动
            this.x += this.directionX;
            this.y += this.directionY;
            this.draw();
        }
    }

    // 3. 初始化粒子
    function init() {
        particlesArray = [];
        // 粒子数量计算：屏幕面积除以9000 (适配手机和电脑)
        let numberOfParticles = (canvas.height * canvas.width) / 9000;
        
        for (let i = 0; i < numberOfParticles; i++) {
            let size = (Math.random() * 3) + 1; // 粒子大小 1-4
            let x = (Math.random() * ((innerWidth - size * 2) - (size * 2)) + size * 2);
            let y = (Math.random() * ((innerHeight - size * 2) - (size * 2)) + size * 2);
            let directionX = (Math.random() * 1) - 0.5; // 飘动速度 X
            let directionY = (Math.random() * 1) - 0.5; // 飘动速度 Y
            let color = '#888888';

            particlesArray.push(new Particle(x, y, directionX, directionY, size, color));
        }
    }

    // 4. 连线动画
    function connect() {
        let opacityValue = 1;
        for (let a = 0; a < particlesArray.length; a++) {
            for (let b = a; b < particlesArray.length; b++) {
                let distance = ((particlesArray[a].x - particlesArray[b].x) * (particlesArray[a].x - particlesArray[b].x))
                + ((particlesArray[a].y - particlesArray[b].y) * (particlesArray[a].y - particlesArray[b].y));
                
                // 如果两个粒子距离小于 120px，画线
                if (distance < (canvas.width/7) * (canvas.height/7)) {
                    opacityValue = 1 - (distance / 20000);
                    ctx.strokeStyle = 'rgba(140, 140, 140,' + opacityValue + ')'; // 线条颜色 (淡灰)
                    ctx.lineWidth = 1;
                    ctx.beginPath();
                    ctx.moveTo(particlesArray[a].x, particlesArray[a].y);
                    ctx.lineTo(particlesArray[b].x, particlesArray[b].y);
                    ctx.stroke();
                }
            }
        }
    }

    // 5. 动画循环
    function animate() {
        requestAnimationFrame(animate);
        ctx.clearRect(0, 0, innerWidth, innerHeight);
        
        for (let i = 0; i < particlesArray.length; i++) {
            particlesArray[i].update();
        }
        connect();
    }

    // 启动
    init();
    animate();
})();