import { computed, ref } from 'vue';

//los argumentos se reciben igual que una funcion normal

export const useCycleList = (list: any[]) => {

	//creamos las refs y computed que nos ayudaran a manejar el estado
	//dentro de nuestro composable

	const activeIndex = ref(0);

	//el state simplemente retornará el elemento activo con el indice actual
	//del arreglo que mandamos como argumento

	const state = computed(() => list[activeIndex.value]);

	// composables simples a veces retornan directamente un valor sin que sea objeto
	// return ref('');

	//los composables retornan por lo general un objeto
	//donde tenemos las variables reactivas y funciones
	//y podemos usar la api de vue

	//creamos las funciones next y prev, que modifican
	//el valor del indice en base a su valor para ciclar
	//nuestro arreglo

	function next() {
		if (activeIndex.value == list.length - 1) {
			activeIndex.value = 0;
		} else {
			activeIndex.value++;
		}
	}

	function prev() {
		if (activeIndex.value == 0) {
			activeIndex.value = list.length - 1;
		} else {
			activeIndex.value--;
		}
	}

	//exportamos a modo de objeto
	return {
		state,
		prev,
		next,
		go: () => {},
	};
};
