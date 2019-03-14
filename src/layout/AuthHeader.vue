<template>
  <header class="header-global auth-header-container">
    <base-nav class="navbar-main" transparent type="" effect="light" expand>
        <router-link
            slot="brand"
            class="navbar-brand mr-lg-5"
            to="profile"
        >
            <img src="img/brand/white.png" alt="IBD Logo">
        </router-link>

        <div class="row" slot="content-header" slot-scope="{closeMenu}">
            <div class="col-6 collapse-brand">
                <a href="https://demos.creative-tim.com/vue-argon-design-system/documentation/">
                    <img src="img/brand/blue.png">
                </a>
            </div>
            <div class="col-6 collapse-close">
                <close-button @click="closeMenu"></close-button>
            </div>
        </div>

        <ul class="navbar-nav navbar-nav-hover align-items-lg-center">
            <router-link slot="brand" class="navbar-brand mr-lg-5" to="relationships">
                Relationships
            </router-link>

            <router-link slot="brand" class="navbar-brand mr-lg-5" to="credentials">
                Credentials
            </router-link>

            <router-link slot="brand" class="navbar-brand mr-lg-5" to="messages">
                Messages
            </router-link>
        </ul>
        <!-- <ul class="navbar-nav navbar-nav-hover">
            <base-dropdown tag="li" class="nav-item">
                <a slot="title" href="#" class="nav-link" data-toggle="dropdown" role="button">
                    <i class="ni ni-collection d-lg-none"></i>
                    <span class="nav-link-inner--text">Examples</span>
                </a>
                <router-link to="/landing" class="dropdown-item">Landing</router-link>
                <router-link to="/profile" class="dropdown-item">Profile</router-link>
                <router-link to="/login" class="dropdown-item">Login</router-link>
                <router-link to="/register" class="dropdown-item">Register</router-link>
            </base-dropdown>
        </ul> -->
        <ul class="navbar-nav navbar-nav-hover align-items-lg-center ml-lg-auto">
            <base-dropdown tag="li" class="nav-item d-none d-lg-block ml-lg-4">
                <!-- <a slot="title" href="#" class="btn btn-neutral btn-icon" data-toggle="dropdown" role="button"> -->
                <a slot="title" href="#" class="btn btn-neutral btn-icon" data-toggle="dropdown" role="button">
                    <i class="ni ni-circle-08"></i>
                    <span class="nav-link-inner--text">User</span>
                </a>
                <router-link to="profile" class="dropdown-item">Profile</router-link>
                <router-link to="settings" class="dropdown-item">Settings</router-link>
                <router-link to="/" class="dropdown-item">Logout</router-link>
            </base-dropdown>
        </ul>
    </base-nav>
  </header>
</template>
<script>
import BaseNav from '@/components/ct/BaseNav.vue';
import BaseDropdown from '@/components/ct/BaseDropdown.vue';
import CloseButton from '@/components/ct/CloseButton.vue';

export default {
  components: {
    BaseNav,
    CloseButton,
    BaseDropdown
  }
};
</script>
<style>
</style>
