# 🌐 DNS Configuration Guide for GitHub Pages

This guide will help you configure your DNS A records at whois.com to point your domain `leoafricainstitute.org` to GitHub Pages.

## 📋 Overview

Your site is now deployed to both:
- **GitHub Pages**: `https://zurijabari.github.io/L-O-Africa-Institute/`
- **Custom Domain**: `https://leoafricainstitute.org` (after DNS configuration)

## 🔧 Step-by-Step DNS Configuration at whois.com

### Step 1: Log into whois.com

1. Go to [whois.com](https://www.whois.com)
2. Log in to your account
3. Navigate to your domain management dashboard
4. Select `leoafricainstitute.org`

### Step 2: Access DNS Management

1. Look for **DNS Management**, **DNS Settings**, or **Manage DNS** option
2. Click to access the DNS records editor

### Step 3: Configure A Records

You need to add **4 A records** that point to GitHub's IP addresses. Delete any existing A records for the root domain (@) first.

**Add these A records:**

| Type | Host/Name | Value/Points to | TTL |
|------|-----------|-----------------|-----|
| A | @ | `185.199.108.153` | 3600 (or Auto) |
| A | @ | `185.199.109.153` | 3600 (or Auto) |
| A | @ | `185.199.110.153` | 3600 (or Auto) |
| A | @ | `185.199.111.153` | 3600 (or Auto) |

**Notes:**
- `@` represents your root domain (leoafricainstitute.org)
- Some DNS providers use a blank field instead of `@`
- TTL (Time To Live) can be set to 3600 seconds (1 hour) or use the default

### Step 4: Configure CNAME Record for www (Optional but Recommended)

Add a CNAME record to redirect www subdomain:

| Type | Host/Name | Value/Points to | TTL |
|------|-----------|-----------------|-----|
| CNAME | www | `zurijabari.github.io` | 3600 (or Auto) |

### Step 5: Remove Conflicting Records

**Important:** Remove any existing records that might conflict:
- Old A records pointing to your previous hosting provider
- Old CNAME records for @ or www
- AAAA records (IPv6) if you're not using them

### Step 6: Save Changes

1. Click **Save** or **Update** to apply the DNS changes
2. DNS propagation can take **24-48 hours** but usually completes within **1-2 hours**

## 🔍 Verify DNS Configuration

### Check DNS Propagation

Use these tools to verify your DNS changes:

1. **DNS Checker**: https://dnschecker.org
   - Enter: `leoafricainstitute.org`
   - Select: `A` record type
   - Check if it shows GitHub's IPs globally

2. **Command Line** (Mac/Linux):
   ```bash
   dig leoafricainstitute.org +short
   ```
   Should return:
   ```
   185.199.108.153
   185.199.109.153
   185.199.110.153
   185.199.111.153
   ```

3. **nslookup** (Windows/Mac/Linux):
   ```bash
   nslookup leoafricainstitute.org
   ```

### Verify CNAME File

The CNAME file has been created at `/static/CNAME` with content:
```
leoafricainstitute.org
```

This file will be automatically copied to your build output and deployed to GitHub Pages.

## 🚀 Enable HTTPS on GitHub Pages

After DNS propagation completes:

1. Go to your GitHub repository: `https://github.com/ZuriJabari/L-O-Africa-Institute`
2. Navigate to **Settings** → **Pages**
3. Under **Custom domain**, enter: `leoafricainstitute.org`
4. Click **Save**
5. Wait a few minutes, then check the **Enforce HTTPS** checkbox
6. GitHub will automatically provision an SSL certificate from Let's Encrypt

## 📊 Expected Timeline

| Step | Time |
|------|------|
| DNS changes saved | Immediate |
| Initial DNS propagation | 15-30 minutes |
| Full global propagation | 1-24 hours |
| HTTPS certificate provisioning | 5-15 minutes after DNS propagation |

## 🔧 Troubleshooting

### Issue: DNS not propagating

**Solution:**
- Wait longer (up to 48 hours)
- Clear your browser cache
- Try accessing from a different network/device
- Use incognito/private browsing mode

### Issue: "Domain's DNS record could not be retrieved" on GitHub

**Solution:**
- Verify A records are correctly configured
- Wait for DNS propagation to complete
- Try removing and re-adding the custom domain in GitHub Pages settings

### Issue: HTTPS not available

**Solution:**
- Ensure DNS has fully propagated (check with dnschecker.org)
- Wait 15-30 minutes after DNS propagation
- Try unchecking and re-checking "Enforce HTTPS" in GitHub Pages settings
- Verify CNAME file exists in your repository's root after build

### Issue: Site shows 404 error

**Solution:**
- Check that the CNAME file is in the `static/` directory
- Rebuild and redeploy your site
- Verify the custom domain is correctly set in GitHub Pages settings

## 📝 DNS Configuration Examples

### Example 1: whois.com DNS Interface

```
DNS Records for leoafricainstitute.org

Type    Host    Value                   TTL
----    ----    -----                   ---
A       @       185.199.108.153         3600
A       @       185.199.109.153         3600
A       @       185.199.110.153         3600
A       @       185.199.111.153         3600
CNAME   www     zurijabari.github.io    3600
```

### Example 2: Alternative DNS Format

Some providers use different terminology:

```
Record Type: A
Host: @ (or blank)
Points to: 185.199.108.153
TTL: Automatic

Record Type: A
Host: @ (or blank)
Points to: 185.199.109.153
TTL: Automatic

Record Type: A
Host: @ (or blank)
Points to: 185.199.110.153
TTL: Automatic

Record Type: A
Host: @ (or blank)
Points to: 185.199.111.153
TTL: Automatic

Record Type: CNAME
Host: www
Points to: zurijabari.github.io
TTL: Automatic
```

## 🎯 Next Steps After DNS Configuration

1. **Wait for DNS Propagation** (1-24 hours)
2. **Configure Custom Domain in GitHub Pages** (see above)
3. **Enable HTTPS** (automatic after domain verification)
4. **Test Your Site**:
   - Visit `http://leoafricainstitute.org`
   - Visit `https://leoafricainstitute.org`
   - Visit `http://www.leoafricainstitute.org`
   - Visit `https://www.leoafricainstitute.org`
5. **Update any external links** to use your custom domain

## 📞 Support Resources

- **GitHub Pages Documentation**: https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site
- **whois.com Support**: Contact their support if you need help with DNS configuration
- **DNS Propagation Checker**: https://dnschecker.org

## ✅ Checklist

- [ ] Logged into whois.com
- [ ] Accessed DNS management for leoafricainstitute.org
- [ ] Added 4 A records pointing to GitHub's IPs
- [ ] Added CNAME record for www subdomain
- [ ] Removed conflicting old DNS records
- [ ] Saved DNS changes
- [ ] Verified DNS propagation with dnschecker.org
- [ ] Configured custom domain in GitHub Pages settings
- [ ] Enabled HTTPS enforcement
- [ ] Tested all domain variations (http/https, with/without www)
- [ ] Updated external links to use custom domain

---

**🎉 Once complete, your site will be live at `https://leoafricainstitute.org`!**
