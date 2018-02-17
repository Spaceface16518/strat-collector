#!/bin/bash
echo "Initiating Build..."
echo "Building App..."
tsc ./app.ts # NOTE: This directory is not relative to this file, it is relative to package.json
echo "App built"
echo "Building Modules..."
tsc ./modules/process.ts # process module
tsc ./modules/export.ts # export module
tsc ./modules/mongo.ts # mongo database module
tsc ./modules/models/strats_posts_model
echo "Modules Built"
echo "Done"