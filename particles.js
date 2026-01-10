document.addEventListener('DOMContentLoaded', function() {
  // 创建 Canvas 元素
  const canvas = document.createElement('canvas');
  canvas.id = 'bg-canvas';
  canvas.style.position = 'fixed';
  canvas.style.top = '0';
  canvas.style.left = '0';
  canvas.style.zIndex = '-1'; // 确保在所有内容下方
  canvas.style.pointerEvents = 'none'; // 允许点击穿透到内容
  
  // 将 Canvas 添加到页面
  document.body.prepend(canvas);
  
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
      this.size = Math.random() * 1.5 + 0.8; // 中等尺寸 (0.8-2.3像素)
      this.speedX = Math.random() * 0.8 - 0.4; // 慢速移动
      this.speedY = Math.random() * 0.8 - 0.4;
      this.color = '#00FF00'; // 鲜艳的绿色
      this.opacity = 0.6; // 半透明效果
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
      ctx.fillStyle = `rgba(0, 255, 0, ${this.opacity})`;
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
      ctx.fill();
    }
  }
  
  // 初始化粒子 - 适度增加数量
  function init() {
    particles = [];
    // 根据屏幕大小计算粒子数量 (中等密度)
    const particleCount = Math.floor((canvas.width * canvas.height) / 5000);
    
    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle());
    }
  }
  
  // 动画函数
  function animate() {
    // 使用半透明黑色创建淡入淡出效果
    ctx.fillStyle = 'rgba(0, 0, 0, 0.02)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    
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
