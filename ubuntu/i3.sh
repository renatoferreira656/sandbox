#!/bin/bash 

sudo apt-get install i3 -y

echo "exec_always ~/.i3/bin/i3init" >> $HOME/.i3/config

mkdir -p $HOME/.i3/bin/

