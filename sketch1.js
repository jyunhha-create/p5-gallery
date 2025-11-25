let s1 = (p) => {
    p.setup = () => {
      // canvas1 이라는 id를 가진 태그 안에 그림을 그림
      let cnv = p.createCanvas(400, 400);
      cnv.parent('canvas1');
    };
  
    p.draw = () => {
      p.background(240);
  
      // 파란색 사각형
      p.noStroke();
      p.fill(60, 90, 200);
      p.rect(50, 50, 150, 200);
  
      // 노란색 원
      p.stroke(0);
      p.strokeWeight(3);
      p.fill(255, 200, 0);
      p.ellipse(300, 150, 120, 120);
  
      // 빨간색 사각형
      p.noStroke();
      p.fill(200, 50, 50, 200);
      p.rect(20, 250, 360, 40);
  
      // 초록색 삼각형
      p.stroke(50);
      p.strokeWeight(5);
      p.fill(0, 150, 80);
      p.triangle(250, 250, 350, 280, 280, 380);
  
      // 보라색 원
      p.noStroke();
      p.fill(150, 50, 200);
      p.ellipse(100, 320, 60, 60);
  
      // 대각선
      p.stroke(0);
      p.strokeWeight(2);
      p.line(0, 0, 150, 150);
      p.line(300, 300, 400, 400);
    };
  };
  
  new p5(s1);