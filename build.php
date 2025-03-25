<?php

function runBuild() {
    try {
        // Log start of build process
        error_log("Starting build process at " . date('Y-m-d H:i:s'));

        // Set build flags for incremental builds
        $buildCommand = "GATSBY_EXPERIMENTAL_PAGE_BUILD_ON_DATA_CHANGES=true npx gatsby build --log-pages";
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
