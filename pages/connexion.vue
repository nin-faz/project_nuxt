<template>
  <div>
    <h1>Connexion</h1>
    <form @submit.prevent="connecter">
      <div>
        <label for="email">Email:</label>
        <input v-model="email" type="email" required />
      </div>
      <div>
        <label for="password">Mot de passe:</label>
        <input v-model="motDePasse" type="password" required />
      </div>
      <button type="submit">Se connecter</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: '',
      motDePasse: '',
    }
  },
  methods: {
    connecter() {
      // Logique de connexion (simulée ici)
      if (this.email && this.motDePasse) {
        // Simulez une connexion réussie
        alert('Connexion réussie !')
        // Redirection vers la page de bienvenue
        this.$router.push('/bienvenue')
      } else {
        alert('Veuillez remplir tous les champs.')
      }
    },
  },
}
</script>
