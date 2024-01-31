#!/bin/bash

# Load environment variables
load_env() {
  if [ -f "$1" ]; then
    echo "Loading environment variables from $1"
    while IFS= read -r line; do
      if [[ $line =~ ^[a-zA-Z_][a-zA-Z0-9_]*= ]]; then
        export "$line"
      fi
    done < <(grep -v '^#' "$1")
  fi
}

load_env ".env.local"
load_env ".env.test"
load_env ".env"
