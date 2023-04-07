import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import envCompatible from "vite-plugin-env-compatible";
import NodeGlobalsPolyfillPlugin, { nodeGlobalsPolyfillPlugin } from '@esbuild-plugins/node-globals-polyfill';
import svgrPlugin from 'vite-plugin-svgr';


export default defineConfig({
    envPrefix: 'REACT_APP_',
    resolve: {
        alias: {
            './runtimeConfig': './runtimeConfig.browser',
        },
        optimizedeps: {
            esbuildOptions:{
                // Node.js global to browser globalThis
                define:{
                    global: 'globalThis',
                },
                //Enable esbuild polyfill plugins
                plugins: [
                    NodeGlobalsPolyfillPlugin({
                        buffer: true,
                    }),
                ],
            },
        },
    },
    plugins: [
        react(),
        envCompatible(),
        svgrPlugin({
            svgrOptions:{
                icon: true,
            },
        }),
    ],
});