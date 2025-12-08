#!/bin/bash

echo "Starting Gatsby build process..."

# Clean the cache and previous builds
echo "Cleaning Gatsby cache and public directory..."
gatsby clean

# Build the Gatsby project
echo "Building Gatsby site..."
gatsby build

# Check if build was successful
if [ $? -eq 0 ]; then
    echo "Gatsby build completed successfully"
    
    # Copy webhook and build PHP files to public directory
    echo "Copying webhook and build files..."
    cp webhook.php build.php public/
    
    # Create zip of the public directory (Gatsby's output)
    echo "Creating zip archive..."
    rm -f leo-website.zip
    cd public
    zip -r ../leo-website.zip * 2>/dev/null
    cd ..
    
    if [ $? -eq 0 ]; then
        echo "Zip file created successfully"
    else
        echo "Error: Failed to create zip file"
        exit 1
    fi
else
    echo "Error: Gatsby build failed"
    exit 1
fi