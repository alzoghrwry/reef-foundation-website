<template>
  <div>
    <!-- Hero Section -->
    <section class="bg-gradient-to-br from-primary-green via-reef-green-600 to-teal-700 text-white py-20">
      <div class="container mx-auto px-4">
        <div class="max-w-4xl mx-auto text-center">
          <div class="inline-flex items-center bg-white/10 backdrop-blur-md rounded-full px-6 py-3 mb-6">
            <svg class="w-6 h-6 ml-3 text-accent-yellow" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"/>
            </svg>
            <span class="text-lg font-bold">قصص النجاح</span>
          </div>
          
          <h1 class="text-4xl md:text-6xl font-bold mb-6">
            إلهام في كل قصة نجاح
          </h1>
          <p class="text-xl md:text-2xl text-green-100 mb-8">
            قصص ملهمة من الميدان تروي عطاءنا وتأثيرنا الإيجابي
          </p>
        </div>
      </div>
    </section>

    <!-- Stories Grid -->
    <section class="py-20 bg-light-beige">
      <div class="container mx-auto px-4">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div 
            v-for="story in successStories" 
            :key="story.id"
            class="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group cursor-pointer"
            @click="openStory(story)"
          >
            <!-- Image -->
            <div class="relative h-64 overflow-hidden">
              <img 
                :src="story.image" 
                :alt="story.title"
                class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              >
              <div class="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
              
              <!-- Category Badge -->
              <div class="absolute top-4 right-4">
                <span class="bg-white/90 text-primary-green px-4 py-2 rounded-full text-sm font-bold">
                  {{ story.category }}
                </span>
              </div>
            </div>
            
            <!-- Content -->
            <div class="p-6">
              <div class="flex items-center mb-4 text-sm text-gray-500">
                <svg class="w-4 h-4 ml-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                </svg>
                {{ story.date }}
              </div>
              
              <h3 class="text-xl font-bold text-dark-text mb-3 group-hover:text-primary-green transition-colors">
                {{ story.title }}
              </h3>
              
              <p class="text-gray-600 leading-relaxed mb-4">
                {{ story.description }}
              </p>
              
              <!-- Stats -->
              <div class="flex items-center justify-between mb-4 pt-4 border-t border-gray-200">
                <div class="flex items-center text-primary-green">
                  <svg class="w-5 h-5 ml-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M16 4c0-1.11.89-2 2-2s2 .89 2 2-.89 2-2 2-2-.89-2-2zm4 18v-6h2.5l-2.54-7.63A1.5 1.5 0 0 0 18.54 8H16c-.8 0-1.54.37-2.01.99L12 11l-1.99-2.01A2.5 2.5 0 0 0 8 8H5.46c-.8 0-1.54.37-2.01.99L.96 16.5H3.5V22h2v-6h2v6h2v-6h2v6h2v-6h2v6h2z"/>
                  </svg>
                  <span class="font-bold">{{ story.impact }}</span>
                </div>
                
                <button class="text-primary-green hover:text-reef-green-600 font-bold flex items-center">
                  اقرأ المزيد
                  <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"/>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
        
        <!-- Load More Button -->
        <div class="text-center mt-12">
          <button class="btn-primary px-8 py-4 text-lg font-bold">
            <span class="flex items-center justify-center">
              <svg class="w-6 h-6 ml-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"/>
              </svg>
              المزيد من القصص
            </span>
          </button>
        </div>
      </div>
    </section>

    <!-- Impact Stats Section -->
    <section class="py-20 bg-gradient-to-br from-primary-green to-reef-green-600 text-white">
      <div class="container mx-auto px-4">
        <div class="max-w-6xl mx-auto">
          <h2 class="text-3xl md:text-4xl font-bold text-center mb-12">
            تأثيرنا بالأرقام
          </h2>
          
          <div class="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div class="text-center">
              <div class="text-4xl md:text-5xl font-bold text-accent-yellow mb-2">5,000+</div>
              <div class="text-green-100">أسرة مستفيدة</div>
            </div>
            <div class="text-center">
              <div class="text-4xl md:text-5xl font-bold text-accent-yellow mb-2">120+</div>
              <div class="text-green-100">مشروع ناجح</div>
            </div>
            <div class="text-center">
              <div class="text-4xl md:text-5xl font-bold text-accent-yellow mb-2">15</div>
              <div class="text-green-100">محافظة مستفيدة</div>
            </div>
            <div class="text-center">
              <div class="text-4xl md:text-5xl font-bold text-accent-yellow mb-2">50+</div>
              <div class="text-green-100">قصة نجاح</div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Story Modal -->
    <div v-if="selectedStory" class="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4" @click="closeStory">
      <div class="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-auto" @click.stop>
        <div class="sticky top-0 bg-white border-b border-gray-200 p-6 flex items-center justify-between">
          <h3 class="text-2xl font-bold text-dark-text">{{ selectedStory.title }}</h3>
          <button @click="closeStory" class="text-gray-500 hover:text-gray-700">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
            </svg>
          </button>
        </div>
        
        <img :src="selectedStory.image" :alt="selectedStory.title" class="w-full h-80 object-cover">
        
        <div class="p-8">
          <div class="flex items-center mb-6 text-gray-500">
            <svg class="w-5 h-5 ml-2" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
            </svg>
            {{ selectedStory.date }}
            <span class="mx-2">•</span>
            <span class="bg-primary-green/10 text-primary-green px-3 py-1 rounded-full text-sm font-bold">
              {{ selectedStory.category }}
            </span>
          </div>
          
          <div class="prose max-w-none" v-html="selectedStory.fullContent"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue'

export default {
  name: 'SuccessStories',
  setup() {
    const selectedStory = ref(null)
    
    const successStories = ref([
      {
        id: 1,
        title: 'إيصال المياه النقية لأهالي قرية ريفية',
        description: 'تم حفر بئر عميق وإنشاء شبكة مياه تغذي 200 أسرة، مما غير حياة المجتمع تماماً.',
        image: 'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=800',
        category: 'مشاريع المياه',
        date: 'يناير 2024',
        impact: '200 أسرة',
        fullContent: `
          <p class="text-lg mb-6">في قرية صغيرة في الريف اليمني، كانت النساء والأطفال يمشون لساعات طويلة لجلب الماء من مصادر ملوثة، مما كان يسبب أمراضاً خطيرة.</p>
          
          <p class="mb-6">تساعدنا مؤسسة ريف على حفر بئر عميق يصل إلى المياه الجوفية النقية، وتم بناء شبكة مياه تصل إلى كل منزل في القرية. النتيجة كانت مذهلة - لا مزيد من المشي الطويل، لا مزيد من الأمراض، والمياه النقية في متناول الجميع.</p>
          
          <div class="bg-green-50 p-6 rounded-lg mb-6">
            <h4 class="font-bold text-lg mb-3">تأثير المشروع:</h4>
            <ul class="list-disc list-inside space-y-2 text-gray-700">
              <li>200 أسرة تستفيد من المياه النقية</li>
              <li>قضاء ساعات أقل في جلب الماء</li>
              <li>انخفاض كبير في الأمراض المرتبطة بالمياه</li>
              <li>تحسين صحة الأطفال والأمهات</li>
            </ul>
          </div>
          
          <blockquote class="border-r-4 border-primary-green pr-6 italic text-gray-700">
            "بفضل مؤسسة ريف، أصبح الماء النقي متاحاً في منزلنا. لم نعد نعاني من الجهد اليومي لجلب الماء. شكراً لكم!"
            <footer class="mt-2 text-sm font-bold text-primary-green">- أم خالد، من مستفيدي المشروع</footer>
          </blockquote>
        `
      },
      {
        id: 2,
        title: 'بناء مدرسة للأطفال النازحين',
        description: 'تم بناء مدرسة تستوعب 300 طفل وطالبة، مع فصول دراسية مجهزة وملاعب.',
        image: 'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=800',
        category: 'التعليم',
        date: 'ديسمبر 2023',
        impact: '300 طفل',
        fullContent: `
          <p class="text-lg mb-6">العديد من الأطفال النازحين لم يكن لديهم مكان لتعلم وحلم بالعودة إلى مقاعد الدراسة.</p>
          
          <p class="mb-6">بجهود متواصلة، بنينا مدرسة كاملة بفصول دراسية مجهزة، مكتبة، وملعب للأطفال. الآن الأطفال ينعمون بالتعليم الذي يستحقونه.</p>
          
          <div class="bg-green-50 p-6 rounded-lg mb-6">
            <h4 class="font-bold text-lg mb-3">تأثير المشروع:</h4>
            <ul class="list-disc list-inside space-y-2 text-gray-700">
              <li>300 طفل وطالبة يعودون إلى المدرسة</li>
              <li>تعليم جيد في بيئة آمنة</li>
              <li>بناء المستقبل وحلم الأطفال</li>
              <li>تمكين المجتمع من خلال التعليم</li>
            </ul>
          </div>
        `
      },
      {
        id: 3,
        title: 'برنامج دعم سيدات الأعمال',
        description: 'تم تدريب وتقديم قروض لـ 50 امرأة لبدء مشاريع صغيرة تحسن دخل الأسرة.',
        image: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=800',
        category: 'التدريب',
        date: 'نوفمبر 2023',
        impact: '50 امرأة',
        fullContent: `
          <p class="text-lg mb-6">تحويل الأحلام إلى حقيقة - برنامج متكامل لتمكين المرأة اقتصادياً.</p>
          
          <p class="mb-6">تم تدريب 50 امرأة على إدارة المشاريع الصغيرة، وتم تقديم قروض صغيرة لبدء مشاريعهن. النتائج كانت رائعة!</p>
          
          <div class="bg-green-50 p-6 rounded-lg mb-6">
            <h4 class="font-bold text-lg mb-3">تأثير المشروع:</h4>
            <ul class="list-disc list-inside space-y-2 text-gray-700">
              <li>50 امرأة تبدأ مشاريع خاصة</li>
              <li>تحسين دخل 50 أسرة</li>
              <li>تمكين اقتصادي للمرأة</li>
              <li>قدوة للنساء الأخريات</li>
            </ul>
          </div>
        `
      },
      {
        id: 4,
        title: 'عيادة صحية مجانية للمحتاجين',
        description: 'تم افتتاح عيادة توفر خدمات صحية مجانية لآلاف المرضى كل شهر.',
        image: 'https://images.unsplash.com/photo-1551190822-a9333d879b1f?w=800',
        category: 'الصحة',
        date: 'أكتوبر 2023',
        impact: '500+ شهرياً',
        fullContent: `
          <p class="text-lg mb-6">الصحة للجميع - ليس فقط شعار، بل واقع نعيشه يومياً.</p>
          
          <p class="mb-6">تم إنشاء عيادة صحية مجهزة بكامل المعدات، توفر خدمة طبية مجانية لأكثر من 500 مريض شهرياً.</p>
          
          <div class="bg-green-50 p-6 rounded-lg mb-6">
            <h4 class="font-bold text-lg mb-3">تأثير المشروع:</h4>
            <ul class="list-disc list-inside space-y-2 text-gray-700">
              <li>500+ مريض شهرياً يحصلون على العلاج</li>
              <li>خدمة صحية مجانية للجميع</li>
              <li>إنقاذ الأرواح وتعزيز الصحة</li>
              <li>دعم المجتمع المحلي</li>
            </ul>
          </div>
        `
      },
      {
        id: 5,
        title: 'توزيع بطاقات غذائية للمحتاجين',
        description: 'برنامج شامل لتوزيع مساعدات غذائية لـ 1000 أسرة محتاجة شهرياً.',
        image: 'https://images.unsplash.com/photo-1584578166150-5dca1d5b7e13?w=800',
        category: 'الإغاثة',
        date: 'سبتمبر 2023',
        impact: '1000 أسرة',
        fullContent: `
          <p class="text-lg mb-6">الطعام ضرورة، وليس رفاهية. نساعد الأسر المحتاجة على مواجهة الجوع.</p>
          
          <p class="mb-6">برنامج متكامل لتوزيع البطاقات الغذائية التي تمكن الأسر من الحصول على احتياجاتها الغذائية الأساسية.</p>
          
          <div class="bg-green-50 p-6 rounded-lg mb-6">
            <h4 class="font-bold text-lg mb-3">تأثير المشروع:</h4>
            <ul class="list-disc list-inside space-y-2 text-gray-700">
              <li>1000 أسرة تحصل على الغذاء</li>
              <li>الحفاظ على كرامة المستفيدين</li>
              <li>دعم الأسر المحتاجة</li>
              <li>مكافحة الجوع</li>
            </ul>
          </div>
        `
      },
      {
        id: 6,
        title: 'برنامج إعادة تأهيل المساجين',
        description: 'مساعدة 30 شاباً على العودة للاندماج المجتمعي بعد انتهاء محكوميتهم.',
        image: 'https://images.unsplash.com/photo-1509909756405-be0199881695?w=800',
        category: 'التأهيل',
        date: 'أغسطس 2023',
        impact: '30 شاب',
        fullContent: `
          <p class="text-lg mb-6">إعطاء الفرصة الثانية - برنامج متكامل لإعادة التأهيل والاندماج.</p>
          
          <p class="mb-6">تم تدريب 30 شاباً على مهن مختلفة ومساعدتهم في العثور على عمل مناسب والتكيف مع المجتمع.</p>
          
          <div class="bg-green-50 p-6 rounded-lg mb-6">
            <h4 class="font-bold text-lg mb-3">تأثير المشروع:</h4>
            <ul class="list-disc list-inside space-y-2 text-gray-700">
              <li>30 شاب يعودون للمجتمع</li>
              <li>توفير فرص عمل مناسبة</li>
              <li>التأهيل والتدريب المهني</li>
              <li>نقطة تحول في حياة هؤلاء الشباب</li>
            </ul>
          </div>
        `
      }
    ])
    
    const openStory = (story) => {
      selectedStory.value = story
    }
    
    const closeStory = () => {
      selectedStory.value = null
    }
    
    return {
      successStories,
      selectedStory,
      openStory,
      closeStory
    }
  }
}
</script>

<style scoped>
.btn-primary {
  @apply bg-gradient-to-r from-primary-green to-reef-green-600 text-white hover:from-accent-yellow hover:to-yellow-500 hover:text-dark-text transition-all duration-300 rounded-full shadow-lg hover:shadow-xl transform hover:scale-105;
}
</style>

