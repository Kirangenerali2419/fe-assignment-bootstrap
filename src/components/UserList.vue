<template>
  <div class="min-h-screen bg-gray-50">
    <!-- Header -->
    <header class="bg-white shadow-sm border-b relative">
      <div class="px-[160px]">
        <div class="flex justify-between items-center h-16">
          <div class="flex items-center">
            <img src="@/assets/Logo.png" alt="KIRATECH" class="h-10 w-auto mr-2">
            <!-- <div class="text-orange-500 font-bold text-xl">KIRATECH</div> -->
          </div>
          <div class="flex items-center space-x-4">
            <button class="p-2 text-gray-400 hover:text-gray-600">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 5.365V3m0 2.365a5.338 5.338 0 0 1 5.133 5.368v1.8c0 2.386 1.867 2.982 1.867 4.175 0 .593 0 1.292-.538 1.292H5.538C5 18 5 17.301 5 16.708c0-1.193 1.867-1.789 1.867-4.175v-1.8A5.338 5.338 0 0 1 12 5.365ZM8.733 18c.094.852.306 1.54.944 2.112a3.48 3.48 0 0 0 4.646 0c.638-.572 1.236-1.26 1.33-2.112h-6.92Z"/>
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
    <div class="relative" style="background-color: #35bad8;">
      <div class="px-[160px] pt-8 pb-4">
        <div class="flex items-center">
          <img src="@/assets/Avatar.png" alt="Profile" class="w-28 h-28 absolute -bottom-12 border border-white mr-2 object-cover">
          <div class="flex pl-32 pt-[30px] items-end">
            <div class="text-white py-0">
              <h1 class="text-3xl font-bold">John Doe</h1>
              <p class="text-cyan-100 text-[12px]">Last online: 3 days ago</p>
            </div>
            <div class="flex gap-[5px] ml-[10px]">
              <button class="bg-white text-cyan-500 px-4 h-[38px] rounded-md font-medium border hover:border-white hover:bg-transparent hover:text-white flex items-center text-[12px]">
                <svg class="w-4 h-4" fill="currentColor" stroke="currentColor" viewBox="0 0 24 24">
                  <path  stroke-linecap="round" stroke-linejoin="round" stroke-width="2"  d="M15.854.146a.5.5 0 0 1 .11.54l-5.819 14.547a.75.75 0 0 1-1.329.124l-3.178-4.995L.643 7.184a.75.75 0 0 1 .124-1.33L15.314.037a.5.5 0 0 1 .54.11ZM6.636 10.07l2.761 4.338L14.13 2.576zm6.787-8.201L1.591 6.602l4.339 2.76z"/>
                </svg>
                Send Message
              </button>
              <button class="border border-white text-white hover:text-cyan-500 px-4 h-[38px] rounded-md font-medium hover:bg-white flex items-center text-[12px]">
                <svg class="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
                </svg>
                Add Friend
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Search Bar -->
    <div class="px-[160px] py-4 pt-12">
      <div class="flex justify-between items-center mb-4">
        <input
          v-model="searchQuery"
          type="text"
          placeholder="Search users..."
          class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500 bg-transparent"
        >
        <!-- <button
          @click="refreshUsers"
          :disabled="loading"
          class="bg-cyan-500 text-white px-4 py-2 rounded-md hover:bg-cyan-600 disabled:opacity-50 flex items-center"
        >
          <svg class="w-4 h-4 mr-2" :class="{ 'animate-spin': loading }" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"></path>
          </svg>
          Refresh
        </button> -->
      </div>
    </div>

    <!-- User Table -->
    <div class="px-[160px]">
      <div class="rounded-lg overflow-hidden">
        <table class="min-w-full" style="border-spacing: 0 2px;">
          <thead>
            <tr>
              <th class="px-6 py-3 text-left text-[10px] font-extrabold text-gray-400 tracking-wider cursor-pointer hover:text-gray-600" @click="sortBy('date')">
                <div class="flex items-center">
                  Date
                  <svg v-if="sortField === 'date'" class="w-2 h-2 ml-1" fill="currentColor" viewBox="0 0 20 20">
                    <path v-if="sortDirection === 'asc'" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"/>
                    <path v-else d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z"/>
                  </svg>
                </div>
              </th>
              <th class="px-6 py-3 text-left text-[10px] font-extrabold text-gray-400 tracking-wider cursor-pointer hover:text-gray-600" @click="sortBy('name')">
                <div class="flex items-center">
                  Name
                  <svg v-if="sortField === 'name'" class="w-2 h-2 ml-1" fill="currentColor" viewBox="0 0 20 20">
                    <path v-if="sortDirection === 'asc'" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"/>
                    <path v-else d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z"/>
                  </svg>
                </div>
              </th>
              <th class="px-6 py-3 text-left text-[10px] font-extrabold text-gray-400 tracking-wider cursor-pointer hover:text-gray-600" @click="sortBy('gender')">
                <div class="flex items-center">
                  Gender
                  <svg v-if="sortField === 'gender'" class="w-2 h-2 ml-1" fill="currentColor" viewBox="0 0 20 20">
                    <path v-if="sortDirection === 'asc'" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"/>
                    <path v-else d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z"/>
                  </svg>
                </div>
              </th>
              <th class="px-6 py-3 text-left text-[10px] font-extrabold text-gray-400 tracking-wider cursor-pointer hover:text-gray-600" @click="sortBy('country')">
                <div class="flex items-center">
                  Country
                  <svg v-if="sortField === 'country'" class="w-2 h-2 ml-1" fill="currentColor" viewBox="0 0 20 20">
                    <path v-if="sortDirection === 'asc'" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"/>
                    <path v-else d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z"/>
                  </svg>
                </div>
              </th>
              <th class="px-6 py-3 text-right text-[10px] font-extrabold text-gray-400 tracking-wider cursor-pointer hover:text-gray-600" @click="sortBy('email')">
                <div class="flex items-center justify-end">
                  Email
                  <svg v-if="sortField === 'email'" class="w-2 h-2 ml-1" fill="currentColor" viewBox="0 0 20 20">
                    <path v-if="sortDirection === 'asc'" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"/>
                    <path v-else d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z"/>
                  </svg>
                </div>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr
              v-for="user in filteredUsers"
              :key="user.login.uuid"
              @click="selectUser(user)"
              class="shadow border cursor-pointer hover:border-[1.5px] hover:border-[#35bad8] rounded"
            >
              <td class="px-6 py-3 whitespace-nowrap text-xs text-gray-400">
                {{ formatDate(user.registered.date) }}
              </td>
              <td class="px-6 py-3 whitespace-nowrap">
                <div class="flex items-center">
                  <img :src="user.picture.thumbnail" :alt="`${user.name.first} ${user.name.last}`" class="w-8 h-8 rounded-full mr-3">
                  <div class="text-xs font-medium text-gray-900">
                    {{ user.name.first }} {{ user.name.last }}
                  </div>
                </div>
              </td>
              <td class="px-6 py-3 whitespace-nowrap text-xs text-gray-400 capitalize">
                {{ user.gender }}
              </td>
              <td class="px-6 py-3 whitespace-nowrap text-xs text-gray-400">
                {{ user.location.country }}
              </td>
              <td class="px-6 py-3 whitespace-nowrap text-xs text-gray-400">
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
const sortField = ref<string>('')
const sortDirection = ref<'asc' | 'desc'>('asc')

const loading = computed(() => usersStore.loading)
const filteredUsers = computed(() => {
  const users = usersStore.filteredUsers
  if (!sortField.value) return users
  
  return [...users].sort((a, b) => {
    let aVal, bVal
    
    switch (sortField.value) {
      case 'date':
        aVal = new Date(a.registered.date).getTime()
        bVal = new Date(b.registered.date).getTime()
        break
      case 'name':
        aVal = `${a.name.first} ${a.name.last}`.toLowerCase()
        bVal = `${b.name.first} ${b.name.last}`.toLowerCase()
        break
      case 'gender':
        aVal = a.gender.toLowerCase()
        bVal = b.gender.toLowerCase()
        break
      case 'country':
        aVal = a.location.country.toLowerCase()
        bVal = b.location.country.toLowerCase()
        break
      case 'email':
        aVal = a.email.toLowerCase()
        bVal = b.email.toLowerCase()
        break
      default:
        return 0
    }
    
    if (aVal < bVal) return sortDirection.value === 'asc' ? -1 : 1
    if (aVal > bVal) return sortDirection.value === 'asc' ? 1 : -1
    return 0
  })
})
const currentPage = computed(() => usersStore.currentPage)

const searchQuery = computed({
  get: () => usersStore.searchQuery,
  set: (value: string) => usersStore.setSearchQuery(value)
})

const selectUser = (user: User) => {
  selectedUser.value = user
}

const sortBy = (field: string) => {
  if (sortField.value === field) {
    sortDirection.value = sortDirection.value === 'asc' ? 'desc' : 'asc'
  } else {
    sortField.value = field
    sortDirection.value = 'asc'
  }
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