# Reef Foundation Website

موقع مؤسسة ريف للتنمية البشرية - موقع ويب تفاعلي مبني بـ Vue.js

## 🌟 المميزات

- تصميم عصري ومتجاوب مع جميع الأجهزة
- صفحات متعددة تشمل:
  - الصفحة الرئيسية
  - من نحن
  - المشاريع
  - المكتبة الإعلامية
  - مكتبة الموارد
  - الأخبار
  - الوظائف
  - اتصل بنا
- استخدام Tailwind CSS للتصميم
- Vue Router للتنقل بين الصفحات
- VueUse للميزات التفاعلية

## 🚀 التقنيات المستخدمة

- **Vue.js 3** - إطار العمل الأساسي
- **Vite** - أداة البناء والتطوير
- **Vue Router** - إدارة التنقل
- **Tailwind CSS** - إطار عمل CSS
- **VueUse** - مكتبة المرافق

## 📦 التثبيت والتشغيل

### المتطلبات الأساسية
- Node.js (الإصدار 18 أو أحدث)
- npm أو yarn

### خطوات التثبيت

1. استنساخ المستودع:
```bash
git clone https://github.com/yourusername/reef-foundation-website.git
cd reef-foundation-website
```

2. تثبيت التبعيات:
```bash
npm install
```

3. تشغيل المشروع في وضع التطوير:
```bash
npm run dev
```

4. بناء المشروع للإنتاج:
```bash
npm run build
```

5. معاينة البناء:
```bash
npm run preview
```

## 🌐 النشر على GitHub Pages

تم إعداد المشروع للنشر التلقائي على GitHub Pages باستخدام GitHub Actions.

### خطوات النشر:

1. ارفع المشروع إلى GitHub
2. اذهب إلى إعدادات المستودع (Settings)
3. انتقل إلى قسم "Pages"
4. اختر "GitHub Actions" كمصدر النشر
5. عند كل push إلى الفرع الرئيسي، سيتم النشر تلقائياً

### الرابط المباشر للموقع:
https://yourusername.github.io/reef-foundation-website/

## 📁 هيكل المشروع

```
src/
├── components/          # المكونات المشتركة
│   ├── AboutSection.vue
│   ├── CircularStats.vue
│   └── ProfessionalSlider.vue
├── pages/              # صفحات التطبيق
│   ├── HomePage.vue
│   ├── AboutPage.vue
│   ├── ProjectsPage.vue
│   ├── MediaGallery.vue
│   ├── ResourcesLibrary.vue
│   ├── NewsPage.vue
│   ├── Jobs.vue
│   ├── ContactUs.vue
│   └── ...
├── App.vue             # المكون الرئيسي
├── main.js             # نقطة البداية
└── style.css           # الأنماط العامة
```

## 🔧 التطوير

### إضافة صفحة جديدة:
1. أنشئ ملف Vue جديد في مجلد `src/pages/`
2. أضف المسار في `src/main.js`
3. أضف رابط التنقل في المكون المناسب

### تخصيص التصميم:
- استخدم Tailwind CSS classes للتصميم
- يمكن إضافة أنماط مخصصة في `src/style.css`

## 📝 المساهمة

نرحب بالمساهمات! يرجى اتباع الخطوات التالية:

1. Fork المشروع
2. أنشئ فرع للميزة الجديدة (`git checkout -b feature/AmazingFeature`)
3. Commit التغييرات (`git commit -m 'Add some AmazingFeature'`)
4. Push إلى الفرع (`git push origin feature/AmazingFeature`)
5. افتح Pull Request

## 📄 الترخيص

هذا المشروع مرخص تحت رخصة MIT - راجع ملف [LICENSE](LICENSE) للتفاصيل.

## 📞 التواصل

- الموقع الرسمي: [Reef Foundation](https://yourusername.github.io/reef-foundation-website/)
- البريد الإلكتروني: info@reeffoundation.org

---

تم تطوير هذا المشروع بـ ❤️ لمؤسسة ريف للتنمية البشرية