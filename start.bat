@echo off
title CLOUDO PRO - Dev Server
cd /d "%~dp0"
echo.
echo  ============================================
echo   CLOUDO PRO - Hosting ^& VPS Management
echo  ============================================
echo   Server: http://localhost:8080
echo   Buka file workspace: cloudo-pro.code-workspace
echo.
node server.js
pause
