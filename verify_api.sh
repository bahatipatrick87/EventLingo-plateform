#!/bin/bash

# Base URL
URL="http://localhost:3000/api"

echo "1. Registering User..."
REGISTER_RESPONSE=$(curl -s -X POST $URL/auth/register \
  -H "Content-Type: application/json" \
  -d '{"name":"Test User","email":"test@example.com","password":"password123"}')
echo $REGISTER_RESPONSE
echo ""

# Extract Token (simple grep hack for demo, normally use jq)
TOKEN=$(echo $REGISTER_RESPONSE | grep -o '"token":"[^"]*' | cut -d'"' -f4)

if [ -z "$TOKEN" ]; then
    echo "Login to get token (if register failed due to existing user)..."
    LOGIN_RESPONSE=$(curl -s -X POST $URL/auth/login \
      -H "Content-Type: application/json" \
      -d '{"email":"test@example.com","password":"password123"}')
    TOKEN=$(echo $LOGIN_RESPONSE | grep -o '"token":"[^"]*' | cut -d'"' -f4)
    echo $LOGIN_RESPONSE
    echo ""
fi

echo "Token: $TOKEN"

if [ -n "$TOKEN" ]; then
    echo "2. Creating Event..."
    curl -X POST $URL/events \
      -H "Content-Type: application/json" \
      -H "Authorization: Bearer $TOKEN" \
      -d '{"title":"Launch Party","description":"Celebrating the new backend","startDate":"2023-12-25T18:00:00Z","location":"Virtual"}'
    echo ""
    
    echo "3. Fetching Events..."
    curl -s $URL/events | grep "Launch Party"
    echo ""
else
    echo "Failed to get token, skipping authenticated requests."
fi
