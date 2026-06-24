#!/bin/bash
# Start the v3 casino affiliate site preview server.
# Runs in the background. Visit http://localhost:8785/ to view.
# Stop with: lsof -ti:8785 | xargs kill

cd "$(dirname "$0")"
echo "Starting v3 server on http://localhost:8785/"
echo "Press Ctrl+C to stop, or close this Terminal window."
python3 -m http.server 8785
