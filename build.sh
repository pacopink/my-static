#!/bin/bash
docker kill static
docker rm static
docker rmi static
docker build -t static ./
