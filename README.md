# AlphaSwing Frontend (`alpha-swing-frontend`)

High-density **TradingView Screener 2.0 / Deepvue / Koyfin-style** Institutional Swing Screener & Portfolio Risk Terminal UI for Indian Equities (**NSE & BSE**).

> **Backend Repository**: Connects to [`alpha-swing-backend`](https://github.com/isacpkoshy/alpha-swing-backend) (`http://127.0.0.1:8000/api/v1`) and also includes a built-in offline fallback snapshot so the UI works standalone at any time.

---

## Features

- **Interactive HTML5 Candlestick + Volume Chart** with `15m` / `1D` / `1W` multi-timeframe toggles, `20-EMA` & `50-SMA` overlays, and shaded Long Position Risk/Reward boxes (`Entry Pivot`, `ATR Stop-Loss`, `Targets 1/2/3`).
- **Sortable 12-Column Screener Data Table** with strategy preset pills (*VCP Tight Base*, *Stage-2 Pocket Pivot*, *EPS Gap 52W High*), dynamic **ATR Stop Multiplier** (`1.2x` / `1.5x` / `2.0x`), and **8-Thread Live NSE Sync**.
- **Docked Right Inspector**:
  - **AI Research & Concall Note**: Displays Gemini 3.8 Flash earnings concall catalysts, red flags, and thesis invalidation triggers.
  - **Position Sizer & Risk Ticket**: Computes exact share quantity and rupee risk from account capital and max risk `%`.
- **Portfolio Risk & Macro Stress Matrix**:
  - Live holding entry, **Zero-Cost Broker CSV Import** (Zerodha Console / Angel One / Groww), and **What-If Macro Stress Simulator** (*Nifty -5%*, *Brent Crude +15%*, *RBI +50 bps*).

---

## Quickstart (Port `3000`)

```powershell
# Start the Frontend Terminal Server on http://127.0.0.1:3000
npm run dev
```

Or open `index.html` directly in any modern browser.
