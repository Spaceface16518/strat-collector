#!/bin/bash
echo "Initiating Build..."
echo "Building App..."
tsc ./app.ts # NOTE: This directory is not relative to this file, it is relative to package.json
echo "App built"
echo "Building Modules..."
tsc ./modules/process.ts # NOTE: process module
tsc ./modules/export.ts # NOTE: export module
echo "Modules Built"
echo "Done"