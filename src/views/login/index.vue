<template>
    <div class="div-main-container">
        <div class="main">
            <h1>Login</h1>
            <form novalidate class="form-login" @submit.prevent="validate">
                <md-field class="div-form-row" :class="getValidationClass('email')">
                    <label for="email">Email</label>
                    <md-input type="email" name="email" id="email" autocomplete="email" v-model="form.email"
                              :disabled="sending" required></md-input>
                    <span class="md-error" v-if="!$v.form.email.required">The email is required</span>
                    <span class="md-error" v-else-if="!$v.form.email.email">Invalid email</span>
                </md-field>

                <md-field class="div-form-row" :class="getValidationClass('password')">
                    <label>Password</label>
                    <md-input v-model="form.password" type="password" name="password" id="password" required></md-input>
                    <span class="md-error" v-if="!$v.form.password.required">The password is required</span>
                </md-field>

                <div class="div-form-row text-center">
                    <md-button type="submit" class="md-raised md-primary button-submit" :disabled="sending">Login
                    </md-button>
                </div>
                <div @click="goRegisterPage" class="div-goRegisterPage">Create Account</div>
            </form>
        </div>
    </div>
</template>

<script>
    import axios from 'axios'
    import {required, email} from 'vuelidate/lib/validators'

    export default {
        name: 'Login',
        data() {
            return {
                form: {
                    email: '',
                    password: '',
                },
                sending: false,
            }
        },
        validations: {
            form: {
                email: {
                    required,
                    email,
                },
                password: {
                    required,
                },
            },
        },
        methods: {
            getValidationClass(fieldName) {
                const field = this.$v.form[fieldName]
                if (field) {
                    return {
                        'md-invalid': field.$invalid && field.$dirty,
                    }
                }
            },
            goRegisterPage() {
                this.$router.push({name: 'Register'})
            },
            validate() {
                this.$v.$touch()
                if (!this.$v.$invalid) {
                    this.login()
                }
            },
            login() {
                this.$router.push({name: 'Profile'})
                // todo: connect server
                // this.sending = true
                // const {email, password} = this.form
                // axios({
                //     method: 'post',
                //     url: '/login',
                //     data: {
                //         email,
                //         password,
                //     },
                // }).then(res => {
                //     this.$router.push({name: 'Profile'})
                // })
            },
        },
    }
</script>

<style scoped>
    .div-main-container {
        height: 100%;
    }

    .main {
        background-color: #E9EEF3;
        position: absolute;
        height: 60%;
        width: 40%;
        top: 40%;
        left: 50%;
        transform: translate(-50%, -50%);
    }

    .form-login {
        width: 280px;
        height: 250px;
        margin: 0 auto;
    }

    .div-form-row {

    }

    .button-submit {
        width: 100%;
        margin: 0;
    }

    .div-goRegisterPage {
        padding: 10px;
        text-align: right;
        color: #00f;
    }

    .text-center {
        text-align: center;
    }
</style>
