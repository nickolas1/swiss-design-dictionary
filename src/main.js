import App from './App.svelte';

const app = new App({
	target: document.body,
	props: {
		name: 'Calvin and Nick and nobody else thats here'
	}
});

export default app;