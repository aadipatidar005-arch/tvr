@echo off
set PATH=C:\Program Files\Git\cmd;%PATH%
git add .
git commit -m "Reposition navigation links to upper right side of front page and remove NAVIGATION label from footer"
git push origin main
