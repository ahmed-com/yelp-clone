import VueI18n from 'vue-i18n';
import Vue from 'vue';

Vue.use(VueI18n);

const messages = {
	en: {
		headerLinks: {
			signUp: 'Sign Up',
			login: 'Log In',
			home: 'Home',
			aboutUs: 'About Us'
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
			home: 'الرئيسيه',
			aboutUs: 'اقرأ عنا'
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
