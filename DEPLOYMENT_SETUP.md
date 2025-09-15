# 🚀 Automated Deployment Setup for LéO Africa Institute

This guide will help you set up automatic deployment from Prismic content updates to your cPanel hosting.

## 📋 Overview

When you update content in Prismic, it will automatically:
1. Trigger a webhook to GitHub
2. Build your Gatsby site via GitHub Actions
3. Deploy the built site to your cPanel hosting via FTP

## 🛠️ Setup Instructions

### Step 1: Configure GitHub Repository Secrets

Go to your GitHub repository → Settings → Secrets and variables → Actions, then add these secrets:

| Secret Name | Description | Example |
|-------------|-------------|---------|
| `FTP_SERVER` | Your cPanel FTP server | `ftp.yourdomain.com` |
| `FTP_USERNAME` | Your cPanel FTP username | `username@yourdomain.com` |
| `FTP_PASSWORD` | Your cPanel FTP password | `your-ftp-password` |

### Step 2: Get Your GitHub Personal Access Token

1. Go to GitHub → Settings → Developer settings → Personal access tokens → Tokens (classic)
2. Generate new token with these permissions:
   - `repo` (Full control of private repositories)
   - `workflow` (Update GitHub Action workflows)
3. Copy the token for use in Prismic webhook

### Step 3: Configure Prismic Webhook

1. Go to your Prismic repository → Settings → Webhooks
2. Click "Create a webhook"
3. Fill in the details:
   - **Name**: `GitHub Actions Deploy`
   - **URL**: `https://api.github.com/repos/YOUR_USERNAME/L-O-Africa-Institute/dispatches`
   - **Custom Headers**:
     - `Authorization`: `Bearer YOUR_GITHUB_TOKEN`
     - `Accept`: `application/vnd.github.v3+json`
     - `Content-Type`: `application/json`
   - **Body** (Custom JSON):
     ```json
     {
       "event_type": "prismic-content-update",
       "client_payload": {
         "repository": "{{repository}}",
         "type": "{{type}}",
         "apiUrl": "{{apiUrl}}"
       }
     }
     ```

### Step 4: Test the Setup

1. Make a small content change in Prismic
2. Publish the change
3. Check GitHub Actions tab to see if the workflow triggered
4. Verify the changes appear on your live site

## 🔧 Alternative Setup Options

### Option A: Direct GitHub Webhook (Simpler)

Instead of the custom webhook handler, you can use GitHub's repository dispatch directly:

**Prismic Webhook URL**: `https://api.github.com/repos/YOUR_USERNAME/L-O-Africa-Institute/dispatches`

### Option B: Deploy Custom Webhook Handler

If you prefer more control, deploy the `webhook-handler.js` to a service like:
- Vercel
- Netlify Functions
- Railway
- Heroku

Then use that URL in your Prismic webhook.

### Option C: Migrate to Modern Hosting

Consider migrating to platforms with built-in webhook support:
- **Netlify**: Built-in Prismic integration
- **Vercel**: Automatic deployments
- **Gatsby Cloud**: Optimized for Gatsby sites

## 🚨 Troubleshooting

### Common Issues:

1. **Workflow not triggering**: Check GitHub token permissions
2. **FTP deployment fails**: Verify cPanel FTP credentials
3. **Build errors**: Check GitHub Actions logs
4. **Prismic webhook fails**: Verify webhook URL and headers

### Debug Steps:

1. Check GitHub Actions → Your repository → Actions tab
2. Look for workflow runs after Prismic updates
3. Review build logs for any errors
4. Test FTP credentials manually

## 📊 Monitoring

- **GitHub Actions**: Monitor workflow runs in the Actions tab
- **Prismic**: Check webhook logs in Settings → Webhooks
- **cPanel**: Monitor file changes in File Manager

## 🎯 Benefits

✅ **Automatic**: No manual building/uploading  
✅ **Fast**: 2-3 minute deployment time  
✅ **Reliable**: GitHub Actions infrastructure  
✅ **Trackable**: Full deployment history  
✅ **Secure**: Encrypted secrets management  

## 📞 Support

If you encounter issues:
1. Check the GitHub Actions logs
2. Verify all secrets are correctly set
3. Test the Prismic webhook manually
4. Ensure cPanel FTP access is working

---

*This setup will save you hours of manual deployment work! 🎉*
