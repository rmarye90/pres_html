<div w-full h-full>
    <div>
        <h1 mt--4 pb-4 text-gradient-css font-mono text-2xl>Utilisation de la Propriété animation</h1>
    </div>
    <div>
        <ListCustom
        listStyle="text-gradient-css"
        title="Créer des Animations Complexes"
        :list="[
            `La propriété animation combine plusieurs sous-propriétés pour définir une animation.`,
            `Utilisée pour des séquences continues et autonomes.`,
        ]"
        />
    </div>
    <div grid="~ cols-2 gap-2">
    <div ml-8>
        <Transform scale="0.7" w-150>

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Animation Example</title>
  <style>
    @keyframes example {
      0% { transform: scale(1); }
      50% { transform: scale(1.5); }
      100% { transform: scale(1); }
    }

    .animate-box {
      width: 100px;
      height: 100px;
      background-color: green;
      animation: example 2s infinite;
    }
  </style>
</head>
<body>
  <div class="animate-box"></div>
</body>
</html>
```
</Transform>
    </div>
    <div ml--8>
        <ListCustom
            listStyle="text-gradient-css fw-bolder"
            title="Explication"
            :list="[
                `L'animation change la taille de l'élément de manière continue, créant un effet de pulsation.`,
            ]"
        />
    </div>
    </div>
    <ZoomToCenter :posX="40" :posY="-10" :size="1.1">

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Animation Example</title>
  <style>
    @keyframes example {
      0% { transform: scale(1); }
      50% { transform: scale(1.5); }
      100% { transform: scale(1); }
    }

    .animate-box {
      width: 100px;
      height: 100px;
      background-color: green;
      animation: example 2s infinite;
    }
  </style>
</head>
<body>
  <div class="animate-box"></div>
</body>
</html>
```
</ZoomToCenter>
</div>




