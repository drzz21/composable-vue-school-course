<script setup lang="ts">
//importamos nuestro composable

import { ref } from 'vue';
import { useCycleList } from './composables/useCycleList';

//inicializamos nuestro composable con sus funciones y su estado

//creamos un ref para pasarlo a nuestro composable
const animals = ref(['Dog', 'Cat', 'Mouse', 'Hamster', 'Parrot']);

const { state, next, prev } = useCycleList(animals);
// const { state, next, prev } = useCycleList([
// 	'Dog',
// 	'Cat',
// 	'Mouse',
// 	'Hamster',
// 	'Parrot',
// ]);

// const { state, next, prev } = useCycleList(() => [
// 	'Dog',
// 	'Cat',
// 	'Mouse',
// 	'Hamster',
// 	'Parrot',
// ]);
</script>

<template>
	<div>
		<!-- utilizamos el estado y llamamos las funciones para, ver su funcionalidad -->
		{{ state }}
		<button @click="prev">previous</button>
		<button @click="next">next</button>
	</div>
</template>

<style scoped>
.logo {
	height: 6em;
	padding: 1.5em;
	will-change: filter;
	transition: filter 300ms;
}
.logo:hover {
	filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
	filter: drop-shadow(0 0 2em #42b883aa);
}
</style>

