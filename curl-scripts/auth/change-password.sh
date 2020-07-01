#!/bin/bash

API="http://localhost:4741"
URL_PATH="/change-password"

curl "${API}${URL_PATH}/" \
  --include \
  --request PATCH \
    --header "Authorization: Bearer ${TOKEN}"
  --header "Content-Type: application/json" \
  --data '{
    "passwords": {
      "old": "'"${OLDPW}"'",
      "new": "'"${NEWPW}"'"
    }
  }'

echo

# TOKEN=6271357d17b3a7177f43daab202bcc61 OLDPW="pw" NEWPW="PW" sh curl-scripts/auth/change-password.sh
