<template>
    <div class="sidebar" id="sidebar" :class="classOpenedMobile">
        <div class="sidebar-inner slimscroll">
            <div id="sidebar-menu" class="sidebar-menu" v-bind:style="{'height': windowHeight + 'px' }">
                <ul>
                    <li class="menu-title">Main</li>
                    <li>
                        <router-link :to="{ name: 'Dashboard' }" exact>
                            <i class="fa fa-dashboard"></i>
                            <span>Dashboard</span>
                        </router-link>
                    </li>
                    <li v-show="checkPermission(['eventmanagement.eventmanagements.view_all','eventmanagement.eventmanagements.view_all_branch'])">
                        <router-link :to="{ name: 'EventManagement' }" exact>
                            <i class="fa fa-calendar"></i>
                            <span>Event Management</span>
                        </router-link>
                    </li>
                    <li v-show="checkPermission(['leadconversion.leadconversions.view_all','leadconversion.leadconversions.view_all_branch'])">
                        <router-link :to="{ name: 'LeadConversion' }" exact>
                            <i class="fa fa-filter"></i>
                            <span>Lead Conversion</span>
                        </router-link>
                    </li>
                    <li v-show="checkPermission(['leadconversion.schools.view'])">
                        <router-link :to="{ name: 'School' }" exact>
                            <i class="fa fa-building"></i>
                            <span>School Management</span>
                        </router-link>
                    </li>
                    <li v-show="checkPermission(['leadconversion.seflknows.view'])">
                        <router-link :to="{ name: 'SelfKnow' }" exact>
                            <i class="fa fa-star"></i>
                            <span>How you hear about us</span>
                        </router-link>
                    </li>
                    <li v-show="checkPermission(['leadconversion.partners.view'])">
                        <router-link :to="{ name: 'Partner' }" exact>
                            <i class="fa fa-handshake-o"></i>
                            <span>Partner Management</span>
                        </router-link>
                    </li>
                    <li v-show="checkPermission(['student.students.view_all','student.students.view_branch'])">
                        <router-link :to="{ name: 'Student' }" exact>
                            <i class="fa fa-graduation-cap"></i>
                            <span>Student Management</span>
                        </router-link>
                    </li>
                    <li>
                        <a href="javascript:void(0)" @click="logout()">
                            <i class="fa fa-sign-out"></i>
                            <span>Logout</span>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>
<script>
    import {RepositoryFactory} from '../../repositories/RepositoryFactory'

    const AuthsRepository = RepositoryFactory.get('auths');

    export default {
        data: function () {
            return {
                windowHeight: 0
            };
        },

        mounted () {
            this.$nextTick(function () {
                window.addEventListener("resize", this.getWindowHeight);

                //Init
                this.getWindowHeight();
            });
        },

        methods: {
            getWindowHeight (event) {
                this.windowHeight = document.documentElement.clientHeight;
            },
            logout () {
                return AuthsRepository.logout();
            },
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
            }
        },
        beforeDestroy () {
            window.removeEventListener("resize", this.getWindowHeight);
        },
        computed: {
            classOpenedMobile () {
                return this.$store.state.header.classMobile.opened;
            }
        },
        watch: {
            '$route' () {
                this.changeClassMobile();
            }
        },
    };
</script>
<style scoped>
    #sidebar .sidebar-menu {
        overflow: scroll;
    }
</style>
