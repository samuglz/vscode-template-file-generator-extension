const Vue2Template = `<template>

</template>

<script>
export default {
    name: '#name#'
}
</script>

<style scoped></style>
`

const Vue3Template = `<template>

</template>

<script setup>

</script>

<style scoped></style>
`

module.exports = {
    Vue2: {
        template: Vue2Template,
        extension: 'vue'
    },
    Vue3: {
        template: Vue3Template,
        extension: 'vue'
    }}