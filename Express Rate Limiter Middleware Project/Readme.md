# Rate Limiter Middleware

Simple Express.js server with rate limiting middleware that restricts users to 5 requests per second.

## What it does

- Limits each user to 5 requests per second
- Blocks users with 404 status if they exceed the limit
- Identifies users by `user-id` header
- Resets the counter every second

## How to run

```bash
npm install express
node server.js
```

Server runs on port 3000.

## API Endpoints

- `GET /user` - Returns user data
- `POST /user` - Creates user

## Rate Limiting

Send requests with `user-id` header:

```bash
curl -H "user-id: user123" http://localhost:3000/user
```

- First 5 requests per second: ✅ Success
- 6th+ requests in same second: ❌ 404 error

Counter resets every second automatically.

## Example

```bash
# These work (within limit)
curl -H "user-id: alice" http://localhost:3000/user
curl -H "user-id: alice" http://localhost:3000/user
curl -H "user-id: alice" http://localhost:3000/user
curl -H "user-id: alice" http://localhost:3000/user
curl -H "user-id: alice" http://localhost:3000/user

# This gets blocked
curl -H "user-id: alice" http://localhost:3000/user
# Response: 404 "Request Above Limit , Wait for some time"
```

Wait 1 second and the counter resets for each user.

## Readme File is AI Generated as I was feeling Lazy writing it -- Developer Monkey Arpit