# سكريبت تحديث GitHub Pages تلقائياً - PowerShell
Write-Host "🚀 بدء عملية تحديث GitHub Pages..." -ForegroundColor Green

# بناء المشروع
Write-Host "📦 بناء المشروع..." -ForegroundColor Yellow
npm run build

# التحقق من وجود مجلد dist
if (-not (Test-Path "dist")) {
    Write-Host "❌ خطأ: مجلد dist غير موجود" -ForegroundColor Red
    exit 1
}

# الانتقال لفرع gh-pages
Write-Host "🔄 الانتقال لفرع gh-pages..." -ForegroundColor Yellow
git checkout gh-pages

# حذف جميع الملفات القديمة
Write-Host "🗑️ حذف الملفات القديمة..." -ForegroundColor Yellow
git rm -rf .

# نسخ الملفات الجديدة
Write-Host "📋 نسخ الملفات الجديدة..." -ForegroundColor Yellow
Copy-Item -Path "dist\*" -Destination "." -Recurse -Force

# إضافة الملفات
Write-Host "➕ إضافة الملفات..." -ForegroundColor Yellow
git add .

# إنشاء commit
Write-Host "💾 إنشاء commit..." -ForegroundColor Yellow
$timestamp = Get-Date -Format "yyyy-MM-dd HH:mm:ss"
git commit -m "Update website: $timestamp"

# رفع التحديثات
Write-Host "⬆️ رفع التحديثات..." -ForegroundColor Yellow
git push origin gh-pages

# العودة للفرع الرئيسي
Write-Host "🔙 العودة للفرع الرئيسي..." -ForegroundColor Yellow
git checkout main

Write-Host "✅ تم تحديث الموقع بنجاح!" -ForegroundColor Green
Write-Host "🌐 الموقع متاح على: https://alzoghrwry.github.io/reef-foundation-website/" -ForegroundColor Cyan
