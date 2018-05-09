#!/bin/bash -xe

docker run -it --rm=true -v $(pwd)/target:/root/target "ardour-build"