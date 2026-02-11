# 📅 Shift Roster - GitHub Pages Deployment Guide

A modern, mobile-friendly web application for displaying and managing team shift rosters.

## 🌟 Features

- ✅ Modern, dark-themed UI inspired by premium SaaS applications
- 📱 Fully responsive design for mobile and desktop
- 🖼️ Easy roster image upload and management
- 🔄 Real-time updates via GitHub Pages
- 📥 Download roster images directly from the app
- 🚀 Zero backend required - fully static

## 📁 Project Structure

```
shift-roster/
├── index.html          # Main roster display page
├── admin.html          # Admin page for uploading new rosters
├── styles.css          # All styling
├── script.js           # Main page functionality
├── admin.js            # Admin page functionality
├── roster.png          # Your current roster image (add this)
└── README.md           # This file
```

## 🚀 Quick Start - Deploy to GitHub Pages

### Step 1: Create a GitHub Repository

1. Go to [GitHub.com](https://github.com) and log in
2. Click the **"+"** icon in the top right and select **"New repository"**
3. Name your repository (e.g., `shift-roster`)
4. Choose **Public** (required for free GitHub Pages)
5. Click **"Create repository"**

### Step 2: Upload Your Files

**Option A: Via GitHub Web Interface (Easiest)**

1. On your new repository page, click **"uploading an existing file"**
2. Drag and drop all project files:
   - `index.html`
   - `admin.html`
   - `styles.css`
   - `script.js`
   - `admin.js`
   - `roster.png` (your roster image - rename it to exactly `roster.png`)
   - `README.md`
3. Add a commit message like "Initial commit"
4. Click **"Commit changes"**

**Option B: Via Git Command Line**

```bash
# Navigate to your project folder
cd "C:\AI Project\SHIFT ROASTER GITHUB"

# Initialize git (if not already done)
git init

# Add your roster image
# Copy your roster image to this folder and rename it to roster.png

# Add all files
git add .

# Commit
git commit -m "Initial commit: Shift roster application"

# Add remote (replace YOUR-USERNAME and REPO-NAME)
git remote add origin https://github.com/YOUR-USERNAME/REPO-NAME.git

# Push to GitHub
git branch -M main
git push -u origin main
```

### Step 3: Enable GitHub Pages

1. Go to your repository on GitHub
2. Click **"Settings"** tab
3. Scroll down to **"Pages"** in the left sidebar
4. Under **"Source"**, select **"main"** branch
5. Click **"Save"**
6. Wait 1-2 minutes for deployment

### Step 4: Access Your Site

Your site will be available at:
```
https://YOUR-USERNAME.github.io/REPO-NAME/
```

For example: `https://johnsmith.github.io/shift-roster/`

## 📱 Accessing on Mobile

1. Open the GitHub Pages URL on your mobile browser
2. Bookmark it for easy access
3. (Optional) Add to home screen for app-like experience:
   - **iOS**: Tap Share → Add to Home Screen
   - **Android**: Tap Menu (⋮) → Add to Home Screen

## 🔄 How to Update the Roster Monthly

### Method 1: Via GitHub Web Interface (Recommended)

1. Go to [admin page URL]/admin.html (e.g., `https://YOUR-USERNAME.github.io/shift-roster/admin.html`)
2. Click **"Select Image"** and choose your new roster
3. Preview the image
4. Click **"Download Image"** - it will save as `roster.png`
5. Go to your GitHub repository
6. Click on the existing `roster.png` file
7. Click the **trash icon** to delete it, then commit
8. Click **"Add file"** → **"Upload files"**
9. Drag your new `roster.png` file
10. Commit with message like "Update roster for February 2026"
11. Wait 1-2 minutes for GitHub Pages to update
12. Refresh your main roster page

### Method 2: Direct Upload on GitHub

1. Go to your repository on GitHub
2. Click on `roster.png`
3. Click the **pencil icon** (Edit)
4. Click **"Choose your files"** and select your new roster
5. Commit changes
6. Wait 1-2 minutes and refresh

### Method 3: Via Git Command Line

```bash
# Copy your new roster image and rename it to roster.png
# Replace the existing roster.png in your project folder

git add roster.png
git commit -m "Update roster for February 2026"
git push
```

## 🎨 Customization

### Change Colors

Edit `styles.css` and modify the CSS variables:

```css
:root {
    --primary-blue: #4A90E2;      /* Main accent color */
    --primary-dark: #0F1419;      /* Background */
    --secondary-dark: #1A1F2E;    /* Secondary background */
    --card-dark: #242B3D;         /* Card background */
}
```

### Change Site Title

Edit `index.html` and `admin.html`:
- Update `<title>` tags
- Update the logo text in the navbar

## ❓ Troubleshooting

### Roster Image Not Showing

- Ensure the file is named exactly `roster.png` (lowercase)
- Check that the image is in the root directory
- Try hard refresh: Ctrl+F5 (Windows) or Cmd+Shift+R (Mac)

### GitHub Pages Not Working

- Ensure repository is **Public**
- Verify GitHub Pages is enabled in Settings
- Wait 5-10 minutes for initial deployment
- Check that `index.html` is in the root directory

### Image Too Large

- Compress your image before uploading
- Recommended max width: 1920px
- File size should be under 5MB

## 🔒 Privacy Note

- GitHub Pages sites are **public** by default
- Anyone with the URL can access your roster
- For private rosters, consider GitHub Pro ($4/month) for private Pages

## 🆘 Support

If you encounter issues:
1. Check that all files are uploaded correctly
2. Verify GitHub Pages is enabled
3. Check browser console for errors (F12)
4. Ensure `roster.png` exists in the root directory

## 📄 License

Free to use and modify for your team's needs.

---

**Made with ❤️ for easy team roster management**

