from fastapi import FastAPI
import yfinance as yf

app = FastAPI()

@app.get("/stock/{ticker}")
def read_stock(ticker: str):
    data = yf.Ticker(ticker)
    return {"info": data.info}
