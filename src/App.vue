<template>
  <div id="app" class="min-h-screen bg-gray-50">
    <!-- Header -->
    <header class="bg-white shadow-lg sticky top-0 z-50">
      <nav class="container mx-auto px-4 py-4">
        <div class="flex items-center justify-between">
              <!-- Right Side - Logo -->
          <div class="flex items-center space-x-4 space-x-reverse">
                <!-- Arabic Text -->
                <h1 class="text-xl sm:text-2xl font-bold text-green-800">مؤسسة ريف</h1>
                
                <!-- Green Circle with Sprout Icon -->
                <div class="w-12 h-12 sm:w-16 sm:h-16 bg-green-600 rounded-full flex items-center justify-center">
                  <svg class="w-8 h-8 sm:w-10 sm:h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <!-- Simple Sprout Icon -->
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.94-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
                  </svg>
            </div>
          </div>
          
              <!-- Center - Navigation Links -->
              <div class="hidden lg:flex items-center space-x-6 space-x-reverse">
            <router-link 
              v-for="route in routes" 
              :key="route.path"
              :to="route.path" 
                  class="flex items-center space-x-2 space-x-reverse text-gray-700 hover:text-primary-green font-medium transition-all duration-300"
                  :class="{ 
                    'bg-gradient-to-r from-primary-green to-reef-green-600 text-white px-4 py-2 rounded-lg shadow-lg': $route.path === route.path,
                    'hover:bg-light-beige px-4 py-2 rounded-lg': $route.path !== route.path
                  }"
                >
                  <component :is="route.icon" class="w-5 h-5" />
                  <span>{{ route.name }}</span>
            </router-link>
          </div>
              
          <!-- Left Side - Language Button -->
          <div class="hidden lg:flex items-center">
            <!-- Language button - Standalone on the left -->
            <button @click="toggleLanguage" class="flex items-center gap-2 bg-primary-green hover:bg-reef-green-600 text-white px-5 py-2.5 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 relative group">
              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12.87 15.07l-2.54-2.51.03-.03c1.74-1.94 2.98-4.17 3.71-6.53H17V4h-7V2H8v2H1v1.99h11.17C11.5 7.92 10.44 9.75 9 11.35 8.07 10.32 7.3 9.19 6.69 8h-2c.73 1.63 1.73 3.17 2.98 4.56l-5.09 5.02L4 19l5-5 3.11 3.11.76-2.04zM18.5 10h-2L12 22h2l1.12-3h4.75L21 22h2l-4.5-12zm-2.62 7l1.62-4.33L19.12 17h-3.24z"/>
              </svg>
              <span class="font-bold text-sm">{{ currentLanguage === 'ar' ? 'عربي' : 'English' }}</span>
              <!-- Checkmark indicator -->
              <div class="absolute -top-1 -right-1 w-5 h-5 bg-accent-yellow rounded-full flex items-center justify-center shadow-md">
                <svg class="w-3 h-3 text-dark-text" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                </svg>
              </div>
            </button>
          </div>
          
          <!-- Mobile Menu Button -->
          <button @click="toggleMobileMenu" class="lg:hidden p-2">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>
        
        <!-- Search Bar -->
        <div v-if="showSearch" class="mt-4 pb-4">
          <div class="relative">
            <input 
              v-model="searchQuery"
              type="text" 
              placeholder="البحث السريع..."
                  class="w-full px-4 py-3 pr-12 rounded-lg border-2 border-gray-200 focus:border-primary-green focus:outline-none transition-colors duration-300"
            >
            <button class="absolute right-3 top-1/2 transform -translate-y-1/2">
              <svg class="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
              </svg>
            </button>
          </div>
        </div>
        
        <!-- Mobile Menu -->
        <div v-if="mobileMenuOpen" class="lg:hidden mt-4 pb-4">
          <!-- Navigation Links -->
          <div class="space-y-2 mb-6">
          <router-link 
            v-for="route in routes" 
            :key="route.path"
            :to="route.path" 
              class="flex items-center space-x-2 space-x-reverse py-3 px-4 text-gray-700 hover:text-primary-green hover:bg-light-beige font-medium transition-colors duration-300 rounded-lg"
              :class="{ 'text-primary-green bg-light-beige border-r-4 border-primary-green': $route.path === route.path }"
            @click="mobileMenuOpen = false"
          >
              <component :is="route.icon" class="w-5 h-5" />
              <span>{{ route.name }}</span>
          </router-link>
          </div>
          
          <!-- Utility Icons for Mobile -->
          <div class="border-t border-gray-200 pt-4">
            <div class="flex items-center justify-center space-x-4 space-x-reverse">
              <!-- Language button -->
              <button @click="toggleLanguage" class="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200 transition-all duration-200 relative">
                <svg class="w-6 h-6 text-gray-700" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.87 15.07l-2.54-2.51.03-.03c1.74-1.94 2.98-4.17 3.71-6.53H17V4h-7V2H8v2H1v1.99h11.17C11.5 7.92 10.44 9.75 9 11.35 8.07 10.32 7.3 9.19 6.69 8h-2c.73 1.63 1.73 3.17 2.98 4.56l-5.09 5.02L4 19l5-5 3.11 3.11.76-2.04zM18.5 10h-2L12 22h2l1.12-3h4.75L21 22h2l-4.5-12zm-2.62 7l1.62-4.33L19.12 17h-3.24z"/>
                </svg>
                <!-- Green checkmark -->
                <div v-if="currentLanguage === 'ar'" class="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 rounded-full flex items-center justify-center">
                  <svg class="w-2 h-2 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                  </svg>
                </div>
              </button>
              
              <!-- Settings button -->
              <button class="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200 transition-all duration-200">
                <svg class="w-6 h-6 text-gray-700" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19.14,12.94c0.04-0.3,0.06-0.61,0.06-0.94c0-0.32-0.02-0.64-0.07-0.94l2.03-1.58c0.18-0.14,0.23-0.41,0.12-0.61 l-1.92-3.32c-0.12-0.22-0.37-0.29-0.59-0.22l-2.39,0.96c-0.5-0.38-1.03-0.7-1.62-0.94L14.4,2.81c-0.04-0.24-0.24-0.41-0.48-0.41 h-3.84c-0.24,0-0.43,0.17-0.47,0.41L9.25,5.35C8.66,5.59,8.12,5.92,7.63,6.29L5.24,5.33c-0.22-0.08-0.47,0-0.59,0.22L2.74,8.87 C2.62,9.08,2.66,9.34,2.86,9.48l2.03,1.58C4.84,11.36,4.8,11.69,4.8,12s0.02,0.64,0.07,0.94l-2.03,1.58 c-0.18,0.14-0.23,0.41-0.12,0.61l1.92,3.32c0.12,0.22,0.37,0.29,0.59,0.22l2.39-0.96c0.5,0.38,1.03,0.7,1.62,0.94l0.36,2.54 c0.05,0.24,0.24,0.41,0.48,0.41h3.84c0.24,0,0.44-0.17,0.47-0.41l0.36-2.54c0.59-0.24,1.13-0.56,1.62-0.94l2.39,0.96 c0.22,0.08,0.47,0,0.59-0.22l1.92-3.32c0.12-0.22,0.07-0.47-0.12-0.61L19.14,12.94z M12,15.6c-1.98,0-3.6-1.62-3.6-3.6 s1.62-3.6,3.6-3.6s3.6,1.62,3.6,3.6S13.98,15.6,12,15.6z"/>
                </svg>
              </button>
              
              <!-- Search button -->
              <button @click="toggleSearch" class="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200 transition-all duration-200">
                <svg class="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </nav>
    </header>

    <!-- Main Content -->
    <main>
      <router-view />
    </main>


    <!-- Footer -->
        <footer class="text-white py-16" style="background-color: #1a4d2e;">
      <div class="container mx-auto px-4">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <!-- About Section - First -->
          <div>
            <div class="flex items-center space-x-3 space-x-reverse mb-4">
                  <div class="w-12 h-12 bg-gradient-to-br from-primary-green to-reef-green-600 rounded-full flex items-center justify-center shadow-lg">
                <svg class="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                </svg>
              </div>
              <div>
                <h3 class="text-xl font-bold text-white">مؤسسة ريف</h3>
                <p class="text-sm text-green-100">للتنمية الإنسانية</p>
            </div>
              </div>
            <p class="text-sm text-green-100 leading-relaxed mb-4">
              مؤسسة إنسانية غير ربحية تهدف إلى تقديم المساعدات والدعم للمجتمعات المحتاجة في اليمن من خلال مشاريع متنوعة في مجالات الصحة والتعليم والإسكان.
            </p>
            <div class="mb-4">
              <p class="text-sm text-green-100 mb-2">تابعونا على</p>
              <div class="flex space-x-3 space-x-reverse">
                <a href="#" class="w-8 h-8 bg-green-800 rounded-full flex items-center justify-center hover:bg-accent-yellow hover:text-dark-text transition-all duration-300 transform hover:scale-110">
                  <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                  </svg>
                </a>
                <a href="#" class="w-8 h-8 bg-green-800 rounded-full flex items-center justify-center hover:bg-accent-yellow hover:text-dark-text transition-all duration-300 transform hover:scale-110">
                  <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z"/>
                  </svg>
                </a>
                <a href="#" class="w-8 h-8 bg-green-800 rounded-full flex items-center justify-center hover:bg-accent-yellow hover:text-dark-text transition-all duration-300 transform hover:scale-110">
                  <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.746-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24.009c6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641.001 12.017.001z"/>
                  </svg>
                </a>
                <a href="#" class="w-8 h-8 bg-green-800 rounded-full flex items-center justify-center hover:bg-accent-yellow hover:text-dark-text transition-all duration-300 transform hover:scale-110">
                  <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
                <a href="#" class="w-8 h-8 bg-green-800 rounded-full flex items-center justify-center hover:bg-accent-yellow hover:text-dark-text transition-all duration-300 transform hover:scale-110">
                  <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                  </svg>
                </a>
          </div>
        </div>
      </div>
          
          <!-- Quick Links - Second -->
          <div>
                <h4 class="text-lg font-bold mb-4 border-b-2 border-teal-400 pb-2">روابط سريعة</h4>
            <ul class="space-y-2">
              <li><router-link to="/" class="flex items-center text-sm text-green-100 hover:text-white transition-colors">
                <svg class="w-4 h-4 ml-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/>
                </svg>
                الرئيسية
              </router-link></li>
              <li><router-link to="/about" class="flex items-center text-sm text-gray-300 hover:text-white transition-colors">
                <svg class="w-4 h-4 ml-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M16 4c0-1.11.89-2 2-2s2 .89 2 2-.89 2-2 2-2-.89-2-2zm4 18v-6h2.5l-2.54-7.63A1.5 1.5 0 0 0 18.54 8H16c-.8 0-1.54.37-2.01.99L12 11l-1.99-2.01A2.5 2.5 0 0 0 8 8H5.46c-.8 0-1.54.37-2.01.99L.96 16.5H3.5V22h2v-6h2v6h2v-6h2v6h2v-6h2v6h2z"/>
                </svg>
                من نحن
              </router-link></li>
              <li><router-link to="/projects" class="flex items-center text-sm text-gray-300 hover:text-white transition-colors">
                <svg class="w-4 h-4 ml-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"/>
                </svg>
                برامجنا
              </router-link></li>
              <li><router-link to="/news" class="flex items-center text-sm text-gray-300 hover:text-white transition-colors">
                <svg class="w-4 h-4 ml-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M4 6h16v2H4zm0 5h16v2H4zm0 5h16v2H4z"/>
                </svg>
                أخبارنا
              </router-link></li>
              <li><router-link to="/media-gallery" class="flex items-center text-sm text-gray-300 hover:text-white transition-colors">
                <svg class="w-4 h-4 ml-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zM8.5 13.5l2.5 3.01L14.5 12l4.5 6H5l3.5-4.5z"/>
                </svg>
                المعرض الإعلامي
              </router-link></li>
              <li><router-link to="/resources" class="flex items-center text-sm text-gray-300 hover:text-white transition-colors">
                <svg class="w-4 h-4 ml-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
                </svg>
                التقارير والإصدارات
              </router-link></li>
              <li><router-link to="/contact" class="flex items-center text-sm text-gray-300 hover:text-white transition-colors">
                <svg class="w-4 h-4 ml-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                </svg>
                تواصل معنا
              </router-link></li>
            </ul>
          </div>
          
          <!-- Contact Information - Third -->
          <div>
                <h4 class="text-lg font-bold mb-4 border-b-2 border-teal-400 pb-2">معلومات التواصل</h4>
            <div class="space-y-3 text-sm">
              <div class="flex items-start space-x-3 space-x-reverse">
                <svg class="w-5 h-5 text-teal-400 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                </svg>
          <div>
                    <p class="text-green-100">العنوان</p>
                    <p class="text-white">اليمن - تعز - مديرية المعافر - شارع الثورة</p>
                  </div>
              </div>
              
              <div class="flex items-start space-x-3 space-x-reverse">
                <svg class="w-5 h-5 text-teal-400 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                </svg>
              <div>
                    <p class="text-green-100">الهاتف</p>
                  <p class="text-white">+967 777 123 456</p>
              </div>
            </div>
              
              <div class="flex items-start space-x-3 space-x-reverse">
                <svg class="w-5 h-5 text-teal-400 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                </svg>
                <div>
                    <p class="text-green-100">واتساب</p>
                  <p class="text-white">+967 734 762 858</p>
                </div>
          </div>
          
              <div class="flex items-start space-x-3 space-x-reverse">
                <svg class="w-5 h-5 text-teal-400 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                </svg>
          <div>
                    <p class="text-green-100">البريد الإلكتروني</p>
                  <p class="text-white">info@reef-foundation.org</p>
                </div>
          </div>
          
              <div class="flex items-start space-x-3 space-x-reverse">
                <svg class="w-5 h-5 text-teal-400 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z"/>
                </svg>
          <div>
                    <p class="text-green-100">ساعات العمل</p>
                  <p class="text-white">الأحد - الخميس: 8:00 ص - 2:00 م</p>
                </div>
            </div>
          </div>
        </div>
        
          <!-- Newsletter Section - Fourth -->
          <div>
                <h4 class="text-lg font-bold mb-4 border-b-2 border-teal-400 pb-2">النشرة الإخبارية</h4>
                <p class="text-sm text-green-100 mb-4">اشترك في نشرتنا الإخبارية لتصلك آخر الأخبار والمشاريع</p>
            <form @submit.prevent="subscribeNewsletter" class="space-y-3">
              <input 
                v-model="newsletterEmail"
                type="email" 
                placeholder="البريد الإلكتروني"
                class="w-full px-4 py-2 bg-green-800 text-white rounded-lg border border-green-700 focus:border-teal-400 focus:outline-none"
                required
              >
              <button 
                type="submit"
                :disabled="isNewsletterSubmitting"
                class="w-full bg-gradient-to-r from-primary-green to-reef-green-600 text-white py-2 px-4 rounded-lg font-semibold hover:from-accent-yellow hover:to-yellow-500 hover:text-dark-text transition-all duration-300 disabled:opacity-50 shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                <span v-if="isNewsletterSubmitting">جاري الاشتراك...</span>
                <span v-else>اشتراك</span>
              </button>
            </form>
          </div>
        </div>
        
            <!-- Bottom Bar -->
            <div class="border-t border-green-700 mt-8 pt-8">
              <div class="flex flex-col md:flex-row justify-between items-center text-sm text-green-200">
                <div class="text-right">
                  <p>&copy; 2025 • مؤسسة ريف للتنمية الإنسانية. جميع الحقوق محفوظة.</p>
                </div>
                <div class="flex space-x-4 space-x-reverse mt-4 md:mt-0">
                  <a href="#" class="hover:text-white transition-colors">سياسة الخصوصية</a>
                  <span>|</span>
                  <a href="#" class="hover:text-white transition-colors">شروط الاستخدام</a>
                  <span>|</span>
                  <a href="#" class="hover:text-white transition-colors">سياسة الكوكيز</a>
                </div>
              </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
import { ref, defineComponent } from 'vue'

// Icon components
const HomeIcon = defineComponent({
  template: `
    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"/>
    </svg>
  `
})

const AboutIcon = defineComponent({
  template: `
    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"/>
    </svg>
  `
})

const ProgramsIcon = defineComponent({
  template: `
    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
    </svg>
  `
})

const NewsIcon = defineComponent({
  template: `
    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"/>
    </svg>
  `
})

const GalleryIcon = defineComponent({
  template: `
    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"/>
    </svg>
  `
})

const ResourcesIcon = defineComponent({
  template: `
    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
    </svg>
  `
})

const ContactIcon = defineComponent({
  template: `
    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
    </svg>
  `
})

export default {
  name: 'App',
  components: {
    HomeIcon,
    AboutIcon,
    ProgramsIcon,
    NewsIcon,
    GalleryIcon,
    ContactIcon
  },
  setup() {
    const mobileMenuOpen = ref(false)
    const showSearch = ref(false)
    const searchQuery = ref('')
    const currentLanguage = ref('ar')
    const newsletterEmail = ref('')
    const isNewsletterSubmitting = ref(false)
    
    const routes = [
      { path: '/', name: 'الرئيسية', icon: 'HomeIcon' },
      { path: '/about', name: 'من نحن', icon: 'AboutIcon' },
      { path: '/projects', name: 'برامجنا', icon: 'ProgramsIcon' },
      { path: '/news', name: 'أخبارنا', icon: 'NewsIcon' },
      { path: '/media-gallery', name: 'المعرض الإعلامي', icon: 'GalleryIcon' },
      { path: '/resources', name: 'التقارير والإصدارات', icon: 'ResourcesIcon' },
      { path: '/contact', name: 'تواصل معنا', icon: 'ContactIcon' }
    ]
    
    const toggleMobileMenu = () => {
      mobileMenuOpen.value = !mobileMenuOpen.value
    }
    
    const toggleSearch = () => {
      showSearch.value = !showSearch.value
      if (!showSearch.value) {
        searchQuery.value = ''
      }
    }
    
    const toggleLanguage = () => {
      currentLanguage.value = currentLanguage.value === 'ar' ? 'en' : 'ar'
      // يمكن إضافة منطق تغيير اللغة هنا
    }
    
    const subscribeNewsletter = async () => {
      if (!newsletterEmail.value) return
      
      isNewsletterSubmitting.value = true
      
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500))
      
      // Reset form
      newsletterEmail.value = ''
      isNewsletterSubmitting.value = false
      
      // Show success message
      alert('تم الاشتراك في النشرة البريدية بنجاح! شكراً لك.')
    }
    
    return {
      mobileMenuOpen,
      showSearch,
      searchQuery,
      currentLanguage,
      newsletterEmail,
      isNewsletterSubmitting,
      routes,
      toggleMobileMenu,
      toggleSearch,
      toggleLanguage,
      subscribeNewsletter
    }
  }
}
</script>
