import canvasSketch from 'canvas-sketch';

const settings = {
  dimensions: [ 1080, 1080 ]
};

const degToGrad = (degrees) =>{
  return degrees / 180 * Math.PI;
}

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

    const num = 12;
    const radius = width * 0.3;

    for (let i = 0; i < num; i++) {
      const slice = degToGrad(360 / num);
      const angle = slice * i;

      x = radius * Math.sin(angle) + i;
      y = radius * Math.cos(angle) + i;

      context.save();
      context.translate(cx, cy);
      context.translate(x, y);
      context.rotate(-angle);
  
      context.beginPath();
      context.rect(-w/2 , -h/2, w, h);
      context.fill();
      context.restore();
    }
    
  };
};

canvasSketch(sketch, settings);
