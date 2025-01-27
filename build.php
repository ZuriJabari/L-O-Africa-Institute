<?php

function runBuild() {
    try {
        // Log start of build process
        error_log("Starting build process at " . date('Y-m-d H:i:s'));

        // Clean up command with npx
        $cleanCommand = "npx gatsby clean";
        exec($cleanCommand . " 2>&1", $cleanOutput, $cleanResult);
        
        if ($cleanResult !== 0) {
            error_log("Clean failed: " . implode("\n", $cleanOutput));
            return false;
        }

        // Build command with npx and verbose flag
        $buildCommand = "npx gatsby build --verbose";
        exec($buildCommand . " 2>&1", $buildOutput, $buildResult);

        // Log the output
        error_log("Build output: " . implode("\n", $buildOutput));

        if ($buildResult !== 0) {
            error_log("Build failed with status: " . $buildResult);
            return false;
        }

        return true;
    } catch (Exception $e) {
        error_log("Build error: " . $e->getMessage());
        return false;
    }
}
