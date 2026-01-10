// 等待DOM加载完成后再执行
document.addEventListener('DOMContentLoaded', function() {
  // 创建 Canvas 元素
  const canvas = document.createElement('canvas');
  canvas.id = 'bg-canvas';
  canvas.style.position = 'fixed';
  canvas.style.top = '0';
  canvas.style.left = '0';
  canvas.style.width = '100%';
  canvas.style.height = '100%';
  canvas.style.zIndex = '-1'; // 确保在所有内容下方
  
  // 将 Canvas 添加到页面
  document.body.appendChild(canvas);
  
  // 获取 Canvas 上下文
  const ctx = canvas.getContext('2d');
  let particles = [];
  
  // 设置 Canvas 尺寸
  function setCanvasSize() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }
  
  // 创建粒子类
  class Particle {
    constructor() {
      this.x = Math.random() * canvas.width;
      this.y = Math.random() * canvas.height;
      this.size = Math.random() * 2 + 1; // 1-3像素
      this.speedX = (Math.random() - 0.5) * 1.5;
      this.speedY = (Math.random() - 0.5) * 1.5;
      this.color = '#00FF00'; // 绿色
    }
    
    update() {
      this.x += this.speedX;
      this.y += this.speedY;
      
      // 边界检查
      if (this.x > canvas.width) this.x = 0;
      if (this.x < 0) this.x = canvas.width;
      if (this.y > canvas.height) this.y = 0;
      if (this.y < 0) this.y = canvas.height;
    }
    
    draw() {
      ctx.fillStyle = this.color;
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
      ctx.fill();
    }
  }
  
  // 初始化粒子
  function init() {
    particles = [];
    const particleCount = Math.floor(canvas.width / 15); // 增加数量
    
    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle());
    }
  }
  
  // 动画函数
  function animate() {
    // 设置白色背景
    ctx.fillStyle = 'rgba(255, 255, 255, 1)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    
    // 绘制粒子
    for (let i = 0; i < particles.length; i++) {
      particles[i].update();
      particles[i].draw();
    }
    
    requestAnimationFrame(animate);
  }
  
  // 事件监听
  window.addEventListener('resize', function() {
    setCanvasSize();
    init();
  });
  
  // 初始化
  setCanvasSize();
  init();
  animate();
});
