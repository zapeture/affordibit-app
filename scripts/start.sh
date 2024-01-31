#!/bin/bash

source ./scripts/env_config.sh

PORT=${PORT:-3000}
next start -p "$PORT"
