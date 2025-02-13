#!/bin/bash

# This script assumes you have ImageMagick installed
# If not, install it using: brew install imagemagick

# Create the public directory if it doesn't exist
mkdir -p public

# Generate PWA icons from your logo
# Replace logo.png with your actual logo file
convert public/vite.svg -resize 192x192 public/icon-192x192.png
convert public/vite.svg -resize 512x512 public/icon-512x512.png
