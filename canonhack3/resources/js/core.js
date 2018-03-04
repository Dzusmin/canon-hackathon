var GAME = new Phaser.Game(800, 600, Phaser.AUTO, 'gameDiv');

var STATUS =
{
	UNINITIALIZED: 0,
	INITIALIZED: 1
};
var GAME_STATUS = STATUS.UNINITIALIZED;

var VIDEO = null;
var CANVAS = null;
var CANVAS_CONTEXT = null;
var TRACKER = null;
var TRACKING_TRACK = null;

var GAME_BOARD =
{
	x: 0,
	y: 0,
	width: 0,
	height: 0
};