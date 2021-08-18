<template>
    <div>
        <h1>Les articles</h1>
        <ul>
            <li v-for="(item, index) in articles" :key="index">
                <div>
                    <router-link :to="{name: 'details', params: { slug: item.title, date: item.date }}">
                        <h1>{{ item.title }} </h1>
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
