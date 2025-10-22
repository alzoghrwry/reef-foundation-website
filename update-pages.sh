#!/bin/bash

# سكريبت تحديث GitHub Pages تلقائياً
echo "🚀 بدء عملية تحديث GitHub Pages..."

# بناء المشروع
echo "📦 بناء المشروع..."
npm run build

# التحقق من وجود مجلد dist
if [ ! -d "dist" ]; then
    echo "❌ خطأ: مجلد dist غير موجود"
    exit 1
fi

# الانتقال لفرع gh-pages
echo "🔄 الانتقال لفرع gh-pages..."
git checkout gh-pages

# حذف جميع الملفات القديمة
echo "🗑️ حذف الملفات القديمة..."
git rm -rf .

# نسخ الملفات الجديدة
echo "📋 نسخ الملفات الجديدة..."
cp -r dist/* .

# إضافة الملفات
echo "➕ إضافة الملفات..."
git add .

# إنشاء commit
echo "💾 إنشاء commit..."
git commit -m "Update website: $(date)"

# رفع التحديثات
echo "⬆️ رفع التحديثات..."
git push origin gh-pages

# العودة للفرع الرئيسي
echo "🔙 العودة للفرع الرئيسي..."
git checkout main

echo "✅ تم تحديث الموقع بنجاح!"
echo "🌐 الموقع متاح على: https://alzoghrwry.github.io/reef-foundation-website/"
