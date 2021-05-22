<template>
     <div :class="containerClass" @click="onWrapperClick">
        <TopBar @menu-toggle="onMenuToggle" />

        <transition name="layout-sidebar">
            <div
                :class="sidebarClass"
                @click="onSidebarClick"
                v-show="isSidebarVisible()"
            >
                <div class="layout-logo">
                    <router-link to="/">
                        <img alt="Logo" :src="logo" height="80" width="80" />
                    </router-link>
                </div>

                <AppProfile />
                <AppMenu :model="menu" @menuitem-click="onMenuItemClick" />
            </div>
        </transition>

        <div class="layout-main">
            <slot></slot>
        </div>

        <AppConfig
            :layoutMode="layoutMode"
            :layoutColorMode="layoutColorMode"
            @layout-change="onLayoutChange"
            @layout-color-change="onLayoutColorChange"
        />

        <AppFooter />
    </div>
</template>
<script>
import 'primeflex/primeflex.css';
import 'prismjs/themes/prism-coy.css';
import '../assets/layout/layout.scss';
import '../assets/layout/flags/flags.css';
import AdminTopBar from '../layouts/partials/AdminTopbar.vue'
import AdminProfile from '../layouts/partials/AdminProfile.vue'
import AdminMenu from '../layouts/partials/AdminMenu.vue'
import AdminConfig from '../layouts/partials/AdminConfig.vue'
import AdminFooter from '../layouts/partials/AdminFooter.vue'


export default{
    name:'AdminLayout',
    components: {
        TopBar: AdminTopBar,
        AppProfile: AdminProfile,
        AppMenu: AdminMenu,
        AppConfig: AdminConfig,
        AppFooter: AdminFooter,
    },
      data() {
        return {
            layoutMode: 'static',
            layoutColorMode: 'dark',
            staticMenuInactive: false,
            overlayMenuActive: false,
            mobileMenuActive: false,
            menu: [
                { label: 'Dashboard', icon: 'home', to: '/' },
                {
                    label: 'Patients',
                    icon: 'users',
                    items: [
                        {
                            label: 'Patient List',
                            icon: 'id-card',
                            to: '/patients',
                        },
                        {
                            label: 'New Patient',
                            icon: 'plus',
                            to: '/patients/new',
                        },
                    ],
                },
                {
                    label: 'Config',
                    icon: 'cogs',
                    items: [
                        {
                            label: 'Medicines',
                            icon: 'pills',
                            to: '/medicines',
                        },
                        {
                            label: 'Medicine Companies',
                            icon: 'clinic-medical',
                            to: '/medicine-companies',
                        }
                    ],
                },
            ],
        }
    },
    watch: {
        $route() {
            this.menuActive = false
            this.$toast.removeAllGroups()
        },
    },
    methods: {
        onWrapperClick() {
            if (!this.menuClick) {
                this.overlayMenuActive = false
                this.mobileMenuActive = false
            }

            this.menuClick = false
        },
        onMenuToggle() {
            this.menuClick = true

            if (this.isDesktop()) {
                if (this.layoutMode === 'overlay') {
                    if (this.mobileMenuActive === true) {
                        this.overlayMenuActive = true
                    }

                    this.overlayMenuActive = !this.overlayMenuActive
                    this.mobileMenuActive = false
                } else if (this.layoutMode === 'static') {
                    this.staticMenuInactive = !this.staticMenuInactive
                }
            } else {
                this.mobileMenuActive = !this.mobileMenuActive
            }

            event.preventDefault()
        },
        onSidebarClick() {
            this.menuClick = true
        },
        onMenuItemClick(event) {
            if (event.item && !event.item.items) {
                this.overlayMenuActive = false
                this.mobileMenuActive = false
            }
        },
        onLayoutChange(layoutMode) {
            this.layoutMode = layoutMode
        },
        onLayoutColorChange(layoutColorMode) {
            this.layoutColorMode = layoutColorMode
        },
        addClass(element, className) {
            if (element.classList) element.classList.add(className)
            else element.className += ' ' + className
        },
        removeClass(element, className) {
            if (element.classList) element.classList.remove(className)
            else
                element.className = element.className.replace(
                    new RegExp(
                        '(^|\\b)' + className.split(' ').join('|') + '(\\b|$)',
                        'gi'
                    ),
                    ' '
                )
        },
        isDesktop() {
            return window.innerWidth > 1024
        },
        isSidebarVisible() {
            if (this.isDesktop()) {
                if (this.layoutMode === 'static')
                    return !this.staticMenuInactive
                else if (this.layoutMode === 'overlay')
                    return this.overlayMenuActive
                else return true
            } else {
                return true
            }
        },
    },
    computed: {
        containerClass() {
            return [
                'layout-wrapper',
                {
                    'layout-overlay': this.layoutMode === 'overlay',
                    'layout-static': this.layoutMode === 'static',
                    'layout-static-sidebar-inactive':
                        this.staticMenuInactive && this.layoutMode === 'static',
                    'layout-overlay-sidebar-active':
                        this.overlayMenuActive && this.layoutMode === 'overlay',
                    'layout-mobile-sidebar-active': this.mobileMenuActive,
                    'p-input-filled': this.$appState.inputStyle === 'filled',
                    'p-ripple-disabled': this.$primevue.config.ripple === false,
                },
            ]
        },
        sidebarClass() {
            return [
                'layout-sidebar',
                {
                    'layout-sidebar-dark': this.layoutColorMode === 'dark',
                    'layout-sidebar-light': this.layoutColorMode === 'light',
                },
            ]
        },
        logo() {
            return this.layoutColorMode === 'dark'
                ? '../assets/images/logo-white.svg'
                : '/src/assets/images/logo.svg'
        },
    },
    beforeUpdate() {
        if (this.mobileMenuActive)
            this.addClass(document.body, 'body-overflow-hidden')
        else this.removeClass(document.body, 'body-overflow-hidden')
    },
    
}
</script>
<style lang="scss">
@import 'primevue/resources/themes/saga-blue/theme.css';
@import 'primevue/resources/primevue.min.css';
@import 'primeicons/primeicons.css';
@import '../assets/layout/layout.scss';
@import '../assets/layout/flags/flags.css';
@import '../sass/App.scss';
</style>