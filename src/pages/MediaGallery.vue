<template>
  <div class="min-h-screen bg-primary">
    <!-- Hero Section - Professional & Clean Design -->
    <section class="relative bg-gradient-to-br from-primary-green via-reef-green-600 to-reef-green-700 text-white py-32 overflow-hidden">
      <!-- Elegant Pattern Overlay -->
      <div class="absolute inset-0 opacity-5">
        <div class="absolute inset-0" style="background-image: 
          linear-gradient(30deg, transparent 12%, rgba(255,255,255,.08) 12%, rgba(255,255,255,.08) 13%, transparent 13%),
          linear-gradient(150deg, transparent 12%, rgba(255,255,255,.08) 12%, rgba(255,255,255,.08) 13%, transparent 13%);
          background-size: 50px 50px;">
        </div>
      </div>
      
      <!-- Sophisticated Floating Elements -->
      <div class="absolute inset-0 overflow-hidden pointer-events-none">
        <div class="absolute top-20 right-10 w-64 h-64 bg-accent-yellow/10 rounded-full blur-3xl floating-animation"></div>
        <div class="absolute bottom-20 left-10 w-80 h-80 bg-white/5 rounded-full blur-3xl floating-animation" style="animation-delay: -3s;"></div>
        <div class="absolute top-1/2 left-1/3 w-48 h-48 bg-accent-yellow/10 rounded-full blur-2xl floating-animation" style="animation-delay: -6s;"></div>
        
        <!-- Decorative Elements -->
        <div class="absolute top-32 left-20 w-20 h-20 border-2 border-accent-yellow/20 rounded-full floating-animation" style="animation-delay: -1s;"></div>
        <div class="absolute bottom-32 right-32 w-16 h-16 border-2 border-white/20 rotate-45 floating-animation" style="animation-delay: -4s;"></div>
      </div>
      
      <div class="container mx-auto px-4 relative z-10">
        <div class="text-center max-w-6xl mx-auto">
          <!-- Premium Badge -->
          <div class="inline-flex items-center bg-white/15 backdrop-blur-xl rounded-full px-10 py-5 mb-12 border border-white/30 shadow-2xl hover:bg-white/20 hover:scale-105 transition-all duration-500">
            <div class="relative">
              <div class="absolute inset-0 bg-accent-yellow/50 rounded-full blur-md animate-pulse"></div>
              <svg class="w-10 h-10 text-accent-yellow relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
              </svg>
            </div>
            <span class="text-2xl font-bold mr-4">المعرض الإعلامي التفاعلي</span>
          </div>
          
          <!-- Main Title -->
          <h1 class="text-6xl md:text-8xl font-black mb-10 leading-tight">
            <div class="inline-block">
              <span class="inline-block hover:scale-105 transition-transform duration-500" style="text-shadow: 0 4px 30px rgba(0,0,0,0.3);">
                المعرض
              </span>
            </div>
            <br>
            <div class="inline-block mt-4">
              <span class="inline-block text-accent-yellow hover:scale-105 transition-transform duration-500 relative" style="text-shadow: 0 0 40px rgba(242, 201, 76, 0.6), 0 4px 30px rgba(0,0,0,0.3);">
                <span class="relative z-10">الإعلامي</span>
                <div class="absolute inset-0 blur-xl bg-accent-yellow/30 -z-10"></div>
              </span>
            </div>
          </h1>
          
          <!-- Elegant Subtitle -->
          <div class="flex items-center justify-center gap-6 mb-16 px-4">
            <div class="hidden md:block h-px w-20 bg-gradient-to-r from-transparent to-accent-yellow"></div>
            <p class="text-xl md:text-3xl font-light opacity-95 leading-relaxed max-w-4xl" style="text-shadow: 0 2px 10px rgba(0,0,0,0.2);">
              اكتشف قصص النجاح والمبادرات الإنسانية في المجتمعات الريفية
            </p>
            <div class="hidden md:block h-px w-20 bg-gradient-to-l from-transparent to-accent-yellow"></div>
          </div>
          
          <!-- Premium Stats Cards -->
          <div class="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <!-- Card 1 -->
            <div class="group relative">
              <div class="absolute inset-0 bg-white/10 backdrop-blur-xl rounded-3xl transform group-hover:scale-105 transition-all duration-500"></div>
              <div class="absolute inset-0 bg-gradient-to-br from-accent-yellow/20 via-transparent to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div class="absolute inset-0 rounded-3xl border-2 border-white/20 group-hover:border-accent-yellow/50 transition-colors duration-500"></div>
              
              <div class="relative p-10">
                <div class="relative w-20 h-20 mx-auto mb-6">
                  <div class="absolute inset-0 bg-accent-yellow/20 rounded-2xl transform rotate-6 group-hover:rotate-12 transition-transform duration-500"></div>
                  <div class="absolute inset-0 bg-accent-yellow/30 rounded-2xl flex items-center justify-center backdrop-blur-sm">
                    <svg class="w-10 h-10 text-accent-yellow" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                    </svg>
                  </div>
                </div>
                
                <div class="text-6xl font-black text-accent-yellow mb-3 group-hover:scale-110 transition-transform duration-500" style="text-shadow: 0 0 30px rgba(242, 201, 76, 0.5);">
                  500+
                </div>
                <h3 class="text-2xl font-bold mb-2">صورة عالية الجودة</h3>
                <p class="text-white/70 text-lg">توثيق احترافي لمشاريعنا</p>
                <div class="w-16 h-1 bg-accent-yellow/50 mx-auto mt-6 rounded-full group-hover:w-24 transition-all duration-500"></div>
              </div>
            </div>
            
            <!-- Card 2 -->
            <div class="group relative">
              <div class="absolute inset-0 bg-white/10 backdrop-blur-xl rounded-3xl transform group-hover:scale-105 transition-all duration-500"></div>
              <div class="absolute inset-0 bg-gradient-to-br from-accent-yellow/20 via-transparent to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div class="absolute inset-0 rounded-3xl border-2 border-white/20 group-hover:border-accent-yellow/50 transition-colors duration-500"></div>
              
              <div class="relative p-10">
                <div class="relative w-20 h-20 mx-auto mb-6">
                  <div class="absolute inset-0 bg-accent-yellow/20 rounded-2xl transform rotate-6 group-hover:rotate-12 transition-transform duration-500"></div>
                  <div class="absolute inset-0 bg-accent-yellow/30 rounded-2xl flex items-center justify-center backdrop-blur-sm">
                    <svg class="w-10 h-10 text-accent-yellow" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"></path>
                    </svg>
                  </div>
                </div>
                
                <div class="text-6xl font-black text-accent-yellow mb-3 group-hover:scale-110 transition-transform duration-500" style="text-shadow: 0 0 30px rgba(242, 201, 76, 0.5);">
                  50+
                </div>
                <h3 class="text-2xl font-bold mb-2">فيديو توثيقي</h3>
                <p class="text-white/70 text-lg">قصص حقيقية ملهمة</p>
                <div class="w-16 h-1 bg-accent-yellow/50 mx-auto mt-6 rounded-full group-hover:w-24 transition-all duration-500"></div>
              </div>
            </div>
            
            <!-- Card 3 -->
            <div class="group relative">
              <div class="absolute inset-0 bg-white/10 backdrop-blur-xl rounded-3xl transform group-hover:scale-105 transition-all duration-500"></div>
              <div class="absolute inset-0 bg-gradient-to-br from-accent-yellow/20 via-transparent to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div class="absolute inset-0 rounded-3xl border-2 border-white/20 group-hover:border-accent-yellow/50 transition-colors duration-500"></div>
              
              <div class="relative p-10">
                <div class="relative w-20 h-20 mx-auto mb-6">
                  <div class="absolute inset-0 bg-accent-yellow/20 rounded-2xl transform rotate-6 group-hover:rotate-12 transition-transform duration-500"></div>
                  <div class="absolute inset-0 bg-accent-yellow/30 rounded-2xl flex items-center justify-center backdrop-blur-sm">
                    <svg class="w-10 h-10 text-accent-yellow" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                  </div>
                </div>
                
                <div class="text-6xl font-black text-accent-yellow mb-3 group-hover:scale-110 transition-transform duration-500" style="text-shadow: 0 0 30px rgba(242, 201, 76, 0.5);">
                  100+
                </div>
                <h3 class="text-2xl font-bold mb-2">قصة نجاح</h3>
                <p class="text-white/70 text-lg">إنجازات تُلهم المجتمع</p>
                <div class="w-16 h-1 bg-accent-yellow/50 mx-auto mt-6 rounded-full group-hover:w-24 transition-all duration-500"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <!-- Elegant Wave Divider -->
      <div class="absolute bottom-0 left-0 right-0 z-20">
        <svg class="w-full h-32 md:h-40" viewBox="0 0 1440 120" preserveAspectRatio="none" fill="none">
          <path d="M0,0 L0,40 Q360,100 720,40 T1440,40 L1440,0 Z" fill="rgba(0,0,0,0.1)"/>
          <path d="M0,0 L0,50 Q360,110 720,50 T1440,50 L1440,0 Z" class="fill-light-beige"/>
          <path d="M0,0 L0,30 Q360,80 720,30 T1440,30 L1440,0 Z" fill="rgba(242,201,76,0.1)"/>
        </svg>
      </div>
    </section>

    <!-- Featured Images Section -->
    <section class="py-20 bg-gradient-to-br from-light-beige to-white">
      <div class="container mx-auto px-4">
        <div class="text-center mb-16">
          <div class="inline-flex items-center bg-gradient-to-r from-primary-green/10 to-accent-yellow/10 backdrop-blur-md rounded-full px-8 py-4 mb-8">
            <svg class="w-8 h-8 ml-3 text-primary-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
            </svg>
            <span class="text-xl font-bold text-dark-text">الصور المميزة</span>
          </div>
          
          <h2 class="text-4xl md:text-5xl font-bold text-dark-text mb-6 gradient-text">
            الصور المميزة
          </h2>
          <p class="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
            مجموعة مختارة من أفضل الصور التي توثق إنجازاتنا ومشاريعنا التنموية
          </p>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div 
            v-for="image in featuredImages" 
            :key="image.id"
            class="card-premium group cursor-pointer overflow-hidden transform hover:scale-105 transition-all duration-500"
            @click="openModal(image)"
          >
            <div class="relative overflow-hidden">
              <img 
                :src="image.image" 
                :alt="image.title"
                class="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700"
              >
              <div class="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div class="absolute top-4 right-4">
                <span class="bg-white/90 text-gray-800 px-3 py-1 rounded-full text-sm font-medium">
                  {{ getCategoryName(image.categoryId) }}
                </span>
              </div>
              <div class="absolute bottom-4 left-4 right-4">
                <h3 class="text-white font-bold text-lg mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  {{ image.title }}
                </h3>
                <p class="text-white/90 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  {{ image.description.substring(0, 80) }}...
                </p>
              </div>
            </div>
          </div>
        </div>
        
        <div class="text-center">
          <button class="btn-primary px-8 py-4 text-lg font-bold">
            <span class="flex items-center justify-center">
              <svg class="w-6 h-6 ml-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
              </svg>
              المزيد من الصور المميزة
            </span>
          </button>
        </div>
      </div>
    </section>

    <!-- Images Gallery Section -->
    <section class="py-20 bg-gradient-to-br from-light-beige to-white">
      <div class="container mx-auto px-4">
        <div class="text-center mb-16">
          <div class="inline-flex items-center bg-gradient-to-r from-accent-yellow/10 to-primary-green/10 backdrop-blur-md rounded-full px-8 py-4 mb-8">
            <svg class="w-8 h-8 ml-3 text-accent-yellow" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"></path>
            </svg>
            <span class="text-xl font-bold text-dark-text">معرض الصور</span>
          </div>
          
          <h2 class="text-4xl md:text-5xl font-bold text-dark-text mb-6 gradient-text">
            معرض الصور
          </h2>
          <p class="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
            استكشف مجموعتنا الشاملة من الصور التي توثق رحلتنا في التنمية الإنسانية
          </p>
        </div>
        
        <!-- Filter Section -->
        <div class="flex flex-wrap justify-center gap-4 mb-12">
          <button 
            v-for="category in categories" 
            :key="category.id"
            @click="selectedCategory = category.id"
            class="px-6 py-3 rounded-full font-medium transition-all duration-300 transform hover:scale-105"
            :class="selectedCategory === category.id 
              ? 'bg-primary-green text-white shadow-lg' 
              : 'bg-white text-gray-700 hover:bg-gray-100 shadow-md'"
          >
            {{ category.name }}
          </button>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          <div 
            v-for="image in filteredImages" 
            :key="image.id"
            class="card-premium group cursor-pointer overflow-hidden transform hover:scale-105 transition-all duration-500"
            @click="openModal(image)"
          >
            <div class="relative overflow-hidden">
              <img 
                :src="image.image" 
                :alt="image.title"
                class="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700"
              >
              <div class="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div class="absolute top-4 right-4">
                <span class="bg-white/90 text-gray-800 px-3 py-1 rounded-full text-sm font-medium">
                  {{ getCategoryName(image.categoryId) }}
                </span>
              </div>
              <div class="absolute bottom-4 left-4 right-4">
                <h3 class="text-white font-bold text-lg mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  {{ image.title }}
                </h3>
                <p class="text-white/90 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  {{ image.description.substring(0, 60) }}...
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Videos Gallery Section -->
    <section class="py-20 bg-gradient-to-br from-light-beige to-white">
      <div class="container mx-auto px-4">
        <div class="text-center mb-16">
          <div class="inline-flex items-center bg-gradient-to-r from-primary-green/10 to-accent-yellow/10 backdrop-blur-md rounded-full px-8 py-4 mb-8">
            <svg class="w-8 h-8 ml-3 text-primary-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"></path>
            </svg>
            <span class="text-xl font-bold text-dark-text">معرض الفيديوهات</span>
          </div>
          
          <h2 class="text-4xl md:text-5xl font-bold text-dark-text mb-6 gradient-text">
            معرض الفيديوهات
          </h2>
          <p class="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto mb-4">
            شاهد قصصنا التوثيقية ومشاريعنا التنموية من خلال الفيديوهات التفاعلية
          </p>
          <p class="text-lg text-gray-500">
            عرض {{ paginatedVideos.length }} من {{ allVideos.length }} فيديو
          </p>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          <div 
            v-for="video in paginatedVideos" 
            :key="video.id"
            class="card-premium group cursor-pointer overflow-hidden transform hover:scale-105 transition-all duration-500"
            @click="openModal(video)"
          >
            <div class="relative overflow-hidden">
              <img 
                :src="video.image" 
                :alt="video.title"
                class="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700"
              >
              <div class="absolute inset-0 bg-black/40 flex items-center justify-center">
                <div class="w-20 h-20 bg-white/90 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-2xl">
                  <svg class="w-10 h-10 text-primary-green ml-1" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z"/>
                  </svg>
                </div>
              </div>
              <div class="absolute top-4 right-4">
                <span class="bg-white/90 text-gray-800 px-3 py-1 rounded-full text-sm font-medium">
                  {{ getCategoryName(video.categoryId) }}
                </span>
              </div>
              <div class="absolute bottom-4 left-4 right-4">
                <div class="flex items-center justify-between mb-2">
                  <span class="bg-primary-green/90 text-white px-3 py-1 rounded-full text-sm font-medium">
                    {{ video.duration }}
                  </span>
                  <span class="text-white/90 text-sm">{{ formatDate(video.date) }}</span>
                </div>
                <h3 class="text-white font-bold text-lg mb-2">
                  {{ video.title }}
                </h3>
                <p class="text-white/90 text-sm">
                  {{ video.description.substring(0, 80) }}...
                </p>
              </div>
            </div>
          </div>
        </div>
        
        <!-- Professional Circular Pagination -->
        <div class="flex justify-center items-center gap-4 mt-16">
          <!-- Previous Button -->
          <button
            @click="goToPreviousPage"
            :disabled="currentVideoPage === 1"
            class="group relative w-14 h-14 rounded-full bg-white shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-110 disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:scale-100 border-2 border-gray-200 hover:border-primary-green"
            :class="{'cursor-not-allowed': currentVideoPage === 1}"
          >
            <div class="absolute inset-0 bg-gradient-to-r from-primary-green to-accent-yellow rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <svg class="w-6 h-6 mx-auto text-gray-600 group-hover:text-white relative z-10 transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M15 19l-7-7 7-7"></path>
            </svg>
          </button>
          
          <!-- Page Numbers -->
          <div class="flex items-center gap-2">
            <button
              v-for="page in visibleVideoPages"
              :key="page"
              @click="goToVideoPage(page)"
              class="relative group"
            >
              <!-- Active Page -->
              <div
                v-if="page === currentVideoPage"
                class="relative w-16 h-16 rounded-full bg-gradient-to-br from-primary-green to-reef-green-600 shadow-2xl flex items-center justify-center transform scale-110 transition-all duration-300"
              >
                <!-- Rotating Ring -->
                <div class="absolute inset-0 rounded-full border-4 border-accent-yellow/50 animate-spin" style="animation-duration: 3s;"></div>
                <div class="absolute inset-0 rounded-full bg-gradient-to-br from-accent-yellow/20 to-transparent"></div>
                <span class="text-2xl font-black text-white relative z-10">{{ page }}</span>
              </div>
              
              <!-- Inactive Pages -->
              <div
                v-else
                class="relative w-12 h-12 rounded-full bg-white shadow-md hover:shadow-xl flex items-center justify-center transition-all duration-300 transform hover:scale-110 border-2 border-gray-200 hover:border-primary-green group"
              >
                <div class="absolute inset-0 bg-gradient-to-br from-primary-green/10 to-accent-yellow/10 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <span class="text-lg font-bold text-gray-600 group-hover:text-primary-green relative z-10 transition-colors duration-300">{{ page }}</span>
              </div>
            </button>
            
            <!-- Ellipsis if needed -->
            <div v-if="totalVideoPages > 5 && currentVideoPage < totalVideoPages - 2" class="text-gray-400 text-2xl font-bold px-2">
              ...
            </div>
          </div>
          
          <!-- Next Button -->
          <button
            @click="goToNextPage"
            :disabled="currentVideoPage === totalVideoPages"
            class="group relative w-14 h-14 rounded-full bg-white shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-110 disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:scale-100 border-2 border-gray-200 hover:border-primary-green"
            :class="{'cursor-not-allowed': currentVideoPage === totalVideoPages}"
          >
            <div class="absolute inset-0 bg-gradient-to-r from-accent-yellow to-primary-green rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <svg class="w-6 h-6 mx-auto text-gray-600 group-hover:text-white relative z-10 transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M9 5l7 7-7 7"></path>
            </svg>
          </button>
        </div>
        
        <!-- Page Info -->
        <div class="text-center mt-8">
          <p class="text-gray-500 text-lg">
            الصفحة <span class="font-bold text-primary-green">{{ currentVideoPage }}</span> من <span class="font-bold text-primary-green">{{ totalVideoPages }}</span>
          </p>
        </div>
      </div>
    </section>

    <!-- Modal -->
    <div 
      v-if="selectedItem" 
      class="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
      @click="closeModal"
    >
      <div 
        class="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
        @click.stop
      >
        <div class="relative">
          <!-- Video Player -->
          <div v-if="selectedItem.type === 'video'" class="relative">
            <video 
              :src="selectedItem.video" 
              controls
              class="w-full h-96 object-cover rounded-t-2xl"
              :poster="selectedItem.image"
            >
              متصفحك لا يدعم تشغيل الفيديو
            </video>
          </div>
          
          <!-- Image -->
          <div v-else>
            <img 
              :src="selectedItem.image" 
              :alt="selectedItem.title"
              class="w-full h-96 object-cover rounded-t-2xl"
            >
          </div>
          
          <button 
            @click="closeModal"
            class="absolute top-4 left-4 bg-white/90 hover:bg-white text-gray-800 rounded-full p-2 transition-colors"
          >
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          </button>
        </div>
        
        <div class="p-8">
          <div class="flex items-center gap-4 mb-6">
            <span class="bg-primary-green/10 text-primary-green px-4 py-2 rounded-full text-sm font-medium">
              {{ getCategoryName(selectedItem.categoryId) }}
            </span>
            <span class="text-gray-500">{{ formatDate(selectedItem.date) }}</span>
          </div>
          
          <h2 class="text-3xl font-bold text-gray-800 mb-4">{{ selectedItem.title }}</h2>
          <p class="text-lg text-gray-600 leading-relaxed mb-6">{{ selectedItem.description }}</p>
          
          <div v-if="selectedItem.content" class="prose max-w-none">
            <div v-html="selectedItem.content"></div>
          </div>
          
          <div class="flex flex-wrap gap-4 mt-8">
            <button class="btn-primary">
              مشاركة
            </button>
            <button class="btn-secondary">
              تحميل الصورة
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, computed } from 'vue'

export default {
  name: 'MediaGallery',
  setup() {
    const selectedCategory = ref('all')
    const selectedItem = ref(null)
    const currentVideoPage = ref(1)
    const videosPerPage = 6
    
    const categories = [
      { id: 'all', name: 'الكل' },
      { id: 'projects', name: 'المشاريع التنموية' },
      { id: 'women-empowerment', name: 'تمكين المرأة' },
      { id: 'environment', name: 'حماية البيئة' },
      { id: 'education', name: 'التعليم' },
 
      { id: 'success-stories', name: 'قصص النجاح' },
      { id: 'events', name: 'الفعاليات' }
    ]
    
    const mediaItems = [
      {
        id: 1,
        title: 'إعادة فتح المدارس في المعافر',
        description: 'إزالة الثكنات العسكرية من المدارس وتمكين الأطفال من العودة للتعليم في بيئة آمنة',
        image: 'https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?w=800&h=600&fit=crop',
        video: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
        type: 'video',
        categoryId: 'education',
        date: '2024-01-15',
        duration: '3:45',
        likes: 156,
        content: '<p>تم إعادة فتح 5 مدارس في مديرية المعافر بعد إزالة الثكنات العسكرية منها، مما مكن أكثر من 800 طفل من العودة للتعليم في بيئة آمنة.</p>'
      },
      {
        id: 2,
        title: 'تكريم رائدات الأعمال',
        description: 'تكريم 30 امرأة من رائدات الأعمال وتقديم الدعم لهن في مشاريعهن الصغيرة',
        image: 'https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?w=800&h=600&fit=crop',
        type: 'image',
        categoryId: 'women-empowerment',
        date: '2024-01-12',
        likes: 89,
        content: '<p>تم تكريم 30 امرأة من رائدات الأعمال في المناطق الريفية وتقديم الدعم المالي والفني لهن لتطوير مشاريعهن الصغيرة.</p>'
      },
      {
        id: 3,
        title: 'مشروع الطباخ الشمسي',
        description: 'تنفيذ مشروع الطباخ الشمسي لتقليل الاعتماد على الحطب وحماية البيئة',
        image: 'https://images.unsplash.com/photo-1500937386664-56d1dfef3854?w=800&h=600&fit=crop',
        video: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4',
        type: 'video',
        categoryId: 'environment',
        date: '2024-01-10',
        duration: '5:20',
        likes: 203,
        content: '<p>تم توزيع 200 طباخ شمسي على الأسر في المناطق الريفية، مما قلل من الاعتماد على الحطب وساهم في حماية البيئة.</p>'
      },
      {
        id: 4,
        title: 'حملة التوعية الصحية',
        description: 'حملة توعية شاملة حول الوقاية من الأمراض المعدية مثل الكوليرا وفيروس كورونا',
        image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=800&h=600&fit=crop',
        type: 'image',
        categoryId: 'health',
        date: '2024-01-08',
        likes: 134,
        content: '<p>حملة توعية شاملة شملت 15 قرية في مديرية المعافر حول الوقاية من الأمراض المعدية والنظافة الشخصية.</p>'
      },
      {
        id: 5,
        title: 'مركز الدعم النفسي',
        description: 'افتتاح مركز الدعم النفسي والاجتماعي لخدمة المتأثرين بالنزاعات والكوارث',
        image: 'https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=800&h=600&fit=crop',
        video: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4',
        type: 'video',
        categoryId: 'psychosocial',
        date: '2024-01-05',
        duration: '4:15',
        likes: 178,
        content: '<p>افتتاح أول مركز للدعم النفسي والاجتماعي في المنطقة لخدمة الأطفال والنساء المتأثرين بالنزاعات.</p>'
      },
      {
        id: 6,
        title: 'قصة نجاح: أم أحمد',
        description: 'كيف حولت أم أحمد مشروعها الصغير إلى مصدر دخل مستدام لعائلتها',
        image: 'https://images.unsplash.com/photo-1584464491033-06628f3a6b7b?w=800&h=600&fit=crop',
        video: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4',
        type: 'video',
        categoryId: 'success-stories',
        date: '2024-01-03',
        duration: '6:30',
        likes: 267,
        content: '<p>قصة نجاح أم أحمد التي بدأت بمشروع صغير لتربية الدواجن وأصبحت الآن تدير مزرعة متكاملة توفر الدخل لـ 10 عائلات.</p>'
      },
      {
        id: 7,
        title: 'مشروع المياه النظيفة',
        description: 'توصيل المياه النظيفة لـ 500 عائلة في المنطقة الريفية',
        image: 'https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=800&h=600&fit=crop',
        type: 'image',
        categoryId: 'projects',
        date: '2024-01-01',
        likes: 145,
        content: '<p>تم إنجاز مشروع توصيل المياه النظيفة لـ 500 عائلة في المنطقة الريفية، مما يحسن من جودة الحياة والصحة العامة.</p>'
      },
      {
        id: 8,
        title: 'ورشة بناء السلام',
        description: 'ورشة تدريبية حول بناء السلام والتعايش المجتمعي',
        image: 'https://images.unsplash.com/photo-1500937386664-56d1dfef3854?w=800&h=600&fit=crop',
        video: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4',
        type: 'video',
        categoryId: 'events',
        date: '2023-12-28',
        duration: '7:45',
        likes: 198,
        content: '<p>ورشة تدريبية شاملة حول بناء السلام والتعايش المجتمعي شارك فيها 50 شاب وشابة من مختلف القرى.</p>'
      },
      {
        id: 9,
        title: 'مشروع الطاقة الشمسية',
        description: 'تركيب ألواح الطاقة الشمسية في المدارس والمستشفيات',
        image: 'https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?w=800&h=600&fit=crop',
        type: 'image',
        categoryId: 'environment',
        date: '2023-12-25',
        likes: 189,
        content: '<p>تم تركيب ألواح الطاقة الشمسية في 10 مدارس و3 مستشفيات، مما وفر الطاقة النظيفة والمستدامة.</p>'
      },
      {
        id: 10,
        title: 'برنامج التدريب المهني',
        description: 'تدريب الشباب على المهارات المهنية المختلفة',
        image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&h=600&fit=crop',
        type: 'image',
        categoryId: 'education',
        date: '2023-12-20',
        likes: 167,
        content: '<p>برنامج تدريبي شامل لـ 200 شاب وشابة على مهارات مختلفة مثل النجارة والكهرباء والحاسوب.</p>'
      },
      {
        id: 11,
        title: 'مشروع الزراعة المستدامة',
        description: 'تعليم المزارعين تقنيات الزراعة المستدامة',
        image: 'https://images.unsplash.com/photo-1500937386664-56d1dfef3854?w=800&h=600&fit=crop',
        type: 'image',
        categoryId: 'projects',
        date: '2023-12-15',
        likes: 203,
        content: '<p>مشروع شامل لتعليم 150 مزارع على تقنيات الزراعة المستدامة والري الحديث.</p>'
      },
      {
        id: 13,
        title: 'برنامج التوعية الرقمية',
        description: 'ورشة تدريبية حول الاستخدام الآمن للإنترنت والتقنيات الرقمية',
        image: 'https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?w=800&h=600&fit=crop',
        type: 'image',
        categoryId: 'education',
        date: '2023-12-05',
        likes: 156,
        content: '<p>ورشة تدريبية شاملة حول الاستخدام الآمن للإنترنت والتقنيات الرقمية شارك فيها 50 شاب وشابة من مختلف القرى.</p>'
      }
    ]
    
    const featuredImages = computed(() => {
      return mediaItems.filter(item => item.type === 'image').slice(0, 4)
    })
    
    const allVideos = computed(() => {
      return mediaItems.filter(item => item.type === 'video')
    })
    
    const featuredVideos = computed(() => {
      return allVideos.value.slice(0, 3)
    })
    
    const totalVideoPages = computed(() => {
      return Math.ceil(allVideos.value.length / videosPerPage)
    })
    
    const paginatedVideos = computed(() => {
      const start = (currentVideoPage.value - 1) * videosPerPage
      const end = start + videosPerPage
      return allVideos.value.slice(start, end)
    })
    
    const visibleVideoPages = computed(() => {
      const pages = []
      const total = totalVideoPages.value
      const current = currentVideoPage.value
      
      // Show first page
      pages.push(1)
      
      // Show pages around current
      for (let i = Math.max(2, current - 1); i <= Math.min(total - 1, current + 1); i++) {
        if (!pages.includes(i)) {
          pages.push(i)
        }
      }
      
      // Show last page if exists
      if (total > 1 && !pages.includes(total)) {
        pages.push(total)
      }
      
      return pages
    })
    
    const goToVideoPage = (page) => {
      currentVideoPage.value = page
      // Scroll to videos section
      window.scrollTo({
        top: document.querySelector('.grid').offsetTop - 100,
        behavior: 'smooth'
      })
    }
    
    const goToPreviousPage = () => {
      if (currentVideoPage.value > 1) {
        currentVideoPage.value--
        window.scrollTo({
          top: document.querySelector('.grid').offsetTop - 100,
          behavior: 'smooth'
        })
      }
    }
    
    const goToNextPage = () => {
      if (currentVideoPage.value < totalVideoPages.value) {
        currentVideoPage.value++
        window.scrollTo({
          top: document.querySelector('.grid').offsetTop - 100,
          behavior: 'smooth'
        })
      }
    }
    
    const filteredImages = computed(() => {
      let filtered = mediaItems.filter(item => item.type === 'image')
      
      // Filter by category
      if (selectedCategory.value !== 'all') {
        filtered = filtered.filter(item => item.categoryId === selectedCategory.value)
      }
      
      return filtered
    })
    
    const getCategoryName = (categoryId) => {
      const category = categories.find(cat => cat.id === categoryId)
      return category ? category.name : ''
    }
    
    const formatDate = (dateString) => {
      const date = new Date(dateString)
      return date.toLocaleDateString('ar-SA', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      })
    }
    
    const openModal = (item) => {
      selectedItem.value = item
    }
    
    const closeModal = () => {
      selectedItem.value = null
    }
    
    return {
      selectedCategory,
      selectedItem,
      currentVideoPage,
      categories,
      mediaItems,
      featuredImages,
      featuredVideos,
      allVideos,
      paginatedVideos,
      totalVideoPages,
      visibleVideoPages,
      filteredImages,
      getCategoryName,
      formatDate,
      openModal,
      closeModal,
      goToVideoPage,
      goToPreviousPage,
      goToNextPage
    }
  }
}
</script>