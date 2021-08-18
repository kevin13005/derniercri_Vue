<template>
    <div class="details">
        <h1>Détails d'un article</h1>
        <div class="param">
            <p>nom du pokemon et son lien api :{{ slug }}</p>
            <p>date appel api : {{ date }}</p>
        </div>  
    </div>
</template>

<script>
export default {
    props: ['slug', 'date']
}
</script>

<style>
.details{
    background-color: green;
    margin: auto;
    height: 800px;
    width: 70%;
}
.details h1 {
    text-align: center;
    color: white;
    padding-bottom: 50px;
}
.details .param{
    background-color: black;
    color: white;
    height: 300px;
    width: 40%;
    margin-top: 30px;
    margin: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
}
.details .param p{
    text-align: center;
}
</style>
