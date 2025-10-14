# 📸 Visual DNS Configuration Guide for whois.com

This guide shows you exactly what your DNS records should look like at whois.com.

## 🎯 Final DNS Configuration

Your DNS records at whois.com should look like this:

```
┌─────────────────────────────────────────────────────────────────┐
│ DNS Records for: leoafricainstitute.org                        │
├─────────┬──────────┬─────────────────────────┬─────────────────┤
│ Type    │ Host     │ Value/Points To         │ TTL             │
├─────────┼──────────┼─────────────────────────┼─────────────────┤
│ A       │ @        │ 185.199.108.153         │ 3600 (1 hour)   │
│ A       │ @        │ 185.199.109.153         │ 3600 (1 hour)   │
│ A       │ @        │ 185.199.110.153         │ 3600 (1 hour)   │
│ A       │ @        │ 185.199.111.153         │ 3600 (1 hour)   │
│ CNAME   │ www      │ zurijabari.github.io    │ 3600 (1 hour)   │
└─────────┴──────────┴─────────────────────────┴─────────────────┘
```

## 📝 Step-by-Step Entry

### Record 1: A Record (GitHub Pages IP #1)
```
┌─────────────────────────────────┐
│ Add New DNS Record              │
├─────────────────────────────────┤
│ Type:     [A Record ▼]          │
│ Host:     [@] or [blank]        │
│ Value:    [185.199.108.153]     │
│ TTL:      [3600] or [Auto ▼]    │
│                                 │
│         [Save] [Cancel]         │
└─────────────────────────────────┘
```

### Record 2: A Record (GitHub Pages IP #2)
```
┌─────────────────────────────────┐
│ Add New DNS Record              │
├─────────────────────────────────┤
│ Type:     [A Record ▼]          │
│ Host:     [@] or [blank]        │
│ Value:    [185.199.109.153]     │
│ TTL:      [3600] or [Auto ▼]    │
│                                 │
│         [Save] [Cancel]         │
└─────────────────────────────────┘
```

### Record 3: A Record (GitHub Pages IP #3)
```
┌─────────────────────────────────┐
│ Add New DNS Record              │
├─────────────────────────────────┤
│ Type:     [A Record ▼]          │
│ Host:     [@] or [blank]        │
│ Value:    [185.199.110.153]     │
│ TTL:      [3600] or [Auto ▼]    │
│                                 │
│         [Save] [Cancel]         │
└─────────────────────────────────┘
```

### Record 4: A Record (GitHub Pages IP #4)
```
┌─────────────────────────────────┐
│ Add New DNS Record              │
├─────────────────────────────────┤
│ Type:     [A Record ▼]          │
│ Host:     [@] or [blank]        │
│ Value:    [185.199.111.153]     │
│ TTL:      [3600] or [Auto ▼]    │
│                                 │
│         [Save] [Cancel]         │
└─────────────────────────────────┘
```

### Record 5: CNAME Record (www subdomain)
```
┌─────────────────────────────────┐
│ Add New DNS Record              │
├─────────────────────────────────┤
│ Type:     [CNAME ▼]             │
│ Host:     [www]                 │
│ Value:    [zurijabari.github.io]│
│ TTL:      [3600] or [Auto ▼]    │
│                                 │
│         [Save] [Cancel]         │
└─────────────────────────────────┘
```

## ⚠️ Important Notes

### Host Field Variations

Different DNS providers use different terminology for the "Host" field:

| Provider Term | What to Enter |
|---------------|---------------|
| Host | `@` |
| Name | `@` |
| Record Name | `@` |
| (blank field) | Leave blank |
| Domain | `@` |

**For the root domain (leoafricainstitute.org)**: Use `@` or leave blank  
**For www subdomain**: Use `www`

### Value Field Variations

The "Value" field might be called:

- Points to
- Target
- Destination
- Address
- IP Address (for A records)
- Alias (for CNAME records)

## 🗑️ Records to Delete

Before adding the new records, **delete** any existing records that conflict:

### Delete These:
- ❌ Old A records pointing to your previous hosting provider
- ❌ Old CNAME records for `@` or root domain
- ❌ Any AAAA records (IPv6) unless you specifically need them

### Keep These:
- ✅ MX records (for email)
- ✅ TXT records (for domain verification, SPF, DKIM)
- ✅ NS records (nameserver records)

## ✅ Verification Checklist

After adding all records, verify:

- [ ] 4 A records added with all GitHub IPs
- [ ] 1 CNAME record added for www
- [ ] Old conflicting records removed
- [ ] All changes saved
- [ ] DNS propagation started

## 🔍 How to Verify

### Method 1: DNS Checker (Recommended)
1. Go to https://dnschecker.org
2. Enter: `leoafricainstitute.org`
3. Select: `A` record type
4. Click "Search"
5. Should show all 4 GitHub IPs globally

### Method 2: Command Line
```bash
# Check A records
dig leoafricainstitute.org +short

# Expected output:
185.199.108.153
185.199.109.153
185.199.110.153
185.199.111.153

# Check CNAME for www
dig www.leoafricainstitute.org +short

# Expected output:
zurijabari.github.io
```

## 📱 Mobile/Tablet Instructions

If configuring from mobile:

1. **Use Desktop Mode**: Switch your mobile browser to desktop mode
2. **Zoom In**: Zoom in on form fields for easier input
3. **Copy-Paste**: Copy the IP addresses from this guide to avoid typos
4. **Double-Check**: Verify each entry before saving

## 🆘 Common Mistakes to Avoid

### ❌ Wrong Host Value
```
Host: leoafricainstitute.org  ← WRONG
Host: @                       ← CORRECT
```

### ❌ Missing Records
```
Only 1 A record added  ← WRONG
All 4 A records added  ← CORRECT
```

### ❌ Typo in IP Address
```
185.199.108.153  ← CORRECT
185.199.108.153  ← WRONG (extra space)
185.199.108.153  ← WRONG (typo in number)
```

### ❌ Wrong CNAME Value
```
www.zurijabari.github.io  ← WRONG
zurijabari.github.io      ← CORRECT
```

## 📞 Need Help?

If you're stuck:

1. **Take a screenshot** of your DNS management page
2. **Compare** it with the examples in this guide
3. **Check** the DNS Configuration Guide for troubleshooting
4. **Contact** whois.com support if needed

## 🎯 Quick Copy-Paste Values

For easy copying:

**A Record IPs:**
```
185.199.108.153
185.199.109.153
185.199.110.153
185.199.111.153
```

**CNAME Value:**
```
zurijabari.github.io
```

---

**Next:** After saving all records, see `DNS_SETUP_SUMMARY.md` for next steps.
