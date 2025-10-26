@echo off
echo ================================================
echo    Only Green - Setup Script
echo ================================================
echo.

echo Setting up frontend...
cd frontend
echo Installing frontend dependencies...
call yarn install
cd ..

echo.
echo Setting up backend...
cd backend
echo Installing backend dependencies...
pip install -r requirements.txt
cd ..

echo.
echo Creating environment files...
if not exist "frontend\.env" (
    copy "frontend\.env.example" "frontend\.env"
    echo Created frontend/.env
)

if not exist "backend\.env" (
    copy "backend\.env.example" "backend\.env"
    echo Created backend/.env
)

echo.
echo ================================================
echo Setup Complete!
echo ================================================
echo.
echo Next steps:
echo 1. Configure MongoDB connection in backend/.env
echo 2. Run start.bat to start the application
echo 3. Open http://localhost:3000 in your browser
echo.
echo For detailed instructions, see LOCAL_SETUP_GUIDE.md
echo.
pause
