# دليل رفع المشروع إلى GitHub Pages

## 📋 الخطوات المطلوبة

### 1. إنشاء مستودع جديد على GitHub

1. اذهب إلى [GitHub.com](https://github.com)
2. اضغط على زر "New repository" أو "+" في الزاوية العلوية
3. املأ التفاصيل:
   - **Repository name**: `reef-foundation-website`
   - **Description**: `Reef Foundation for Human Development - Website`
   - **Visibility**: اختر Public أو Private حسب رغبتك
   - **لا تضع علامة** على "Add a README file" (لأننا لدينا واحد بالفعل)
   - **لا تضع علامة** على "Add .gitignore" (لأننا لدينا واحد بالفعل)
4. اضغط "Create repository"

### 2. رفع المشروع إلى GitHub

افتح Terminal أو Command Prompt في مجلد المشروع واتبع هذه الأوامر:

```bash
# تهيئة Git (إذا لم تكن مهيأ من قبل)
git init

# إضافة جميع الملفات
git add .

# إنشاء أول commit
git commit -m "Initial commit: Reef Foundation website setup"

# إضافة المستودع البعيد (استبدل yourusername باسم المستخدم الخاص بك)
git remote add origin https://github.com/yourusername/reef-foundation-website.git

# رفع المشروع إلى GitHub
git push -u origin main
```

### 3. إعداد GitHub Pages

1. اذهب إلى صفحة المستودع على GitHub
2. اضغط على تبويب **"Settings"**
3. انتقل إلى قسم **"Pages"** في القائمة الجانبية
4. في قسم **"Source"**:
   - اختر **"GitHub Actions"** من القائمة المنسدلة
5. احفظ الإعدادات

### 4. تفعيل GitHub Actions

1. اذهب إلى تبويب **"Actions"** في المستودع
2. ستجد workflow باسم "Deploy to GitHub Pages"
3. اضغط على **"Enable workflows"** إذا لم تكن مفعلة
4. عند كل push جديد، سيتم تشغيل العملية تلقائياً

### 5. الوصول للموقع المنشور

بعد اكتمال العملية (عادة 2-3 دقائق)، يمكنك الوصول لموقعك عبر:
```
https://yourusername.github.io/reef-foundation-website/
```

## 🔄 تحديث الموقع

لنشر تحديثات جديدة:

```bash
# إضافة التغييرات
git add .

# إنشاء commit جديد
git commit -m "Update: وصف التحديث"

# رفع التحديثات
git push origin main
```

سيتم النشر التلقائي خلال دقائق قليلة.

## ⚠️ ملاحظات مهمة

### تحديث اسم المستودع في الملفات

إذا غيرت اسم المستودع، يجب تحديث الملفات التالية:

1. **vite.config.js** - السطر 6:
```javascript
base: '/your-new-repo-name/',
```

2. **README.md** - جميع الروابط التي تحتوي على اسم المستودع

### استكشاف الأخطاء

إذا لم يعمل النشر:

1. تأكد من أن GitHub Actions مفعلة
2. تحقق من تبويب "Actions" لرؤية الأخطاء
3. تأكد من أن اسم المستودع صحيح في `vite.config.js`
4. تأكد من أن الفرع الرئيسي هو `main` وليس `master`

### الأمان

- لا تضع معلومات حساسة في الكود
- استخدم متغيرات البيئة للمعلومات السرية
- راجع ملف `.gitignore` للتأكد من عدم رفع ملفات غير مرغوب فيها

## 🎉 تهانينا!

موقعك الآن منشور على GitHub Pages ويمكن للجميع الوصول إليه!

---

**نصيحة**: احفظ هذا الدليل للرجوع إليه في المستقبل عند الحاجة لتحديث الموقع.
