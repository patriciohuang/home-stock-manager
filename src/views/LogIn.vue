<template>
    <h1>User Login</h1>
    <p>Login with one of these available social accounts...</p>
    <v-btn
      color="primary"
      prepend-icon="mdi-google"
      @click="signInWithGoogle"
    >
      Sing in with Google
    </v-btn>
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