@echo off
set PATH=C:\Program Files\Git\cmd;%PATH%
git add .
git commit -m "Optimize page load speed with WebP compression, lazy loading, and LCP preloading"
git push origin main
