<template>
  <div>
    <h1>Inscription</h1>
    <form @submit.prevent="creerCompte">
      <div>
        <label for="username">Nom d'utilisateur:</label>
        <input v-model="nouveauNom" type="text" required />
      </div>
      <div>
        <label for="email">Email:</label>
        <input v-model="nouvelEmail" type="email" required />
      </div>
      <div>
        <label for="password">Mot de passe:</label>
        <input v-model="nouveauMdp" type="password" required />
      </div>
      <button type="submit">S'inscrire</button>
    </form>
    <p v-if="message">{{ message }}</p>
    <button v-if="message" @click="allerConnexion">Se connecter</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      nouveauNom: '',
      nouvelEmail: '',
      nouveauMdp: '',
      message: '',
    }
  },
  methods: {
    creerCompte() {
      // Simuler l'inscription
      if (this.nouveauNom && this.nouvelEmail && this.nouveauMdp) {
        this.message =
          'Inscription réussie ! Vous pouvez vous connecter maintenant.'
      } else {
        this.message =
          "Erreur lors de l'inscription. Veuillez vérifier vos informations."
      }
      // Réinitialiser le formulaire
      this.nouveauNom = ''
      this.nouvelEmail = ''
      this.nouveauMdp = ''
    },
    allerConnexion() {
      // Redirection vers la page de connexion
      this.$router.push('/connexion')
    },
  },
}
</script>

<style scoped>
/* Ajoute des styles ici si nécessaire */
</style>
