import { useEffect } from 'react';

const WireEffect = () => {
  useEffect(() => {
    const canvas = document.getElementById('wire-canvas');
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    const skillCards = document.querySelectorAll('.skill-card');
    
    // Set canvas size
    const resizeCanvas = () => {
      const section = canvas.parentElement;
      canvas.width = section.offsetWidth;
      canvas.height = section.offsetHeight;
    };
    
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Particle system for connection effects
    const particles = [];
    const maxParticles = 50;

    class Particle {
      constructor(x, y, targetX, targetY, color) {
        this.x = x;
        this.y = y;
        this.targetX = targetX;
        this.targetY = targetY;
        this.color = color;
        this.speed = 0.02;
        this.progress = 0;
        this.size = Math.random() * 2 + 1;
        this.opacity = 1;
      }

      update() {
        this.progress += this.speed;
        if (this.progress >= 1) {
          this.opacity -= 0.02;
          if (this.opacity <= 0) return false;
        }
        this.x = this.x + (this.targetX - this.x) * this.progress;
        this.y = this.y + (this.targetY - this.y) * this.progress;
        return true;
      }

      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(0, 102, 204, ${this.opacity})`;
        ctx.fill();
        
        // Glow effect
        ctx.shadowBlur = 10;
        ctx.shadowColor = this.color;
      }
    }

    // Draw wires between cards on hover
    const drawWires = (card, hoveredIndex) => {
      const rect = card.getBoundingClientRect();
      const sectionRect = canvas.parentElement.getBoundingClientRect();
      
      const centerX = rect.left - sectionRect.left + rect.width / 2;
      const centerY = rect.top - sectionRect.top + rect.height / 2;

      // Draw connections to nearby cards
      skillCards.forEach((otherCard, index) => {
        if (index === hoveredIndex) return;
        
        const otherRect = otherCard.getBoundingClientRect();
        const otherCenterX = otherRect.left - sectionRect.left + otherRect.width / 2;
        const otherCenterY = otherRect.top - sectionRect.top + otherRect.height / 2;
        
        const distance = Math.sqrt(
          Math.pow(otherCenterX - centerX, 2) + 
          Math.pow(otherCenterY - centerY, 2)
        );

        // Only connect to nearby cards
        if (distance < 400) {
          // Draw animated wire
          ctx.beginPath();
          ctx.moveTo(centerX, centerY);
          
          // Curved line
          const controlX = (centerX + otherCenterX) / 2 + (Math.random() - 0.5) * 50;
          const controlY = (centerY + otherCenterY) / 2 - 50;
          ctx.quadraticCurveTo(controlX, controlY, otherCenterX, otherCenterY);
          
          const gradient = ctx.createLinearGradient(centerX, centerY, otherCenterX, otherCenterY);
          gradient.addColorStop(0, 'rgba(0, 102, 204, 0.4)');
          gradient.addColorStop(0.5, 'rgba(66, 165, 245, 0.6)');
          gradient.addColorStop(1, 'rgba(0, 102, 204, 0.4)');
          
          ctx.strokeStyle = gradient;
          ctx.lineWidth = 2;
          ctx.shadowBlur = 15;
          ctx.shadowColor = '#0066CC';
          ctx.stroke();
          
          // Add particles along the wire
          if (particles.length < maxParticles && Math.random() > 0.7) {
            particles.push(
              new Particle(centerX, centerY, otherCenterX, otherCenterY, '#0066CC')
            );
          }
        }
      });

      // Draw cloud connection at the top
      const cloudY = 50;
      ctx.beginPath();
      ctx.moveTo(centerX, centerY);
      ctx.quadraticCurveTo(centerX, centerY - 100, centerX, cloudY);
      
      const cloudGradient = ctx.createLinearGradient(centerX, centerY, centerX, cloudY);
      cloudGradient.addColorStop(0, 'rgba(0, 102, 204, 0.3)');
      cloudGradient.addColorStop(1, 'rgba(66, 165, 245, 0.1)');
      
      ctx.strokeStyle = cloudGradient;
      ctx.lineWidth = 1.5;
      ctx.setLineDash([5, 5]);
      ctx.stroke();
      ctx.setLineDash([]);
      
      // Draw cloud icon
      ctx.font = '30px Arial';
      ctx.fillStyle = 'rgba(0, 102, 204, 0.3)';
      ctx.fillText('☁', centerX - 15, cloudY);
    };

    let animationFrame;
    let hoveredCard = null;
    let hoveredIndex = null;

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.shadowBlur = 0;

      // Draw wires if hovering
      if (hoveredCard) {
        drawWires(hoveredCard, hoveredIndex);
      }

      // Update and draw particles
      for (let i = particles.length - 1; i >= 0; i--) {
        const particle = particles[i];
        if (!particle.update()) {
          particles.splice(i, 1);
        } else {
          particle.draw();
        }
      }

      animationFrame = requestAnimationFrame(animate);
    };

    animate();

    // Add hover listeners
    skillCards.forEach((card, index) => {
      card.addEventListener('mouseenter', () => {
        hoveredCard = card;
        hoveredIndex = index;
      });
      
      card.addEventListener('mouseleave', () => {
        hoveredCard = null;
        hoveredIndex = null;
      });
    });

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationFrame);
    };
  }, []);

  return null;
};

export default WireEffect;
