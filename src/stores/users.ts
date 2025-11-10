import { defineStore } from 'pinia'
import axios from 'axios'

export interface User {
  gender: string
  name: {
    title: string
    first: string
    last: string
  }
  location: {
    street: {
      number: number
      name: string
    }
    city: string
    state: string
    country: string
    postcode: string | number
  }
  email: string
  login: {
    uuid: string
    username: string
  }
  dob: {
    date: string
    age: number
  }
  registered: {
    date: string
    age: number
  }
  phone: string
  cell: string
  id: {
    name: string
    value: string
  }
  picture: {
    large: string
    medium: string
    thumbnail: string
  }
  nat: string
}

export const useUsersStore = defineStore('users', {
  state: () => ({
    users: [] as User[],
    loading: false,
    currentPage: 1,
    searchQuery: '',
    selectedUser: null as User | null,
    error: null as string | null,
    sortBy: 'name' as 'name' | 'email' | 'age',
    sortOrder: 'asc' as 'asc' | 'desc'
  }),

  getters: {
    filteredUsers: (state) => {
      let filtered = state.users
      
      if (state.searchQuery) {
        filtered = filtered.filter(user => 
          `${user.name.first} ${user.name.last}`.toLowerCase().includes(state.searchQuery.toLowerCase()) ||
          user.email.toLowerCase().includes(state.searchQuery.toLowerCase()) ||
          user.location.country.toLowerCase().includes(state.searchQuery.toLowerCase())
        )
      }
      
      return filtered.sort((a, b) => {
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
            return 0
        }
        
        if (typeof aValue === 'string' && typeof bValue === 'string') {
          const comparison = aValue.localeCompare(bValue)
          return state.sortOrder === 'asc' ? comparison : -comparison
        }
        
        if (typeof aValue === 'number' && typeof bValue === 'number') {
          return state.sortOrder === 'asc' ? aValue - bValue : bValue - aValue
        }
        
        return 0
      })
    }
  },

  actions: {
    async fetchUsers(page = 1) {
      this.loading = true
      this.error = null
      try {
        const response = await axios.get(`https://randomuser.me/api/?page=${page}&results=20&seed=abc`)
        this.users = response.data.results
        this.currentPage = page
      } catch (error) {
        console.error('Error fetching users:', error)
        this.error = 'Failed to fetch users. Please try again.'
      } finally {
        this.loading = false
      }
    },

    setSearchQuery(query: string) {
      this.searchQuery = query
    },

    setSelectedUser(user: User | null) {
      this.selectedUser = user
    },

    setSorting(sortBy: 'name' | 'email' | 'age', sortOrder: 'asc' | 'desc') {
      this.sortBy = sortBy
      this.sortOrder = sortOrder
    }
  }
})