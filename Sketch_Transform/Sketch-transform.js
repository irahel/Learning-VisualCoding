import canvasSketch from 'canvas-sketch';

const settings = {
  dimensions: [ 1080, 1080 ]
};

const sketch = () => {
  return ({ context, width, height }) => {
    context.fillStyle = 'white';
    context.fillRect(0, 0, width, height);

    context.fillStyle = 'black';
    
    const x = width * 0.5;
    const y = width * 0.5;
    const w = width * 0.3;
    const h = height * 0.3;

    context.save();
    context.translate(x, y);
    context.rotate(0.3);

    context.beginPath();
    context.rect(-w/2 , -h/2, w, h);
    context.fill();
    context.restore();


  };
};

canvasSketch(sketch, settings);
