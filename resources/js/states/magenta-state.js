var MAGENTA_STATE = (function()
{
	var STATE = function(){};
	STATE.prototype =
	{	
		create: function()
		{
			GAME.stage.backgroundColor = '#FFFFFF';
			GAME.input.onDown.add(function()
			{
				GAME.state.start('TMP_STATE');
			});
		}
	};
	
	GAME.state.add('MAGENTA_STATE', STATE);
})();
