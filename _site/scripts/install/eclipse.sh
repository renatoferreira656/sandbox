#!/bin/bash -xe

curl 'http://eclipse.c3sl.ufpr.br/technology/epp/downloads/release/luna/SR1/eclipse-java-luna-SR1-linux-gtk-x86_64.tar.gz' > /opt/eclipse.tar.gz

OLD_HOME=`pwd`
cd /opt;

tar xzf eclipse.tar.gz;

ln -s /opt/eclipse/eclipse /usr/bin/eclipse

rm eclipse.tar.gz;

cd $OLD_HOME;


