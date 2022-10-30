<script setup>
import {ref} from 'vue'
import {useEventStore} from '../stores/EventStore'
const eventStore=useEventStore()
const props = defineProps(['id'])
eventStore.fetchEvent(props.id)
const event=eventStore.event

</script>

<template>
  <div v-if="event">
    <h1>{{ event.title }}</h1>
    <p>{{ event.time }} on {{ event.date }} @ {{ event.location }}</p>
    <p>{{ event.description }}</p>
  </div>
</template>
