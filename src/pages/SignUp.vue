<template>
  <div class="login-page">
    <form @submit.prevent="handleLogin" class="login-form">
      <h1 class="login-title">Criar Conta na The Graces+</h1>
      <p class="login-subtitle">Digite suas credenciais para Criar a sua conta</p>
      <inputform />
      
      <div class="form-group">
        <div class="label-titulo">
          <label for="password">Repetir Senha</label>
        </div>
        <div class="input-container password-input">
        <input 
          v-model="confirmPassword" 
          :type="showPassword ? 'text' : 'password'" 
          id="confirmPassword" 
          placeholder="******"
          required 
        />

      </div>
       <p class="login-subtitle">A senha deve ter pelo menos 8 caracteres</p>
      </div>


      <div class="terms-checkbox">
        <input 
          type="checkbox" 
          id="terms" 
          v-model="acceptTerms" 
          required 
        />
        <label for="terms" style="margin-lef: px;">
          Eu aceito os Termos de Uso
        </label>
      </div>

      <button 
        class="btns-sig-log" 
        type="submit" 
        :disabled="!acceptTerms"
        >
         Criar
      </button>
      <div> <router-link to="/login" class="forgot-password">Voltar</router-link> </div>
    </form> 
  </div>
</template>


<script>
import inputform from '@/components/form/InputForm.vue';

export default {
  name: 'SignupPage',
  components: {
    inputform
  },
  data() {
    return {
      Email: '',
      Password: '',
      confirmPassword: '',
      showPassword: false,
      acceptTerms: false
    };
  },
  methods: {
    handleLogin() {
      if (this.Password.length < 8) {
        alert('A senha deve ter pelo menos 8 caracteres.');
        return;
      }

      if (this.Password !== this.confirmPassword) {
        alert('As senhas não coincidem. Por favor, digite novamente.');
        return;
      }

      if (!this.acceptTerms) {
        alert('Você precisa aceitar os Termos de Uso para criar a conta.');
        return;
      }

      // Aqui devo pode enviar para a API
      console.log('Dados válidos:', {
        email: this.Email,
        senha: this.Password
      });
    }
  }
}
</script>