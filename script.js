document.addEventListener('DOMContentLoaded', function() {
    const randomClouds = document.querySelectorAll('.random-cloud');
  
    randomClouds.forEach(cloud => {
      cloud.addEventListener('mouseenter', () => {
        cloud.style.opacity = '0';
      });
  
      cloud.addEventListener('mouseleave', () => {
        cloud.style.opacity = '1';
      });
    });
  
    const randomCloudsContainer = document.querySelector('.random-clouds');
  
    function createRandomCloud() {
      const cloud = document.createElement('div');
      cloud.classList.add('cloud', 'random-cloud');
  
      const randomTop = Math.random() * 100;
      const randomLeft = Math.random() * 100;
      const randomWidth = Math.random() * 150 + 50;
      const randomHeight = Math.random() * 50 + 30;
  
      cloud.style.top = randomTop + '%';
      cloud.style.left = randomLeft + '%';
      cloud.style.width = randomWidth + 'px';
      cloud.style.height = randomHeight + 'px';
  
      randomCloudsContainer.appendChild(cloud);
    }
  
    // Generate 20 random clouds
    for (let i = 0; i < 2; i++) {
      createRandomCloud();
    }
  });
  