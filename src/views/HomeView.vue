<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>

<template>
  <div class="min-h-screen bg-gray-50 flex items-center justify-center">
    <div class="max-w-md mx-auto text-center">
      <h1 class="text-4xl font-bold text-gray-900 mb-4">Welcome to User Directory</h1>
      <p class="text-gray-600 mb-8">Browse and search through our user database with detailed profiles.</p>
      <RouterLink 
        to="/users" 
        class="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium"
      >
        View Users
      </RouterLink>
    </div>
  </div>
</template>
