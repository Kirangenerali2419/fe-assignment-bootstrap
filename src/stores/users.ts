import { defineStore } from 'pinia'
import axios from 'axios'
import type { User, ApiResponse } from '@/types/User'

export const useUsersStore = defineStore('users', {
  state: () => ({
    users: [] as User[],
    loading: false,
    error: null as string | null,
    currentPage: 1,
    totalPages: 1,
    searchQuery: '',
    sortBy: 'name' as 'name' | 'email' | 'age',
    sortOrder: 'asc' as 'asc' | 'desc'
  }),

  getters: {
    filteredUsers: (state) => {
      let filtered = [...state.users]
      
      if (state.searchQuery) {
        filtered = filtered.filter(user => 
          `${user.name.first} ${user.name.last}`.toLowerCase().includes(state.searchQuery.toLowerCase()) ||
          user.email.toLowerCase().includes(state.searchQuery.toLowerCase())
        )
      }

      filtered.sort((a, b) => {
        let aValue: string | number
        let bValue: string | number

        switch (state.sortBy) {
          case 'name':
            aValue = `${a.name.first} ${a.name.last}`
            bValue = `${b.name.first} ${b.name.last}`
            break
          case 'email':
            aValue = a.email
            bValue = b.email
            break
          case 'age':
            aValue = a.dob.age
            bValue = b.dob.age
            break
          default:
            aValue = `${a.name.first} ${a.name.last}`
            bValue = `${b.name.first} ${b.name.last}`
        }

        if (state.sortOrder === 'asc') {
          return aValue > bValue ? 1 : -1
        } else {
          return aValue < bValue ? 1 : -1
        }
      })

      return filtered
    }
  },

  actions: {
    async fetchUsers(page: number = 1) {
      this.loading = true
      this.error = null
      
      try {
        const response = await axios.get<ApiResponse>(`https://randomuser.me/api/?page=${page}&results=20`)
        this.users = response.data.results
        this.currentPage = page
      } catch (error) {
        this.error = 'Failed to fetch users'
        console.error('Error fetching users:', error)
      } finally {
        this.loading = false
      }
    },

    setSearchQuery(query: string) {
      this.searchQuery = query
    },

    setSorting(sortBy: 'name' | 'email' | 'age', sortOrder: 'asc' | 'desc') {
      this.sortBy = sortBy
      this.sortOrder = sortOrder
    }
  }
})