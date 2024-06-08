#!/usr/bin/env bash

# figure out script location and ensure we're in the project root
SOURCE_PATH=$(dirname "${BASH_SOURCE[0]}");
ROOT_PATH=$(realpath "${SOURCE_PATH}/..");
pushd "$ROOT_PATH" > /dev/null;

# function to handle errors gracefully
handle_script_error () {
  echo $@;
  # return user to their initial location
  popd > /dev/null;
  exit 1;
}

# Make sure user has installed dependencies first
if [ ! -d "node_modules" ]; then 
  handle_script_error "Please run pnpm install first";
fi

# install sharp properly
cd node_modules/sharp && pnpm install --production && pnpm run install || handle_script_error "Unexpected Error while installing sharp";

# return user to their initial location
popd > /dev/null;
