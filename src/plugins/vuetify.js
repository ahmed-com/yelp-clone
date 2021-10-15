import Vue from "vue";
import Vuetify from "vuetify/lib/framework";
import VueI18n from "vue-i18n"

import ar from 'vuetify/lib/locale/ar';
import en from 'vuetify/lib/locale/en';

Vue.use(Vuetify);
Vue.use(VueI18n)

const messages = {
    en: {
        $vuetify: {
            headerLinks: {
                signUp: "Sign Up",
                login: "Log In",
                yelpForBusiness: "Yelp For Business",
                talk: "Talk",
                events: "Events",
                writeReview: "Write A Review"
            },

            exampleServices: {
                cloth: "Cloth",
                fabric: "Fabric",
                books: "Books",
                grocery: "Grocery"
            },

            mainContent: {
                category: "Category"
            }
        }
    },

    ar: {
        $vuetify: {
            headerLinks: {
                signUp: "انشاء حساب",
                login: "تسجيل دخول",
                yelpForBusiness: "يلب للأعمال",
                talk: "اتكلم",
                events: "أحدات",
                writeReview: "اكتب رأيك"
            },

            exampleServices: {
                cloth: "قماش",
                fabric: "فابريك",
                books: "كتب",
                grocery: "بقاله"
            },

            mainContent: {
                category: "تصنيف"
            }
        }
    }
}

const i18n = new VueI18n({
    locale: 'ar', 
    messages, 
});



export default new Vuetify({
    rtl: false,
    lang: {
        locales: {en, ar},
        current: 'en',
    },
    t: (key, ...params) => i18n.t(key, params)
});
