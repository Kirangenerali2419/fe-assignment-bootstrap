<template>
  <div 
    v-if="isOpen" 
    class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
    @click="closeModal"
  >
    <div 
      class="bg-white rounded-lg max-w-2xl w-full mx-4 max-h-[90vh] overflow-y-auto"
      @click.stop
    >
      <div class="p-6">
        <div class="flex justify-between items-start mb-6">
          <h2 class="text-2xl font-bold text-gray-900">User Details</h2>
          <button 
            @click="closeModal"
            class="text-gray-400 hover:text-gray-600 text-2xl"
          >
            ×
          </button>
        </div>

        <div v-if="user" class="space-y-6">
          <div class="flex items-center space-x-6">
            <img 
              :src="user.picture.large" 
              :alt="`${user.name.first} ${user.name.last}`"
              class="w-24 h-24 rounded-full object-cover"
            >
            <div>
              <h3 class="text-xl font-semibold text-gray-900">
                {{ user.name.title }} {{ user.name.first }} {{ user.name.last }}
              </h3>
              <p class="text-gray-600">{{ user.gender }}</p>
              <p class="text-gray-600">{{ user.dob.age }} years old</p>
            </div>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div class="space-y-4">
              <div>
                <h4 class="font-semibold text-gray-900 mb-2">Contact Information</h4>
                <div class="space-y-2">
                  <p class="text-gray-600">
                    <span class="font-medium">Email:</span> {{ user.email }}
                  </p>
                  <p class="text-gray-600">
                    <span class="font-medium">Phone:</span> {{ user.phone }}
                  </p>
                  <p class="text-gray-600">
                    <span class="font-medium">Cell:</span> {{ user.cell }}
                  </p>
                </div>
              </div>

              <div>
                <h4 class="font-semibold text-gray-900 mb-2">Personal Information</h4>
                <div class="space-y-2">
                  <p class="text-gray-600">
                    <span class="font-medium">Date of Birth:</span> 
                    {{ new Date(user.dob.date).toLocaleDateString() }}
                  </p>
                  <p class="text-gray-600">
                    <span class="font-medium">Nationality:</span> {{ user.nat }}
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h4 class="font-semibold text-gray-900 mb-2">Address</h4>
              <div class="text-gray-600 space-y-1">
                <p>{{ user.location.street.number }} {{ user.location.street.name }}</p>
                <p>{{ user.location.city }}, {{ user.location.state }}</p>
                <p>{{ user.location.country }} {{ user.location.postcode }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { User } from '@/types/User'

defineProps<{
  isOpen: boolean
  user: User | null
}>()

const emit = defineEmits<{
  close: []
}>()

const closeModal = () => {
  emit('close')
}
</script>