import { computed, ref, type Ref,toRef,type MaybeRefOrGetter } from 'vue';

//los argumentos se reciben igual que una funcion normal

//Modificamos para aceptar refs de arreglos, notar que importamos
//el tipo ref para poder hacer esta asignacion

//para poder aceptar refs o getters o datos planos
//importamos MaybeRefOrGetter desde vue
//este tipo nos permite aceptar ya sea ref o getter que sería 
//una función que retorna el arreglo o un arreglo plano, o un callback
//por decirlo de otra forma

//usamos este tipo en el argumento list
export const useCycleList = (list: MaybeRefOrGetter<any[]>) => {
	//creamos las refs y computed que nos ayudaran a manejar el estado
	//dentro de nuestro composable

	const activeIndex = ref(0);
	//vamos a convertir el argumento list en un ref
	//usando toRef, esto nos permite manejar el valor
	//de list de manera reactiva sin importar si es un ref o no,
	//esto lo normaliza, lo asignamos a una nueva variable 
	//y esta variable será la que usaremos dentro del composable
	//reemplazamos las demas referencias a list por _list
	const _list = toRef(list);

	//el state simplemente retornará el elemento activo con el indice actual
	//del arreglo que mandamos como argumento

	//dado que list es un ref, debemos acceder a su valor
	//por lo cual concatenamos el ref, a la variable que haciamos referencia
	//que es list
	const state = computed(() => _list.value[activeIndex.value]);

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
		if (activeIndex.value == _list.value.length - 1) {
			activeIndex.value = 0;
		} else {
			activeIndex.value++;
		}
	}

	function prev() {
		if (activeIndex.value == 0) {
			activeIndex.value = _list.value.length - 1;
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
