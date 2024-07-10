var game = new Phaser.Game(window.innerWidth, window.innerHeight, Phaser.CANVAS, 'game');

game.States = {};

// boot场景
game.States.boot = function() {
  this.preload = BootScene.preload;
  this.create = BootScene.create;
}

// 预加载场景，用于加载资源
game.States.preload = function() {
  this.preload = PreloadScene.preload;
  this.create = PreloadScene.create;
}

game.States.main = function() {
  this.create = MainScene.create.bind(MainScene);
  this.update = MainScene.update.bind(MainScene);
};

game.States.play = function() {
  this.create = PlayScene.create.bind(PlayScene);
  this.update = PlayScene.update.bind(PlayScene);
};

game.state.add('boot', game.States.boot);
game.state.add('preload', game.States.preload);
game.state.add('main', game.States.main);
game.state.add('play', game.States.play);

game.state.start('boot');

// 监听窗口大小变化事件，以调整游戏大小
window.addEventListener('resize', function() {
  game.scale.resize(window.innerWidth, window.innerHeight);
});
