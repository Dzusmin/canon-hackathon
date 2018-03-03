var MAGENTA_STATE = (function()
{
	var STATE = function(){};
	STATE.prototype =
	{	
		create: function()
		{
			GAME.stage.backgroundColor = '#FF00FF';
			GAME.input.onDown.add();
		}
	};
	
	GAME.state.add('MAGENTA_STATE', STATE);
	
	return {
		setPointerPosition: setPointerPosition
	}
})();