#!/bin/bash
# Open the local v3 casino affiliate site in your default browser.
# The dev server must be running on port 8785 (start it with `bash ~/Desktop/playcanadiancasino/v3/start-server.sh`).

# Check if server is already running
if ! curl -s -o /dev/null -w "%{http_code}" http://localhost:8785/ | grep -q "200"; then
    echo "Starting v3 preview server..."
    cd ~/Desktop/playcanadiancasino/v3 || exit 1
    python3 -m http.server 8785 > /dev/null 2>&1 &
    sleep 2
fi

# Open the homepage
open "http://localhost:8785/"
