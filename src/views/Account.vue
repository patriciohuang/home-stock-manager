<template>
    <v-container>
        <v-app-bar color="surface">
            <v-app-bar-title color="text">Account</v-app-bar-title>
        </v-app-bar>
        <p>{{ auth.email }}</p>
        <v-btn
        @click="handleSignOut"
        >
        Sing out
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