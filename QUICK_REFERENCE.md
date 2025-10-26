# Only Green - Quick Reference Card

## 🚀 30-Second Setup

```bash
# 1. Install dependencies
cd frontend && yarn install
cd ../backend && pip install -r requirements.txt

# 2. Start servers
# Terminal 1: Backend
cd backend && python -m uvicorn server:app --reload --host 0.0.0.0 --port 8001

# Terminal 2: Frontend
cd frontend && yarn start
```

**Open**: http://localhost:3000

---

## 📝 Essential Commands

### Frontend
```bash
yarn start              # Start dev server
yarn build             # Build for production
yarn add package-name  # Install package
```

### Backend
```bash
uvicorn server:app --reload           # Start server
pip install package-name              # Install package
pip freeze > requirements.txt         # Update dependencies
```

---

## 🔧 Configuration Files

### `frontend/.env`
```
REACT_APP_BACKEND_URL=http://localhost:8001
```

### `backend/.env`
```
MONGO_URL=mongodb://localhost:27017/onlygreen
DB_NAME=onlygreen
PORT=8001
```

---

## 📂 Key Files to Edit

### Products
📄 `frontend/src/mock.js` - Add/edit products

### Pages
📄 `frontend/src/pages/Home.js` - Homepage
📄 `frontend/src/pages/Shop.js` - Shop page
📄 `frontend/src/pages/Cart.js` - Cart page

### Styling
📄 `frontend/src/index.css` - Global styles
📄 `frontend/tailwind.config.js` - Theme colors

### Backend
📄 `backend/server.py` - API routes

---

## 🎨 Color Codes

```
Forest Green:  #166534
Light Green:   #15803d  
Beige:         #fef3c7
Stone:         #78716c
Dark Green:    #14532d
```

---

## 🌐 Deploy FREE (5 minutes)

### 1. MongoDB Atlas (Database)
- Sign up: https://www.mongodb.com/cloud/atlas/register
- Create free cluster (M0)
- Get connection string

### 2. Railway (Backend)
- Sign up: https://railway.app
- Connect GitHub
- Add MONGO_URL variable
- Deploy!

### 3. Vercel (Frontend)
- Sign up: https://vercel.com
- Connect GitHub
- Add REACT_APP_BACKEND_URL variable
- Deploy!

**Total: $0/month** 🎉

---

## 🐛 Quick Fixes

### Port in use?
```bash
kill -9 $(lsof -ti:3000)  # Kill frontend
kill -9 $(lsof -ti:8001)  # Kill backend
```

### Frontend not loading?
```bash
cd frontend
rm -rf node_modules
yarn install
yarn start
```

### Can't connect to backend?
- Check backend is running on port 8001
- Verify `REACT_APP_BACKEND_URL` in `.env`
- Restart both servers

---

## 📦 File Structure

```
only-green/
├── frontend/
│   ├── src/
│   │   ├── pages/        (Edit pages here)
│   │   ├── components/   (UI components)
│   │   └── mock.js       (Product data)
│   └── .env             (Frontend config)
└── backend/
    ├── server.py        (API routes)
    └── .env            (Backend config)
```

---

## 🎯 Next Steps

1. ✅ Setup local environment
2. 🎨 Customize colors/products
3. 🧪 Test all features
4. 🚀 Deploy to Vercel + Railway
5. 📱 Share with friends!

---

## 📚 Full Guides

- 📖 **Setup**: `LOCAL_SETUP_GUIDE.md`
- 🚀 **Deploy**: `DEPLOYMENT.md`
- 💾 **Download**: `DOWNLOAD_INSTRUCTIONS.md`
- 📘 **Complete**: `README.md`

---

**Need Help?** Check the full guides above!

*Made with 💚 for sustainability*
