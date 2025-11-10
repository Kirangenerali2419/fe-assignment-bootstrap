<template>
  <div class="min-h-screen bg-gray-50">
    <!-- Header -->
    <header class="bg-white shadow-sm border-b">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex justify-between items-center h-16">
          <div class="flex items-center">
            <div class="text-orange-500 font-bold text-xl">KIRATECH</div>
          </div>
          <div class="flex items-center space-x-4">
            <button class="p-2 text-gray-400 hover:text-gray-600">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-5 5-5-5h5v-12h5v12z"></path>
              </svg>
            </button>
            <button class="p-2 text-gray-400 hover:text-gray-600">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"></path>
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
              </svg>
            </button>
            <button class="p-2 text-gray-400 hover:text-gray-600">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>

    <!-- Profile Section -->
    <div class="bg-gradient-to-r from-cyan-400 to-cyan-500">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div class="flex items-center">
          <img src="@/assets/Avatar.png" alt="Profile" class="w-20 h-20 rounded-full border-4 border-white mr-6">
          <div class="text-white">
            <h1 class="text-2xl font-semibold">John Doe</h1>
            <p class="text-cyan-100">Last online: 3 days ago</p>
          </div>
          <div class="ml-auto flex space-x-3">
            <button class="bg-white text-cyan-500 px-4 py-2 rounded-md font-medium hover:bg-gray-50 flex items-center">
              <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path>
              </svg>
              Send Message
            </button>
            <button class="bg-cyan-600 text-white px-4 py-2 rounded-md font-medium hover:bg-cyan-700 flex items-center">
              <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
              </svg>
              Add Friend
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- Search Bar -->
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
      <div class="flex justify-between items-center mb-4">
        <input
          v-model="searchQuery"
          type="text"
          placeholder="Search users..."
          class="w-64 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500"
        >
        <button
          @click="refreshUsers"
          :disabled="loading"
          class="bg-cyan-500 text-white px-4 py-2 rounded-md hover:bg-cyan-600 disabled:opacity-50 flex items-center"
        >
          <svg class="w-4 h-4 mr-2" :class="{ 'animate-spin': loading }" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"></path>
          </svg>
          Refresh
        </button>
      </div>
    </div>

    <!-- User Table -->
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="bg-white shadow rounded-lg overflow-hidden">
        <table class="min-w-full divide-y divide-gray-200">
          <thead class="bg-gray-50">
            <tr>
              <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
              <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
              <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Gender</th>
              <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Country</th>
              <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Email</th>
            </tr>
          </thead>
          <tbody class="bg-white divide-y divide-gray-200">
            <tr
              v-for="user in filteredUsers"
              :key="user.login.uuid"
              @click="selectUser(user)"
              class="hover:bg-gray-50 cursor-pointer"
            >
              <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                {{ formatDate(user.registered.date) }}
              </td>
              <td class="px-6 py-4 whitespace-nowrap">
                <div class="flex items-center">
                  <img :src="user.picture.thumbnail" :alt="`${user.name.first} ${user.name.last}`" class="w-8 h-8 rounded-full mr-3">
                  <div class="text-sm font-medium text-gray-900">
                    {{ user.name.first }} {{ user.name.last }}
                  </div>
                </div>
              </td>
              <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500 capitalize">
                {{ user.gender }}
              </td>
              <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                {{ user.location.country }}
              </td>
              <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                {{ user.email }}
              </td>
            </tr>
          </tbody>
        </table>
        
        <div v-if="loading" class="text-center py-8">
          <div class="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-cyan-500"></div>
        </div>
        
        <div v-if="!loading && filteredUsers.length === 0" class="text-center py-8 text-gray-500">
          No users found
        </div>
      </div>

      <!-- Pagination -->
      <div class="flex justify-center mt-6">
        <div class="flex space-x-2">
          <button
            @click="loadPage(currentPage - 1)"
            :disabled="currentPage <= 1"
            class="px-3 py-2 text-sm bg-white border border-gray-300 rounded-md hover:bg-gray-50 disabled:opacity-50"
          >
            Previous
          </button>
          <span class="px-3 py-2 text-sm bg-cyan-500 text-white rounded-md">
            Page {{ currentPage }}
          </span>
          <button
            @click="loadPage(currentPage + 1)"
            class="px-3 py-2 text-sm bg-white border border-gray-300 rounded-md hover:bg-gray-50"
          >
            Next
          </button>
        </div>
      </div>

      <!-- Refresh Button (Bottom) -->
      <div class="flex justify-center mt-6 pb-8">
        <button
          @click="refreshUsers"
          :disabled="loading"
          class="bg-cyan-500 text-white px-6 py-2 rounded-md hover:bg-cyan-600 disabled:opacity-50"
        >
          Refresh
        </button>
      </div>
    </div>

    <!-- User Modal -->
    <UserModal :user="selectedUser" @close="selectedUser = null" />
  </div>
</template>

<script setup lang="ts">
import { computed, onMounted, ref } from 'vue'
import { useUsersStore } from '@/stores/users'
import UserModal from './UserModal.vue'
import type { User } from '@/stores/users'

const usersStore = useUsersStore()
const selectedUser = ref<User | null>(null)

const loading = computed(() => usersStore.loading)
const filteredUsers = computed(() => usersStore.filteredUsers)
const currentPage = computed(() => usersStore.currentPage)

const searchQuery = computed({
  get: () => usersStore.searchQuery,
  set: (value: string) => usersStore.setSearchQuery(value)
})

const selectUser = (user: User) => {
  selectedUser.value = user
}

const refreshUsers = () => {
  usersStore.fetchUsers(currentPage.value)
}

const loadPage = (page: number) => {
  usersStore.fetchUsers(page)
}

const formatDate = (dateString: string) => {
  return new Date(dateString).toLocaleDateString('en-US', {
    day: '2-digit',
    month: 'short',
    year: 'numeric'
  })
}

onMounted(() => {
  usersStore.fetchUsers()
})
</script>