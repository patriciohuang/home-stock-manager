<template>
    <v-container>
        <v-app-bar color="surface">
            <v-app-bar-title color="text">Account</v-app-bar-title>
        </v-app-bar>
        <v-avatar id="avatar" :image="auth.currentUser.photoURL" size="80"></v-avatar>
        <p class="d-flex justify-center my-6">Welcome, {{ auth.currentUser.displayName }}</p>
        <v-btn
        id="logout-button"
        block
        prepend-icon="mdi-exit-to-app"
        @click="handleSignOut"
        >
        Sign out
        </v-btn>
        <NavigationDrawers />
    </v-container>
    
</template>
<script setup>
import { getAuth, signOut } from 'firebase/auth';
import { useRouter } from 'vue-router';
import NavigationDrawers from '../components/NavigationDrawers.vue';
const router = useRouter();

let auth = getAuth();

const handleSignOut = () => {
    signOut(auth).then(()=> {
        router.push('/log-in');
    })
};
</script>
<style>
#avatar {
    margin: auto;
    display: flex;
}
#logout-button {
    position: fixed;
    bottom: 100px;
    right: 0px;
}
</style>