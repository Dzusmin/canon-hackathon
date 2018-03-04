$(document).ready(function()
{
	$(document).keyup(function(keyEvent)
	{
		switch(keyEvent.which)
		{
			case 70: // set 
				(function()
				{
					if(GAME.scale.isFullScreen)
					{
						GAME.scale.stopFullScreen();
					}
					else
					{
						GAME.scale.startFullScreen(false);
					}
				})();
				break;
			case 13:
				if(GAME_STATUS == STATUS.INITIALIZED)
				{
					VIDEO.setAttribute('style', 'top: 600px;');
					CANVAS.setAttribute('style', 'top: 600px;');
					BOARD_SETUP_STATE.dispose();
					GAME.state.start('SHEEP_STATE');
				}
				break;
			default:
				console.log(keyEvent.which);
		}
	});
});