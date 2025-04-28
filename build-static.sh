#!/bin/bash
cd mobius-clone
bun run build
cd out
zip -rFS ../../output.zip .
