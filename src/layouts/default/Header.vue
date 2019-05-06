<template>
    <header class="header">
        <div class="header-left">
            <router-link :to="{name:'Dashboard'}" class="logo">
                <img src="@/assets/logo.jpg" width="100" height="auto" alt class="large">
                <img src="@/assets/logo-small.jpg" width="40" height="auto" class="small">
                <span>GSE CRM</span>
            </router-link>
        </div>
        <a id="toggle_btn" href="javascript:void(0);" v-on:click="changeClassSidebar">
            <i class="fa fa-bars"></i>
        </a>
        <a
                id="mobile_btn"
                class="mobile_btn float-left"
                href="javascript:void(0);"
                v-on:click="changeClassMobile"
        >
            <i class="fa fa-bars"></i>
        </a>
        <ul class="nav user-menu float-right">
            <li class="nav-item dropdown has-arrow">
                <a href="javascript:void(0)" @click="logout()" class="dropdown-toggle nav-link user-link"
                   data-toggle="dropdown">
                  <span class="user-img">
                    <span class="status online"></span>
                  </span>
                    <span>{{name}}</span>
                </a>
            </li>
        </ul>
    </header>
</template>

<script>
    import {RepositoryFactory} from '../../repositories/RepositoryFactory'

    const AuthsRepository = RepositoryFactory.get('auths');

    export default {
        data () {
            return {
                name: this.$store.state.auth.user.name
            };
        },
        methods: {
            changeClassSidebar () {
                let newClass = "";
                let classSidebar = this.$store.state.header.classSidebar;
                if(classSidebar == "") {
                    newClass = "mini-sidebar";
                }
                return this.$store.dispatch("UPDATE_SIDEBAR", newClass);
            },
            changeClassMobile () {
                let newClass = {};
                let classMobileOpened = this.$store.state.header.classMobile.opened;
                let classMobileSlideNav = this.$store.state.header.classMobile.slideNav;
                if(classMobileOpened == "" && classMobileSlideNav == "") {
                    newClass = {
                        opened: "opened",
                        slideNav: "slide-nav",
                        opendOverflow: "menu-opened"
                    };
                } else {
                    newClass = {
                        opened: "",
                        slideNav: "",
                        opendOverflow: ""
                    };
                }
                return this.$store.dispatch("UPDATE_CLASS_MOBILE", newClass);
            },
            logout () {
                return AuthsRepository.logout();
            }
        }
    };
</script>
