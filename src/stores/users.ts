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
    totalPages: 1,
    searchQuery: '',
    selectedUser: null as User | null
  }),

  getters: {
    filteredUsers: (state) => {
      if (!state.searchQuery) return state.users
      return state.users.filter(user => 
        `${user.name.first} ${user.name.last}`.toLowerCase().includes(state.searchQuery.toLowerCase()) ||
        user.email.toLowerCase().includes(state.searchQuery.toLowerCase()) ||
        user.location.country.toLowerCase().includes(state.searchQuery.toLowerCase())
      )
    }
  },

  actions: {
    async fetchUsers(page = 1) {
      this.loading = true
      try {
        const response = await axios.get(`https://randomuser.me/api/?page=${page}&results=20`)
        this.users = response.data.results
        this.currentPage = page
      } catch (error) {
        console.error('Error fetching users:', error)
      } finally {
        this.loading = false
      }
    },

    setSearchQuery(query: string) {
      this.searchQuery = query
    },

    setSelectedUser(user: User | null) {
      this.selectedUser = user
    }
  }
})