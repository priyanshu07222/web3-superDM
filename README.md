# Web3 Super DM

## 🚀 Overview
Web3 Super DM is a decentralized messaging platform built on the **Solana blockchain**, allowing users to send direct messages by paying a small amount of **SOL**. The recipient gets notified via **Email, WhatsApp, and Telegram** once a payment is received.

## 🌟 Features
- 💰 **Super DM Payment:** Users must pay SOL to send a DM.
- 🔔 **Instant Notifications:** Recipients get notified via email, WhatsApp, and Telegram.
- 🔗 **Web3 Integration:** Fully decentralized and trustless.
- 🔒 **Secure Messaging:** Messages are only delivered after payment confirmation.
- 🏦 **PostgreSQL Database:** Stores user information and transaction history.
- 🚀 **Fast and Scalable:** Built on Solana with efficient indexing.

## ⚡ Quick Start
### **1️⃣ Clone the repository**
```bash
git clone https://github.com/your-username/web3-super-dm.git
cd web3-super-dm
```

### **2️⃣ Install dependencies**
#### **Frontend**
```bash
cd frontend
npm install
```
#### **Backend**
```bash
cd backend
npm install
```

### **3️⃣ Setup Environment Variables**
- Create a `.env` file in both `backend/` and `frontend/`.
- Add your API keys (Solana RPC, Twilio, Nodemailer, Telegram Bot, etc.)

### **4️⃣ Run Backend Server**
```bash
cd backend
npm run dev
```

### **5️⃣ Run Frontend App**
```bash
cd frontend
npm run dev
```

### **6️⃣ Deploy Anchor Program**
```bash
cd programs/super-dm
anchor build
anchor deploy
```

## 📡 API Endpoints
| Method | Endpoint        | Description                                    |
| ------ | --------------- | ---------------------------------------------- |
| `POST` | `/api/pay`      | Process SOL payment                            |
| `POST` | `/api/notify`   | Send notifications (Email, WhatsApp, Telegram) |
| `GET`  | `/api/history`  | Fetch message & transaction history            |
| `POST` | `/api/register` | Register user info                             |

## 🎯 To-Do (Future Enhancements)
- [ ] **Add NFT integration** (Users must hold an NFT to DM premium users)
- [ ] **Analytics Dashboard** (View DM stats & revenue earned)
- [ ] **Token-based access** (Use SPL tokens for payment instead of SOL)

## 💡 Contribution
We welcome contributions! Feel free to fork this repo and submit a pull request.

## 📜 License
MIT License

---
🚀 **Built by Priyanshu Tiwari with ❤️ on Solana.**

