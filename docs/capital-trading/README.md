# TradingView Alerts Trading Bot

A Node.js-based trading bot that processes TradingView alerts and executes trades automatically using the Capital.com API.

## Features

- Real-time TradingView alert processing
- Automated trading position management
- Session management with auto-renewal
- Clustered server architecture for high availability
- Comprehensive error handling and logging
- Market data integration

## Services

### Alert Service
- Processes incoming TradingView alerts
- Parses trading signals and converts them to trading positions
- Supports multiple trading pairs (XAUUSD, CADJPY)

### Position Service
- Creates and manages trading positions
- Handles stop-loss and take-profit calculations
- Integrates with Capital.com's position management API

### Session Service
- Manages authentication with Capital.com API
- Handles security tokens and session maintenance
- Automatic session renewal every 10 minutes

### Market Service
- Fetches real-time market data
- Provides instrument details and pricing information

### Order Service
- Creates and manages trading orders
- Supports different order types and parameters

## Technical Stack

### Core Dependencies
- Express.js - Web server framework
- TypeScript - Programming language
- Node-cron - Task scheduling
- Winston - Logging framework
- Axios - HTTP client
- CORS - Cross-origin resource sharing

### Development Tools
- Nodemon - Development server
- ts-node - TypeScript execution
- Various TypeScript type definitions

## Setup

1. Clone the repository
2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file with the following variables:
```env
PORT=8080
X_CAP_DEMO_URL=
X_CAP_API_KEY=
X_CAP_IDENTIFIER=
X_CAP_PASSWORD=
```

4. Run the application:

Development:
```bash
npm run dev
```

Production:
```bash
npm run start
```

## API Endpoints

### Alerts
- `POST /api/alerts` - Receive TradingView alerts

### Positions
- `POST /api/positions` - Create new trading positions

### Orders
- `POST /api/orders` - Create new trading orders

## Logging

The application uses Winston for logging with three main log levels:
- Error logs: `logs/error.log`
- Activity logs: `logs/activities.log`
- Critical logs: `logs/critical.log`

## Architecture

The application runs in a clustered mode for better performance and reliability. It automatically spawns worker processes based on available CPU cores and includes automatic worker recovery in case of failures.

## License

ISC

## Author

**Nishimwe Prince**

- LinkedIn: https://linkedin.com/in/nishimweprince
- GitHub: https://github.com/nishimweprince
- Email: princeelysee@gmail.com
