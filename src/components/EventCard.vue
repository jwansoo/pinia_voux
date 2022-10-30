<template>
  <router-link
    class="text-[#2c3e50] decoration-none"
    :to="{ name: 'EventDetails', params: { id: event.id } }"
  >
    <div class="p-7 w-[250px] cursor-pointer border border-solid border-[#39495c] mb-4 hover:scale-105 hover: shadow-lg">
      <span>@{{ event.time }} on {{ event.date }}</span>
      <h4>{{ event.title }}</h4>
    </div>
  </router-link>
</template>

<script>
export default {
  props: {
    event: {
      type: Object,
      required: true
    }
  }
}
</script>