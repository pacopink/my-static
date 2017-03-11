#!/bin/bash
docker run --restart always --name static --hostname static -p 8009:80 static
