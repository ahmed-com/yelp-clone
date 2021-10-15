<template>
  <v-app>
    <v-navigation-drawer
        v-if="isMobileDevice"
        v-model="drawer"
        app
    >
      <v-list>
        <v-list-item
          v-for="[icon, text] in drawerLinks"
          :key="icon"
          link
        >
          <v-list-item-icon>
            <v-icon>{{ icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ text }}</v-list-item-title>
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
          v-for="link in headerLinks"
          class="header-link"
          :key="link"
          href="#"
          text
        >
          {{ link }}
        </a>
        </v-col>
        <v-spacer></v-spacer>
        <v-col cols="3">
          <a href="#" class="header-link">Log In</a>
          <a href="#" class="header-btn">Sign Up</a>
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
        <v-col cols="12">
          <!-- <YelpSearch class="search-input"
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
                {{ service.label }}
              </a>
            </span>
          </v-col>
        </v-row>
      </v-container>
    </v-parallax>
    <v-main >
      <v-container>
        <v-row>
          <template v-for="n in 4">
            <v-col
              :key="n"
              class="mt-2"
              cols="12"
            >
              <strong>Category {{ n }}</strong>
            </v-col>

            <v-col
              v-for="j in 6"
              :key="`${n}${j}`"
              cols="6"
              md="2"
            >
              <v-sheet height="150" class="grey lighten-2"></v-sheet>
            </v-col>
          </template>
        </v-row>
      </v-container>
    </v-main>

    <v-footer
    padless
    class="grey  lighten-4 text-center"
  >
  <v-container>
    <v-row align="center">
      <v-col >
          <v-card-text >
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ab vero expedita, minima dolore, dolorum nesciunt, asperiores consectetur eos blanditiis mollitia excepturi placeat accusantium odit! Blanditiis ducimus omnis tenetur rerum exercitationem eaque nisi est adipisci, molestiae aliquid officia modi incidunt ut, aperiam accusamus voluptates nostrum alias quae dolor accusantium perspiciatis voluptas!
          </v-card-text>
        </v-col>
        <v-col md="2">
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
            {{ new Date().getFullYear() }} — <strong>Yelp</strong>
          </v-card-text>

        </v-col>
      </v-row>
    </v-container>
  </v-footer>
  </v-app>
</template>

<script>
import YelpSearch from './components/YelpSearch.vue'

export default {
  name: "App",

  data: function(){
    return ({
      drawer: false,

      drawerLinks :[
        ['mdi-account-plus', 'Sign Up'],
        ['mdi-login', 'Log In'],
        ['mdi-information', 'About Us']
      ],

      headerLinks: [
        'Write a Review',
        'Events',
        // this.$vuetify.t("hello"),
        'Talk',
        'Yelp for Business',
      ],
      serviceSuggestions: [
        "restaurants",
        "plumbers",
        "bla bla bla"
      ],

      exampleServices: [
        { label: "Cloth", icon: "mdi-hanger", link: "#"},
        { label: "Fabric", icon: "mdi-tshirt-crew", link: "#"},
        { label: "Books", icon: "mdi-bookshelf", link: "#"},
        { label: "Grocery", icon: "mdi-cart", link: "#"}
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

      this.$vuetify.lang.current = lang;
      this.$vuetify.rtl = rtl;
    }
  },

  components: {
    YelpSearch
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

/* .select-lang{

} */
</style>