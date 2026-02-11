# 🚀 Quick Setup Instructions

## Step-by-Step Guide to Host Your Shift Roster on GitHub

### Prerequisites
- A GitHub account (free) - [Sign up here](https://github.com/join)
- Your shift roster image ready

---

## 📝 Step 1: Add Your Roster Image

1. Copy your shift roster image to this folder: `C:\AI Project\SHIFT ROASTER GITHUB`
2. **Rename it to exactly:** `roster.png`
3. Make sure the file name is in lowercase

---

## 🌐 Step 2: Create GitHub Repository

### Via GitHub Website:

1. **Go to GitHub.com** and log in
2. Click the **"+"** icon (top right) → **"New repository"**
3. **Repository name:** `shift-roster` (or any name you prefer)
4. **Visibility:** Select **Public** (required for free GitHub Pages)
5. **DO NOT** check "Add a README file"
6. Click **"Create repository"**

---

## 📤 Step 3: Upload Files to GitHub

### Method A: Drag & Drop (Easiest - No Git Required)

1. On your new empty repository page, you'll see: **"Get started by creating a new file or uploading an existing file"**
2. Click **"uploading an existing file"** link
3. Open your project folder: `C:\AI Project\SHIFT ROASTER GITHUB`
4. Select and drag ALL files into the GitHub upload area:
   - `index.html`
   - `admin.html`
   - `styles.css`
   - `script.js`
   - `admin.js`
   - `roster.png` ← Your renamed roster image
   - `README.md`
   - `SETUP_INSTRUCTIONS.md`
5. Wait for upload to complete
6. Add commit message: `Initial commit - Shift roster app`
7. Click **"Commit changes"**

### Method B: Using Git (If You Have Git Installed)

Open PowerShell in your project folder and run:

```powershell
# Navigate to your project
cd "C:\AI Project\SHIFT ROASTER GITHUB"

# Initialize git repository
git init

# Add all files
git add .

# Commit
git commit -m "Initial commit - Shift roster app"

# Connect to GitHub (replace with YOUR details)
git remote add origin https://github.com/YOUR-USERNAME/shift-roster.git

# Push to GitHub
git branch -M main
git push -u origin main
```

**Note:** Replace `YOUR-USERNAME` and `shift-roster` with your actual GitHub username and repository name.

---

## ⚙️ Step 4: Enable GitHub Pages

1. In your repository, click **"Settings"** (top menu)
2. In the left sidebar, click **"Pages"**
3. Under **"Build and deployment"**:
   - **Source:** Deploy from a branch
   - **Branch:** Select **"main"** (or "master")
   - **Folder:** Select **"/ (root)"**
4. Click **"Save"**
5. **Wait 2-3 minutes** for deployment

---

## 🎉 Step 5: Access Your Live Site

After a few minutes, GitHub will show you the URL:

```
https://YOUR-USERNAME.github.io/shift-roster/
```

### Test Your Site:
1. Click on the URL or copy it to your browser
2. You should see your shift roster!
3. Test on mobile by opening the same URL

---

## 📱 Step 6: Add to Mobile Home Screen (Optional)

### For iPhone (iOS):
1. Open the URL in Safari
2. Tap the **Share** button (square with arrow)
3. Scroll and tap **"Add to Home Screen"**
4. Name it "Shift Roster"
5. Tap **"Add"**

### For Android:
1. Open the URL in Chrome
2. Tap the **Menu** (⋮ three dots)
3. Tap **"Add to Home Screen"**
4. Name it "Shift Roster"
5. Tap **"Add"**

---

## 🔄 How to Update Roster Next Month

### Option 1: Web Upload (Easiest)

1. Go to: `https://YOUR-USERNAME.github.io/shift-roster/admin.html`
2. Click **"Select Image"** and choose your new roster
3. Click **"Download Image"** (saves as `roster.png`)
4. Go to your GitHub repository
5. Click on the old `roster.png` file
6. Click **🗑️ trash icon** → Commit to delete
7. Click **"Add file"** → **"Upload files"**
8. Upload your new `roster.png`
9. Commit with message: `Update roster for [Month]`
10. **Wait 1-2 minutes**, then refresh your site

### Option 2: Replace File on GitHub

1. Go to your repository
2. Click `roster.png`
3. Click the **pencil icon** or **trash icon**
4. Upload new file
5. Commit changes

---

## ✅ Checklist

- [ ] GitHub account created
- [ ] Roster image renamed to `roster.png`
- [ ] Repository created on GitHub
- [ ] All files uploaded to repository
- [ ] GitHub Pages enabled in Settings
- [ ] Site is live and accessible
- [ ] Tested on mobile device
- [ ] Bookmarked/added to home screen
- [ ] Admin page tested

---

## 🆘 Troubleshooting

### "Page Not Found" (404 Error)
- Wait 5-10 minutes after enabling GitHub Pages
- Check that repository is **Public**
- Verify `index.html` is in the root folder

### Roster Image Not Showing
- Confirm file is named `roster.png` (lowercase)
- Check it's in the root folder, not in a subfolder
- Try hard refresh: Ctrl + F5 (Windows) or Cmd + Shift + R (Mac)

### Can't See Changes After Update
- Wait 2-3 minutes for GitHub to deploy
- Clear browser cache
- Try incognito/private mode

### Repository is Private
- Go to Settings → General → Danger Zone
- Click "Change visibility" → Make public

---

## 📞 Share With Your Team

Once live, share this URL with your team:
```
https://YOUR-USERNAME.github.io/shift-roster/
```

They can bookmark it or add it to their phone's home screen!

---

## 🎨 Want to Customize?

- Edit colors in `styles.css`
- Change logo/title in `index.html`
- Modify text content in HTML files

---

**You're all set! 🎊**

Your shift roster is now live and accessible from anywhere!

