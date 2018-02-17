#!/bin/bash
echo "Initiating Build..."
echo "Building App..."
tsc ./app.ts # NOTE: This directory is not relative to this file, it is relative to package.json
echo "App built"
echo "Building Modules..."
tsc ./modules/process.ts # process module
tsc ./modules/export.ts # export module
tsc ./modules/mongo/find-all.ts # mongo database module
tsc ./modules/mongo/models/post_model.ts
echo "Modules Built"
echo "Done"