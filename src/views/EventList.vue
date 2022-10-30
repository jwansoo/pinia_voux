<script setup>
import EventCard from '../components/EventCard.vue'
import { useEventStore } from '../stores/EventStore'
const eventStore=useEventStore()
   eventStore.fetchEvents().catch(error => {
      this.$router.push({
        name: 'ErrorDisplay',
        params: { error: error }
      })
    })
</script>

<template>
  <h1>{{eventStore.numberOfEvents}} Events for Good</h1>
  <div class="flex flex-col items-center">
    <EventCard v-for="event in eventStore.events" :key="event.id" :event="event" />
  </div>
</template>
