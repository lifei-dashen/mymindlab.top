document.addEventListener('DOMContentLoaded', function() {
  // 创建 Canvas 元素
  const canvas = document.createElement('canvas');
  canvas.id = 'bg-canvas';
  
  // 将 Canvas 添加到页面顶部
  document.body.prepend(canvas);
  
  // 获取 Canvas 上下文
  const ctx = canvas.getContext('2d');
  let particles = [];
  
  // 设置 Canvas 尺寸
  function setCanvasSize() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }
  
  // 粒子类
  class Particle {
    constructor() {
      this.x = Math.random() * canvas.width;
      this.y = Math.random() * canvas.height;
      this.size = Math.random() * 1.5 + 0.5; // 更小的尺寸
      this.speedX = Math.random() * 1 - 0.5; // 减慢速度
      this.speedY = Math.random() * 1 - 0.5;
      this.color = `rgba(0, 255, 0, ${Math.random() * 0.4 + 0.1})`; // 绿色且带透明度
    }

    update() {
      this.x += this.speedX;
      this.y += this.speedY;

      // 边界检查
      if (this.x > canvas.width || this.x < 0) {
        this.x = Math.random() * canvas.width;
      }
      if (this.y > canvas.height || this.y < 0) {
        this.y = Math.random() * canvas.height;
      }
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
    const particleCount = Math.floor(canvas.width / 10); // 增加粒子数量
    
    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle());
    }
  }

  // 动画函数
  function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

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
