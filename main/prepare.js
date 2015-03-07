var gui = require('nw.gui');
var win = gui.Window.get();

win.x = 0;
win.y = 0;

win.setMaximumSize(screen.width, screen.height);
win.resizeTo(screen.width, screen.height);
