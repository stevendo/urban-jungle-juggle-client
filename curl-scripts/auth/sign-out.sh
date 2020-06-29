#!/bin/bash

API="http://localhost:4741"
URL_PATH="/sign-out"

curl "${API}${URL_PATH}/" \
  --include \
  --request DELETE \
  --header "Authorization: Token token=${TOKEN}"

echo

# TOKEN=6271357d17b3a7177f43daab202bcc61 sh curl-scripts/auth/sign-out.sh
