<template>
    <div class="div-main-container">
        <header class="header">
            <!--<md-icon class="md-size-1x more-horiz font-color-white">more_horiz</md-icon>-->
            <md-button @click="logout" class="md-raised button-logout">Logout</md-button>
            
        </header>
        <div class="div-main">
            <md-card>
                <md-card-header>
                    <md-avatar class="md-avatar-icon md-primary">U</md-avatar>
                    <div class="md-title text-left">Title goes here</div>
                    <div class="md-subhead text-left">Subtitle here</div>
                </md-card-header>

                <md-card-content class="text-left">Congratulations! You have successfuly registered on our website. This is your own profile page!
                </md-card-content>
            </md-card>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Profile',
        methods: {
            logout() {
                this.$router.push({name: 'Login'})
            }
        },
    }
</script>

<style scoped>
    .div-main-container {
        height: 100%;
        background-color: #ffffff;
    }
    .header {
        height: 60px;
        color: #fff;
        background-color: #B3C0D1;
        overflow: hidden;
    }

    .div-main {
        border-top: 1px solid #eee;
    }

    .chevron-left {
        height: 60px !important;
        line-height: 60px;
        float: left;
    }

    .archive, .delete, .email, .more-horiz {
        height: 60px !important;
        line-height: 60px;
        float: right;
        margin-right: 10px;
    }

    .font-color-white {
        color: #fff !important;
    }

    .button-logout {
        float: right;
        margin: 12px 8px!important;
    }
    .text-left {
        text-align: left;
    }
</style>
