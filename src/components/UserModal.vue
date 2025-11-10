<template>
  <div v-if="user" class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50" @click="$emit('close')">
    <div class="bg-white rounded-lg p-6 max-w-md w-full mx-4" @click.stop>
      <div class="flex justify-between items-center mb-4">
        <h3 class="text-xl font-bold text-black">{{ user.name.title }} {{ user.name.first }} {{ user.name.last }}</h3>
        <button @click="$emit('close')" class="text-gray-500 hover:text-gray-700">
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
          </svg>
        </button>
      </div>
      
      <div class="space-y-3">
        <div class="flex">
          <span class="font-semibold text-gray-300 w-20 text-[10px]">Date:</span>
          <span class="text-black ml-[14px] text-[10px]">{{ new Date(user.registered.date).toLocaleDateString() }}</span>
        </div>
        <div class="flex">
          <span class="font-semibold text-gray-300 w-20 text-[10px]">Status:</span>
          <span class="text-black ml-[14px] text-[10px]">Active</span>
        </div>
        <div class="flex">
          <span class="font-semibold text-gray-300 w-20 text-[10px]">Gender:</span>
          <span class="text-black ml-[14px] capitalize text-[10px]">{{ user.gender }}</span>
        </div>
        <div class="flex">
          <span class="font-semibold text-gray-300 w-20 text-[10px]">Country:</span>
          <span class="text-black ml-[14px] text-[10px]">{{ user.location.country }}</span>
        </div>
        <div class="flex">
          <span class="font-semibold text-gray-300 w-20 text-[10px]">Email:</span>
          <span class="text-black ml-[14px] text-[10px]">{{ user.email }}</span>
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