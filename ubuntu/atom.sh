#!/bin/bash


sudo apt-get install gconf2 libnotify4 libnss3 xdg-utils libgconf-2-4

cd /tmp
if [  ! -f atom.deb ]; then
	wget https://atom.io/download/deb -O atom.deb
fi

sudo dpkg -i atom.deb

