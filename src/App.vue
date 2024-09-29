<script setup>
import { RouterLink, RouterView } from 'vue-router';
</script>

<template>
  <div class="app">
    <header>
      <div class="wrapper">
        <nav>
          <RouterLink to="/">Product</RouterLink>
          <RouterLink to="/profile">Profile</RouterLink>
        </nav>
      </div>
    </header>
    <div class="content">
      <RouterView />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.app {
  margin-left: 50px;

  header {
    line-height: 1.5;
    place-items: center;

    nav {
      width: 100%;
      text-align: center;
      margin-top: 2rem;
      text-align: left;
      font-size: 1rem;

      a {
        color: var(--color-secondary);
        display: inline-block;
        padding: 0 1rem;

        &:not(:first-child) {
          border-left: 1px solid var(--color-border);
        }

        &.router-link-exact-active {
          color: var(--color-primary);

          &:hover {
            background-color: transparent;
          }
        }
      }
    }
  }

  .content {
    margin-top: 40px;
  }
}
</style>
