#!/bin/bash

# GoalQuest Deployment Script
# This script will help you deploy to GitHub Pages or Netlify

echo "🚀 GoalQuest Deployment Helper"
echo "================================"
echo ""
echo "Choose deployment option:"
echo "1) GitHub Pages (Free, Easy)"
echo "2) Netlify (Free, Auto-deploy)"
echo "3) Vercel (Free, Fast)"
echo ""
read -p "Enter option (1-3): " option

case $option in
  1)
    echo ""
    echo "📝 GitHub Pages Setup:"
    echo "====================="
    echo ""
    echo "Step 1: Go to https://github.com/new"
    echo "Step 2: Create repository named 'goalquest'"
    echo "Step 3: Run these commands:"
    echo ""
    echo "cd /Users/jeffy/Documents/Pathnest"
    echo "git init"
    echo "git add ."
    echo "git commit -m 'Initial GoalQuest commit'"
    echo "git branch -M main"
    echo "git remote add origin https://github.com/YOUR_USERNAME/goalquest.git"
    echo "git push -u origin main"
    echo ""
    echo "Step 4: Go to your repo Settings → Pages"
    echo "Step 5: Select 'main' branch and save"
    echo ""
    echo "✅ Your app will be live at:"
    echo "https://YOUR_USERNAME.github.io/goalquest"
    echo ""
    ;;
  2)
    echo ""
    echo "🎯 Netlify Setup:"
    echo "================="
    echo ""
    echo "Step 1: First, push to GitHub (see option 1 above)"
    echo "Step 2: Go to https://netlify.com"
    echo "Step 3: Click 'Sign up' → 'Continue with GitHub'"
    echo "Step 4: Click 'New site from Git'"
    echo "Step 5: Select your 'goalquest' repository"
    echo "Step 6: Keep defaults and click 'Deploy site'"
    echo ""
    echo "✅ Your app will be live at:"
    echo "https://YOUR_SITE_NAME.netlify.app"
    echo ""
    echo "Auto-deploys when you push to GitHub!"
    echo ""
    ;;
  3)
    echo ""
    echo "⚡ Vercel Setup:"
    echo "==============="
    echo ""
    echo "Step 1: First, push to GitHub (see option 1 above)"
    echo "Step 2: Go to https://vercel.com"
    echo "Step 3: Click 'Continue with GitHub'"
    echo "Step 4: Click 'New Project'"
    echo "Step 5: Select 'goalquest' repository"
    echo "Step 6: Click 'Import' then 'Deploy'"
    echo ""
    echo "✅ Your app will be live at:"
    echo "https://YOUR_PROJECT.vercel.app"
    echo ""
    ;;
  *)
    echo "Invalid option"
    exit 1
    ;;
esac
