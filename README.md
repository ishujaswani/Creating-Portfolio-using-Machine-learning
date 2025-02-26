# 🎯 **WallStreetBets Tech Waves: Sentiment Meets Stocks** 📈📉

![Stock Market Sentiment](https://media.giphy.com/media/jMQ7plHMarEMqXrqtj/giphy.gif?cid=790b76110tja3c6hgmufvxg96jgwm7sfwnsdrt695l16ywdi&ep=v1_gifs_search&rid=giphy.gif&ct=g)

## 📌 **Project Overview**  
This project **analyzes sentiment** from discussions in **r/WallStreetBets** 💬 to understand its **impact on stock prices** of **top tech companies**. Using **NLP, sentiment analysis, and time series forecasting**, we identify trends 📊 that could help traders **make better investment decisions**!  

---

## ❓ **Research Problem**  
💡 *Does investor sentiment on WallStreetBets influence long-term stock prices?*  

---

## 🚀 **Tech Stocks Analyzed**  
| 💻 Company        | 📈 Ticker Symbol |
|------------------|----------------|
| 🍏 Apple        | **AAPL**       |
| 📘 Meta         | **META**       |
| 📦 Amazon       | **AMZN**       |
| 🏛 IBM          | **IBM**        |
| 🏢 Microsoft    | **MSFT**       |
| 🔍 Google      | **GOOG**       |
| 🖥 Dell         | **DELL**       |
| 🖨 HP           | **HPQ**        |
| 🚖 Uber        | **UBER**       |
| 🎨 Adobe       | **ADBE**       |

---

## 🛠 **Installation & Setup**  
### 🖥 **1. Clone the Repository**
```bash
git clone https://github.com/your-username/WallStreetBets-TechWaves.git
cd WallStreetBets-TechWaves

## 📦 Install Dependencies
```bash
pip install -r requirements.txt
```

## 🔑 Get API Keys (if required)
- **Reddit API** → [Register on Reddit](https://www.reddit.com/prefs/apps)  
- **Yahoo Finance API** → Install `yfinance`:
```bash
pip install yfinance
```

---

## 🗂 Dataset Sources
- **💬 Sentiment Data**: Scraped from r/WallStreetBets via `RedditExtractoR`
- **📈 Stock Price Data**: Obtained from `yfinance` & `quantmod`
- **🧠 NLP Lexicons**: AFFIN & JOCKER Sentiment Analysis  

---


## 📊 Results & Insights
✔ **Most discussions were neutral** (balanced buyer-seller influence).  
✔ **Sentiment showed some correlation** with stock price trends.  
✔ **ARIMA Model** was the **best predictor** for most stocks.  
✔ **Uber performed better** with the **Drift Model**.  

---

## 🔮 Future Recommendations
- Match **weekly sentiment scores** with closing stock prices 📆  
- Include **financial statements & macroeconomic indicators** 💰📊  
- Apply **data engineering techniques** for **real-time tracking** ⏳💡  

---

## 📁 Project Structure
```bash
📂 Project Repository
├── final_project.qmd   # Quarto document for analysis
├── Final Project Report.pdf  # Detailed project report
├── README.md   # This file 📖
├── LICENSE     # Licensing information 🔖
├── data/   # Folder containing scraped Reddit and stock data
├── scripts/
│   ├── sentiment_analysis.py  # Runs sentiment analysis
│   ├── stock_forecasting.py  # Runs stock price forecasting
│   ├── visualize_results.py  # Generates data visualizations
```

---

## ⚖ License
This project is licensed under the **MIT License**. See the **[LICENSE](LICENSE)** file for details.  

---

