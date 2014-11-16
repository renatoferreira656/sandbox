#!/bin/bash

OPERATOR=$1
SOUND_ACTUAL=`amixer -D pulse sget Master | grep -o  "\[.*%\]" | grep -o "[0-9]*" | head -n 1`
VAR_SOUND="10"

SUM=$(($SOUND_ACTUAL$OPERATOR$VAR_SOUND));
if [ "$SUM" != "110" ] && [ "$SUM" != "-10" ]; then
	amixer -D pulse sset Master "$SUM%"
fi

