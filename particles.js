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
  let mouseX = 0;
  let mouseY = 0;
  const mouseRadius = 150; // 鼠标影响范围
  
  // 4. 跟踪鼠标位置
  document.addEventListener('mousemove', function(e) {
    mouseX = e.clientX;
    mouseY = e.clientY;
  });
  
  // 5. 设置 Canvas 尺寸（考虑高清屏幕）
  function setCanvasSize() {
    const dpr = window.devicePixelRatio || 1;
    canvas.width = window.innerWidth * dpr;
    canvas.height = window.innerHeight * dpr;
    canvas.style.width = window.innerWidth + 'px';
    canvas.style.height = window.innerHeight + 'px';
    ctx.scale(dpr, dpr);
  }
  
  // 6. 创建粒子类
  class Particle {
    constructor() {
      this.reset();
      this.baseSize = Math.random() * 1.5 + 1.0; // 基础大小 (1.0-2.5px)
      this.maxSize = this.baseSize * 2.5; // 鼠标靠近时的最大大小
    }
    
    reset() {
      this.x = Math.random() * window.innerWidth;
      this.y = Math.random() * window.innerHeight;
      this.speedX = (Math.random() - 0.5) * 1.2; // 速度适中
      this.speedY = (Math.random() - 0.5) * 1.2;
      this.opacity = Math.random() * 0.6 + 0.3; // 30%-90% 不透明度
      this.hue = 130 + Math.random() * 30; // 绿色色调范围 (130-160)
      this.lightness = 50 + Math.random() * 20; // 亮度 (50%-70%)
      this.size = this.baseSize;
    }
    
    update() {
      this.x += this.speedX;
      this.y += this.speedY;
      
      // 边界检查 - 从边缘重新进入
      if (this.x > window.innerWidth) this.x = 0;
      if (this.x < 0) this.x = window.innerWidth;
      if (this.y > window.innerHeight) this.y = 0;
      if (this.y < 0) this.y = window.innerHeight;
      
      // 计算与鼠标的距离
      const dx = mouseX - this.x;
      const dy = mouseY - this.y;
      const distance = Math.sqrt(dx * dx + dy * dy);
      
      // 根据与鼠标的距离调整大小（更平滑的过渡）
      if (distance < mouseRadius) {
        const proximity = 1 - (distance / mouseRadius);
        this.size = this.baseSize + (this.maxSize - this.baseSize) * proximity * 0.8;
      } else {
        // 平滑地恢复到基础大小
        if (this.size > this.baseSize) {
          this.size -= (this.size - this.baseSize) * 0.05;
        }
      }
    }
    
    draw() {
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
      ctx.fillStyle = `hsla(${this.hue}, 80%, ${this.lightness}%, ${this.opacity})`;
      ctx.fill();
      
      // 添加发光效果
      const glow = ctx.createRadialGradient(
        this.x, this.y, 0,
        this.x, this.y, this.size * 2
      );
      glow.addColorStop(0, `hsla(${this.hue}, 80%, 70%, ${this.opacity * 0.8})`);
      glow.addColorStop(1, 'rgba(255, 255, 255, 0)');
      
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.size * 2, 0, Math.PI * 2);
      ctx.fillStyle = glow;
      ctx.fill();
    }
  }
  
  // 7. 初始化粒子
  function init() {
    particles = [];
    // 根据屏幕大小计算粒子数量 (高密度但不拥挤)
    const particleCount = Math.floor((window.innerWidth * window.innerHeight) / 6000);
    
    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle());
    }
  }
  
  // 8. 动画函数
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
  
  // 9. 事件监听
  window.addEventListener('resize', function() {
    cancelAnimationFrame(animationFrameId);
    setCanvasSize();
    init();
    animate();
  });
  
  // 10. 初始化
  setCanvasSize();
  init();
  animate();
});
