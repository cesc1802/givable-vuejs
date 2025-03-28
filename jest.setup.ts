import * as Vue from 'vue';
import * as VueCompilerDOM from '@vue/compiler-dom';
import * as VueServerRenderer from '@vue/server-renderer';

(globalThis as any).Vue = Vue;
(globalThis as any).VueCompilerDOM = VueCompilerDOM;
(globalThis as any).VueServerRenderer = VueServerRenderer;
