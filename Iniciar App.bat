@echo off
title Physique Tracker
start "Physique Tracker - servidor (no cierres esta ventana)" powershell -NoProfile -ExecutionPolicy Bypass -File "%~dp0serve.ps1" -Port 5177
timeout /t 2 >nul
start "" "http://localhost:5177"
