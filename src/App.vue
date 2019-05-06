<template>
    <component :is="component">
        <slot></slot>
    </component>
</template>

<script>
    import PublicLayout from "@/layouts/public/Main.vue";
    import DefaultLayout from "@/layouts/default/Main.vue";
    import LoginLayout from "@/layouts/login/Main.vue";

    export default {
        name: "App",

        components: {
            PublicLayout,
            DefaultLayout,
            LoginLayout
        },

        computed: {
            component () {
                return this.$store.state.common.layout;
            }
        },

        mounted () {
            this.$store.watch(
                state => {
                    return state.common.title;
                },
                title => {
                    document.title = title;
                },
                {
                    deep: true
                }
            );
        }
    };
</script>
<style lang="scss">
    @import '../node_modules/element-ui/lib/theme-chalk/index.css';
</style>

