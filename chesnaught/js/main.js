window.addEventListener('DOMContentLoaded', ()=> {
    // ①雪を発生させるコンテナを指定
    const container = document.querySelector('.snow-container');
  
    // ②雪を生成する関数
    const createSnow = () => {
      const snowEl = document.createElement('span');
      snowEl.className = 'snow';
      const minSize = 5;
      const maxSize = 10;
      const size = Math.random() * (maxSize - minSize) + minSize;
      snowEl.style.width = `${size}px`;
      snowEl.style.height = `${size}px`;
      snowEl.style.left = Math.random() * 100 + '%';
      container.appendChild(snowEl);
  
      // 一定時間が経てば雪を消す
      setTimeout(() => {
        snowEl.remove();
      }, 7000);
    }
  
    // ③雪を生成する関数を一定間隔で呼び出す
    setInterval(createSnow, 100);
  });