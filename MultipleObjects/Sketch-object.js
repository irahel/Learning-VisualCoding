const canvasSketch = require('canvas-sketch');
const random = require('canvas-sketch-util/random');

const settings = {
  dimensions: [ 1080, 1080 ],
  animate: true
};

const sketch = ({ context, width, height }) => {
  const agents = [];
  for (let i = 0; i < 40; i++){
    const x = random.range(0, width);
    const y = random.range(0, height);

    agents.push(new Agent(x, y));
  }

  return ({ context, width, height }) => {
    context.fillStyle = 'white';
    context.fillRect(0, 0, width, height);

    agents.forEach(agent => {
      agent.update();
      agent.draw(context);
      agent.bounce(width, height);
    });

  };
};

canvasSketch(sketch, settings);

class Vector{
  constructor(x, y){
    this.x = x;
    this.y = y;
  }
}

class Agent {
  constructor(x, y){
    this.pos = new Vector(x, y);
    this.speed = new Vector(random.range(-1,1)*10, random.range(-1,1)*10);
    this.radius = random.range(4, 12)*2;
    this.color = `rgba(
      ${random.range(0, 255)},
      ${random.range(0, 255)},
      ${random.range(0, 255)}, 1)`;
  }

  recolor(){
    this.color = `rgba(
      ${random.range(0, 255)},
      ${random.range(0, 255)},
      ${random.range(0, 255)}, 1)`;
  }

  bounce(width, height){
    var bounced = false;
    if (this.pos.x <= 0 || this.pos.x >= width){
      bounced = true;
      this.speed.x *= -1;
    }
    if (this.pos.y <= 0 || this.pos.y >= height){
      bounced = true;
      this.speed.y *= -1;
    }
    if (bounced) this.recolor();
  }

  update(){
    this.pos.x += this.speed.x;
    this.pos.y += this.speed.y;
  }

  draw(context){
    context.save();
    context.translate(this.pos.x, this.pos.y);

    context.fillStyle = this.color;
    context.lineWidth = 4;

    context.beginPath();
    context.arc(0, 0, this.radius, 0, Math.PI *2);
    context.fill();

    context.restore();
  }
}