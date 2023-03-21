self.addEventListener("install", e => {
    e.waitUntil(
        catches.open("static").then(cache => {
            return cache.addAll(["./", "./src/assets/main.css", "./src/assets/base.css", "./statics/icon-192x192.png"]);
        })
    )
});