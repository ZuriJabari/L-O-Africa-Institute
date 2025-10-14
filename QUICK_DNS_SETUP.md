# ⚡ Quick DNS Setup Reference

## 🎯 What You Need to Do at whois.com

### 1. Add These 4 A Records

Point your domain to GitHub Pages by adding these A records:

```
Type: A    Host: @    Value: 185.199.108.153
Type: A    Host: @    Value: 185.199.109.153
Type: A    Host: @    Value: 185.199.110.153
Type: A    Host: @    Value: 185.199.111.153
```

### 2. Add This CNAME Record (Optional)

For www subdomain support:

```
Type: CNAME    Host: www    Value: zurijabari.github.io
```

### 3. Remove Old Records

Delete any existing A or CNAME records that point to your old hosting provider.

---

## ⏱️ Wait Time

- **Minimum**: 15-30 minutes
- **Maximum**: 24-48 hours
- **Typical**: 1-2 hours

---

## ✅ Verify It's Working

Visit: https://dnschecker.org

Enter: `leoafricainstitute.org`

Should show GitHub's IPs: `185.199.108.153`, etc.

---

## 🔐 Enable HTTPS (After DNS Propagates)

1. Go to: https://github.com/ZuriJabari/L-O-Africa-Institute/settings/pages
2. Enter custom domain: `leoafricainstitute.org`
3. Click Save
4. Wait 5-15 minutes
5. Check "Enforce HTTPS"

---

## 📖 Full Guide

See **[DNS_CONFIGURATION_GUIDE.md](./DNS_CONFIGURATION_GUIDE.md)** for detailed instructions and troubleshooting.
