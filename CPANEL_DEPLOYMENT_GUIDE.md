# 🚀 cPanel Deployment Guide - LéO Africa Institute

## ✅ Pre-Launch Checklist Complete

Your site is **ready for cPanel deployment**! The production build has been completed successfully.

### 📦 Deployment Package

**File**: `leo-africa-cpanel-deployment.zip` (203 MB)  
**Location**: `/Users/zuri/Work/LEO/L-O-Africa-Institute/`  
**Build Date**: January 5, 2026

---

## 🎯 Quick Deployment Steps

### Step 1: Access cPanel File Manager

1. Log into your cPanel account
2. Navigate to **File Manager**
3. Go to the `public_html` directory (or your domain's root directory)

### Step 2: Backup Current Site (Recommended)

Before deploying, backup your current site:
1. In File Manager, select all files in `public_html`
2. Click **Compress** → Choose **Zip Archive**
3. Name it `backup-[date].zip`
4. Download the backup to your local machine

### Step 3: Clear Current Files

1. Select all files and folders in `public_html`
2. Click **Delete**
3. Confirm deletion

### Step 4: Upload Deployment Package

1. Click **Upload** in File Manager
2. Select `leo-africa-cpanel-deployment.zip`
3. Wait for upload to complete (203 MB - may take 5-10 minutes depending on connection)

### Step 5: Extract Files

1. Right-click on `leo-africa-cpanel-deployment.zip`
2. Select **Extract**
3. Extract to: `public_html/`
4. Click **Extract Files**

### Step 6: Move Files to Root

The extraction creates a `public` folder. You need to move its contents to the root:

1. Navigate into the `public` folder
2. Select all files and folders inside
3. Click **Move**
4. Move to: `/public_html/` (or your domain root)
5. Confirm the move

### Step 7: Clean Up

1. Delete the empty `public` folder
2. Delete `leo-africa-cpanel-deployment.zip` (optional, to save space)

### Step 8: Verify Deployment

1. Visit your domain in a browser
2. Check that the site loads correctly
3. Test navigation and key pages
4. Verify images and assets load properly

---

## 🔧 Important Configuration Notes

### Domain Configuration

- **Primary Domain**: `leoafricainstitute.org`
- **Site URL**: Configured in `gatsby-config.js` as `https://leoafricainstitute.org`

### .htaccess Configuration (if needed)

If your site has routing issues, create a `.htaccess` file in `public_html` with:

```apache
# Gatsby Static Site Configuration
Options -MultiViews
RewriteEngine On

# Redirect to HTTPS
RewriteCond %{HTTPS} off
RewriteRule ^(.*)$ https://%{HTTP_HOST}%{REQUEST_URI} [L,R=301]

# Handle client-side routing
RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_FILENAME} !-d
RewriteRule . /index.html [L]

# Cache static assets
<FilesMatch "\.(jpg|jpeg|png|gif|svg|webp|ico|css|js|woff|woff2|ttf|eot)$">
  Header set Cache-Control "max-age=31536000, public"
</FilesMatch>
```

### SSL Certificate

Ensure your cPanel has an SSL certificate installed:
1. Go to cPanel → **SSL/TLS Status**
2. If not installed, use **Let's Encrypt** (free) or your SSL provider
3. Enable **Force HTTPS Redirect**

---

## 📊 Build Statistics

- **Total Pages**: 259 pages generated
- **Build Time**: ~89 seconds
- **Package Size**: 203 MB
- **Optimization**: Production-ready with minified assets

### Key Pages Included:

- ✅ Homepage (`/`)
- ✅ About pages (`/about/*`)
- ✅ YELP Fellows (102 profiles)
- ✅ Huduma Champions (61 profiles)
- ✅ Blog posts (36 articles)
- ✅ Publications (2 reports)
- ✅ Team members (11 profiles)
- ✅ Events, Initiatives, Contact, etc.

---

## 🔄 Future Updates

### Option 1: Manual Deployment (Current Method)

Repeat the steps above whenever you need to deploy updates:
1. Run `gatsby clean && npm run build`
2. Create new zip file
3. Upload and extract to cPanel

### Option 2: Automated Deployment (Recommended)

You already have GitHub Actions configured! To enable automated deployments:

1. **Configure FTP Secrets** in GitHub:
   - Go to Repository → Settings → Secrets and variables → Actions
   - Add: `FTP_SERVER`, `FTP_USERNAME`, `FTP_PASSWORD`

2. **Set up Prismic Webhook**:
   - See `DEPLOYMENT_SETUP.md` for detailed instructions
   - Content updates in Prismic will auto-deploy to cPanel

3. **Benefits**:
   - ✅ Automatic deployment on content changes
   - ✅ No manual building/uploading
   - ✅ 2-3 minute deployment time
   - ✅ Full deployment history

---

## 🚨 Troubleshooting

### Site Shows 404 Errors

- Ensure files are in `public_html` root, not in a subfolder
- Check `.htaccess` configuration above
- Verify domain points to correct directory in cPanel

### Images Not Loading

- Check file permissions (should be 644 for files, 755 for folders)
- Verify all files extracted properly
- Clear browser cache

### Slow Loading

- Enable cPanel caching (if available)
- Consider CDN integration (Cloudflare, etc.)
- Optimize images before building

### Mixed Content Warnings

- Ensure SSL is properly configured
- Check that all resources use HTTPS
- Enable "Force HTTPS" in cPanel

---

## 📞 Support Resources

- **Deployment Documentation**: `DEPLOYMENT_SETUP.md`
- **DNS Configuration**: `DNS_CONFIGURATION_GUIDE.md`
- **GitHub Repository**: https://github.com/ZuriJabari/L-O-Africa-Institute

---

## ✨ You're Ready to Launch!

Your LéO Africa Institute website is fully built and packaged for deployment. Follow the steps above to go live on cPanel.

**Good luck with your launch! 🎉**
