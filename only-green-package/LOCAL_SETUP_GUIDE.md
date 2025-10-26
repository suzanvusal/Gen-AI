# Only Green - Local Setup Guide

This guide will help you run the Only Green eCommerce website on your local computer.

## Prerequisites

Before you begin, make sure you have the following installed on your computer:

1. **Node.js** (v14 or higher) - [Download here](https://nodejs.org/)
2. **Yarn** - Install after Node.js: `npm install -g yarn`
3. **Python** (v3.8 or higher) - [Download here](https://www.python.org/downloads/)
4. **MongoDB** - Choose one option:
   - Local: [Download MongoDB Community](https://www.mongodb.com/try/download/community)
   - Cloud: [Free MongoDB Atlas](https://www.mongodb.com/cloud/atlas/register) (Recommended for easy setup)

## Step 1: Download the Project

1. Download the entire project folder to your computer
2. Extract the files if compressed
3. Open a terminal/command prompt

## Step 2: Setup MongoDB

### Option A: Using MongoDB Atlas (Free Cloud - Recommended)

1. Go to [MongoDB Atlas](https://www.mongodb.com/cloud/atlas/register)
2. Create a free account
3. Create a new cluster (Free tier)
4. Click "Connect" → "Connect your application"
5. Copy the connection string (looks like: `mongodb+srv://username:password@cluster.mongodb.net/`)
6. Replace `<password>` with your actual password

### Option B: Using Local MongoDB

1. Install MongoDB Community Edition
2. Start MongoDB service:
   - **Windows**: MongoDB should start automatically
   - **Mac**: `brew services start mongodb-community`
   - **Linux**: `sudo systemctl start mongod`
3. Your connection string will be: `mongodb://localhost:27017/onlygreen`

## Step 3: Configure Backend

1. Navigate to the backend folder:
   ```bash
   cd backend
   ```

2. Create a `.env` file (if not exists) with:
   ```
   MONGO_URL=mongodb://localhost:27017/onlygreen
   DB_NAME=onlygreen
   PORT=8001
   ```
   
   **Note**: Replace `MONGO_URL` with your MongoDB Atlas connection string if using cloud option.

3. Install Python dependencies:
   ```bash
   pip install -r requirements.txt
   ```

## Step 4: Configure Frontend

1. Navigate to the frontend folder:
   ```bash
   cd ../frontend
   ```

2. Create a `.env` file (if not exists) with:
   ```
   REACT_APP_BACKEND_URL=http://localhost:8001
   ```

3. Install Node.js dependencies:
   ```bash
   yarn install
   ```

## Step 5: Start the Application

You need to run both backend and frontend servers.

### Start Backend (Terminal 1)

```bash
cd backend
python -m uvicorn server:app --reload --host 0.0.0.0 --port 8001
```

You should see:
```
INFO:     Uvicorn running on http://0.0.0.0:8001
```

### Start Frontend (Terminal 2)

Open a **new terminal window**:

```bash
cd frontend
yarn start
```

You should see:
```
Compiled successfully!
You can now view frontend in the browser.
Local: http://localhost:3000
```

## Step 6: Access the Website

Open your browser and go to:
```
http://localhost:3000
```

You should see the Only Green homepage!

## Making Changes

### Frontend Changes (React)

- **Pages**: Edit files in `frontend/src/pages/`
- **Components**: Edit files in `frontend/src/components/`
- **Styles**: Modify `frontend/src/index.css` or component styles
- **Products**: Edit `frontend/src/mock.js` to change product data

Changes will auto-reload in the browser!

### Backend Changes (Python/FastAPI)

- **API Routes**: Edit `backend/server.py`
- **Models**: Add new models in `backend/server.py`

Restart the backend server after making changes.

## Common Issues & Solutions

### Issue: "Port already in use"
**Solution**: Close the application using that port or change the port in `.env` files

### Issue: "MongoDB connection failed"
**Solution**: 
- Check MongoDB is running
- Verify connection string in `backend/.env`
- For Atlas, ensure your IP is whitelisted (use 0.0.0.0/0 for all IPs)

### Issue: "Module not found"
**Solution**: 
- Backend: `pip install -r requirements.txt`
- Frontend: `yarn install`

### Issue: Frontend can't connect to Backend
**Solution**: 
- Ensure backend is running on port 8001
- Check `REACT_APP_BACKEND_URL` in `frontend/.env`
- Clear browser cache and restart

## Project Structure

```
only-green/
├── frontend/
│   ├── src/
│   │   ├── components/     # Reusable UI components
│   │   ├── pages/          # Page components
│   │   ├── context/        # React Context (Cart)
│   │   ├── hooks/          # Custom hooks
│   │   └── mock.js         # Mock product data
│   ├── public/
│   └── package.json
├── backend/
│   ├── server.py           # FastAPI application
│   ├── requirements.txt    # Python dependencies
│   └── .env               # Backend configuration
└── README.md
```

## Next Steps

1. ✅ Explore the application
2. ✅ Make your first changes
3. ✅ Test the shopping cart
4. 📖 Read DEPLOYMENT.md to deploy online

## Need Help?

Common commands:
- **Stop servers**: Press `Ctrl + C` in the terminal
- **Restart backend**: Run the uvicorn command again
- **Restart frontend**: Run `yarn start` again
- **Clear cache**: Delete `node_modules` and run `yarn install`

---

**Ready to deploy?** Check out `DEPLOYMENT.md` for the cheapest deployment options!