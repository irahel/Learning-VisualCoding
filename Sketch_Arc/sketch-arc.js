import canvasSketch from 'canvas-sketch';
const math = require('canvas-sketch-util/math');
const random = require('canvas-sketch-util/random');

const settings = {
  dimensions: [ 1080, 1080 ]
};

const sketch = () => {
  return ({ context, width, height }) => {
    context.fillStyle = 'white';
    context.fillRect(0, 0, width, height);

    context.fillStyle = 'black';
    
    const cx = width * 0.5;
    const cy = width * 0.5;
    const w = width * 0.01;
    const h = height * 0.1;

    let x, y;

    const num = 40;
    const radius = width * 0.3;

    for (let i = 0; i < num; i++) {
      const slice = math.degToRad(360 / num);
      const angle = slice * i;

      x = radius * Math.sin(angle) + i;
      y = radius * Math.cos(angle) + i;


      context.save();
      context.fillStyle = `rgba(
        ${random.range(0,250)}, 
        ${random.range(0,250)}, 
        ${random.range(0,250)}, ${random.range(0.5,1)})`;
      context.translate(cx, cy);
      context.translate(x, y);
      context.rotate(-angle);
      context.scale(random.range(0.1, 2), random.range(0.2, 0.5));
  
      context.beginPath();
      context.rect(-w/2 , random.range(0, -h/2), w, h);
      context.fill();
      context.restore();

      context.save();
      context.fillStyle = `rgba(
        ${random.range(0,250)}, 
        ${random.range(0,250)}, 
        ${random.range(0,250)}, ${random.range(0.5,1)})`;
      context.translate(cx, cy);
      context.rotate(-angle);

      context.lineWidth = random.range(5, 20);

      context.beginPath();
      context.arc(0-100, 0+100, random.range(radius *0.7, radius*1.3), slice*random.range(1, -8), slice*random.range(1, 5));
      context.fill();

      context.restore();
    }
    
  };
};

canvasSketch(sketch, settings);
