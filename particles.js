document.addEventListener('DOMContentLoaded', function() {
  // 1. 创建 Canvas 元素
  const canvas = document.createElement('canvas');
  canvas.id = 'bg-canvas';
  canvas.style.position = 'fixed';
  canvas.style.top = '0';
  canvas.style.left = '0';
  canvas.style.width = '100%';
  canvas.style.height = '100%';
  canvas.style.zIndex = '-1'; // 确保在所有内容下方
  canvas.style.pointerEvents = 'none'; // 允许点击穿透到内容
  
  // 2. 将 Canvas 添加到页面
  document.body.prepend(canvas);
  
  // 3. 获取 Canvas 上下文
  const ctx = canvas.getContext('2d');
  let particles = [];
  let animationFrameId;
  
  // 4. 设置 Canvas 尺寸（考虑高清屏幕）
  function setCanvasSize() {
    const dpr = window.devicePixelRatio || 1;
    canvas.width = window.innerWidth * dpr;
    canvas.height = window.innerHeight * dpr;
    canvas.style.width = window.innerWidth + 'px';
    canvas.style.height = window.innerHeight + 'px';
    ctx.scale(dpr, dpr);
  }
  
  // 5. 创建粒子类
  class Particle {
    constructor() {
      this.reset();
    }
    
    reset() {
      this.x = Math.random() * canvas.width;
      this.y = Math.random() * canvas.height;
      this.size = Math.random() * 1.2 + 0.5; // 适中大小 (0.5-1.7px)
      this.speedX = (Math.random() - 0.5) * 0.8; // 慢速移动
      this.speedY = (Math.random() - 0.5) * 0.8;
      this.opacity = Math.random() * 0.5 + 0.3; // 30%-80% 不透明度
      this.hue = 140 + Math.random() * 40; // 绿色色调范围 (140-180)
      this.lightness = 60 + Math.random() * 20; // 亮度 (60%-80%)
    }
    
    update() {
      this.x += this.speedX;
      this.y += this.speedY;
      
      // 边界检查 - 从边缘重新进入
      if (this.x > canvas.width) this.x = 0;
      if (this.x < 0) this.x = canvas.width;
      if (this.y > canvas.height) this.y = 0;
      if (this.y < 0) this.y = canvas.height;
    }
    
    draw() {
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
      ctx.fillStyle = `hsla(${this.hue}, 70%, ${this.lightness}%, ${this.opacity})`;
      ctx.fill();
    }
  }
  
  // 6. 初始化粒子
  function init() {
    particles = [];
    // 根据屏幕大小计算粒子数量 (适当密度)
    const particleCount = Math.floor((window.innerWidth * window.innerHeight) / 8000);
    
    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle());
    }
  }
  
  // 7. 动画函数
  function animate() {
    // 设置白色背景
    ctx.fillStyle = 'rgba(255, 255, 255, 1)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    
    // 绘制所有粒子
    for (let i = 0; i < particles.length; i++) {
      particles[i].update();
      particles[i].draw();
    }
    
    animationFrameId = requestAnimationFrame(animate);
  }
  
  // 8. 事件监听
  window.addEventListener('resize', function() {
    cancelAnimationFrame(animationFrameId);
    setCanvasSize();
    init();
    animate();
  });
  
  // 9. 初始化
  setCanvasSize();
  init();
  animate();
});
