var TMP_STATE = (function()
{
	var _pointerPosition = { x:0, y:0 };
	var setPointerPosition = function(x, y)
	{
		_pointerPosition.x = x;
		_pointerPosition.y = y;
	};
	
	
	var STATE = function(){};
	//
	var playerPointer = null;
	//
	STATE.prototype =
	{
		preload: function()
		{
			GAME.time.advancedTiming = true;
			GAME.load.image('block', 'resources/assets/2d/block.png');
		},
		
		create: function()
		{
			GAME.input.onDown.add(function() {
				console.log('test');
				GAME.scale.startFullScreen(true);
      });
			GAME.stage.backgroundColor = '#FFFFFF';
			GAME.renderer.renderSession.roundPixels = true;
			GAME.scale.fullScreenScaleMode = Phaser.ScaleManager.SHOW_ALL;
			
			GAME.physics.startSystem(Phaser.Physics.BOX2D);
			GAME.physics.box2d.setBoundsToWorld();
			GAME.physics.box2d.gravity.y = 500;
			
			playerPointer = new Phaser.Physics.Box2D.Body(GAME, null, _pointerPosition.x, _pointerPosition.y);
			playerPointer.setCircle(20);
			playerPointer.kinematic = true;
			
			for (var i = 0; i < 5; i++)
			{
				var blockSprite = GAME.add.sprite(150 + i * 125, 300 - i * 50, 'block');
				GAME.physics.box2d.enable(blockSprite);
				blockSprite.body.angle = 30;
			}
			
			GAME.input.onDown.add(mouseDragStart, this);
			GAME.input.addMoveCallback(mouseDragMove, this);
			GAME.input.onUp.add(mouseDragEnd, this);
		},
		
		update: function()
		{
			playerPointer.x = _pointerPosition.x;
			playerPointer.y = _pointerPosition.y;
		},
		
		render: function()
		{
			GAME.debug.box2dWorld();
			GAME.debug.text('FPS: ' + (GAME.time.fps || 'FPS: --'), 10, 20, '#00FF00');
			GAME.debug.text('x: ' + _pointerPosition.x + ' y: ' + _pointerPosition.y, 10, 40, '#00FF00');
		}
	};
	
	function mouseDragStart()
	{
		GAME.physics.box2d.mouseDragStart(GAME.input.mousePointer);
    }

	function mouseDragMove()
	{
		GAME.physics.box2d.mouseDragMove(GAME.input.mousePointer);
	}

	function mouseDragEnd()
	{
		GAME.physics.box2d.mouseDragEnd();
	}
	
	GAME.state.add('TMP_STATE', STATE);
	
	return {
		setPointerPosition: setPointerPosition
	}
})();
