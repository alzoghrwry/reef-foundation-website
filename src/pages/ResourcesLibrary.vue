<template>
  <div class="min-h-screen bg-gradient-to-br from-gray-50 to-amber-50">
    <!-- Hero Section -->
    <section class="relative bg-gradient-to-r from-primary-green to-warm-brown text-white py-20">
      <div class="absolute inset-0 bg-black opacity-20"></div>
      <div class="container mx-auto px-4 relative z-10">
        <div class="text-center max-w-4xl mx-auto">
          <h1 class="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            مكتبة الموارد والتقارير
          </h1>
          <p class="text-xl md:text-2xl opacity-90 leading-relaxed">
            مجموعة شاملة من الموارد والتقارير والأدلة لدعم التنمية الريفية
          </p>
        </div>
      </div>
    </section>

    <!-- Search and Filter Section -->
    <section class="py-8 bg-white shadow-sm">
      <div class="container mx-auto px-4">
        <div class="max-w-4xl mx-auto">
          <!-- Search Bar -->
          <div class="relative mb-6">
            <input 
              v-model="searchQuery"
              type="text" 
              placeholder="ابحث في الموارد والتقارير..."
              class="w-full px-6 py-4 pr-12 border-2 border-gray-200 rounded-xl focus:border-primary-green focus:outline-none text-lg"
            >
            <svg class="absolute right-4 top-1/2 transform -translate-y-1/2 w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
            </svg>
          </div>
          
          <!-- Filter Buttons -->
          <div class="flex flex-wrap justify-center gap-4">
            <button 
              v-for="category in categories" 
              :key="category.id"
              @click="selectedCategory = category.id"
              class="px-6 py-3 rounded-full font-medium transition-all duration-300"
              :class="selectedCategory === category.id 
                ? 'bg-primary-green text-white shadow-lg' 
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'"
            >
              {{ category.name }}
            </button>
          </div>
        </div>
      </div>
    </section>

    <!-- Resources Grid -->
    <section class="py-16">
      <div class="container mx-auto px-4">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div 
            v-for="resource in filteredResources" 
            :key="resource.id"
            class="card group hover:shadow-2xl transition-all duration-300"
          >
            <div class="p-6">
              <!-- Resource Icon -->
              <div class="flex items-center mb-4">
                <div class="w-12 h-12 bg-gradient-to-br from-primary-green to-reef-green-600 rounded-lg flex items-center justify-center mr-4">
                  <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
                  </svg>
                </div>
                <div>
                  <span class="bg-primary-green/10 text-primary-green px-3 py-1 rounded-full text-sm font-medium">
                    {{ getCategoryName(resource.categoryId) }}
                  </span>
                </div>
              </div>
              
              <!-- Resource Content -->
              <h3 class="text-xl font-bold text-gray-800 mb-3 group-hover:text-primary-green transition-colors">
                {{ resource.title }}
              </h3>
              <p class="text-gray-600 leading-relaxed mb-4">
                {{ resource.description }}
              </p>
              
              <!-- Resource Meta -->
              <div class="flex items-center justify-between text-sm text-gray-500 mb-4">
                <span>{{ formatDate(resource.date) }}</span>
                <span>{{ resource.fileSize }}</span>
              </div>
              
              <!-- Download Button -->
              <button class="w-full btn-secondary group-hover:shadow-lg transition-all duration-300">
                <svg class="w-5 h-5 ml-2 inline" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
                </svg>
                تحميل الملف
              </button>
            </div>
          </div>
        </div>
        
        <!-- No Results -->
        <div v-if="filteredResources.length === 0" class="text-center py-16">
          <div class="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <svg class="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
            </svg>
          </div>
          <h3 class="text-xl font-semibold text-gray-600 mb-2">لم يتم العثور على موارد</h3>
          <p class="text-gray-500">جرب البحث بكلمات مختلفة أو اختر فئة أخرى</p>
        </div>
      </div>
    </section>

    <!-- Statistics Section -->
    <section class="py-16 bg-gradient-to-r from-light-beige to-white">
      <div class="container mx-auto px-4">
        <div class="text-center mb-12">
          <h2 class="text-3xl font-bold text-gray-800 mb-4">إحصائيات المكتبة</h2>
          <p class="text-lg text-gray-600">أرقام تعكس حجم العمل والجهد المبذول</p>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div class="text-center">
            <div class="w-16 h-16 bg-primary-green rounded-full flex items-center justify-center mx-auto mb-4">
              <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
              </svg>
            </div>
            <h3 class="text-3xl font-bold text-reef-brown-600 mb-2">150+</h3>
            <p class="text-gray-600">مورد متاح</p>
          </div>
          
          <div class="text-center">
            <div class="w-16 h-16 bg-primary-green rounded-full flex items-center justify-center mx-auto mb-4">
              <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path>
              </svg>
            </div>
            <h3 class="text-3xl font-bold text-reef-brown-600 mb-2">25</h3>
            <p class="text-gray-600">تقرير سنوي</p>
          </div>
          
          <div class="text-center">
            <div class="w-16 h-16 bg-primary-green rounded-full flex items-center justify-center mx-auto mb-4">
              <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z"></path>
              </svg>
            </div>
            <h3 class="text-3xl font-bold text-reef-brown-600 mb-2">500+</h3>
            <p class="text-gray-600">مستخدم نشط</p>
          </div>
          
          <div class="text-center">
            <div class="w-16 h-16 bg-primary-green rounded-full flex items-center justify-center mx-auto mb-4">
              <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
              </svg>
            </div>
            <h3 class="text-3xl font-bold text-reef-brown-600 mb-2">2.5K</h3>
            <p class="text-gray-600">تحميل شهري</p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { ref, computed } from 'vue'

export default {
  name: 'ResourcesLibrary',
  setup() {
    const searchQuery = ref('')
    const selectedCategory = ref('all')
    
    const categories = [
      { id: 'all', name: 'الكل' },
      { id: 'reports', name: 'التقارير' },
      { id: 'guides', name: 'الأدلة' },
      { id: 'research', name: 'الاصدارات' },
     
    ]
    
    const resources = [
      {
        id: 1,
        title: 'التقرير السنوي 2023',
        description: 'تقرير شامل عن أنشطة المؤسسة وإنجازاتها خلال عام 2023',
        categoryId: 'reports',
        date: '2024-01-15',
        fileSize: '2.5 MB',
        downloads: 150
      },
      {
        id: 2,
        title: 'دليل الزراعة المستدامة',
        description: 'دليل شامل للمزارعين حول تقنيات الزراعة المستدامة والري الذكي',
        categoryId: 'guides',
        date: '2024-01-10',
        fileSize: '5.2 MB',
        downloads: 89
      },
      {
        id: 3,
        title: 'بحث: تأثير التكنولوجيا على التنمية الريفية',
        description: 'دراسة علمية حول تأثير التكنولوجيا الحديثة على التنمية في المناطق الريفية',
        categoryId: 'research',
        date: '2024-01-08',
        fileSize: '3.8 MB',
        downloads: 67
      },
      {
        id: 4,
        title: 'كتيب الصحة المجتمعية',
        description: 'كتيب تعليمي حول الصحة المجتمعية والوقاية من الأمراض',
        categoryId: 'manuals',
        date: '2024-01-05',
        fileSize: '1.9 MB',
        downloads: 134
      },
      {
        id: 5,
        title: 'نموذج طلب دعم مشروع',
        description: 'نموذج رسمي لطلب الدعم المالي للمشاريع التنموية',
        categoryId: 'forms',
        date: '2024-01-03',
        fileSize: '0.5 MB',
        downloads: 203
      },
      {
        id: 6,
        title: 'تقرير تقييم الأثر الاجتماعي',
        description: 'تقرير تقييم الأثر الاجتماعي لمشاريع المؤسسة في المناطق الريفية',
        categoryId: 'reports',
        date: '2024-01-01',
        fileSize: '4.1 MB',
        downloads: 78
      },
      {
        id: 7,
        title: 'دليل إدارة المشاريع المجتمعية',
        description: 'دليل شامل لإدارة وتنفيذ المشاريع المجتمعية في المناطق الريفية',
        categoryId: 'guides',
        date: '2023-12-28',
        fileSize: '6.3 MB',
        downloads: 95
      },
      {
        id: 8,
        title: 'بحث: التعليم في المناطق الريفية',
        description: 'دراسة حول تحديات وفرص التعليم في المناطق الريفية',
        categoryId: 'research',
        date: '2023-12-25',
        fileSize: '2.7 MB',
        downloads: 112
      }
    ]
    
    const filteredResources = computed(() => {
      let filtered = resources
      
      // Filter by category
      if (selectedCategory.value !== 'all') {
        filtered = filtered.filter(resource => resource.categoryId === selectedCategory.value)
      }
      
      // Filter by search query
      if (searchQuery.value) {
        const query = searchQuery.value.toLowerCase()
        filtered = filtered.filter(resource => 
          resource.title.toLowerCase().includes(query) ||
          resource.description.toLowerCase().includes(query)
        )
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
    
    return {
      searchQuery,
      selectedCategory,
      categories,
      resources,
      filteredResources,
      getCategoryName,
      formatDate
    }
  }
}
</script>
