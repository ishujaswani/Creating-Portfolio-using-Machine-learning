# 🎯 **WallStreetBets Tech Waves: Sentiment Meets Stocks** 📈📉

[![Live Demo](https://img.shields.io/badge/Live-Demo-blue?style=for-the-badge&logo=github)](https://github.com/ishujaswani/Creating-Portfolio-using-Machine-learning)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge)](https://opensource.org/licenses/MIT)
[![Made with R](https://img.shields.io/badge/Made%20with-R-276DC3?style=for-the-badge&logo=r)](https://www.r-project.org/)

![Stock Market Sentiment](https://media.giphy.com/media/jMQ7plHMarEMqXrqtj/giphy.gif?cid=790b76110tja3c6hgmufvxg96jgwm7sfwnsdrt695l16ywdi&ep=v1_gifs_search&rid=giphy.gif&ct=g)

## 📌 **Project Overview**  
This project **analyzes sentiment** from discussions in **r/WallStreetBets** 💬 to understand its **impact on stock prices** of **top tech companies**. Using **NLP, sentiment analysis, and time series forecasting**, we identify trends 📊 that could help traders **make better investment decisions**!  

🌐 **[View Code Demo](https://github.com/ishujaswani/Creating-Portfolio-using-Machine-learning)**

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
git clone https://github.com/ishujaswani/Creating-Portfolio-using-Machine-learning.git
cd WallStreetBets-TechWaves
```


### 🔑 **2. Get API Keys**
**Reddit API** → [Register on Reddit](https://www.reddit.com/prefs/apps)  
**Yahoo Finance API** → Install `yfinance`:
```bash
pip install yfinance
```

---

## 🗂 **Dataset Sources**
💬 **Sentiment Data**: Scraped from r/WallStreetBets via `RedditExtractoR`  
📈 **Stock Price Data**: Obtained from `yfinance` & `quantmod`  
🧠 **NLP Lexicons**: AFFIN & JOCKER Sentiment Analysis with 45+ custom WSB terms

---

## 📊 **Results & Insights**
✅ **Most discussions were neutral** (balanced buyer-seller influence)  
✅ **Sentiment showed correlation** with stock price trends  
✅ **ARIMA Model** was the **best predictor** for most stocks  
✅ **Uber performed better** with the **Drift Model**  

---

## 🔮 **Future Recommendations**
Match **weekly sentiment scores** with closing stock prices 📆  
Include **financial statements & macroeconomic indicators** 💰📊  
Apply **data engineering techniques** for **real-time tracking** ⏳💡  

---

## 📁 **Project Structure**
```bash
📂 WallStreetBets-TechWaves/
├── index.html              # Landing page
├── styles.css              # Styling for landing page
├── script.js               # Interactive elements
├── final_project.qmd       # Quarto document for analysis
├── Final Project Report.pdf # Detailed project report
├── README.md              # This file 📖
├── LICENSE                # MIT License 🔖

---


## 🛠 **Tech Stack**
![R](https://img.shields.io/badge/R-276DC3?style=flat&logo=r&logoColor=white)
![Python](https://img.shields.io/badge/Python-3776AB?style=flat&logo=python&logoColor=white)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black)

**Analysis Libraries:**
RedditExtractoR | yfinance | tidytext | forecast | ggplot2 | ARIMA

---
 

## 📄 **License**
This project is licensed under the **MIT License**. See the [LICENSE](LICENSE) file for details.

---

## 🌟 **Star this repo if you found it helpful!**

[![GitHub stars](https://img.shields.io/github/stars/your-username/WallStreetBets-TechWaves?style=social)](https://github.com/your-username/WallStreetBets-TechWaves/stargazers)