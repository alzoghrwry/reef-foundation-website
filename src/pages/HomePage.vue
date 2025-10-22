<template>
  <div class="min-h-screen">
    <!-- Hero Section -->
    <section class="relative min-h-screen flex items-center justify-center overflow-hidden">
      <!-- Background Images -->
      <div class="absolute inset-0 z-0">
        <div class="hero-slider">
          <div v-for="(slide, index) in heroSlides" :key="index" 
               class="absolute inset-0 transition-opacity duration-1000"
               :class="{ 'opacity-100': currentSlide === index, 'opacity-0': currentSlide !== index }">
            <img :src="slide.image" :alt="slide.title" class="w-full h-full object-cover">
            <div class="absolute inset-0 bg-black bg-opacity-40"></div>
          </div>
        </div>
      </div>
      
      <!-- Content -->
      <div class="relative z-10 container mx-auto px-4 text-center text-white">
        <div class="max-w-4xl mx-auto">
          <h1 class="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            {{ heroSlides[currentSlide].title }}
          </h1>
          <p class="text-xl md:text-2xl mb-8 leading-relaxed opacity-90">
            {{ heroSlides[currentSlide].description }}
          </p>
          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <button class="btn-primary bg-gradient-to-r from-primary-green to-reef-green-600 hover:from-accent-yellow hover:to-reef-yellow-600 text-white px-8 py-4 rounded-xl font-bold text-lg flex items-center justify-center group shadow-2xl">
              <svg class="w-6 h-6 ml-3 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                <path d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
              </svg>
              تواصل معنا
            </button>
            <button class="btn-secondary bg-transparent border-2 border-white text-white hover:bg-white hover:text-primary-green px-8 py-4 rounded-xl font-bold text-lg flex items-center justify-center group shadow-2xl">
              <svg class="w-6 h-6 ml-3 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
              </svg>
              المزيد عنا
            </button>
          </div>
        </div>
      </div>
      
      <!-- Navigation Arrows -->
      <button @click="previousSlide" class="absolute right-4 top-1/2 transform -translate-y-1/2 z-20 bg-white/20 backdrop-blur-sm text-white p-3 rounded-full hover:bg-white/30 transition-all">
        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"/>
        </svg>
      </button>
      <button @click="nextSlide" class="absolute left-4 top-1/2 transform -translate-y-1/2 z-20 bg-white/20 backdrop-blur-sm text-white p-3 rounded-full hover:bg-white/30 transition-all">
        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
        </svg>
      </button>
      
      <!-- Slide Indicators -->
      <div class="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex space-x-2 space-x-reverse">
        <button v-for="(slide, index) in heroSlides" :key="index"
                @click="currentSlide = index"
                class="w-3 h-3 rounded-full transition-all"
                :class="currentSlide === index ? 'bg-white' : 'bg-white/50'">
        </button>
      </div>
    </section>

    <!-- نبذة عن المؤسسة -->
    <section class="py-20 bg-gradient-to-br from-light-beige to-white">
      <div class="container mx-auto px-4">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 class="text-4xl md:text-5xl font-bold text-dark-text mb-6">نبذة عن مؤسسة ريف</h2>
            <div class="w-24 h-1 bg-primary-green mb-8"></div>
            <p class="text-lg text-gray-600 mb-6 leading-relaxed">
              مؤسسة ريف للتنمية المستدامة هي منظمة مجتمعية غير ربحية تأسست عام 2016، تهدف إلى تحسين أوضاع النساء والشباب في المناطق الريفية المتضررة من الحرب والكوارث الطبيعية في اليمن.
            </p>
            <p class="text-lg text-gray-600 mb-8 leading-relaxed">
              نؤمن بأن التنمية المستدامة تبدأ من المجتمع المحلي، ونسعى لتمكين المجتمعات الريفية من خلال برامج شاملة تركز على التعليم، الصحة، الزراعة المستدامة، وتمكين المرأة.
            </p>
            <div class="flex flex-col sm:flex-row gap-4">
              <button class="btn-primary">
                <svg class="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6"/>
                </svg>
                اقرأ المزيد
              </button>
              <button class="btn-secondary">
                <svg class="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1m4 0h1m-6 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
                شاهد الفيديو
              </button>
            </div>
          </div>
          <div class="relative">
            <img src="https://images.unsplash.com/photo-1500937386664-56d1dfef3854?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                 alt="مؤسسة ريف" 
                 class="rounded-xl shadow-2xl">
            <div class="absolute -bottom-6 -right-6 w-24 h-24 bg-gradient-to-br from-primary-green to-reef-green-600 rounded-full flex items-center justify-center">
              <svg class="w-12 h-12 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- الإحصائيات الحيوية -->
    <section class="py-20 bg-white">
      <div class="container mx-auto px-4">
        <div class="text-center mb-16">
          <h2 class="text-4xl md:text-5xl font-bold text-dark-text mb-4">أثرنا في الأرقام</h2>
          <div class="w-24 h-1 bg-primary-green mx-auto"></div>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div v-for="(stat, index) in impactStats" :key="index" 
               class="text-center p-6 card hover:shadow-xl transition-all duration-300">
            <div class="w-20 h-20 mx-auto mb-4 bg-gradient-to-br from-primary-green to-reef-green-600 rounded-full flex items-center justify-center shadow-lg">
              <component :is="stat.icon" class="w-10 h-10 text-white" />
            </div>
            <div class="text-4xl font-bold text-primary-green mb-2" ref="statNumbers">
              {{ stat.current }}
            </div>
            <h3 class="text-lg font-semibold text-dark-text mb-2">{{ stat.title }}</h3>
            <p class="text-gray-600">{{ stat.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- المشاريع المميزة -->
    <section class="py-20 bg-gray-50">
      <div class="container mx-auto px-4">
        <div class="text-center mb-16">
          <h2 class="text-4xl md:text-5xl font-bold text-dark-text mb-4">مشاريعنا المميزة</h2>
          <div class="w-24 h-1 bg-primary-green mx-auto mb-8"></div>
          <p class="text-xl text-gray-600 max-w-3xl mx-auto">
            نقدم مشاريع متنوعة تهدف إلى تحسين حياة المجتمعات الريفية وتمكينها من تحقيق التنمية المستدامة
          </p>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div v-for="(project, index) in featuredProjects" :key="index" 
               class="card card-hover-effect p-0 overflow-hidden">
            <div class="relative">
              <img :src="project.image" :alt="project.title" class="w-full h-48 object-cover">
              <div class="absolute top-4 right-4">
                <span class="px-3 py-1 rounded-full text-sm font-semibold text-white"
                      :class="project.status === 'مكتمل' ? 'bg-primary-green' : 'bg-accent-yellow'">
                  {{ project.status }}
                </span>
              </div>
            </div>
            <div class="p-6">
              <h3 class="text-xl font-bold text-dark-text mb-3">{{ project.title }}</h3>
              <p class="text-gray-600 mb-4 leading-relaxed">{{ project.description }}</p>
              
              <!-- Progress Circle -->
              <div class="flex items-center justify-between mb-4">
                <span class="text-sm text-gray-600">نسبة الإنجاز</span>
                <div class="flex items-center space-x-2">
                  <div class="w-16 h-16 relative">
                    <svg class="w-16 h-16 transform -rotate-90" viewBox="0 0 100 100">
                      <circle cx="50" cy="50" r="30" stroke="#e5e7eb" stroke-width="6" fill="none"/>
                      <circle cx="50" cy="50" r="30" stroke="#27AE60" stroke-width="6" fill="none" 
                              :stroke-dasharray="188.4" :stroke-dashoffset="188.4 - (188.4 * project.progress / 100)" 
                              class="transition-all duration-1000"/>
                    </svg>
                    <div class="absolute inset-0 flex items-center justify-center">
                      <span class="text-sm font-bold text-primary-green">{{ project.progress }}%</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <button class="btn-primary w-full">
                <svg class="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6"/>
                </svg>
                معرفة المزيد
              </button>
            </div>
            </div>
          </div>

        <div class="text-center mt-12">
          <button class="btn-secondary">
            <svg class="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/>
            </svg>
            عرض جميع المشاريع
          </button>
              </div>
            </div>
    </section>

    <!-- آخر الأخبار -->
    <section class="py-20 bg-white">
      <div class="container mx-auto px-4">
        <div class="text-center mb-16">
          <h2 class="text-4xl md:text-5xl font-bold text-dark-text mb-4">آخر الأخبار</h2>
          <div class="w-24 h-1 bg-primary-green mx-auto"></div>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div v-for="(news, index) in latestNews" :key="index" 
               class="card card-hover-effect overflow-hidden">
            <img :src="news.image" :alt="news.title" class="w-full h-48 object-cover">
            <div class="p-6">
              <div class="flex items-center text-sm text-gray-500 mb-3">
                <svg class="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/>
                </svg>
                {{ news.date }}
              </div>
              <h3 class="text-xl font-bold text-dark-text mb-3">{{ news.title }}</h3>
              <p class="text-gray-600 mb-4 leading-relaxed">{{ news.summary }}</p>
              <button class="text-primary-green font-semibold hover:text-primary-green transition-colors">
                اقرأ المزيد
                <svg class="w-4 h-4 inline-block mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6"/>
                    </svg>
              </button>
                    </div>
                  </div>
                </div>
      </div>
    </section>

    <!-- الفعاليات -->
    <section class="py-20 bg-gray-50">
      <div class="container mx-auto px-4">
        <div class="text-center mb-16">
          <h2 class="text-4xl md:text-5xl font-bold text-dark-text mb-4">الفعاليات </h2>
          <div class="w-24 h-1 bg-primary-green mx-auto"></div>
              </div>
              
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div v-for="(event, index) in upcomingEvents" :key="index" 
               class="card card-hover-effect overflow-hidden">
            <div class="flex">
              <img :src="event.image" :alt="event.title" class="w-48 h-32 object-cover">
              <div class="p-6 flex-1">
                <div class="flex items-center text-sm text-gray-500 mb-3">
                <svg class="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/>
                  </svg>
                  {{ event.date }}
                </div>
                <h3 class="text-xl font-bold text-dark-text mb-3">{{ event.title }}</h3>
                <p class="text-gray-600 mb-4 leading-relaxed">{{ event.summary }}</p>
                <button class="text-primary-green font-semibold hover:text-primary-green transition-colors">
                  تفاصيل أكثر
                  <svg class="w-4 h-4 inline-block mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6"/>
                </svg>
              </button>
            </div>
          </div>
                    </div>
                  </div>
                </div>
    </section>

    <!-- قصص النجاح -->
    <section class="py-20 bg-white">
      <div class="container mx-auto px-4">
        <div class="text-center mb-16">
          <h2 class="text-4xl md:text-5xl font-bold text-dark-text mb-4">قصص النجاح</h2>
          <div class="w-24 h-1 bg-primary-green mx-auto"></div>
              </div>
              
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div v-for="(story, index) in successStories" :key="index" 
               class="card card-hover-effect overflow-hidden">
            <img :src="story.image" :alt="story.title" class="w-full h-48 object-cover">
            <div class="p-6">
              <h3 class="text-xl font-bold text-dark-text mb-3">{{ story.title }}</h3>
              <p class="text-gray-600 mb-4 leading-relaxed">{{ story.summary }}</p>
              <button class="btn-primary w-full">
                <svg class="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/>
                </svg>
                قراءة المزيد
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- شركاء المؤسسة -->
    <section class="py-20 bg-gray-50">
      <div class="container mx-auto px-4">
        <div class="text-center mb-16">
          <h2 class="text-4xl md:text-5xl font-bold text-dark-text mb-4">شركاؤنا</h2>
          <div class="w-24 h-1 bg-primary-green mx-auto"></div>
        </div>
        
        <div class="relative overflow-hidden">
          <div class="flex animate-scroll space-x-8 space-x-reverse">
            <div v-for="(partner, index) in partners" :key="index" 
                 class="flex-shrink-0 w-48 h-24 bg-white rounded-lg shadow-lg flex items-center justify-center hover:shadow-xl transition-all duration-300 cursor-pointer">
              <img :src="partner.logo" :alt="partner.name" class="max-w-32 max-h-16 object-contain">
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Call to Action Section -->
   
  </div>
</template>

<script>
import { ref, onMounted, defineComponent } from 'vue'

// Icon components
const ProjectsIcon = defineComponent({
  template: `
    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"/>
    </svg>
  `
})

const UsersIcon = defineComponent({
  template: `
    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z"/>
    </svg>
  `
})

const VolunteersIcon = defineComponent({
  template: `
    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"/>
    </svg>
  `
})

const DonationsIcon = defineComponent({
  template: `
    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
    </svg>
  `
})

export default {
  name: 'HomePage',
  components: {
    ProjectsIcon,
    UsersIcon,
    VolunteersIcon,
    DonationsIcon
  },
  setup() {
    const currentSlide = ref(0)
    
    const heroSlides = ref([
      {
        title: 'نحو مستقبل أفضل للمجتمعات الريفية',
        description: 'نسعى لتمكين المجتمعات الريفية في اليمن من خلال برامج التنمية المستدامة والتعليم والصحة',
        image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80'
      },
      {
        title: 'تمكين المرأة والشباب',
        description: 'نؤمن بقوة المرأة والشباب في بناء مجتمعات قوية ومستقرة ومزدهرة',
        image: 'https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80'
      },
      {
        title: 'الزراعة المستدامة والأمن الغذائي',
        description: 'نعمل على تطوير الزراعة المستدامة وضمان الأمن الغذائي للمجتمعات الريفية',
        image: 'https://images.unsplash.com/photo-1540979388789-6cee28a1cdc9?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80'
      }
    ])
    
    const impactStats = ref([
      {
        title: 'مشاريع مكتملة',
        description: 'مشاريع تنموية شاملة',
        current: 0,
        target: 150,
        icon: 'ProjectsIcon'
      },
      {
        title: 'مستفيدين',
        description: 'أفراد استفادوا من برامجنا',
        current: 0,
        target: 25000,
        icon: 'UsersIcon'
      },
      {
        title: 'متطوعين',
        description: 'متطوعين نشطين',
        current: 0,
        target: 500,
        icon: 'VolunteersIcon'
      },
      {
        title: 'مساهمات',
        description: 'إجمالي المساهمات بالدولار',
        current: 0,
        target: 2500000,
        icon: 'DonationsIcon'
      }
    ])
    
    const featuredProjects = ref([
      {
        title: 'مشروع تعليم القرية',
        description: 'بناء وتجهيز مدرسة متكاملة لخدمة 500 طالب في المنطقة الشمالية',
        image: 'https://images.unsplash.com/photo-1500937386664-56d1dfef3854?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
        status: 'قيد التنفيذ',
        progress: 91
      },
      {
        title: 'مشروع المياه النظيفة',
        description: 'توفير مصادر مياه نظيفة لـ 10 قرى في المناطق النائية',
        image: 'https://images.unsplash.com/photo-1500937386664-56d1dfef3854?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
        status: 'مكتمل',
        progress: 100
      },
      {
        title: 'التوعية الرقمية',
        description: 'برنامج شامل لتعليم المجتمع على الاستخدام الآمن للإنترنت والتقنيات الرقمية',
        image: 'https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
        status: 'قيد التنفيذ',
        progress: 65
      }
    ])
    
    const latestNews = ref([
      {
        title: 'افتتاح مدرسة جديدة في قرية المزارع',
        summary: 'تم افتتاح مدرسة جديدة تستوعب 200 طالب في قرية المزارع بمحافظة تعز',
        image: 'https://images.unsplash.com/photo-1500937386664-56d1dfef3854?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
        date: '15 ديسمبر 2024'
      },
      {
        title: 'ورشة عمل حول الزراعة المستدامة',
        summary: 'عقدت مؤسسة ريف ورشة عمل لتدريب 50 مزارع على تقنيات الزراعة المستدامة',
        image: 'https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
        date: '12 ديسمبر 2024'
      },
      {
        title: 'توزيع مساعدات غذائية لـ 500 عائلة',
        summary: 'تم توزيع مساعدات غذائية شاملة لـ 500 عائلة في المناطق المتضررة',
        image: 'https://images.unsplash.com/photo-1500937386664-56d1dfef3854?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
        date: '10 ديسمبر 2024'
      }
    ])
    
    const upcomingEvents = ref([
      {
        title: 'مؤتمر التنمية المستدامة',
        summary: 'مؤتمر سنوي يناقش تحديات التنمية المستدامة في المناطق الريفية',
        image: 'https://images.unsplash.com/photo-1500937386664-56d1dfef3854?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
        date: '20 يناير 2025'
      },
      {
        title: 'معرض المنتجات الريفية',
        summary: 'معرض لعرض وتسويق المنتجات الريفية المحلية',
        image: 'https://images.unsplash.com/photo-1500937386664-56d1dfef3854?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
        date: '25 يناير 2025'
      }
    ])
    
    const successStories = ref([
      {
        title: 'قصة نجاح فاطمة',
        summary: 'كيف ساعدت برامجنا فاطمة في إنشاء مشروعها الصغير وتحسين دخل أسرتها',
        image: 'https://images.unsplash.com/photo-1500937386664-56d1dfef3854?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80'
      },
      {
        title: 'مدرسة الأمل',
        summary: 'قصة بناء مدرسة في قرية نائية وكيف غيرت حياة الأطفال والمجتمع',
        image: 'https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80'
      },
      {
        title: 'مشروع المياه',
        summary: 'كيف وفر مشروع المياه النظيفة الحياة الآمنة لـ 10 قرى في المنطقة',
        image: 'https://images.unsplash.com/photo-1500937386664-56d1dfef3854?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80'
      }
    ])
    
    const partners = ref([
      { name: 'منظمة الأمم المتحدة', logo: 'https://via.placeholder.com/150x80/27AE60/FFFFFF?text=UN' },
      { name: 'البنك الدولي', logo: 'https://via.placeholder.com/150x80/F2C94C/2C3E50?text=WB' },
      { name: 'اليونيسيف', logo: 'https://via.placeholder.com/150x80/325d1db3/FFFFFF?text=UNICEF' },
      { name: 'منظمة الصحة العالمية', logo: 'https://via.placeholder.com/150x80/27AE60/FFFFFF?text=WHO' },
      { name: 'برنامج الأمم المتحدة الإنمائي', logo: 'https://via.placeholder.com/150x80/F2C94C/2C3E50?text=UNDP' },
      { name: 'منظمة العمل الدولية', logo: 'https://via.placeholder.com/150x80/325d1db3/FFFFFF?text=ILO' }
    ])
    
    const nextSlide = () => {
      currentSlide.value = (currentSlide.value + 1) % heroSlides.value.length
    }
    
    const previousSlide = () => {
      currentSlide.value = currentSlide.value === 0 ? heroSlides.value.length - 1 : currentSlide.value - 1
    }
    
    const animateNumbers = () => {
      impactStats.value.forEach(stat => {
        const duration = 2000
        const steps = 60
        const increment = stat.target / steps
        let current = 0
        
        const timer = setInterval(() => {
          current += increment
          if (current >= stat.target) {
            stat.current = stat.target
            clearInterval(timer)
          } else {
            stat.current = Math.floor(current)
          }
        }, duration / steps)
      })
    }
    
    onMounted(() => {
      // Auto-slide functionality
      setInterval(nextSlide, 5000)
      
      // Animate numbers when in view
      setTimeout(animateNumbers, 1000)
      
      // إضافة تأثيرات التمرير للعناصر
      const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      }

      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fadeInUp')
          }
        })
      }, observerOptions)

      // مراقبة العناصر
      const elements = document.querySelectorAll('.card, .stat-item')
      elements.forEach(el => observer.observe(el))
    })

    return {
      currentSlide,
      heroSlides,
      impactStats,
      featuredProjects,
      latestNews,
      upcomingEvents,
      successStories,
      partners,
      nextSlide,
      previousSlide
    }
  }
}
</script>

<style scoped>
/* تأثيرات الرسوم المتحركة */
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fadeInUp {
  animation: fadeInUp 0.6s ease-out forwards;
}

/* تأثيرات إضافية */
.card-hover-effect:hover {
  transform: translateY(-5px);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
}

/* تأثيرات النص */
.gradient-text {
  background: linear-gradient(135deg, #66bb6a, #ffeb3b);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

/* تأثيرات الشركاء المتحركة */
@keyframes scroll {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-50%);
  }
}

.animate-scroll {
  animation: scroll 30s linear infinite;
}

.animate-scroll:hover {
  animation-play-state: paused;
}

/* تأثيرات السلايدر */
.hero-slider {
  position: relative;
  width: 100%;
  height: 100%;
}

/* تأثيرات الأرقام المتحركة */
.stat-number {
  transition: all 0.3s ease;
}
</style>
