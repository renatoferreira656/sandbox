FROM ubuntu:16.04

ENV DEBIAN_FRONTEND noninteractive

WORKDIR /root

RUN apt-get update -y
RUN apt-get install curl git python build-essential libboost-dev libarchive-dev chrpath unzip libnss3 gtk-2.0 -y
RUN apt-get build-dep ardour3 -y

RUN git clone https://github.com/Ardour/ardour.git

WORKDIR /root/ardour

RUN ./waf configure
RUN ./waf

WORKDIR /root/ardour/tools/linux_packaging

RUN ./build --public --strip some
RUN ./package --public --singlearch

WORKDIR /root/

CMD ["/bin/bash"]