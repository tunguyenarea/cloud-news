(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push(["chunks/[root of the server]__f29de07a._.js", {

"[externals]/node:async_hooks [external] (node:async_hooks, cjs)": (function(__turbopack_context__) {

var { g: global, d: __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("node:async_hooks", () => require("node:async_hooks"));

module.exports = mod;
}}),
"[externals]/node:buffer [external] (node:buffer, cjs)": (function(__turbopack_context__) {

var { g: global, d: __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("node:buffer", () => require("node:buffer"));

module.exports = mod;
}}),
"[project]/app/(auth)/auth.config.ts [middleware-edge] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, d: __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "authConfig": (()=>authConfig)
});
const authConfig = {
    pages: {
        signIn: '/signin',
        newUser: '/home'
    },
    providers: [],
    callbacks: {
        authorized ({ auth, request: { nextUrl } }) {
            const isSignedIn = !!auth?.user;
            const isOnHome = nextUrl.pathname.startsWith("/home");
            const isOnProfile = nextUrl.pathname.startsWith("/profile");
            const isOnSignUp = nextUrl.pathname.startsWith("/signup");
            const isOnSignIn = nextUrl.pathname.startsWith("/signin");
            if (isSignedIn && (isOnSignIn || isOnSignUp)) {
                return Response.redirect(new URL('/home', nextUrl));
            }
            if (isOnSignUp || isOnSignIn) {
                return true;
            }
            if (isOnHome || isOnProfile) {
                if (isSignedIn) return true;
                return false;
            }
            if (isSignedIn) {
                return Response.redirect(new URL('/home', nextUrl));
            }
            return true;
        }
    }
};
}}),
"[project]/middleware.ts [middleware-edge] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, d: __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "config": (()=>config),
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$auth$2f$index$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/next-auth/index.js [middleware-edge] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$auth$2f$index$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/next-auth/index.js [middleware-edge] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$auth$292f$auth$2e$config$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/(auth)/auth.config.ts [middleware-edge] (ecmascript)");
;
;
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$auth$2f$index$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$auth$292f$auth$2e$config$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["authConfig"]).auth;
const config = {
    matcher: [
        "/",
        "/home",
        "/profile",
        "/home/:id",
        "/profile/:id",
        "/api/:path*",
        "/signin",
        "/signup"
    ]
};
}}),
}]);

//# sourceMappingURL=%5Broot%20of%20the%20server%5D__f29de07a._.js.map