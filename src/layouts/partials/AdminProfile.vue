<template>
	<div class="layout-profile">
		<div>
			<img src="../../assets/images/profile.jpg" alt="" />
		</div>
		<button class="p-link layout-profile-link" @click="onClick">
			<span class="username">MMSK</span>
			<i class="pi pi-fw pi-cog"></i>
		</button>
        <transition name="layout-submenu-wrapper">
            <ul v-show="expanded">
                <li><button class="p-link"><i class="pi pi-fw pi-user"></i><span>Account</span></button></li>
                <li><button class="p-link"><i class="pi pi-fw pi-inbox"></i><span>Notifications</span><span class="menuitem-badge">2</span></button></li>
                <li><button class="p-link" @click="logout"><i class="pi pi-fw pi-power-off"></i><span>Logout</span></button></li>
            </ul>
        </transition>
		
	</div>
</template>

<script>
import { mapActions } from 'vuex';
	export default {
		data() {
			return {
				expanded: false
			}
		},
		methods: {
			...mapActions({
					signOut: 'auth/signOut'
			}),
			onClick(event){
				this.expanded = !this.expanded;
				event.preventDefault();
			},
			logout() {
				this.signOut().then((data) => {
					this.$router.push('/login');
				}).catch(e => {if(e) console.log(e)})
			}
		}
	}
</script>

<style scoped>

</style>