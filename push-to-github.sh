#!/bin/bash

# 🚀 PUSH TO GITHUB - AUTOMATED SCRIPT
# This script handles everything: init, commit, and push

set -e  # Exit on any error

echo "================================"
echo "🚀 UAE SETUP - GitHub Deploy"
echo "================================"
echo ""

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Check if git is installed
if ! command -v git &> /dev/null; then
    echo -e "${RED}❌ Git is not installed${NC}"
    echo "Download from: https://git-scm.com/download"
    exit 1
fi

# Get user input
echo -e "${YELLOW}📝 GITHUB SETUP${NC}"
echo ""
read -p "Enter your GitHub username: " GITHUB_USERNAME
read -p "Enter your GitHub email: " GITHUB_EMAIL
read -p "Enter your GitHub repository name (default: uae-setup): " REPO_NAME
REPO_NAME=${REPO_NAME:-uae-setup}

echo ""
echo -e "${YELLOW}📌 IMPORTANT: Create repository first!${NC}"
echo ""
echo "1. Go to GitHub.com"
echo "2. Click 'New Repository'"
echo "3. Name it: $REPO_NAME"
echo "4. Click 'Create Repository'"
echo ""
read -p "Press Enter when you've created the repository on GitHub... "

read -p "Enter your GitHub repository URL (e.g., https://github.com/username/uae-setup.git): " REPO_URL

echo ""
echo -e "${YELLOW}🔑 AUTHENTICATION${NC}"
echo ""
echo "You'll need your GitHub Personal Access Token:"
echo "1. Go to GitHub.com → Settings → Developer settings → Personal access tokens"
echo "2. Generate new token (repo scope)"
echo "3. Copy the token"
echo ""
read -sp "Paste your GitHub Personal Access Token: " GITHUB_TOKEN
echo ""

# Configure git
echo ""
echo -e "${YELLOW}⚙️  Configuring Git...${NC}"
git config --global user.name "$GITHUB_USERNAME"
git config --global user.email "$GITHUB_EMAIL"

# Initialize repo
echo -e "${YELLOW}📦 Initializing repository...${NC}"
if [ -d .git ]; then
    echo "Repository already initialized"
else
    git init
    echo "✅ Repository initialized"
fi

# Add files
echo -e "${YELLOW}📝 Adding files...${NC}"
git add .
echo "✅ Files added"

# Create commit
echo -e "${YELLOW}💾 Creating commit...${NC}"
git commit -m "Initial website commit - UAE Business Setup"
echo "✅ Commit created"

# Set branch
echo -e "${YELLOW}🌿 Setting main branch...${NC}"
git branch -M main
echo "✅ Branch set to main"

# Add remote
echo -e "${YELLOW}🔗 Connecting to GitHub...${NC}"
git remote remove origin 2>/dev/null || true
git remote add origin "$REPO_URL"
echo "✅ Remote added"

# Push to GitHub
echo -e "${YELLOW}🚀 Pushing to GitHub...${NC}"
git push -u origin main --force
echo "✅ Pushed to GitHub!"

echo ""
echo -e "${GREEN}================================${NC}"
echo -e "${GREEN}✅ SUCCESS!${NC}"
echo -e "${GREEN}================================${NC}"
echo ""
echo "Your code is now on GitHub!"
echo ""
echo "📌 NEXT STEP: Deploy to Vercel"
echo "1. Go to Vercel.com"
echo "2. Click 'New Project'"
echo "3. Click 'Import Git Repository'"
echo "4. Select your GitHub account"
echo "5. Select '$REPO_NAME' repository"
echo "6. Click 'Import' and 'Deploy'"
echo ""
echo "Your website will be LIVE in 2-3 minutes! 🎉"
echo ""
