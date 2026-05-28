#!/bin/bash
# GITHUB DEPLOYMENT - ONE COMMAND SETUP

# This script sets up your repository for GitHub deployment

echo "🚀 UAE Business Setup - GitHub Deployment"
echo "=========================================="
echo ""

# Check if git is installed
if ! command -v git &> /dev/null; then
    echo "❌ Git is not installed. Install from https://git-scm.com"
    exit 1
fi

# Initialize git if not already done
if [ ! -d .git ]; then
    echo "📦 Initializing git repository..."
    git init
    git config user.name "Your Name"
    git config user.email "your-email@example.com"
fi

# Add all files
echo "📝 Adding files to git..."
git add .

# Create commit
echo "💾 Creating initial commit..."
git commit -m "Initial website commit - UAE Business Setup"

# Show next steps
echo ""
echo "✅ Repository initialized!"
echo ""
echo "📌 NEXT STEPS:"
echo "1. Go to GitHub.com and create a new repository"
echo "2. Name it: uae-setup"
echo "3. Copy the repository URL"
echo "4. Run these commands:"
echo ""
echo "   git branch -M main"
echo "   git remote add origin https://github.com/YOUR_USERNAME/uae-setup.git"
echo "   git push -u origin main"
echo ""
echo "5. Then go to Vercel.com and import from GitHub"
echo ""
echo "Done! 🎉"
