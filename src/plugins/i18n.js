import VueI18n from 'vue-i18n';
import Vue from 'vue';

Vue.use(VueI18n);

const messages = {
	en: {
		headerLinks: {
			signUp: 'Sign Up',
			login: 'Log In',
			yelpForBusiness: 'Yelp For Business',
			talk: 'Talk',
			events: 'Events',
			writeReview: 'Write A Review',
		},

		drawer: {
			signUp: 'Sign Up',
			login: 'Log In',
			aboutUs: 'About Us',
		},

		exampleServices: {
			cloth: 'Cloth',
			fabric: 'Fabric',
			books: 'Books',
			grocery: 'Grocery',
		},

		mainContent: {
			category: 'Category',
		},
	},

	ar: {
		headerLinks: {
			signUp: 'انشاء حساب',
			login: 'تسجيل دخول',
			yelpForBusiness: 'يلب للأعمال',
			talk: 'اتكلم',
			events: 'أحدات',
			writeReview: 'اكتب رأيك',
		},

		drawer: {
			signUp: 'انشاء حساب',
			login: 'تسجيل دخول',
			aboutUs: 'اقرأ عنا',
		},

		exampleServices: {
			cloth: 'قماش',
			fabric: 'فابريك',
			books: 'كتب',
			grocery: 'بقاله',
		},

		mainContent: {
			category: 'تصنيف',
		},
	},
};

export default new VueI18n({
	locale: 'en',
	messages,
});
