#!/bin/bash
echo "Verifying file"
if [ -f app.js ]; then
  echo "File verified"
else
  echo "Verification failed"
  if [ -f app.ts ]; then
    echo "A TypeScript file was found"
    echo "Run 'npm build' to build the app before launching it"
  fi
fi
echo "Trying to launch 'app.js'"
node app.js