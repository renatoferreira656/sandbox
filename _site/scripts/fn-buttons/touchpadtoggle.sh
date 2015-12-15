#!/bin/bash

ON=`synclient | grep TouchpadOff | sed "s/.*=\s//g"`
echo $ON
if [ $ON == 0 ]; then
	notify-send "TouchPad OFF";
	synclient TouchpadOff=1;
else
	notify-send "TouchPad ON";
	synclient TouchPadOff=0;
fi
