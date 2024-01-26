#!/bin/bash

# Load environment variables
load_env() {
    if [ -f $1 ]; then
        echo "Loading environment variables from $1"
        export $(grep -v '^#' $1 | xargs)
    fi
}

load_env ".env*"
