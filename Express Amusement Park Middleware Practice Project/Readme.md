# Express Amusement Park Middleware Practice Project

A simple Express.js application that demonstrates middleware functionality by simulating an amusement park with age restrictions for rides.

## Features

- Age verification middleware
- Two ride endpoints with age restrictions
- Minimum age requirement of 15 years

## Installation

1. Clone or download this project
2. Navigate to the project directory:
   ```bash
   cd "Express Amusement Park Middleware Practice Project"
   ```
3. Install Express.js:
   ```bash
   npm install express
   ```
4. Run the application:
   ```bash
   node app.js
   ```

The server will start on port 3000.

## Usage

The application requires an `age` query parameter for all requests. Users must be 15 or older to access the rides.

### Endpoints

- **GET `/ride1`** - Access to Ride 1
- **GET `/ride2`** - Access to Ride 2

### Examples

**Allowed (age 15 or above):**
```
http://localhost:3000/ride1?age=16
http://localhost:3000/ride2?age=20
```

**Blocked (age below 15):**
```
http://localhost:3000/ride1?age=12
http://localhost:3000/ride2?age=10
```

## Responses

- **Success (age ≥ 15):** "You Can Enjoy Ride 1" or "You Can Enjoy Ride 2" 
- **Blocked (age < 15):** "You Are Not Of Age Yet , Sooooooooooooooooooooooooooooooorrrrrrrrrrrrrry"

## Middleware

The application uses a global middleware function that checks the age parameter before allowing access to any ride endpoint.