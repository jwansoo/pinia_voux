<script>
import { v4 as uuidv4 } from 'uuid'
import { useEventStore } from '../stores/EventStore'
import { useUserStore } from '../stores/UserStore'

export default {
  setup() {
    const eventStore = useEventStore()
    const userStore = useUserStore()

    return {
      eventStore,
      userStore
    }
  },
  data() {
    return {
      categories: [
        'sustainability',
        'nature',
        'animal welfare',
        'housing',
        'education',
        'food',
        'community'
      ],
      event: {
        id: '',
        category: '',
        title: '',
        description: '',
        location: '',
        date: '',
        time: '',
        organizer: ''
      }
    }
  },
  methods: {
    onSubmit() {
      const event = {
        ...this.event,
        id: uuidv4(),
        organizer: this.userStore.user
      }
      this.eventStore
        .createEvent(event)
        .then(() => {
          this.$router.push({
            name: 'EventDetails',
            params: { id: event.id }
          })
        })
        .catch(error => {
          this.$router.push({
            name: 'ErrorDisplay',
            params: { error: error }
          })
        })
    }
  }
}
</script>

<template>
  <h1>Create an event</h1>

  <div class="flex justify-center flex-col items-center mb-4">
    <form @submit.prevent="onSubmit">
      <label>Select a category: </label>
      <select class="focus:border-[#16c0b0] outline-0" v-model="event.category">
        <option
          v-for="option in categories"
          :value="option"
          :key="option"
          :selected="option === event.category"
        >
          {{ option }}
        </option>
      </select>

      <h3>Name & describe your event</h3>

      <label>Title</label>
      <input class="block w-full h-7 mb-6 py-0 px-2 focus:border-[#16c0b0] focus:outline-0" v-model="event.title" type="text" placeholder="Title" />

      <label>Description</label>
      <input class="block w-full h-7 mb-6 py-0 px-2 focus:border-[#16c0b0] focus:outline-0"
        v-model="event.description"
        type="text"
        placeholder="Description"
      />

      <h3>Where is your event?</h3>

      <label>Location</label>
      <input class="block w-full h-7 mb-6 py-0 px-2 focus:border-[#16c0b0] focus:outline-0" v-model="event.location" type="text" placeholder="Location" />

      <h3>When is your event?</h3>
      <label>Date</label>
      <input v-model="event.date" type="text" placeholder="Date" />

      <label>Time</label>
      <input class="block w-full h-7 mb-6 py-0 px-2 focus:border-[#16c0b0] focus:outline-0" v-model="event.time" type="text" placeholder="Time" />

      <button class="items-center h-12 py-0 px-10 bg-gradient-to-r from-[#16c0b0] to-[#84cf6a] text-white border-none rounded-md text-lg font-extrabold cursor-pointer transition-all hover:scale-101 shadow-lg" type="submit">Submit</button>
    </form>
  </div>
</template>