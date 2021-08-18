<template>
    <div class="articles">
        <h1>Les articles</h1>
        <ul>
            <li v-for="(item, index) in articles" :key="index">
                <div>
                    <router-link :to="{name: 'details', params: { slug: item.content, date: item.date }}">
                        <h1>lien détail : {{ item.title }} </h1>
                    </router-link>
                        <p>{{ item.date }}</p>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    data() {
        return {
            articles: []
        }
    },
    created() {
        this.getArticles();
    },
    methods:{
        async getArticles(){
            try {
                const articlesDB = await this.axios.get('wp/v2/posts')

                await articlesDB.data.forEach(element => {
                console.log(element);
                let item = {}
                item.date = element.date;
                item.slug = element.slug;
                item.title = element.title.rendered;
                item.content = element.content.rendered;
                this.articles.push(item)
                })
            }
            catch{
                console.log(error);
            }
        }
    }
}
</script>

<style>
.articles h1{
    text-align: center;
    margin-bottom: 50px;
}
.articles ul {
    width: 70%;
    margin: auto;
}
.articles ul li{
    margin-bottom: 15px;
    display: flex;
    justify-content: center;
}
.articles ul li div{
    background-color: green;
    color: white;
    width: 60%;
    margin: auto;
}
.articles ul li div a{
    color: black;
    text-decoration: none;
}
.articles ul li div p{
    text-align: center;
}
</style>