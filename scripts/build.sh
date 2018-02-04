#!/bin/bash
echo "Building..."
tsc app.ts # NOTE: This directory is not relative to this file, it is relative to package.json
echo "Done"