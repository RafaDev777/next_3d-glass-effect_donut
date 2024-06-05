import dynamic from 'next/dynamic';

const Scene = dynamic(() => import('../components/Scene.jsx'), {
	loading: () => <p>loading</p>,
	ssr: false,
});
export default function HomePage() {
	return (
		<main className="relative h-screen flex flex-col bg-slate-900">
			<Scene />
		</main>
	);
}
