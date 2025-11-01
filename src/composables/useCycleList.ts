import { ref } from 'vue';

//los argumentos se reciben igual que una funcion normal

export const useCycleList = (list: any[]) => {

	// composables simples a veces retornan directamente un valor sin que sea objeto
	// return ref('');

	//los composables retornan por lo general un objeto
	//donde tenemos las variables reactivas y funciones
	//y podemos usar la api de vue
	return {
		state: ref(''),
		prev: () => {},
		next: () => {},
		go: () => {},
	};
};
