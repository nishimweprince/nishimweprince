# Trading Strategies Collection

A collection of PineScript trading strategies for TradingView, focusing on technical analysis and automated trading.

## Strategies

### Mxwll Suite Strategy

A comprehensive technical analysis suite that combines Smart Money Concepts (SMC) with automated trading based on Areas of Interest (AOI).

#### Key Features
- Smart Money Concepts (SMC) analysis
  - Internal and external market structures
  - Break of Structure (BoS) and Change of Character (CHoCH) detection
  - Order block identification
- Areas of Interest (AOI) based trading
  - Automatically identifies and tracks significant price zones
  - Generates trade signals on AOI breakouts
  - Includes take profit and stop loss management
- Additional Analysis Tools
  - Fair Value Gaps (FVG) detection
  - Session analysis (NY, London, Asia)
  - Volume analysis with activity ratings
  - Fibonacci levels
  - Previous day and 4-hour high/low levels

#### Trading Logic
The strategy enters positions based on price movements relative to Areas of Interest:
- Long entries when price breaks above upper AOI
- Short entries when price breaks below lower AOI
- Includes configurable take profit and stop loss levels

#### Configuration
- Take Profit: Configurable percentage for profit targets
- Stop Loss: Configurable percentage for risk management
- Visual Settings: Customizable colors and display options for all components

#### Requirements
- TradingView Pro account or higher
- Compatible with all timeframes
- Best suited for liquid markets

---

## Contributing
Feel free to submit issues, fork the repository, and create pull requests for any improvements.

## License
This project is licensed under the terms of the Mozilla Public License 2.0. 