# How to Download Only Green Project

## From Emergent Platform

Since you're currently on the Emergent platform, here's how to get all your files:

### Method 1: Download Entire Project

You can download the entire project as a ZIP file:

1. **Ask your Emergent agent** to create a downloadable package
2. Or use the platform's download feature if available

### Method 2: Copy Files Manually

If you need to copy individual files:

#### Required Files & Folders:

```
your-project/
├── frontend/
│   ├── public/
│   │   └── index.html
│   ├── src/
│   │   ├── components/
│   │   │   ├── ui/              (all shadcn components)
│   │   │   ├── Navbar.js
│   │   │   └── Footer.js
│   │   ├── context/
│   │   │   └── CartContext.js
│   │   ├── hooks/
│   │   │   └── use-toast.js
│   │   ├── pages/
│   │   │   ├── Home.js
│   │   │   ├── Shop.js
│   │   │   ├── Cart.js
│   │   │   ├── Checkout.js
│   │   │   ├── About.js
│   │   │   └── Contact.js
│   │   ├── App.js
│   │   ├── App.css
│   │   ├── index.js
│   │   ├── index.css
│   │   └── mock.js
│   ├── .env
│   ├── package.json
│   ├── craco.config.js
│   ├── tailwind.config.js
│   └── eslint.config.mjs
├── backend/
│   ├── server.py
│   ├── requirements.txt
│   └── .env
├── LOCAL_SETUP_GUIDE.md
├── DEPLOYMENT.md
└── README.md
```

### Method 3: Using Git (Recommended)

If Emergent supports Git integration:

1. **Initialize Git Repository**:
   ```bash
   git init
   git add .
   git commit -m "Initial commit - Only Green eCommerce"
   ```

2. **Push to GitHub**:
   - Create a new repository on GitHub
   - Follow GitHub's instructions to push

3. **Clone on Your Computer**:
   ```bash
   git clone https://github.com/yourusername/only-green.git
   cd only-green
   ```

---

## Setting Up on Your Computer

Once you have the files:

### 1. Create Project Structure

Create a folder called `only-green` and organize files as shown above.

### 2. Verify Required Files

Make sure you have:
- ✅ All frontend files
- ✅ All backend files  
- ✅ `package.json` with all dependencies
- ✅ `requirements.txt` with all Python packages
- ✅ `.env` files (you may need to create these)

### 3. Follow Setup Guide

Refer to `LOCAL_SETUP_GUIDE.md` for complete setup instructions.

---

## Environment Files (.env)

You'll need to create these files:

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

## Quick Start After Download

```bash
# 1. Install Frontend Dependencies
cd frontend
yarn install

# 2. Install Backend Dependencies
cd ../backend
pip install -r requirements.txt

# 3. Start Backend (Terminal 1)
python -m uvicorn server:app --reload --host 0.0.0.0 --port 8001

# 4. Start Frontend (Terminal 2)
cd ../frontend
yarn start
```

Open http://localhost:3000 in your browser!

---

## Need the Files?

If you're having trouble accessing files, you can:

1. **Ask Emergent Support** for export options
2. **Use Emergent's Download Feature** if available
3. **Copy files manually** using the file viewer

---

For detailed setup instructions, see `LOCAL_SETUP_GUIDE.md`

For deployment instructions, see `DEPLOYMENT.md`