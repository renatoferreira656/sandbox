#!/bin/bash
ON=`amixer -D pulse sset Master toggle | grep "\[on\]"`

if [ "x$ON" == "x" ]; then
	notify-send "Sound OFF";
else
	notify-send "Sound ON";
fi
