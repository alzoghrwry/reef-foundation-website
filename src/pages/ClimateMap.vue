<template>
  <div class="min-h-screen bg-gradient-to-br from-gray-50 to-green-50">
    <!-- Hero Section -->
    <section class="relative bg-gradient-to-r from-primary-green to-reef-green-600 text-white py-20">
      <div class="absolute inset-0 bg-black opacity-20"></div>
      <div class="container mx-auto px-4 relative z-10">
        <div class="text-center max-w-4xl mx-auto">
          <h1 class="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            الخريطة المناخية التفاعلية
          </h1>
          <p class="text-xl md:text-2xl opacity-90 leading-relaxed">
            مركز إنذار مبكر لرصد وتوثيق الحوادث المناخية والبيئية في المناطق المستهدفة
          </p>
        </div>
      </div>
    </section>

    <!-- Map Controls -->
    <section class="py-8 bg-white shadow-sm">
      <div class="container mx-auto px-4">
        <div class="max-w-6xl mx-auto">
          <!-- Filter Controls -->
          <div class="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-2">المديرية</label>
              <select v-model="selectedDistrict" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:border-primary-green focus:outline-none">
                <option value="">جميع المديريات</option>
                <option value="المعافر">المعافر</option>
                <option value="الشمايتين">الشمايتين</option>
                <option value="المظفر">المظفر</option>
                <option value="القاهرة">القاهرة</option>
                <option value="صالة">صالة</option>
              </select>
            </div>
            
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-2">نوع التهديد</label>
              <select v-model="selectedThreatType" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:border-primary-green focus:outline-none">
                <option value="">جميع الأنواع</option>
                <option value="جفاف">جفاف</option>
                <option value="فيضانات">فيضانات</option>
                <option value="تلوث المياه">تلوث المياه</option>
                <option value="تدهور التربة">تدهور التربة</option>
                <option value="تلوث الهواء">تلوث الهواء</option>
                <option value="إزالة الغابات">إزالة الغابات</option>
              </select>
            </div>
            
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-2">مستوى الخطورة</label>
              <select v-model="selectedSeverity" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:border-primary-green focus:outline-none">
                <option value="">جميع المستويات</option>
                <option value="منخفضة">منخفضة</option>
                <option value="متوسطة">متوسطة</option>
                <option value="عالية">عالية</option>
                <option value="عالية جداً">عالية جداً</option>
              </select>
            </div>
            
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-2">عدد المتأثرين</label>
              <select v-model="selectedAffectedRange" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:border-primary-green focus:outline-none">
                <option value="">جميع الأعداد</option>
                <option value="1-50">1-50 شخص</option>
                <option value="51-200">51-200 شخص</option>
                <option value="201-500">201-500 شخص</option>
                <option value="500+">أكثر من 500 شخص</option>
              </select>
            </div>
          </div>
          
          <!-- Search and Stats -->
          <div class="flex flex-col md:flex-row justify-between items-center gap-4">
            <div class="flex-1 max-w-md">
              <div class="relative">
                <input 
                  v-model="searchQuery"
                  type="text" 
                  placeholder="ابحث في الحوادث..."
                  class="w-full px-4 py-2 pr-10 border border-gray-300 rounded-lg focus:border-primary-green focus:outline-none"
                >
                <svg class="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                </svg>
              </div>
            </div>
            
            <div class="flex gap-4 text-sm">
              <div class="bg-red-100 text-red-800 px-3 py-1 rounded-full">
                <span class="font-semibold">{{ highSeverityCount }}</span> عالية الخطورة
              </div>
              <div class="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full">
                <span class="font-semibold">{{ mediumSeverityCount }}</span> متوسطة الخطورة
              </div>
              <div class="bg-green-100 text-green-800 px-3 py-1 rounded-full">
                <span class="font-semibold">{{ lowSeverityCount }}</span> منخفضة الخطورة
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Map and Side Panel -->
    <section class="py-8">
      <div class="container mx-auto px-4">
        <div class="max-w-7xl mx-auto">
          <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <!-- Map Area -->
            <div class="lg:col-span-2">
              <div class="card p-6">
                <h2 class="text-2xl font-bold text-gray-800 mb-6">خريطة الحوادث المناخية</h2>
                
                <!-- Map Placeholder with Interactive Points -->
                <div class="relative bg-gradient-to-br from-green-100 to-green-200 rounded-lg h-96 overflow-hidden">
                  <!-- Map Background -->
                  <div class="absolute inset-0 bg-gradient-to-br from-green-100 to-green-200"></div>
                  
                  <!-- Interactive Points -->
                  <div 
                    v-for="incident in filteredIncidents" 
                    :key="incident.id"
                    @click="selectIncident(incident)"
                    class="absolute cursor-pointer transform transition-all duration-300 hover:scale-110"
                    :style="{ 
                      left: incident.mapX + '%', 
                      top: incident.mapY + '%' 
                    }"
                  >
                    <div 
                      class="w-6 h-6 rounded-full border-2 border-white shadow-lg flex items-center justify-center"
                      :class="getSeverityColor(incident.severity)"
                    >
                      <div class="w-3 h-3 rounded-full bg-white"></div>
                    </div>
                    
                    <!-- Tooltip -->
                    <div class="absolute bottom-8 left-1/2 transform -translate-x-1/2 bg-black text-white text-xs px-2 py-1 rounded opacity-0 hover:opacity-100 transition-opacity whitespace-nowrap">
                      {{ incident.title }}
                    </div>
                  </div>
                  
                  <!-- Map Legend -->
                  <div class="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm rounded-lg p-4">
                    <h4 class="font-semibold text-gray-800 mb-2">مفتاح الخريطة</h4>
                    <div class="space-y-1 text-sm">
                      <div class="flex items-center gap-2">
                        <div class="w-3 h-3 bg-red-500 rounded-full"></div>
                        <span>عالية جداً</span>
                      </div>
                      <div class="flex items-center gap-2">
                        <div class="w-3 h-3 bg-orange-500 rounded-full"></div>
                        <span>عالية</span>
                      </div>
                      <div class="flex items-center gap-2">
                        <div class="w-3 h-3 bg-yellow-500 rounded-full"></div>
                        <span>متوسطة</span>
                      </div>
                      <div class="flex items-center gap-2">
                        <div class="w-3 h-3 bg-green-500 rounded-full"></div>
                        <span>منخفضة</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <!-- Side Panel -->
            <div class="lg:col-span-1">
              <div class="card p-6">
                <h2 class="text-2xl font-bold text-gray-800 mb-6">تفاصيل الحادث</h2>
                
                <div v-if="selectedIncident" class="space-y-4">
                  <div>
                    <h3 class="text-lg font-semibold text-gray-800">{{ selectedIncident.title }}</h3>
                    <p class="text-sm text-gray-500">{{ selectedIncident.district }} - {{ formatDate(selectedIncident.date) }}</p>
                  </div>
                  
                  <div class="flex items-center gap-2">
                    <span class="text-sm font-medium text-gray-700">مستوى الخطورة:</span>
                    <span 
                      class="px-2 py-1 rounded-full text-xs font-medium"
                      :class="getSeverityBadgeClass(selectedIncident.severity)"
                    >
                      {{ selectedIncident.severity }}
                    </span>
                  </div>
                  
                  <div>
                    <span class="text-sm font-medium text-gray-700">عدد المتأثرين:</span>
                    <span class="text-sm text-gray-600">{{ selectedIncident.affectedPeople }} شخص</span>
                  </div>
                  
                  <div>
                    <span class="text-sm font-medium text-gray-700">نوع التهديد:</span>
                    <span class="text-sm text-gray-600">{{ selectedIncident.threatType }}</span>
                  </div>
                  
                  <div>
                    <h4 class="text-sm font-medium text-gray-700 mb-2">الوصف:</h4>
                    <p class="text-sm text-gray-600 leading-relaxed">{{ selectedIncident.description }}</p>
                  </div>
                  
                  <div>
                    <h4 class="text-sm font-medium text-gray-700 mb-2">الإجراءات المتخذة:</h4>
                    <p class="text-sm text-gray-600 leading-relaxed">{{ selectedIncident.actionsTaken }}</p>
                  </div>
                  
                  <div class="pt-4 border-t">
                    <button class="w-full btn-primary text-sm">
                      عرض التقرير الكامل
                    </button>
                  </div>
                </div>
                
                <div v-else class="text-center text-gray-500 py-8">
                  <svg class="w-16 h-16 mx-auto mb-4 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                  </svg>
                  <p>انقر على نقطة في الخريطة لعرض التفاصيل</p>
                </div>
              </div>
              
              <!-- Statistics -->
              <div class="card p-6 mt-6">
                <h3 class="text-xl font-bold text-gray-800 mb-4">إحصائيات الحوادث</h3>
                <div class="space-y-3">
                  <div class="flex justify-between items-center">
                    <span class="text-sm text-gray-600">إجمالي الحوادث</span>
                    <span class="font-semibold text-gray-800">{{ filteredIncidents.length }}</span>
                  </div>
                  <div class="flex justify-between items-center">
                    <span class="text-sm text-gray-600">إجمالي المتأثرين</span>
                    <span class="font-semibold text-gray-800">{{ totalAffectedPeople }}</span>
                  </div>
                  <div class="flex justify-between items-center">
                    <span class="text-sm text-gray-600">آخر تحديث</span>
                    <span class="font-semibold text-gray-800">{{ lastUpdate }}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Reports Section -->
    <section class="py-16 bg-gradient-to-r from-primary-green/10 to-accent-yellow/10">
      <div class="container mx-auto px-4">
        <div class="max-w-6xl mx-auto">
          <div class="text-center mb-12">
            <h2 class="text-3xl font-bold text-gray-800 mb-4">التقارير الدورية</h2>
            <p class="text-lg text-gray-600">تقارير تلقائية حول الحوادث المسجلة ومستويات التهديد</p>
          </div>
          
          <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div class="card p-6 text-center">
                <div class="w-16 h-16 bg-gradient-to-br from-primary-green/20 to-accent-yellow/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg class="w-8 h-8 text-primary-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z"></path>
                </svg>
              </div>
              <h3 class="text-xl font-semibold text-gray-800 mb-2">تقرير الإنذار المبكر</h3>
              <p class="text-gray-600 mb-4">تقرير أسبوعي عن التهديدات المناخية الجديدة</p>
              <button class="btn-primary">تحميل التقرير</button>
            </div>
            
            <div class="card p-6 text-center">
              <div class="w-16 h-16 bg-gradient-to-br from-accent-yellow/20 to-primary-green/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg class="w-8 h-8 text-accent-yellow" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path>
                </svg>
              </div>
              <h3 class="text-xl font-semibold text-gray-800 mb-2">تقرير إحصائي شهري</h3>
              <p class="text-gray-600 mb-4">تحليل شامل للحوادث والإحصائيات الشهرية</p>
              <button class="btn-primary">تحميل التقرير</button>
            </div>
            
            <div class="card p-6 text-center">
              <div class="w-16 h-16 bg-gradient-to-br from-primary-green/20 to-accent-yellow/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg class="w-8 h-8 text-primary-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"></path>
                </svg>
              </div>
              <h3 class="text-xl font-semibold text-gray-800 mb-2">تقرير التقدم</h3>
              <p class="text-gray-600 mb-4">متابعة الإجراءات المتخذة ونتائجها</p>
              <button class="btn-primary">تحميل التقرير</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { ref, computed } from 'vue'

export default {
  name: 'ClimateMap',
  setup() {
    const selectedDistrict = ref('')
    const selectedThreatType = ref('')
    const selectedSeverity = ref('')
    const selectedAffectedRange = ref('')
    const searchQuery = ref('')
    const selectedIncident = ref(null)
    
    const incidents = [
      {
        id: 1,
        title: 'جفاف شديد في قرية النخيل',
        district: 'المعافر',
        threatType: 'جفاف',
        severity: 'عالية جداً',
        affectedPeople: 350,
        date: '2024-01-15',
        mapX: 25,
        mapY: 30,
        description: 'انخفاض حاد في منسوب المياه الجوفية مما أدى إلى جفاف الآبار وعدم توفر مياه الشرب',
        actionsTaken: 'تم توزيع خزانات مياه مؤقتة وتنظيم قوافل المياه من المناطق المجاورة'
      },
      {
        id: 2,
        title: 'فيضانات في وادي الشمايتين',
        district: 'الشمايتين',
        threatType: 'فيضانات',
        severity: 'عالية',
        affectedPeople: 180,
        date: '2024-01-12',
        mapX: 60,
        mapY: 45,
        description: 'فيضانات مفاجئة بسبب الأمطار الغزيرة أدت إلى تدمير المنازل والمزارع',
        actionsTaken: 'إخلاء السكان إلى مناطق آمنة وتقديم مساعدات إنسانية عاجلة'
      },
      {
        id: 3,
        title: 'تلوث مياه الآبار',
        district: 'المظفر',
        threatType: 'تلوث المياه',
        severity: 'متوسطة',
        affectedPeople: 120,
        date: '2024-01-10',
        mapX: 40,
        mapY: 60,
        description: 'تلوث مياه الآبار بسبب تسرب مياه الصرف الصحي',
        actionsTaken: 'تنظيف الآبار وتوفير مرشحات مياه مؤقتة'
      },
      {
        id: 4,
        title: 'تدهور التربة الزراعية',
        district: 'القاهرة',
        threatType: 'تدهور التربة',
        severity: 'منخفضة',
        affectedPeople: 80,
        date: '2024-01-08',
        mapX: 70,
        mapY: 25,
        description: 'تدهور خصوبة التربة بسبب الاستخدام المفرط للمبيدات',
        actionsTaken: 'برنامج تدريبي للمزارعين حول الزراعة المستدامة'
      },
      {
        id: 5,
        title: 'إزالة الغابات',
        district: 'صالة',
        threatType: 'إزالة الغابات',
        severity: 'عالية',
        affectedPeople: 200,
        date: '2024-01-05',
        mapX: 80,
        mapY: 70,
        description: 'قطع جائر للأشجار مما أدى إلى تآكل التربة',
        actionsTaken: 'حملة تشجير وتوعية حول أهمية الحفاظ على الغابات'
      }
    ]
    
    const filteredIncidents = computed(() => {
      let filtered = incidents
      
      if (selectedDistrict.value) {
        filtered = filtered.filter(incident => incident.district === selectedDistrict.value)
      }
      
      if (selectedThreatType.value) {
        filtered = filtered.filter(incident => incident.threatType === selectedThreatType.value)
      }
      
      if (selectedSeverity.value) {
        filtered = filtered.filter(incident => incident.severity === selectedSeverity.value)
      }
      
      if (selectedAffectedRange.value) {
        const [min, max] = selectedAffectedRange.value.split('-').map(Number)
        if (max) {
          filtered = filtered.filter(incident => 
            incident.affectedPeople >= min && incident.affectedPeople <= max
          )
        } else {
          filtered = filtered.filter(incident => incident.affectedPeople >= min)
        }
      }
      
      if (searchQuery.value) {
        const query = searchQuery.value.toLowerCase()
        filtered = filtered.filter(incident => 
          incident.title.toLowerCase().includes(query) ||
          incident.description.toLowerCase().includes(query) ||
          incident.district.toLowerCase().includes(query)
        )
      }
      
      return filtered
    })
    
    const highSeverityCount = computed(() => 
      filteredIncidents.value.filter(incident => 
        incident.severity === 'عالية' || incident.severity === 'عالية جداً'
      ).length
    )
    
    const mediumSeverityCount = computed(() => 
      filteredIncidents.value.filter(incident => incident.severity === 'متوسطة').length
    )
    
    const lowSeverityCount = computed(() => 
      filteredIncidents.value.filter(incident => incident.severity === 'منخفضة').length
    )
    
    const totalAffectedPeople = computed(() => 
      filteredIncidents.value.reduce((total, incident) => total + incident.affectedPeople, 0)
    )
    
    const lastUpdate = computed(() => {
      const latestDate = Math.max(...incidents.map(incident => new Date(incident.date).getTime()))
      return new Date(latestDate).toLocaleDateString('ar-SA')
    })
    
    const getSeverityColor = (severity) => {
      switch (severity) {
        case 'عالية جداً': return 'bg-red-500'
        case 'عالية': return 'bg-orange-500'
        case 'متوسطة': return 'bg-yellow-500'
        case 'منخفضة': return 'bg-green-500'
        default: return 'bg-gray-500'
      }
    }
    
    const getSeverityBadgeClass = (severity) => {
      switch (severity) {
        case 'عالية جداً': return 'bg-red-100 text-red-800'
        case 'عالية': return 'bg-orange-100 text-orange-800'
        case 'متوسطة': return 'bg-yellow-100 text-yellow-800'
        case 'منخفضة': return 'bg-green-100 text-green-800'
        default: return 'bg-gray-100 text-gray-800'
      }
    }
    
    const selectIncident = (incident) => {
      selectedIncident.value = incident
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
      selectedDistrict,
      selectedThreatType,
      selectedSeverity,
      selectedAffectedRange,
      searchQuery,
      selectedIncident,
      incidents,
      filteredIncidents,
      highSeverityCount,
      mediumSeverityCount,
      lowSeverityCount,
      totalAffectedPeople,
      lastUpdate,
      getSeverityColor,
      getSeverityBadgeClass,
      selectIncident,
      formatDate
    }
  }
}
</script>
