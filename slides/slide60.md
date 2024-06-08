<div w-full h-full>
    <div>
        <h1 mt--4 pb-4 text-gradient-css font-mono text-2xl>Introduction aux Keyframes</h1>
    </div>
    <div>
        <ListCustom
        listStyle="text-gradient-css"
        title="Définir des Étapes pour les Animations"
        :list="[
            `Les keyframes définissent les étapes intermédiaires d'une animation.`,
            `Utilisées avec la propriété animation pour créer des animations complexes.`,
        ]"
        />
    </div>
    <h2 text-xl px-8 fw-bold text-gradient-css pt-4 pb-1 italic>Exemple de @keyframes :</h2>
    <div>
    <div ml-8>
        <Transform scale="1" w-150>

```css
@keyframes example {
  0% { transform: scale(1); }
  50% { transform: scale(1.5); }
  100% { transform: scale(1); }
}
```
</Transform>
    </div>
    </div>
</div>




