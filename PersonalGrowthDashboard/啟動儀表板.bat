@echo off
chcp 65001 > nul
title PersonalGrowthDashboard 啟動器
echo.
echo   正在啟動本機開發伺服器（http://localhost:3000）...
echo.
cd /d "%~dp0"
start "" "http://localhost:3000"
npx http-server -p 3000 -a 127.0.0.1 -c-1
