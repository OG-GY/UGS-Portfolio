"use client";
import React, { Suspense, useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Inner component that uses Three.js - only rendered client-side
function ThreeScene({ url, onLoaded }) {
    const containerRef = useRef(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        if (!containerRef.current) return;

        let mounted = true;
        let renderer, scene, camera, controls, model;

        const init = async () => {
            try {
                // Dynamic imports for Three.js libraries
                const THREE = await import("three");
                const { OrbitControls } = await import("three/examples/jsm/controls/OrbitControls");
                const { GLTFLoader } = await import("three/examples/jsm/loaders/GLTFLoader");

                if (!mounted) return;

                const container = containerRef.current;
                const width = container.clientWidth;
                const height = container.clientHeight;

                // Scene setup
                scene = new THREE.Scene();
                scene.background = new THREE.Color(0x111111);

                // Camera
                camera = new THREE.PerspectiveCamera(50, width / height, 0.1, 1000);
                camera.position.set(0, 1, 5);

                // Renderer
                renderer = new THREE.WebGLRenderer({ antialias: true });
                renderer.setSize(width, height);
                renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
                renderer.shadowMap.enabled = true;
                renderer.shadowMap.type = THREE.PCFSoftShadowMap;
                container.appendChild(renderer.domElement);

                // Controls
                controls = new OrbitControls(camera, renderer.domElement);
                controls.enableDamping = true;
                controls.dampingFactor = 0.05;
                controls.autoRotate = true;
                controls.autoRotateSpeed = 1;
                controls.enablePan = false;
                controls.minDistance = 2;
                controls.maxDistance = 10;

                // Lighting
                const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
                scene.add(ambientLight);

                const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
                directionalLight.position.set(5, 10, 7.5);
                directionalLight.castShadow = true;
                scene.add(directionalLight);

                const fillLight = new THREE.DirectionalLight(0x8888ff, 0.3);
                fillLight.position.set(-5, 0, -5);
                scene.add(fillLight);

                // Load model
                const loader = new GLTFLoader();
                loader.load(
                    url,
                    (gltf) => {
                        if (!mounted) return;
                        model = gltf.scene;

                        // Center and scale model
                        const box = new THREE.Box3().setFromObject(model);
                        const center = box.getCenter(new THREE.Vector3());
                        const size = box.getSize(new THREE.Vector3());
                        const maxDim = Math.max(size.x, size.y, size.z);
                        const scale = 2 / maxDim;
                        model.scale.setScalar(scale);
                        model.position.sub(center.multiplyScalar(scale));

                        scene.add(model);
                        onLoaded();
                    },
                    undefined,
                    (err) => {
                        console.error("Error loading model:", err);
                        setError("Failed to load 3D model");
                    }
                );

                // Animation loop
                const animate = () => {
                    if (!mounted) return;
                    requestAnimationFrame(animate);
                    controls.update();
                    renderer.render(scene, camera);
                };
                animate();

                // Handle resize
                const handleResize = () => {
                    if (!container || !mounted) return;
                    const w = container.clientWidth;
                    const h = container.clientHeight;
                    camera.aspect = w / h;
                    camera.updateProjectionMatrix();
                    renderer.setSize(w, h);
                };
                window.addEventListener("resize", handleResize);

                return () => {
                    window.removeEventListener("resize", handleResize);
                };
            } catch (err) {
                console.error("Three.js initialization error:", err);
                setError("Failed to initialize 3D viewer");
            }
        };

        init();

        return () => {
            mounted = false;
            if (renderer && containerRef.current) {
                containerRef.current.removeChild(renderer.domElement);
                renderer.dispose();
            }
        };
    }, [url, onLoaded]);

    if (error) {
        return (
            <div className="w-full h-full flex items-center justify-center text-red-400">
                {error}
            </div>
        );
    }

    return <div ref={containerRef} className="w-full h-full" />;
}

export default function ModelViewer({ url, name }) {
    const [isLoaded, setIsLoaded] = useState(false);
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    if (!isMounted) {
        return (
            <div className="relative w-full h-[300px] bg-gradient-to-br from-gray-900 to-black rounded-xl overflow-hidden flex items-center justify-center">
                <div className="w-12 h-12 border-4 border-t-red-500 border-gray-700 rounded-full animate-spin"></div>
            </div>
        );
    }

    return (
        <div className="relative w-full h-[300px] bg-gradient-to-br from-gray-900 to-black rounded-xl overflow-hidden group">
            <AnimatePresence>
                {!isLoaded && (
                    <motion.div
                        initial={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="absolute inset-0 flex flex-col items-center justify-center z-10 bg-gray-900"
                    >
                        <div className="w-12 h-12 border-4 border-t-red-500 border-gray-700 rounded-full animate-spin mb-4"></div>
                        <p className="text-gray-400 text-sm font-medium">Loading {name}...</p>
                    </motion.div>
                )}
            </AnimatePresence>

            <ThreeScene url={url} onLoaded={() => setIsLoaded(true)} />

            <div className="absolute bottom-4 left-4 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="bg-black/60 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/10">
                    <p className="text-xs text-white/80 font-medium tracking-wider uppercase">Interactive 3D Preview</p>
                </div>
            </div>
        </div>
    );
}
