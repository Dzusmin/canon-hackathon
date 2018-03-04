var MAGENTA_STATE = (function()
{
	var STATE = function(){};
	STATE.prototype =
	{	
		create: function()
		{
			GAME.scale.fullScreenScaleMode = Phaser.ScaleManager.SHOW_ALL;
			GAME.stage.backgroundColor = '#FF00FF';
			GAME.input.onDown.add(function()
			{
				GAME.scale.startFullScreen(false);
				GAME.state.start('TMP_STATE');
			});
		}
	};
	
	GAME.state.add('MAGENTA_STATE', STATE);
})();