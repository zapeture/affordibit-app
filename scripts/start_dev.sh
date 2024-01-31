#!/bin/bash

source ./scripts/env_config.sh

PORT=${PORT:-3000}
next dev -p "$PORT"
