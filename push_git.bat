@echo off
set PATH=C:\Program Files\Git\cmd;%PATH%
git add .
git commit -m "Remove Studio Address section from footer"
git push origin main
