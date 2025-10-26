@echo off
echo Starting Only Green eCommerce...
echo.

echo Make sure MongoDB is running!
echo.

echo Starting backend on http://localhost:8001...
cd backend
start cmd /k "python -m uvicorn server:app --reload --host 0.0.0.0 --port 8001"

timeout /t 3 >nul

echo Starting frontend on http://localhost:3000...
cd ..\frontend
start cmd /k "yarn start"

echo.
echo ================================
echo Only Green is now running!
echo ================================
echo.
echo Frontend: http://localhost:3000
echo Backend:  http://localhost:8001
echo.
echo Close both windows to stop servers
echo.
pause
