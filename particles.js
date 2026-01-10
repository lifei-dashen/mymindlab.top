document.addEventListener('DOMContentLoaded', function() {
  // 创建 Canvas 元素
  const canvas = document.createElement('canvas');
  canvas.id = 'bg-canvas';
  canvas.style.position = 'fixed';
  canvas.style.top = '0';
  canvas.style.left = '0';
  canvas.style.width = '100%';
  canvas.style.height = '100%';
  canvas.style.zIndex = '-1';
  canvas.style.pointerEvents = 'none';
  
  // 将 Canvas 添加到页面
  document.body.prepend(canvas);
  
  // 获取 Canvas 上下文
  const ctx = canvas.getContext('2d');
  let particles = [];
  let mouseX = window.innerWidth / 2;
  let mouseY = window.innerHeight / 2;
  let animationFrameId;
  
  // 跟踪鼠标位置
  document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
  });
  
  // 设置 Canvas 尺寸
  function setCanvasSize() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }
  
  // 苹果风格的绿色 - 使用 Apple 官方绿色
  const appleGreen = '#34C759'; // Apple 的标准绿色
  
  // 创建粒子类
  class Particle {
    constructor() {
      this.reset();
      this.baseSize = Math.random() * 1.2 + 0.8; // 基础大小 (0.8-2.0px)
      this.maxSize = this.baseSize * 2.2; // 鼠标靠近时的最大大小
      this.hueVariation = Math.random() * 10 - 5; // 色相微调
    }
    
    reset() {
      this.x = Math.random() * canvas.width;
      this.y = Math.random() * canvas.height;
      this.speedX = (Math.random() - 0.5) * 0.6; // 更慢的速度
      this.speedY = (Math.random() - 0.5) * 0.6;
      this.opacity = Math.random() * 0.3 + 0.15; // 15%-45% 不透明度
      this.size = this.baseSize;
    }
    
    update() {
      this.x += this.speedX;
      this.y += this.speedY;
      
      // 边界检查 - 从边缘重新进入
      if (this.x > canvas.width) this.x = 0;
      if (this.x < 0) this.x = canvas.width;
      if (this.y > canvas.height) this.y = 0;
      if (this.y < 0) this.y = canvas.height;
      
      // 计算与鼠标的距离
      const dx = mouseX - this.x;
      const dy = mouseY - this.y;
      const distance = Math.sqrt(dx * dx + dy * dy);
      
      // 鼠标影响范围
      const mouseRadius = 120;
      
      // 根据与鼠标的距离调整大小
      if (distance < mouseRadius) {
        const proximity = 1 - (distance / mouseRadius);
        this.size = this.baseSize + (this.maxSize - this.baseSize) * proximity * 0.9;
        this.opacity = Math.min(0.45, this.opacity + proximity * 0.3);
      } else {
        // 平滑地恢复到基础大小
        if (this.size > this.baseSize) {
          this.size -= (this.size - this.baseSize) * 0.08;
        }
        if (this.opacity > Math.random() * 0.3 + 0.15) {
          this.opacity -= 0.02;
        }
      }
    }
    
    draw() {
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
      
      // 创建精致的苹果绿渐变
      const gradient = ctx.createRadialGradient(
        this.x, this.y, 0,
        this.x, this.y, this.size
      );
      
      // 调整色相以创建微妙变化
      const hue = 148 + this.hueVariation; // Apple 绿色的 HSL 色相值
      gradient.addColorStop(0, `hsla(${hue}, 85%, 65%, ${this.opacity * 1.2})`);
      gradient.addColorStop(1, `hsla(${hue}, 70%, 50%, ${this.opacity * 0.6})`);
      
      ctx.fillStyle = gradient;
      ctx.fill();
      
      // 添加微妙的发光效果
      if (this.size > this.baseSize * 1.5) {
        const glowSize = this.size * 1.8;
        const glowOpacity = this.opacity * 0.4;
        
        const glow = ctx.createRadialGradient(
          this.x, this.y, 0,
          this.x, this.y, glowSize
        );
        glow.addColorStop(0, `hsla(${hue}, 90%, 70%, ${glowOpacity})`);
        glow.addColorStop(1, 'rgba(255, 255, 255, 0)');
        
        ctx.beginPath();
        ctx.arc(this.x, this.y, glowSize, 0, Math.PI * 2);
        ctx.fillStyle = glow;
        ctx.fill();
      }
    }
  }
  
  // 初始化粒子
  function init() {
    particles = [];
    // 精心计算的粒子数量 - 苹果风格的克制美学
    const particleCount = Math.floor((canvas.width * canvas.height) / 10000);
    
    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle());
    }
  }
  
  // 动画函数
  function animate() {
    // 设置纯白色背景
    ctx.fillStyle = 'rgba(255, 255, 255, 1)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    
    // 更新和绘制所有粒子
    for (let i = 0; i < particles.length; i++) {
      particles[i].update();
      particles[i].draw();
    }
    
    animationFrameId = requestAnimationFrame(animate);
  }
  
  // 事件监听
  window.addEventListener('resize', function() {
    cancelAnimationFrame(animationFrameId);
    setCanvasSize();
    init();
    animate();
  });
  
  // 初始化
  setCanvasSize();
  init();
  animate();
});
