let s4 = (p) => {
    p.setup = () => {
      let cnv = p.createCanvas(400, 400);
      cnv.parent('canvas4'); // HTML의 id="canvas4"와 연결
    };
  
    p.draw = () => {
      let bgCol1 = p.color(240, 240, 240);
      let bgCol2 = p.color(220, 230, 255);
      let amt = p.map(p.sin(p.frameCount * 0.02), -1, 1, 0, 1);
      p.background(p.lerpColor(bgCol1, bgCol2, amt));
  
      // 파란색 사각형
      p.noStroke();
      let bVal = p.map(p.sin(p.frameCount * 0.05), -1, 1, 150, 255); 
      p.fill(60, 90, bVal); 
      let rectW = p.map(p.sin(p.frameCount * 0.05), -1, 1, 140, 160); 
      p.rect(50, 50, rectW, 200);
  
      // 노란색 원
      p.stroke(0);
      p.strokeWeight(3);
      p.fill(255, 200, 0);
      let floatY = p.sin(p.frameCount * 0.08) * 20; 
      p.ellipse(300, 150 + floatY, 120, 120);
  
      // 빨간색 사각형
      p.noStroke();
      let alphaVal = p.map(p.cos(p.frameCount * 0.1), -1, 1, 100, 220);
      p.fill(200, 50, 50, alphaVal); 
      p.rect(20, 250, 360, 40);
  
      // 초록색 삼각형
      p.stroke(50);
      p.strokeWeight(5);
      p.fill(0, 150, 80);
      let triShake = p.sin(p.frameCount * 0.1) * 5;
      p.triangle(250 + triShake, 250, 350, 280 + triShake, 280, 380);
  
      // 보라색 원
      p.noStroke();
      p.fill(150, 50, 200);
      let orbitX = 100 + p.cos(p.frameCount * 0.1) * 20;
      let orbitY = 320 + p.sin(p.frameCount * 0.1) * 20;
      p.ellipse(orbitX, orbitY, 60, 60);
  
      // 대각선
      p.stroke(0);
      let sw = p.map(p.sin(p.frameCount * 0.2), -1, 1, 1, 5);
      p.strokeWeight(sw);
      p.line(0, 0, 150, 150); 
      p.line(300, 300, 400, 400);
    };
  };
  new p5(s4);
