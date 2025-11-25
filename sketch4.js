let s3 = (p) => {
    let bgColor = '#E8D9FF';
    let hairColor = '#000000';
    let faceColor = '#F9E3D6';
    let blink = false;
    let mouthOpen = false;
    let blushVisible = true;
    
    // 별 좌표
    let sx1, sy1, sx2, sy2, sx3, sy3, sx4, sy4, sx5, sy5;
  
    p.setup = () => {
      let cnv = p.createCanvas(600, 400);
      cnv.parent('canvas3'); // HTML의 id="canvas3"에 넣기
  
      sx1 = p.random(p.width); sy1 = p.random(p.height);
      sx2 = p.random(p.width); sy2 = p.random(p.height);
      sx3 = p.random(p.width); sy3 = p.random(p.height);
      sx4 = p.random(p.width); sy4 = p.random(p.height);
      sx5 = p.random(p.width); sy5 = p.random(p.height);
    };
  
    p.draw = () => {
      p.background(bgColor);
  
      // 🌟 별 (움직임 구현)
      p.noStroke();
      p.fill(255, 255, 255, 180);
      p.ellipse(sx1, sy1, 10, 10);
      p.ellipse(sx2, sy2, 8, 8);
      p.ellipse(sx3, sy3, 12, 12);
      p.ellipse(sx4, sy4, 6, 6);
      p.ellipse(sx5, sy5, 14, 14);
  
      // 별 이동 로직
      sy1 += 0.4; sy2 += 0.3; sy3 += 0.35; sy4 += 0.25; sy5 += 0.45;
      if (sy1 > p.height) sy1 = 0;
      if (sy2 > p.height) sy2 = 0;
      if (sy3 > p.height) sy3 = 0;
      if (sy4 > p.height) sy4 = 0;
      if (sy5 > p.height) sy5 = 0;
  
      let cx = p.width / 2;
      let cy = p.height / 2;
  
      // 🌟 뒷머리
      p.fill(hairColor);
      p.ellipse(cx, cy - 15, 280, 290);
  
      // 얼굴
      p.fill(faceColor);
      p.ellipse(cx, cy, 200, 180);
  
      // 귀 + 피어싱
      p.fill(faceColor);
      p.ellipse(cx - 110, cy + 10, 50, 70);
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
  
      // 눈 (깜박임 인터랙션)
      p.fill(0);
      if (blink) {
        p.rect(cx - 47, cy - 20, 15, 2);
        p.rect(cx + 33, cy - 20, 15, 2);
      } else {
        p.ellipse(cx - 40, cy - 20, 15, 15);
        p.ellipse(cx + 40, cy - 20, 15, 15);
      }
  
      // 코
      p.fill(0);
      p.ellipse(cx, cy, 5, 5);
  
      // 입 (클릭 인터랙션)
      p.noStroke();
      p.fill('#DE6A78');
      if (mouthOpen) {
        p.ellipse(cx, cy + 30, 20, 25); 
      } else {
        p.noFill();
        p.stroke('#DE6A78');
        p.strokeWeight(3);
        p.arc(cx, cy + 30, 30, 10, 0, p.PI);
      }
  
      // 볼터치 (키보드 인터랙션)
      if (blushVisible) {
        p.noStroke();
        p.fill(255, 120, 140, 120);
        p.ellipse(cx - 60, cy + 10, 30, 20);
        p.ellipse(cx + 60, cy + 10, 30, 20);
      }
  
      // 안내 텍스트
      p.noStroke();
      p.fill(60);
      p.textSize(13);
      p.textAlign(p.CENTER);
      p.text("클릭: 입 | 스페이스: 눈 | R: 볼터치 | B: 배경 | H: 머리색", cx, p.height - 20);
    };
  
    // 🔹 마우스 클릭 함수 (인스턴스 모드용)
    p.mousePressed = () => {
      // 캔버스 안에서만 클릭 작동하도록 설정 (선택사항)
      if (p.mouseX > 0 && p.mouseX < p.width && p.mouseY > 0 && p.mouseY < p.height) {
        mouthOpen = !mouthOpen;
      }
    };
  
    // 🔹 키보드 함수 (인스턴스 모드용)
    p.keyPressed = () => {
      if (p.key === ' ') blink = !blink;
      if (p.key === 'r' || p.key === 'R') blushVisible = !blushVisible;
      if (p.key === 'b' || p.key === 'B')
        bgColor = p.random(['#E8D9FF', '#D0E8FF', '#FFE8E8', '#E8FFE8']);
      if (p.key === 'h' || p.key === 'H')
        hairColor = p.random(['#000000', '#5C3A21', '#7B6C63', '#3C3C3C']);
    };
  };
  
  new p5(s3);
