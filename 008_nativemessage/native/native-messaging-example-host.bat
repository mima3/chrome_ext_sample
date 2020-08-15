@echo off
cd %~dp0
powershell.exe -ExecutionPolicy Bypass -NoLogo -NonInteractive -NoProfile  -File ".\NativeHost.ps1"
rem @powershell.exe -ExecutionPolicy Bypass -NoLogo -NonInteractive -NoProfile  -File ".\NativeHost.ps1"
