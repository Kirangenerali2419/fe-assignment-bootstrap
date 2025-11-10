<template>
  <div class="min-h-screen bg-gray-50 py-8">
    <div class="max-w-6xl mx-auto px-4">
      <div class="mb-8">
        <h1 class="text-3xl font-bold text-gray-900 mb-4">User Directory</h1>
        
        <div class="flex justify-between items-center mb-6">
          <p class="text-gray-600">
            Showing {{ filteredUsers.length }} users
          </p>
          <button
            @click="refreshUsers"
            :disabled="loading"
            class="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50 transition-colors"
          >
            {{ loading ? 'Loading...' : 'Refresh' }}
          </button>
        </div>

        <SearchBar
          @search="handleSearch"
          @sort="handleSort"
        />
      </div>

      <div v-if="error" class="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-6">
        {{ error }}
      </div>

      <div v-if="loading" class="flex justify-center items-center py-12">
        <div class="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>

      <div v-else-if="filteredUsers.length === 0" class="text-center py-12">
        <p class="text-gray-500 text-lg">No users found</p>
      </div>

      <div v-else class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <UserCard
          v-for="user in filteredUsers"
          :key="user.email"
          :user="user"
          @select="selectUser"
        />
      </div>

      <UserModal
        :is-open="isModalOpen"
        :user="selectedUser"
        @close="closeModal"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import { useUsersStore } from '@/stores/users'
import UserCard from '@/components/UserCard.vue'
import UserModal from '@/components/UserModal.vue'
import SearchBar from '@/components/SearchBar.vue'
import type { User } from '@/types/User'

const usersStore = useUsersStore()
const selectedUser = ref<User | null>(null)
const isModalOpen = ref(false)

const loading = computed(() => usersStore.loading)
const error = computed(() => usersStore.error)
const filteredUsers = computed(() => usersStore.filteredUsers)

const selectUser = (user: User) => {
  selectedUser.value = user
  isModalOpen.value = true
}

const closeModal = () => {
  isModalOpen.value = false
  selectedUser.value = null
}

const refreshUsers = () => {
  usersStore.fetchUsers()
}

const handleSearch = (query: string) => {
  usersStore.setSearchQuery(query)
}

const handleSort = (sortBy: 'name' | 'email' | 'age', sortOrder: 'asc' | 'desc') => {
  usersStore.setSorting(sortBy, sortOrder)
}

onMounted(() => {
  usersStore.fetchUsers()
})
</script>