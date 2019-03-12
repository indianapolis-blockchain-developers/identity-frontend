<template>
    <header class="header-global">
        <base-nav class="navbar-main" transparent type="" effect="light" expand>
            <router-link slot="brand" class="navbar-brand mr-lg-5" to="/">
                <img src="img/brand/white.png" alt="Indianapolis Blockchain Developers">
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
                <base-dropdown class="nav-item" menu-classes="dropdown-menu-xl">
                    <a slot="title" href="#" class="nav-link" data-toggle="dropdown" role="button">
                        <i class="ni ni-ui-04 d-lg-none"></i>
                        <span class="nav-link-inner--text">
                            Lumberjack Identity Project
                        </span>
                    </a>
                    <div class="dropdown-menu-inner">
                        <router-link
                            to="about"
                            class="media d-flex align-items-center"
                        >
                            <div class="icon icon-shape bg-gradient-primary rounded-circle text-white">
                                <i class="ni ni-spaceship"></i>
                            </div>
                            <div class="media-body ml-3">
                                <h6 class="heading text-primary mb-md-1">
                                    About the Project
                                </h6>
                                <p class="description d-none d-md-inline-block mb-0">
                                    Local, accessible identity solutions on the blockchain.
                                </p>
                            </div>
                        </router-link>
                        <!-- <router-link
                            to="features"
                            class="media d-flex align-items-center"
                        >
                            <div class="icon icon-shape bg-gradient-warning rounded-circle text-white">
                                <i class="ni ni-ui-04"></i>
                            </div>
                            <div class="media-body ml-3">
                                <h5 class="heading text-warning mb-md-1">Features</h5>
                                <p class="description d-none d-md-inline-block mb-0">
                                    See what we have to offer.
                                </p>
                            </div>
                        </router-link> -->
                        <router-link
                            to="roadmap"
                            class="media d-flex align-items-center"
                        >
                            <div class="icon icon-shape bg-gradient-warning rounded-circle text-white">
                                <i class="ni ni-bullet-list-67"></i>
                            </div>
                            <div class="media-body ml-3">
                                <h5 class="heading text-warning mb-md-1">Roadmap</h5>
                                <p class="description d-none d-md-inline-block mb-0">
                                    Complete, up-to-date plans showing what we are
                                    working on.
                                </p>
                            </div>
                        </router-link>
                    </div>
                </base-dropdown>
                <!-- <base-dropdown tag="li" class="nav-item">
                    <a slot="title" href="#" class="nav-link" data-toggle="dropdown" role="button">
                        <i class="ni ni-collection d-lg-none"></i>
                        <span class="nav-link-inner--text">Examples</span>
                    </a>
                    <router-link to="/landing" class="dropdown-item">Landing</router-link>
                    <router-link to="/profile" class="dropdown-item">Profile</router-link>
                    <router-link to="/login" class="dropdown-item">Login</router-link>
                    <router-link to="/register" class="dropdown-item">Register</router-link>
                </base-dropdown> -->
            </ul>
            <ul class="navbar-nav align-items-lg-center ml-lg-auto">
                <li class="nav-item">
                    <a
                        class="nav-link nav-link-icon"
                        href="https://github.com/indianapolis-blockchain-developers"
                        target="_blank" rel="noopener"
                        data-toggle="tooltip" title="Star us on Github"
                    >
                        <i class="fa fa-github"></i>
                        <span class="nav-link-inner--text d-lg-none">Github</span>
                    </a>
                </li>
                <li class="nav-item d-none d-lg-block ml-lg-4">
                    <router-link
                        to="login"
                        class="btn btn-neutral btn-icon"
                    >
                    <!-- <span class="btn-inner--icon">
                        <i class="fa fa-cloud-download mr-2"></i>
                    </span> -->
                        <span class="nav-link-inner--text">Log In</span>
                    </router-link>
                </li>
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
