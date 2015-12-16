#!/bin/bash -xe

docker run --rm -v "$(pwd):/src" -p 4000:4000 'grahamc/jekyll' $*
