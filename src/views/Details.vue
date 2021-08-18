<template>
    <div>
        <h1>Détails d'un article</h1>
        <div>
            <p>{{ slug }}</p>
            <p>{{ date }}</p>
        </div>  
    </div>
</template>

<script>
export default {
    props: ['slug', 'date']
}
</script>


