<template>
  <section class="flex items-start flex-row h-screen">
    <ClientData />
    <Content />
    <ClientToDo />
  </section>
</template>
<script>
import ClientData from "@/components/ClientData";
import Content from "@/components/ClientContent";
import ClientToDo from "@/components/ClientToDo";
export default {
  components: {
    ClientToDo,
    Content,
    ClientData,
  },
}
</script>