#!/bin/bash
echo "Initiating Build..."
echo "Building App..."
tsc ./app.ts # NOTE: This directory is not relative to this file, it is relative to package.json
echo "App built"
echo "Building Modules..."
tsc ./modules/proccess.ts # NOTE: process module
echo "Modules Built"
echo "Done"