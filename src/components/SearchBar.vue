<template>
  <div class="flex flex-col sm:flex-row gap-4 mb-6">
    <div class="flex-1">
      <input
        v-model="searchQuery"
        type="text"
        placeholder="Search by name or email..."
        class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        @input="handleSearch"
      >
    </div>
    
    <div class="flex gap-2">
      <select
        v-model="sortBy"
        class="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        @change="handleSort"
      >
        <option value="name">Sort by Name</option>
        <option value="email">Sort by Email</option>
        <option value="age">Sort by Age</option>
      </select>
      
      <button
        @click="toggleSortOrder"
        class="px-4 py-2 bg-gray-200 hover:bg-gray-300 rounded-lg transition-colors"
        :title="sortOrder === 'asc' ? 'Sort Ascending' : 'Sort Descending'"
      >
        {{ sortOrder === 'asc' ? '↑' : '↓' }}
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const searchQuery = ref('')
const sortBy = ref<'name' | 'email' | 'age'>('name')
const sortOrder = ref<'asc' | 'desc'>('asc')

const emit = defineEmits<{
  search: [query: string]
  sort: [sortBy: 'name' | 'email' | 'age', sortOrder: 'asc' | 'desc']
}>()

const handleSearch = () => {
  emit('search', searchQuery.value)
}

const handleSort = () => {
  emit('sort', sortBy.value, sortOrder.value)
}

const toggleSortOrder = () => {
  sortOrder.value = sortOrder.value === 'asc' ? 'desc' : 'asc'
  handleSort()
}
</script>