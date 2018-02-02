#!/bin/bash
docker build -t lcl/calculating .
docker run -p 8081:8081 -d lcl/calculating