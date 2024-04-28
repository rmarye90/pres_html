<div relative w-full h-full>
    <div
        text-5xl absolute top-8 left-8 fw-bold text-primary
        v-motion
        :initial="{ x: -80, opacity: 0}"
        :enter="{ x: 0, opacity: 1, transition: { delay: 0, duration: 1000 } }"
    >
        HTML 
    </div>
    <div w-full h-full flex="~ justify-center items-center">
        <img class="animate-foolishOut" v-motion :initial="{ y: 80, opacity: 0}" :enter="{ y: 0, opacity: 1, transition: { delay: 0, duration: 1000 } }" src="/html.svg" alt="TypeScript Logo" w-40 h-40 />
    </div>
    <div class="animate-twisterInDown" absolute bottom-8 right-8 text="10px" flex="~ items-center justify-start"
        v-motion
        :initial="{ x: 80, opacity: 0}"
        :enter="{ x: 0, opacity: 1, transition: { delay: 0, duration: 1000 } }"
    >
        <p>@Florian Beaumont</p>
        <a 
            href="https://github.com/BFlorian91"
            target="_blank"
            alt="GitHub" 
            title="Open in GitHub" 
            class="text-sm slidev-icon-btn opacity-50 !border-none !hover:text-white"
        >
            <carbon-logo-github />
        </a>
    </div>
</div>