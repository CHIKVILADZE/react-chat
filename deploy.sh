#!/bin/bash

# Build the project
npm run build

# Commit and force push to GitHub Pages
git init
git add .
git commit -m "Deploy to GitHub Pages"
git push -f git@github.com:chikviladze/react-chat.git main:gh-pages
