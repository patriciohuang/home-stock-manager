<template>
    <section id="login">
        <h1 class="justify-start pb-4">Log into <br>your account</h1>
        <p class="py-6">Login with one of these available social accounts...</p>
        <v-btn
        class="ma-12"
        prepend-icon="mdi-google"
        @click="signInWithGoogle"
        >
        Sing in with Google
        </v-btn>
    </section>
</template>
<script setup>
import {
    getAuth,
    GoogleAuthProvider,
    signInWithPopup,
} from 'firebase/auth';
import { useRouter } from 'vue-router';

const router = useRouter()

const signInWithGoogle = ()=> {
    const provider = new GoogleAuthProvider();
    signInWithPopup(getAuth(), provider)
    .then((result) => {
        console.log(result.user)
        router.push("/home-stock");
    })
    .catch((error)=> {
        console.log(error)
    })
}
</script>
<style>
#login button {
    border-radius: 20px;
    margin: auto;
}
</style>