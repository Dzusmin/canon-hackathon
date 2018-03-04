var SHEEP_STATE = (function()
{
	var STATE = function(){};
	//
	var scale = 
	{
		x: 800 / GAME_BOARD.width,
		y: 600 / GAME_BOARD.height
	};
	var pointerPosition =
	{
		x: 0,
		y: 0
	};
	var playerPointer = null;
	//
	STATE.prototype =
	{
		create: function()
		{
			GAME.stage.backgroundColor = '#FFFFFF';
			
			GAME.physics.startSystem(Phaser.Physics.BOX2D);
			GAME.physics.box2d.setBoundsToWorld();
			
			playerPointer = new Phaser.Physics.Box2D.Body(GAME, null, 10, 10);
			playerPointer.setCircle(20);
			playerPointer.kinematic = true;
			
			TRACKER = new tracking.ColorTracker('nowy-kolorek');
			TRACKING_TRACK = tracking.track('#video', TRACKER, { camera: true });
			TRACKER.on('track', function(event)
			{
				CANVAS_CONTEXT.clearRect(0, 0, CANVAS.width, CANVAS.height);
				event.data.forEach(function(rect)
				{
					if (rect.color === 'custom')
					{
						rect.color = TRACKER.customColor;
					}
					CANVAS_CONTEXT.strokeStyle = rect.color;
					CANVAS_CONTEXT.strokeRect(rect.x, rect.y, rect.width, rect.height);
					
					pointerPosition.x = (rect.x * scale.x) + ((rect.width * scale.x) / 2);
					pointerPosition.y = (rect.y * scale.y) + ((rect.height * scale.y) / 2);
				});				
			});
		},
		
		update: function()
		{
			playerPointer.x = pointerPosition.x;
			playerPointer.y = pointerPosition.y;
		},
		
		render: function()
		{
			GAME.debug.box2dWorld();
			GAME.debug.text('FPS: ' + (GAME.time.fps || 'FPS: --'), 10, 20, '#00FF00');
			GAME.debug.text('x: ' + scale.x + ' y: ' + scale.y, 10, 40, '#00FF00');
		}
	};
	
	GAME.state.add('SHEEP_STATE', STATE);
})();