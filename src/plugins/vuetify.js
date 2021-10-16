import Vue from "vue";
import Vuetify from "vuetify/lib/framework";

import i18n from './i18n';

Vue.use(Vuetify);

export default new Vuetify({
    rtl: false,
    lang: {
        current: 'en',
        t: (key, ...params) => i18n.t(key, params)
    },
});
