const SERVERS = [{
	name : "Jenkins",
	status_path : "logs/jenkinsJobStatus"
}, {
	name : "nagios",
	status_path : "logs/nagiosStatus"
}];

const LOG_DIR = "logs/";
const LOG_FILES = ["jenkinsJobStatus", "nagiosStatus"];
const RELOAD_DELAY = 5.0; // reload log files in seconds
const STATUS_UPDATE_FAILURE = 120.0; // unless status = 3

const MAX_LEDS = 60;
const LENGTHS = [27, 27];
const BLINK_SPEED = 180;

const REDRAW_SPEED = 0.01;

const COLOURS = {
	"red" : "#ff0000", //[255, 0, 0],
	"green" : "#00ff00", //[0, 255, 0],
	"blue" : "#0000ff", //[0, 0, 255],
	"yellow" : "#ffff00", //[255, 255, 0],
	"pink" : "#ff2020" //[255, 32, 32]
};

const EFFECTS = ["static", "flashing", "pulsing", "nightrider", "random"];

const STATUS = {
	0 : ["green", "static"],
	1 : ["yellow", "static"],
	2 : ["red", "flashing"],
	3 : ["pink", "nightrider"],
	4 : ["green", "random"],
	5 : ["blue", "pulsing"],
	6 : ["red", "static"],
	7 : ["blue", "nightrider"],
	999 : ["pink", "static"]
};
