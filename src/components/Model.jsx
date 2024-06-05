import { MeshTransmissionMaterial, useGLTF, Text } from '@react-three/drei';
import { useFrame, useThree } from '@react-three/fiber';
import React, { useRef } from 'react';
import { useControls } from 'leva';

export default function Model() {
	const { nodes } = useGLTF('/3d_model/torrus.glb');
	const { viewport } = useThree();
	const torrus = useRef(null);

	useFrame(() => {
		torrus.current.rotation.x += 0.02;
	});

	const materialProps = useControls({
		thickness: { value: 0.2, min: 0, max: 3, step: 0.05 },
		roughness: { value: 0, min: 0, max: 1, step: 0.1 },
		transmission: { value: 1, min: 0, max: 1, step: 0.1 },
		ior: { value: 1.2, min: 0, max: 3, step: 0.1 },
		chromaticAberration: { value: 0.02, min: 0, max: 1 },
		backside: { value: true },
	});

	return (
		<group scale={viewport.width / 3.75}>
			<Text
				font="/fonts/TitilliumWeb-Italic.ttf"
				position={[0, 1, -1]}
				fontSize={0.3}
				color="white"
				anchorX="center"
			>
				Thank you for all the hardwork gaez !
			</Text>
			<Text
				font="/fonts/TitilliumWeb-Black.ttf"
				position={[0, 0, -1]}
				fontSize={0.2}
				color="white"
				anchorX="center"
			>
				Here is a doughnut for you !
			</Text>
			<mesh ref={torrus} {...nodes.Torus002}>
				<MeshTransmissionMaterial {...materialProps} />
			</mesh>
		</group>
	);
}
