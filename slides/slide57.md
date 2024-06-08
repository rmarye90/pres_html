<div w-full h-full>
    <div>
        <h1 
            v-motion 
            :initial="{ x: 100, y: 400, scale: 0.5, rotate: 90, opacity: 1 }" 
            :enter="{ x: 0, y: -10, scale: 1, rotate: 0, opacity: 1 }" 
            :leave="{ x: -1000 }"
            pb-4 text-gradient-css font-mono text-2xl
        >
            Introduction aux Animations 🥳</h1>
    </div>
    <div v-motion :initial="{ x: -1000, y: 1000, scale: 0.5, rotate: 0, opacity: 1 }" :enter="{ x: 0, y: -10, scale: 1, rotate: 0, opacity: 1 }" :leave="{ x: -1000 }">
        <ListCustom
        listStyle="text-gradient-css"
        title="Présentation"
        :list="[
            `Qu'est-ce qu'une animation CSS ?`,
            `Pourquoi utiliser les animations CSS ?`,
            `Exemples d'animations.`,
        ]"
        />
    </div>
    <div   v-motion
      :initial="{ x: 800, y: 400, scale: 0.5, rotate: 90, opacity: 1 }"
      :enter="{ x: 400, y: -200, scale: 1, rotate: 0, opacity: 1 }"
      :leave="{ x: -1000 }"
    >
        <span text-5xl>
        🥳
        </span>
    </div>
</div>

