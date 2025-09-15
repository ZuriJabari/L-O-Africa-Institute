/**
 * Webhook Handler for Prismic Content Updates
 * This creates a simple webhook endpoint that can trigger GitHub Actions
 */

const express = require('express');
const crypto = require('crypto');
const { Octokit } = require('@octokit/rest');

const app = express();
app.use(express.json());

// Configuration
const GITHUB_TOKEN = process.env.GITHUB_TOKEN;
const GITHUB_OWNER = process.env.GITHUB_OWNER || 'your-github-username';
const GITHUB_REPO = process.env.GITHUB_REPO || 'L-O-Africa-Institute';
const PRISMIC_SECRET = process.env.PRISMIC_SECRET;
const PORT = process.env.PORT || 3000;

const octokit = new Octokit({
  auth: GITHUB_TOKEN,
});

// Verify Prismic webhook signature
function verifyPrismicSignature(payload, signature, secret) {
  if (!secret || !signature) return true; // Skip verification if no secret set
  
  const expectedSignature = crypto
    .createHmac('sha256', secret)
    .update(payload)
    .digest('hex');
    
  return crypto.timingSafeEqual(
    Buffer.from(signature, 'hex'),
    Buffer.from(expectedSignature, 'hex')
  );
}

// Webhook endpoint for Prismic
app.post('/webhook/prismic', async (req, res) => {
  try {
    const signature = req.headers['x-prismic-signature'];
    const payload = JSON.stringify(req.body);
    
    // Verify webhook signature if secret is configured
    if (PRISMIC_SECRET && !verifyPrismicSignature(payload, signature, PRISMIC_SECRET)) {
      console.log('Invalid webhook signature');
      return res.status(401).json({ error: 'Invalid signature' });
    }
    
    console.log('Prismic webhook received:', {
      type: req.body.type,
      domain: req.body.domain,
      apiUrl: req.body.apiUrl,
      timestamp: new Date().toISOString()
    });
    
    // Trigger GitHub Actions workflow
    await octokit.rest.repos.createDispatchEvent({
      owner: GITHUB_OWNER,
      repo: GITHUB_REPO,
      event_type: 'prismic-content-update',
      client_payload: {
        repository: req.body.domain,
        type: req.body.type,
        apiUrl: req.body.apiUrl,
        timestamp: new Date().toISOString()
      }
    });
    
    console.log('GitHub Actions workflow triggered successfully');
    res.status(200).json({ 
      message: 'Webhook processed successfully',
      triggered: 'deployment-workflow'
    });
    
  } catch (error) {
    console.error('Webhook processing error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Health check endpoint
app.get('/health', (req, res) => {
  res.status(200).json({ 
    status: 'healthy',
    timestamp: new Date().toISOString()
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`Webhook handler running on port ${PORT}`);
  console.log(`Prismic webhook URL: http://your-domain.com/webhook/prismic`);
});

module.exports = app;
