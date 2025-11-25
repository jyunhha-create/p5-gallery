    let s2 = (p) => {
    let bgColor = '#E8D9FF';
    let hairColor = '#000000';
    let faceColor = '#F9E3D6';
    let sx1, sy1, sx2, sy2, sx3, sy3, sx4, sy4, sx5, sy5;
  
    p.setup = () => {
      let cnv = p.createCanvas(600, 400);
      cnv.parent('canvas2'); // HTML의 id="canvas2"와 연결
      
      sx1 = p.random(p.width); sy1 = p.random(p.height);
      sx2 = p.random(p.width); sy2 = p.random(p.height);
      sx3 = p.random(p.width); sy3 = p.random(p.height);
      sx4 = p.random(p.width); sy4 = p.random(p.height);
      sx5 = p.random(p.width); sy5 = p.random(p.height);
    };
  
    p.draw = () => {
      p.background(bgColor);
      p.noStroke();
      p.fill(255, 255, 255, 180);
      p.ellipse(sx1, sy1, 10, 10);
      p.ellipse(sx2, sy2, 8, 8);
      p.ellipse(sx3, sy3, 12, 12);
      p.ellipse(sx4, sy4, 6, 6);
      p.ellipse(sx5, sy5, 14, 14);
  
      let cx = p.width / 2;
      let cy = p.height / 2;
      
      // 뒷머리
      p.fill(hairColor);
      p.ellipse(cx, cy - 15, 280, 290);
      // 얼굴
      p.fill(faceColor);
      p.ellipse(cx, cy, 200, 180);
      // 귀
      p.fill(faceColor);
      p.ellipse(cx - 110, cy + 10, 50, 70);
      // 피어싱
      p.fill('#938F81');
      p.ellipse(cx - 125, cy - 15, 6, 6);
      p.ellipse(cx - 125, cy - 3, 6, 6);
      p.ellipse(cx - 125, cy + 9, 6, 6);
      p.ellipse(cx - 125, cy + 21, 6, 6);
      p.ellipse(cx - 125, cy + 33, 6, 6);
      // 앞머리
      p.fill(hairColor);
      p.arc(cx, cy - 40, 220, 200, p.PI, p.TWO_PI, p.CHORD);
      // 옆머리
      p.arc(cx - 90, cy + 15, 60, 150, p.HALF_PI, p.PI + p.HALF_PI, p.PIE);
      p.arc(cx + 90, cy + 15, 60, 150, -p.HALF_PI, p.HALF_PI, p.PIE);
      // 눈
      p.fill(0);
      p.ellipse(cx - 40, cy - 20, 15, 15);
      p.ellipse(cx + 40, cy - 20, 15, 15);
      // 코
      p.ellipse(cx, cy, 5, 5);
      // 입
      p.noFill();
      p.stroke('#DE6A78');
      p.strokeWeight(3);
      p.arc(cx, cy + 30, 30, 10, 0, p.PI);
      // 볼터치
      p.noStroke();
      p.fill(255, 120, 140, 120);
      p.ellipse(cx - 60, cy + 10, 30, 20);
      p.ellipse(cx + 60, cy + 10, 30, 20);
      
      p.fill(100);
      p.textSize(12);
      p.textAlign(p.CENTER);
      p.text("내 캐리커쳐쳐", cx, p.height - 20);
    };
  };
  new p5(s2);

