import { computed, ref, type Ref } from 'vue';

//los argumentos se reciben igual que una funcion normal

//Modificamos para aceptar refs de arreglos, notar que importamos
//el tipo ref para poder hacer esta asignacion

export const useCycleList = (list: Ref<any[]>) => {
	//creamos las refs y computed que nos ayudaran a manejar el estado
	//dentro de nuestro composable

	const activeIndex = ref(0);

	//el state simplemente retornará el elemento activo con el indice actual
	//del arreglo que mandamos como argumento

	//dado que list es un ref, debemos acceder a su valor
	//por lo cual concatenamos el ref, a la variable que haciamos referencia
	//que es list
	const state = computed(() => list.value[activeIndex.value]);

	// composables simples a veces retornan directamente un valor sin que sea objeto
	// return ref('');

	//los composables retornan por lo general un objeto
	//donde tenemos las variables reactivas y funciones
	//y podemos usar la api de vue

	//creamos las funciones next y prev, que modifican
	//el valor del indice en base a su valor para ciclar
	//nuestro arreglo

	function next() {
		//lo mismo hacemos referencia al value del list que ahora es un ref
		if (activeIndex.value == list.value.length - 1) {
			activeIndex.value = 0;
		} else {
			activeIndex.value++;
		}
	}

	function prev() {
		if (activeIndex.value == 0) {
			activeIndex.value = list.value.length - 1;
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
