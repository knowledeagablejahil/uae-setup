@echo off
REM 🚀 PUSH TO GITHUB - WINDOWS VERSION
REM Save this as: push-to-github.bat

echo ================================
echo 🚀 UAE SETUP - GitHub Deploy
echo ================================
echo.

REM Check if git is installed
where git >nul 2>nul
if %errorlevel% neq 0 (
    echo ❌ Git is not installed
    echo Download from: https://git-scm.com/download
    pause
    exit /b 1
)

REM Get user input
echo 📝 GITHUB SETUP
echo.
set /p GITHUB_USERNAME="Enter your GitHub username: "
set /p GITHUB_EMAIL="Enter your GitHub email: "
set /p REPO_NAME="Enter your GitHub repository name (default: uae-setup): "
if "%REPO_NAME%"=="" set REPO_NAME=uae-setup

echo.
echo 📌 IMPORTANT: Create repository first!
echo.
echo 1. Go to GitHub.com
echo 2. Click 'New Repository'
echo 3. Name it: %REPO_NAME%
echo 4. Click 'Create Repository'
echo.
pause

set /p REPO_URL="Enter your GitHub repository URL: "

echo.
echo 🔑 AUTHENTICATION
echo.
echo You'll need your GitHub Personal Access Token:
echo 1. Go to GitHub.com → Settings → Developer settings → Personal access tokens
echo 2. Generate new token (repo scope)
echo 3. Copy the token
echo.
set /p GITHUB_TOKEN="Paste your GitHub Personal Access Token: "

REM Configure git
echo.
echo ⚙️  Configuring Git...
git config --global user.name "%GITHUB_USERNAME%"
git config --global user.email "%GITHUB_EMAIL%"

REM Initialize repo
echo 📦 Initializing repository...
if exist .git (
    echo Repository already initialized
) else (
    git init
    echo ✅ Repository initialized
)

REM Add files
echo 📝 Adding files...
git add .
echo ✅ Files added

REM Create commit
echo 💾 Creating commit...
git commit -m "Initial website commit - UAE Business Setup"
echo ✅ Commit created

REM Set branch
echo 🌿 Setting main branch...
git branch -M main
echo ✅ Branch set to main

REM Add remote
echo 🔗 Connecting to GitHub...
git remote remove origin 2>nul
git remote add origin "%REPO_URL%"
echo ✅ Remote added

REM Push to GitHub
echo 🚀 Pushing to GitHub...
git push -u origin main --force
echo ✅ Pushed to GitHub!

echo.
echo ================================
echo ✅ SUCCESS!
echo ================================
echo.
echo Your code is now on GitHub!
echo.
echo 📌 NEXT STEP: Deploy to Vercel
echo 1. Go to Vercel.com
echo 2. Click 'New Project'
echo 3. Click 'Import Git Repository'
echo 4. Select your GitHub account
echo 5. Select '%REPO_NAME%' repository
echo 6. Click 'Import' and 'Deploy'
echo.
echo Your website will be LIVE in 2-3 minutes! 🎉
echo.
pause
