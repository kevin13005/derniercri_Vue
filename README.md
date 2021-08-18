App dernier cri coté front en vue js pour afficher les articles et les pages détails correspondants


Etape 1 : creer une application vue js 2, avec vuetify et vue Axios pour recuperer les donnes de l API Wordpress

Etape 2 : Dans main.js, ajout de : 

//vue a connaissance de vue axios ainsi, et on fixe ensuite l'url de base à chercher pour l'API Wordpress
import axios from 'axios'
import VueAxios from 'vue-axios'
Vue.use(VueAxios, axios)

axios.defaults.baseURL = 'http://localhost:8001/wp-json/';

Etape 3 : ajout dans App.vue de routeur-view pour qu'il ait acces au rooter

Etape 4: dans index.js, on fixe les routes, 
1 route '/' pour l'accueil et le listing des articles (Articles.vue)
1 route '/:slug/:date pour la page detail des articles (Details.vue)
on définit des props à true pour le passage d'arguments dans l'url

Etape 5: Dans Articles.vue
on definit une methode getArticles() pour avoir les articles 
disponible sand notre Wordpress,
on appelle cette methode avec created(),
on obtient les donnees grace a data() return et l'objet articles obtenu avec notre methode,
on boucle sur le tableau articles avec v-for,

Etape 6:
on redirige vers la pages details selon l'article sur lequel on clique
avec routeur-link :to, nom de la route et parmetres a envoyer

Dans Details.vue, dans export default, on recupere avec props, les parametres voulus
Et on affiche directement les donnes definit dans le props dans le template


Acces projet :
Cloner le projet de github dans son repertoire localhost
avoir npm, et lancer npm run serve dans terminal
se diriger sur le lien donné par npm run serve dans le terminal