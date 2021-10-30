<template>
  <v-app>
    <v-navigation-drawer
        v-if="isMobileDevice"
        v-model="drawer"
        app
    >
      <v-list>
        <v-list-item
          v-for="[icon, i18nKey] in drawerLinks"
          :key="icon"
          link
        >
          <v-list-item-icon>
            <v-icon>{{ icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ $t(`${i18nKey}`) }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar
      app
      absolute
      :color="isMobileDevice ? '#d32323' : 'transparent'"
      flat
      class="navigation-header"
    >
    <v-container v-if="!isMobileDevice">
      <v-row justify="center" >
        <v-col cols="1"></v-col>
        <v-col cols="6">
          <a
          v-for="i18nKey in headerLinks"
          class="header-link"
          :key="i18nKey"
          href="#"
          text
        >
          {{ $t(`${i18nKey}`) }}
        </a>
        </v-col>
        <v-spacer></v-spacer>
        <v-col cols="3">
          <a href="#" class="header-link">{{$t("headerLinks.login")}}</a>
          <a href="#" class="header-btn">{{$t("headerLinks.signUp")}}</a>
        </v-col>
        
      </v-row>
    </v-container>

    <v-container v-if="isMobileDevice">
      <v-row justify="start">
        <v-col cols="4">
          <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
        </v-col>
        <v-col cols="4">
          <v-img
              :src="require('./assets/logo.png')"
              class="my-3"
              contain
              height="25"
            />
        </v-col>
      </v-row>

      <v-row>
        <v-col cols="6">
          <!-- <YelpSearchMobile class="search-input"
            servicePlaceholder="service"
            serviceTypeahead="Restaurant"
            :serviceSuggestions="serviceSuggestions"
          /> -->
        </v-col>
      </v-row>
    </v-container>

    </v-app-bar>
    <v-parallax v-if="!isMobileDevice" height="600" :src="backgroundImg">
      
      <v-container>
        <v-row class="text-center">
          <v-col cols="12">
            <v-img
              :src="require('./assets/logo.png')"
              class="my-3"
              contain
              height="100"
            />
          </v-col>
        </v-row>
        <v-row justify="center">
          <v-col
            cols="10"
          >
          <YelpSearch class="search-input"
            servicePlaceholder="service"
            serviceTypeahead="Restaurant"
            :serviceSuggestions="serviceSuggestions"
          />
          </v-col>
        </v-row>
        <v-row justify="center">
          <v-col class="text-center" cols="10">
            <span
              v-for="service in exampleServices"
              :key="service.label"
              class="example-service"
            >
              <v-icon right dark>{{ service.icon }}</v-icon>
              <a
                class="example-service-link"
                :href="service.link"
                text
              >
                {{ $t(`${service.i18nKey}`) }}
              </a>
            </span>
          </v-col>
        </v-row>
      </v-container>
    </v-parallax>
    <v-main >
      <v-container >
        <v-row class="justify-center mb-5"> 
            <v-col
              v-for="service in exampleServices"
              :key="service.label"
            >
              <v-card
                class="mx-auto"
                max-width="250px"
              >
                <v-img
                  src="https://cdn.vuetifyjs.com/images/cards/cooking.png"
                  height="200px"
                ></v-img>

                <v-card-title class="justify-center">
                  {{$t(`${service.i18nKey}`)}}
                </v-card-title>
              </v-card>
            </v-col>
        </v-row>
      </v-container>
    </v-main>

    <v-footer
    padless
    class="grey  lighten-4 text-center"
  >
  <v-container >
    <v-row class="footer-container" align="baseline">
      <v-col cols="12" md="2">
        <h1>Brand</h1>
        <v-card-text >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. 
        </v-card-text>
      </v-col>
      <v-spacer></v-spacer>
      <v-col cols="12" md="2">
        <v-card-title class="footer-title">Make money at Gomla</v-card-title>
        <v-card-text >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. 
        </v-card-text>
      </v-col>
      <v-col cols="12" md="2">
        <v-card-title class="footer-title">About Gomla</v-card-title>
        <v-card-text >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi temporibus recusandae fuga suscipit quam iusto velit cum quae ratione perspiciatis!
        </v-card-text>
      </v-col>
        <v-col cols="6" md="2" align-self="center">
          <v-select
           :items="langs" 
           label="Language"
           v-model="selectedLang"
           item-text="label"
           item-value="abbr"
           outlined
           class="select-lang"
           ></v-select> 
        </v-col>
    </v-row>
      <v-divider></v-divider>
      <v-row>
        <v-col cols="12">
          <v-card-text >
            {{ new Date().getFullYear() }} — <strong>Gomla</strong>
          </v-card-text>

        </v-col>
      </v-row>
    </v-container>
  </v-footer>
  </v-app>
</template>

<script>
import YelpSearch from './components/YelpSearch.vue'
// import YelpSearchMobile from './components/YelpSearchMobile.vue'

export default {
  name: "App",

  data: function(){
    return ({
      drawer: false,

      drawerLinks :[
        ['mdi-account-plus', "drawer.signUp"],
        ['mdi-login', "drawer.login"],
        ['mdi-information', "drawer.aboutUs"]
      ],

      headerLinks: [
        "headerLinks.home",
        'headerLinks.aboutUs'
      ],
      serviceSuggestions: [
        "restaurants",
        "plumbers",
        "bla bla bla"
      ],

      exampleServices: [
        { i18nKey: 'exampleServices.cloth' , icon: "mdi-hanger", link: "#"},
        { i18nKey: "exampleServices.fabric", icon: "mdi-tshirt-crew", link: "#"},
        { i18nKey: "exampleServices.books", icon: "mdi-bookshelf", link: "#"},
        { i18nKey: "exampleServices.grocery", icon: "mdi-cart", link: "#"}
      ],

      langs: [
        { label: "English", abbr: "en"},
        { label: "Arabic", abbr: "ar"},
      ],

      selectedLang: { label: "English", abbr: "en"}
    })
  } ,

  computed: {
    backgroundImg(){
      return require('./assets/background-1.jpg')
    },

    isMobileDevice(){
      switch (this.$vuetify.breakpoint.name) {
          case 'xs': return true
          case 'sm': return true
          default : return false
        }
    }
  },

  watch: {
    selectedLang(lang){
      let rtl = false;
      if(lang === 'ar') rtl = true;

      this.$i18n.locale = lang;
      this.$root.$i18n.locale = lang;
      this.$vuetify.lang.current = lang;
      this.$forceUpdate()
      this.$vuetify.rtl = rtl
    }
  },

  components: {
    YelpSearch,
    // YelpSearchMobile
  }

};
</script>

<style scoped>
.header-link{
  color: #fff;
  padding: 9px 12px 10px;
  font-size: 14px;
  line-height: 1.28571em;
  font-weight: 700;
  text-decoration: none;
}

.header-link:hover{
  border-bottom: 2px solid #fff;
}

.header-btn{
  background: transparent;
  border-radius: 4px;
  border: 2px solid #fff;
  padding: 7px 24px 8px;
  color: #fff;
  text-decoration: none;
  font-weight: 700;
  font-size: 14px;
  line-height: 1.28571em;
  transition-property: background-color,background-position,background-size,border-color;
  transition-duration: .6s;
  transition-timing-function: ease;
  transition-delay: 0s;
  margin-left: 1rem;
}

.header-btn:hover{
  background: #fff;
  color: #666;
}

.navigation-header{
  padding-top: 15px;
}

.search-input{
  width: 100%;
}

.example-service-link{
  color: #fff;
  font-weight: 700;
  text-decoration: none;
  margin:0;
  padding: 0;
  border: 0;
  vertical-align: baseline;
}

.example-service-link:hover{
  text-decoration: underline;
}

.example-service{
  padding: 0 12px;
}

.footer-container{
  justify-content: center;
}

.footer-title{
  word-break: normal;
}

/* .select-lang{

} */
</style>