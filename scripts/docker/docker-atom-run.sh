#!/bin/bash
xhost +
docker run -dt -e DISPLAY=$DISPLAY -v /tmp/.X11-unix:/tmp/.X11-unix -v "$(pwd):/root/host_files" atom sh -c "atom-beta; while true;do sleep 1; done;"
