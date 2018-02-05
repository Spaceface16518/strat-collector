#!/bin/bash
echo "Initiating Build..."
echo "Building App..."
tsc *.ts # NOTE: This directory is not relative to this file, it is relative to package.json
echo "App built"
echo "Building Modules..."
tsc modules/*.ts
echo "Modules Built"
echo "Done"