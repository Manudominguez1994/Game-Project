class Game {
  constructor() {
    this.player = new Hero();
    this.enemies1Arr = [];
    this.frames = 0;
  }
  enemies1Spawn = () => {
    if (this.enemies1Arr.length === 0 ||this.frames % Math.floor(Math.random() * 300) === 0) {
      const positionYArr = [80, 146, 212, 336, 409, 470];
      let randomPosition = positionYArr[Math.floor(Math.random() * positionYArr.length)];
      let newEnemies1 = new Enemies(randomPosition);
      this.enemies1Arr.push(newEnemies1);
    }
  };
  enemeis1Despawn = () => {
    if (this.enemies1Arr[0].enemyFlamex < -150) {
      this.enemies1Arr[0].enemyFlame.remove();
      this.enemies1Arr.shift();
    }
  };

  gameLoop = () => {
    this.frames++;
    this.enemies1Spawn();
    this.enemies1Arr.forEach((eachEnemy) => {
      eachEnemy.automaticMovementEnemies();
    });
    this.enemeis1Despawn();

    requestAnimationFrame(this.gameLoop);
  };
}
