<?php
// Set log file path
$logFile = dirname(__FILE__) . '/webhook_errors.log';

// Check if log file exists and is writable
if (!file_exists($logFile)) {
    touch($logFile);
    chmod($logFile, 0666);
}

// Enable error logging
error_reporting(E_ALL);
ini_set('display_errors', 1);
ini_set('log_errors', 1);
ini_set('error_log', $logFile);

// Test logging
file_put_contents($logFile, "=== Webhook Test Log at " . date('Y-m-d H:i:s') . " ===\n", FILE_APPEND);

$secret = '73d3c4665b5c8f47c7cdd09d2890970893b6ae2df65a8257232f79fb8195e743'; // Set this to a secure random string

// Add logging
error_log("=== Webhook Request at " . date('Y-m-d H:i:s') . " ===");
error_log("Headers: " . print_r(getallheaders(), true));

// Log raw request data
$raw_post = file_get_contents('php://input');
error_log("Raw POST data: " . $raw_post);

// Add detailed header logging
$headers = getallheaders();
error_log("Detailed headers received:");
foreach ($headers as $header => $value) {
    error_log("$header: $value");
}

// Enhanced request logging
$requestData = [
    'Method' => $_SERVER['REQUEST_METHOD'],
    'URI' => $_SERVER['REQUEST_URI'],
    'Headers' => getallheaders(),
    'POST Data' => $_POST,
    'Raw POST' => $raw_post
];
file_put_contents($logFile, print_r($requestData, true) . "\n", FILE_APPEND);

// First check if it's a POST request
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo "Method not allowed. Only POST requests are accepted.";
    error_log("Error: Received " . $_SERVER['REQUEST_METHOD'] . " request instead of POST");
    exit;
}

// Check for header in multiple formats (Prismic can send headers in different ways)
$headers = getallheaders();
$webhookHeader = isset($_SERVER['HTTP_X_PRISMIC_WEBHOOK']) 
    ? $_SERVER['HTTP_X_PRISMIC_WEBHOOK'] 
    : (isset($headers['X-Prismic-Webhook']) 
        ? $headers['X-Prismic-Webhook'] 
        : (isset($headers['x-prismic-webhook']) 
            ? $headers['x-prismic-webhook'] 
            : null));

// Log webhook authentication attempt
error_log("Webhook header value: " . ($webhookHeader ?? 'null'));
error_log("Expected secret: " . $secret);

if ($webhookHeader !== null) {
    if ($webhookHeader === $secret) {
        error_log("Secret verification successful");
        require_once('build.php');
        $buildResult = runBuild();
        if ($buildResult) {
            error_log("Build completed successfully");
            echo "Build triggered successfully";
        } else {
            http_response_code(500);
            error_log("Build process failed");
            echo "Build process failed";
        }
    } else {
        http_response_code(403);
        echo "Invalid secret key";
        error_log("Error: Invalid secret key received");
    }
} else {
    http_response_code(400);
    echo "Missing webhook header";
    error_log("Error: Missing X-Prismic-Webhook header");
}
?>
