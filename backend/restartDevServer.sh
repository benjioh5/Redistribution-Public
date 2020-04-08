#!/bin/bash
fuser -k 3333/tcp
npm run build
npm run start > logs/server_dev_$(date +%Y%m%dT%H%M%S) &
disown
