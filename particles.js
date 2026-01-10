document.addEventListener('DOMContentLoaded', function() {
  // 1. 创建 Canvas 元素
  const canvas = document.createElement('canvas');
  canvas.id = 'bg-canvas';
  
  // 2. 将 Canvas 添加到页面顶部
  document.body.prepend(canvas);
  
  // 3. 获取 Canvas 上下文
  const ctx = canvas.getContext('2d');
  let particles = [];
  
  // 4. 设置 Canvas 尺寸
  function setCanvasSize() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }
  
  // 5. 创建粒子类
  class Particle {
    constructor() {
      this.x = Math.random() * canvas.width;
      this.y = Math.random() * canvas.height;
      this.size = Math.random() * 3 + 1;
      this.speedX = Math.random() * 3 - 1.5;
      this.speedY = Math.random() * 3 - 1.5;
      this.color = `rgba(255, 255, 255, ${Math.random() * 0.5 + 0.1})`;
    }
    
    update() {
      this.x += this.speedX;
      this.y += this.speedY;
      
      // 边界检查
      if (this.x > canvas.width || this.x < 0) {
        this.speedX = -this.speedX;
      }
      if (this.y > canvas.height || this.y < 0) {
        this.speedY = -this.speedY;
      }
    }
    
    draw() {
      ctx.fillStyle = this.color;
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
      ctx.fill();
    }
  }
  
  // 6. 初始化粒子
  function init() {
    particles = [];
    const particleCount = Math.floor(canvas.width / 20);
    
    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle());
    }
  }
  
  // 7. 动画函数
  function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    for (let i = 0; i < particles.length; i++) {
      particles[i].update();
      particles[i].draw();
    }
    
    requestAnimationFrame(animate);
  }
  
  // 8. 事件监听
  window.addEventListener('resize', function() {
    setCanvasSize();
    init();
  });
  
  // 9. 初始化
  setCanvasSize();
  init();
  animate();
});
