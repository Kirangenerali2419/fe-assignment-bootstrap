<template>
  <div 
    class="bg-white rounded-lg shadow-md p-4 cursor-pointer hover:shadow-lg transition-shadow"
    @click="$emit('select', user)"
  >
    <div class="flex items-center space-x-4">
      <img 
        :src="user.picture.medium" 
        :alt="`${user.name.first} ${user.name.last}`"
        class="w-16 h-16 rounded-full object-cover"
      >
      <div class="flex-1">
        <h3 class="text-lg font-semibold text-gray-900">
          {{ user.name.first }} {{ user.name.last }}
        </h3>
        <p class="text-gray-600">{{ user.email }}</p>
        <p class="text-sm text-gray-500">
          {{ user.location.city }}, {{ user.location.country }}
        </p>
      </div>
      <div class="text-right">
        <p class="text-sm text-gray-500">Age</p>
        <p class="text-lg font-medium">{{ user.dob.age }}</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { User } from '@/types/User'

defineProps<{
  user: User
}>()

defineEmits<{
  select: [user: User]
}>()
</script>