<template>
  <div class="min-h-screen bg-primary">
    <!-- Hero Section - Professional Luxury Design -->
    <section class="relative min-h-screen flex items-center justify-center overflow-hidden">
      <!-- Premium Gradient Background -->
      <div class="absolute inset-0 bg-gradient-to-br from-primary-green via-reef-green-600 to-reef-green-700"></div>
      
      <!-- Sophisticated Pattern Overlay -->
      <div class="absolute inset-0 opacity-10">
        <div class="absolute inset-0" style="background-image: 
          linear-gradient(30deg, transparent 12%, rgba(255,255,255,.05) 12%, rgba(255,255,255,.05) 13%, transparent 13%),
          linear-gradient(150deg, transparent 12%, rgba(255,255,255,.05) 12%, rgba(255,255,255,.05) 13%, transparent 13%);
          background-size: 50px 50px;">
        </div>
      </div>
      
      <!-- Elegant Floating Elements -->
      <div class="absolute inset-0 overflow-hidden pointer-events-none">
        <!-- Large Accent Circles -->
        <div class="absolute -top-40 -right-40 w-96 h-96 bg-accent-yellow/20 rounded-full blur-3xl floating-animation"></div>
        <div class="absolute -bottom-40 -left-40 w-[600px] h-[600px] bg-accent-yellow/15 rounded-full blur-3xl floating-animation" style="animation-delay: -3s;"></div>
        <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-white/5 rounded-full blur-3xl floating-animation" style="animation-delay: -6s;"></div>
        
        <!-- Decorative Geometric Elements -->
        <div class="absolute top-20 right-20 w-32 h-32 border-2 border-accent-yellow/30 rounded-full floating-animation" style="animation-delay: -1s;"></div>
        <div class="absolute bottom-32 right-40 w-20 h-20 border-2 border-accent-yellow/20 rotate-45 floating-animation" style="animation-delay: -4s;"></div>
        <div class="absolute top-40 left-32 w-16 h-16 bg-accent-yellow/10 rounded-lg rotate-12 floating-animation" style="animation-delay: -2s;"></div>
        <div class="absolute bottom-48 left-48 w-24 h-24 border border-white/20 rounded-full floating-animation" style="animation-delay: -5s;"></div>
        
        <!-- Subtle Light Rays -->
        <div class="absolute top-0 right-1/4 w-px h-64 bg-gradient-to-b from-white/20 via-accent-yellow/30 to-transparent line-animation"></div>
        <div class="absolute bottom-0 left-1/3 w-px h-80 bg-gradient-to-t from-white/20 via-accent-yellow/20 to-transparent line-animation" style="animation-delay: -3s;"></div>
      </div>
      
      <div class="container mx-auto px-4 py-24 relative z-10">
        <div class="max-w-7xl mx-auto">
          <div class="text-center mb-20">
            <!-- Premium Badge -->
            <div class="inline-flex items-center gap-3 bg-white/15 backdrop-blur-2xl rounded-full px-10 py-5 mb-16 border border-white/30 shadow-2xl hover:bg-white/20 hover:scale-105 transition-all duration-500 group">
              <div class="relative">
                <div class="absolute inset-0 bg-accent-yellow/50 rounded-full blur-md animate-pulse"></div>
                <svg class="w-10 h-10 text-accent-yellow relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                </svg>
              </div>
              <span class="text-2xl font-bold text-white tracking-wide">تواصل معنا</span>
            </div>
            
            <!-- Majestic Title -->
            <h1 class="text-6xl md:text-8xl lg:text-9xl font-black mb-12 leading-tight text-white">
              <div class="inline-block">
                <span class="inline-block hover:scale-105 transition-transform duration-500" style="text-shadow: 0 4px 30px rgba(0,0,0,0.3);">
                  نحن هنا
                </span>
              </div>
              <br>
              <div class="inline-block mt-4">
                <span class="inline-block text-accent-yellow hover:scale-105 transition-transform duration-500 relative" style="text-shadow: 0 0 40px rgba(242, 201, 76, 0.6), 0 4px 30px rgba(0,0,0,0.3);">
                  <span class="relative z-10">لمساعدتك</span>
                  <div class="absolute inset-0 blur-xl bg-accent-yellow/30 -z-10"></div>
                </span>
              </div>
            </h1>
            
            <!-- Elegant Subtitle -->
            <div class="flex items-center justify-center gap-6 px-4">
              <div class="hidden md:block h-px w-20 bg-gradient-to-r from-transparent to-accent-yellow"></div>
              <p class="text-xl md:text-3xl font-light text-white/95 leading-relaxed max-w-3xl" style="text-shadow: 0 2px 10px rgba(0,0,0,0.2);">
                انضم إلى رحلة التنمية الإنسانية وكن جزءاً من التغيير الإيجابي
              </p>
              <div class="hidden md:block h-px w-20 bg-gradient-to-l from-transparent to-accent-yellow"></div>
            </div>
          </div>
        </div>
      </div>
      
      <!-- Elegant Wave Divider -->
      <div class="absolute bottom-0 left-0 right-0 z-20">
        <svg class="w-full h-32 md:h-40" viewBox="0 0 1440 120" preserveAspectRatio="none" fill="none">
          <!-- Shadow Layer -->
          <path d="M0,0 L0,40 Q360,100 720,40 T1440,40 L1440,0 Z" fill="rgba(0,0,0,0.1)"/>
          
          <!-- Main Wave -->
          <path d="M0,0 L0,50 Q360,110 720,50 T1440,50 L1440,0 Z" class="fill-light-beige"/>
          
          <!-- Top Accent -->
          <path d="M0,0 L0,30 Q360,80 720,30 T1440,30 L1440,0 Z" fill="rgba(242,201,76,0.1)"/>
        </svg>
      </div>
    </section>

    <!-- Contact Content -->
    <section class="py-20 bg-secondary">
      <div class="container mx-auto px-4">
        <div class="max-w-7xl mx-auto">
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <!-- Advanced Contact Form -->
            <div class="card-premium p-12 relative overflow-hidden">
              <!-- Background Pattern -->
              <div class="absolute inset-0 opacity-5">
                <div class="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-primary-green/20 to-accent-yellow/20"></div>
                <div class="absolute top-10 right-10 w-20 h-20 border border-primary-green/30 rounded-full"></div>
                <div class="absolute bottom-10 left-10 w-16 h-16 border border-accent-yellow/30 rounded-full"></div>
              </div>
              
              <div class="relative z-10">
                <div class="text-center mb-12">
                  <div class="w-24 h-24 bg-gradient-to-br from-primary-green to-field-green rounded-3xl flex items-center justify-center mx-auto mb-8 hover:scale-110 transition-transform duration-500 shadow-2xl">
                    <svg class="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"></path>
                    </svg>
                  </div>
                  <h2 class="text-4xl font-bold gradient-text mb-6">أرسل لنا رسالة</h2>
                  <p class="text-xl text-dark leading-relaxed">نحن نستمع ونرد على جميع استفساراتك بسرعة ودقة</p>
                </div>
                
                <form @submit.prevent="submitForm" class="space-y-8">
                  <!-- Name Field -->
                  <div class="group">
                    <label class="block text-lg font-semibold text-dark mb-3 transition-colors duration-300 group-focus-within:text-primary-green">
                      <span class="flex items-center">
                        <svg class="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
                        </svg>
                        الاسم الكامل
                      </span>
                    </label>
                    <div class="relative">
                      <input 
                        v-model="form.fullName"
                        type="text" 
                        required
                        class="w-full px-6 py-4 border-2 border-gray-200 rounded-xl focus:border-primary-green focus:outline-none transition-all duration-300 text-lg group-hover:shadow-lg bg-white/80 backdrop-blur-sm"
                        placeholder="أدخل اسمك الكامل"
                        @focus="animateField($event)"
                        @blur="resetField($event)"
                      >
                      <div class="absolute inset-y-0 right-0 flex items-center pr-4">
                        <svg class="w-6 h-6 text-gray-400 transition-colors duration-300 group-focus-within:text-primary-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
                        </svg>
                      </div>
                    </div>
                  </div>
                  
                  <!-- Email Field -->
                  <div class="group">
                    <label class="block text-lg font-semibold text-dark mb-3 transition-colors duration-300 group-focus-within:text-primary-green">
                      <span class="flex items-center">
                        <svg class="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                        </svg>
                        البريد الإلكتروني
                      </span>
                    </label>
                    <div class="relative">
                      <input 
                        v-model="form.email"
                        type="email" 
                        required
                        class="w-full px-6 py-4 border-2 border-gray-200 rounded-xl focus:border-primary-green focus:outline-none transition-all duration-300 text-lg group-hover:shadow-lg bg-white/80 backdrop-blur-sm"
                        placeholder="example@email.com"
                        @focus="animateField($event)"
                        @blur="resetField($event)"
                      >
                      <div class="absolute inset-y-0 right-0 flex items-center pr-4">
                        <svg class="w-6 h-6 text-gray-400 transition-colors duration-300 group-focus-within:text-primary-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                        </svg>
                      </div>
                    </div>
                  </div>
                  
                  <!-- Phone Field -->
                  <div class="group">
                    <label class="block text-lg font-semibold text-dark mb-3 transition-colors duration-300 group-focus-within:text-primary-green">
                      <span class="flex items-center">
                        <svg class="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                        </svg>
                        رقم الهاتف
                      </span>
                    </label>
                    <div class="relative">
                      <input 
                        v-model="form.phone"
                        type="tel" 
                        class="w-full px-6 py-4 border-2 border-gray-200 rounded-xl focus:border-primary-green focus:outline-none transition-all duration-300 text-lg group-hover:shadow-lg bg-white/80 backdrop-blur-sm"
                        placeholder="+967 777 123 456"
                        @focus="animateField($event)"
                        @blur="resetField($event)"
                      >
                      <div class="absolute inset-y-0 right-0 flex items-center pr-4">
                        <svg class="w-6 h-6 text-gray-400 transition-colors duration-300 group-focus-within:text-primary-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                        </svg>
                      </div>
                    </div>
                  </div>
                  
                  <!-- Inquiry Type -->
                  <div class="group">
                    <label class="block text-lg font-semibold text-dark mb-3 transition-colors duration-300 group-focus-within:text-primary-green">
                      <span class="flex items-center">
                        <svg class="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
                        </svg>
                        نوع الاستفسار
                      </span>
                    </label>
                    <div class="relative">
                      <select 
                        v-model="form.inquiryType"
                        required
                        class="w-full px-6 py-4 border-2 border-gray-200 rounded-xl focus:border-primary-green focus:outline-none transition-all duration-300 text-lg group-hover:shadow-lg bg-white/80 backdrop-blur-sm appearance-none cursor-pointer"
                        @focus="animateField($event)"
                        @blur="resetField($event)"
                      >
                        <option value="">اختر نوع الاستفسار</option>
                        <option value="general">استفسار عام</option>
                        <option value="project">مشروع جديد</option>
                        <option value="partnership">شراكة</option>
                        <option value="volunteer">التطوع</option>
                        <option value="donation">التبرع</option>
                        <option value="media">إعلامي</option>
                        <option value="other">أخرى</option>
                      </select>
                      <div class="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none">
                        <svg class="w-6 h-6 text-gray-400 transition-colors duration-300 group-focus-within:text-primary-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 9l4-4 4 4m0 6l-4 4-4-4"></path>
                        </svg>
                      </div>
                    </div>
                  </div>
                  
                  <!-- Subject Field -->
                  <div class="group">
                    <label class="block text-lg font-semibold text-dark mb-3 transition-colors duration-300 group-focus-within:text-primary-green">
                      <span class="flex items-center">
                        <svg class="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z"></path>
                        </svg>
                        الموضوع
                      </span>
                    </label>
                    <div class="relative">
                      <input 
                        v-model="form.subject"
                        type="text" 
                        required
                        class="w-full px-6 py-4 border-2 border-gray-200 rounded-xl focus:border-primary-green focus:outline-none transition-all duration-300 text-lg group-hover:shadow-lg bg-white/80 backdrop-blur-sm"
                        placeholder="موضوع الرسالة"
                        @focus="animateField($event)"
                        @blur="resetField($event)"
                      >
                      <div class="absolute inset-y-0 right-0 flex items-center pr-4">
                        <svg class="w-6 h-6 text-gray-400 transition-colors duration-300 group-focus-within:text-primary-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z"></path>
                        </svg>
                      </div>
                    </div>
                  </div>
                  
                  <!-- Message Field -->
                  <div class="group">
                    <label class="block text-lg font-semibold text-dark mb-3 transition-colors duration-300 group-focus-within:text-primary-green">
                      <span class="flex items-center">
                        <svg class="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path>
                        </svg>
                        الرسالة
                      </span>
                    </label>
                    <div class="relative">
                      <textarea 
                        v-model="form.message"
                        required
                        rows="6"
                        class="w-full px-6 py-4 border-2 border-gray-200 rounded-xl focus:border-primary-green focus:outline-none transition-all duration-300 resize-none text-lg group-hover:shadow-lg bg-white/80 backdrop-blur-sm"
                        placeholder="اكتب رسالتك هنا..."
                        @focus="animateField($event)"
                        @blur="resetField($event)"
                      ></textarea>
                      <div class="absolute top-4 right-4">
                        <svg class="w-6 h-6 text-gray-400 transition-colors duration-300 group-focus-within:text-primary-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path>
                        </svg>
                      </div>
                    </div>
                  </div>
                  
                  <!-- Terms Agreement -->
                  <div class="flex items-start group">
                    <div class="relative">
                      <input 
                        v-model="form.agreeToTerms"
                        type="checkbox" 
                        required
                        class="w-6 h-6 text-primary-green border-gray-300 rounded focus:ring-primary-green focus:ring-2 transition-all duration-300"
                      >
                    </div>
                    <label class="mr-4 text-lg text-dark leading-relaxed cursor-pointer group-hover:text-primary-green transition-colors duration-300">
                      أوافق على 
                      <a href="#" class="text-primary-green hover:underline font-semibold transition-all duration-300">شروط الاستخدام</a>
                      و
                      <a href="#" class="text-primary-green hover:underline font-semibold transition-all duration-300">سياسة الخصوصية</a>
                    </label>
                  </div>
                  
                  <!-- Submit Button -->
                  <div class="pt-4">
                    <button 
                      type="submit"
                      :disabled="isSubmitting"
                      class="w-full btn-primary text-xl py-5 disabled:opacity-50 disabled:cursor-not-allowed relative overflow-hidden group"
                    >
                      <div class="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                      <span v-if="isSubmitting" class="flex items-center justify-center relative z-10">
                        <svg class="animate-spin -ml-1 mr-3 h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                          <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        جاري الإرسال...
                      </span>
                      <span v-else class="flex items-center justify-center relative z-10">
                        <svg class="w-6 h-6 ml-3 group-hover:rotate-12 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"></path>
                        </svg>
                        إرسال الرسالة
                      </span>
                    </button>
                  </div>
                </form>
              </div>
            </div>
            
            <!-- Contact Information -->
            <div class="space-y-8">
              <!-- Office Info -->
              <div class="card-premium p-8 relative overflow-hidden">
                <div class="absolute inset-0 opacity-5">
                  <div class="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-accent-yellow/20 to-primary-green/20"></div>
                </div>
                
                <div class="relative z-10">
                  <div class="text-center mb-8">
                    <div class="w-20 h-20 bg-gradient-to-br from-accent-yellow to-yellow-500 rounded-3xl flex items-center justify-center mx-auto mb-6 hover:scale-110 transition-transform duration-500 shadow-2xl">
                      <svg class="w-10 h-10 text-dark" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                      </svg>
                    </div>
                    <h3 class="text-3xl font-bold text-dark mb-4">مقرنا الرئيسي</h3>
                    <p class="text-lg text-gray-600">نحن متواجدون لخدمتكم</p>
                  </div>
                  
                  <div class="space-y-8">
                    <div class="flex items-start space-x-4 space-x-reverse group hover:scale-105 transition-all duration-300">
                      <div class="w-14 h-14 bg-gradient-to-br from-primary-green to-field-green rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                        <svg class="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                        </svg>
                      </div>
                      <div>
                        <h4 class="text-xl font-bold text-dark mb-2 group-hover:text-primary-green transition-colors duration-300">العنوان</h4>
                        <p class="text-lg text-gray-600 leading-relaxed">مديرية المعافر، محافظة تعز، اليمن<br>مقر المؤسسة الرئيسي</p>
                      </div>
                    </div>
                    
                    <div class="flex items-start space-x-4 space-x-reverse group hover:scale-105 transition-all duration-300">
                      <div class="w-14 h-14 bg-gradient-to-br from-primary-green to-field-green rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                        <svg class="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                        </svg>
                      </div>
                      <div>
                        <h4 class="text-xl font-bold text-dark mb-2 group-hover:text-primary-green transition-colors duration-300">الهاتف</h4>
                        <p class="text-lg text-gray-600">+967 777 123 456</p>
                      </div>
                    </div>
                    
                    <div class="flex items-start space-x-4 space-x-reverse group hover:scale-105 transition-all duration-300">
                      <div class="w-14 h-14 bg-gradient-to-br from-primary-green to-field-green rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                        <svg class="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                        </svg>
                      </div>
                      <div>
                        <h4 class="text-xl font-bold text-dark mb-2 group-hover:text-primary-green transition-colors duration-300">البريد الإلكتروني</h4>
                        <p class="text-lg text-gray-600">info@reef-foundation.org</p>
                      </div>
                    </div>
                    
                    <div class="flex items-start space-x-4 space-x-reverse group hover:scale-105 transition-all duration-300">
                      <div class="w-14 h-14 bg-gradient-to-br from-primary-green to-field-green rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                        <svg class="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                        </svg>
                      </div>
                      <div>
                        <h4 class="text-xl font-bold text-dark mb-2 group-hover:text-primary-green transition-colors duration-300">ساعات العمل</h4>
                        <p class="text-lg text-gray-600">الأحد - الخميس: 8:00 ص - 5:00 م<br>الجمعة - السبت: مغلق</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <!-- Social Media -->
              <div class="card-premium p-8 relative overflow-hidden">
                <div class="absolute inset-0 opacity-5">
                  <div class="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-warm-brown/20 to-accent-yellow/20"></div>
                </div>
                
                <div class="relative z-10">
                  <div class="text-center mb-8">
                    <div class="w-20 h-20 bg-gradient-to-br from-warm-brown to-reef-brown-800 rounded-3xl flex items-center justify-center mx-auto mb-6 hover:scale-110 transition-transform duration-500 shadow-2xl">
                      <svg class="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"></path>
                      </svg>
                    </div>
                    <h3 class="text-3xl font-bold text-dark mb-4">تابعنا</h3>
                    <p class="text-lg text-gray-600">كن جزءاً من مجتمعنا الرقمي</p>
                  </div>
                  
                  <div class="grid grid-cols-2 gap-4">
                    <a href="#" class="group flex items-center justify-center bg-gradient-to-r from-accent-yellow to-primary-green text-white p-6 rounded-2xl hover:from-yellow-500 hover:to-orange-600 transition-all duration-300 transform hover:scale-105 hover:shadow-xl">
                      <svg class="w-7 h-7 ml-3 group-hover:scale-110 transition-transform duration-300" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                      </svg>
                      <span class="font-bold text-lg">تويتر</span>
                    </a>
                    
                    <a href="#" class="group flex items-center justify-center bg-gradient-to-r from-accent-yellow to-primary-green text-white p-6 rounded-2xl hover:from-yellow-600 hover:to-orange-700 transition-all duration-300 transform hover:scale-105 hover:shadow-xl">
                      <svg class="w-7 h-7 ml-3 group-hover:scale-110 transition-transform duration-300" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z"/>
                      </svg>
                      <span class="font-bold text-lg">فيسبوك</span>
                    </a>
                    
                    <a href="#" class="group flex items-center justify-center bg-gradient-to-r from-accent-yellow to-primary-green text-white p-6 rounded-2xl hover:from-pink-700 hover:to-pink-800 transition-all duration-300 transform hover:scale-105 hover:shadow-xl">
                      <svg class="w-7 h-7 ml-3 group-hover:scale-110 transition-transform duration-300" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.746-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24.009c6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641.001.012.001z"/>
                      </svg>
                      <span class="font-bold text-lg">إنستغرام</span>
                    </a>
                    
                    <a href="#" class="group flex items-center justify-center bg-gradient-to-r from-accent-yellow to-primary-green text-white p-6 rounded-2xl hover:from-red-700 hover:to-red-800 transition-all duration-300 transform hover:scale-105 hover:shadow-xl">
                      <svg class="w-7 h-7 ml-3 group-hover:scale-110 transition-transform duration-300" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                      </svg>
                      <span class="font-bold text-lg">يوتيوب</span>
                    </a>
                  </div>
                </div>
              </div>
              
              <!-- Map Placeholder -->
              <div class="card-premium p-8 relative overflow-hidden">
                <div class="absolute inset-0 opacity-5">
                  <div class="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-accent-yellow/20 to-primary-green/20"></div>
                </div>
                
                <div class="relative z-10">
                  <div class="text-center mb-6">
                    <div class="w-20 h-20 bg-gradient-to-br from-accent-yellow to-yellow-500 rounded-3xl flex items-center justify-center mx-auto mb-6 hover:scale-110 transition-transform duration-500 shadow-2xl">
                      <svg class="w-10 h-10 text-dark" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                      </svg>
                    </div>
                    <h3 class="text-3xl font-bold text-dark mb-4">موقعنا على الخريطة</h3>
                    <p class="text-lg text-gray-600">اكتشف موقعنا الجغرافي</p>
                  </div>
                  
                  <div class="w-full h-80 bg-gradient-to-br from-light-beige to-white rounded-2xl flex items-center justify-center border-2 border-dashed border-accent-yellow hover:border-primary-green transition-colors duration-300 group cursor-pointer">
                    <div class="text-center">
                      <svg class="w-20 h-20 text-accent-yellow mx-auto mb-6 group-hover:text-primary-green transition-colors duration-300 group-hover:scale-110 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                      </svg>
                      <p class="text-xl text-dark font-bold mb-2 group-hover:text-primary-green transition-colors duration-300">خريطة تفاعلية</p>
                      <p class="text-gray-600 group-hover:text-gray-700 transition-colors duration-300">ستكون متاحة قريباً</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { ref } from 'vue'

export default {
  name: 'ContactUs',
  setup() {
    const isSubmitting = ref(false)
    const form = ref({
      fullName: '',
      email: '',
      phone: '',
      inquiryType: '',
      subject: '',
      message: '',
      agreeToTerms: false
    })
    
    const animateField = (event) => {
      const field = event.target
      field.parentElement.classList.add('animate-pulse')
      setTimeout(() => {
        field.parentElement.classList.remove('animate-pulse')
      }, 200)
    }
    
    const resetField = (event) => {
      const field = event.target
      field.parentElement.classList.remove('animate-pulse')
    }
    
    const submitForm = async () => {
      isSubmitting.value = true
      
      // Simulate API call with realistic delay
      await new Promise(resolve => setTimeout(resolve, 2500))
      
      // Reset form
      form.value = {
        fullName: '',
        email: '',
        phone: '',
        inquiryType: '',
        subject: '',
        message: '',
        agreeToTerms: false
      }
      
      isSubmitting.value = false
      
      // Show success message with better UX
      const successMessage = document.createElement('div')
      successMessage.className = 'fixed top-4 right-4 bg-green-500 text-white px-6 py-4 rounded-lg shadow-lg z-50 transform translate-x-full transition-transform duration-300'
      successMessage.innerHTML = `
        <div class="flex items-center">
          <svg class="w-6 h-6 ml-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
          </svg>
          تم إرسال رسالتك بنجاح! سنتواصل معك قريباً.
        </div>
      `
      document.body.appendChild(successMessage)
      
      // Animate in
      setTimeout(() => {
        successMessage.classList.remove('translate-x-full')
      }, 100)
      
      // Remove after 5 seconds
      setTimeout(() => {
        successMessage.classList.add('translate-x-full')
        setTimeout(() => {
          document.body.removeChild(successMessage)
        }, 300)
      }, 5000)
    }
    
    return {
      form,
      isSubmitting,
      submitForm,
      animateField,
      resetField
    }
  }
}
</script>
