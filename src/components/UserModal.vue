<template>
  <div v-if="user" class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50" @click="$emit('close')">
    <div class="bg-white rounded-lg p-6 max-w-md w-full mx-4" @click.stop>
      <div class="flex justify-between items-center mb-4">
        <h2 class="text-xl font-semibold">User Details</h2>
        <button @click="$emit('close')" class="text-gray-500 hover:text-gray-700">
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
          </svg>
        </button>
      </div>
      
      <div class="flex items-center mb-4">
        <img :src="user.picture.large" :alt="`${user.name.first} ${user.name.last}`" class="w-20 h-20 rounded-full mr-4">
        <div>
          <h3 class="text-lg font-semibold">{{ user.name.title }} {{ user.name.first }} {{ user.name.last }}</h3>
          <p class="text-gray-600">{{ user.email }}</p>
        </div>
      </div>
      
      <div class="space-y-3">
        <div>
          <span class="font-medium">Phone:</span> {{ user.phone }}
        </div>
        <div>
          <span class="font-medium">Cell:</span> {{ user.cell }}
        </div>
        <div>
          <span class="font-medium">Location:</span> 
          {{ user.location.street.number }} {{ user.location.street.name }}, 
          {{ user.location.city }}, {{ user.location.state }}, {{ user.location.country }}
        </div>
        <div>
          <span class="font-medium">Age:</span> {{ user.dob.age }}
        </div>
        <div>
          <span class="font-medium">Username:</span> {{ user.login.username }}
        </div>
        <div>
          <span class="font-medium">Nationality:</span> {{ user.nat }}
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { User } from '@/stores/users'

defineProps<{
  user: User | null
}>()

defineEmits<{
  close: []
}>()
</script>