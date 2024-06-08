<div w-full h-full>
    <div>
        <h1 mt--4 pb-4 text-gradient-css font-mono text-2xl>Utiliser la Propriété transition</h1>
    </div>
    <div>
        <ListCustom
        listStyle="text-gradient-css"
        title="Ajouter des Transitions Douces"
        :list="[
            `La propriété transition permet de créer des animations en douceur pour les propriétés CSS lorsque leur état change.`,
            `Elle se compose de quatre sous-propriétés : transition-property, transition-duration, transition-timing-function et transition-delay.`,
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
  <title>Transition Example</title>
  <style>
    .box {
      width: 100px;
      height: 100px;
      background-color: red;
      transition: background-color 0.5s ease; /* Définit la transition */
    }
    .box:hover {
      background-color: blue; /* Changement de couleur au survol */
    }
  </style>
</head>
<body>
  <div class="box"></div>
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
                `transition: background-color 0.5s ease; : Définit que la propriété background-color doit changer en douceur sur une durée de 0.5 seconde avec une fonction de timing ease.`,
                `.box:hover : Change la couleur de fond en bleu lorsque l'élément .box est survolé.`
            ]"
        />
    </div>
    </div>
    <div v-motion="{ initial: { opacity: 0 }, enter: { opacity: 0.8 } }" v-if="$slidev.nav.clicks === 1" bg-black absolute top-0 left-0 right-0 bottom-0 />
    <div v-click="1" absolute top-7 left-40>
        <Transform scale="1.2" v-motion="{ initial: { x: -100, y: 200, scale: 0.7, opacity: 0 }, enter: { x: 0, y: 0, scale: 1.2, opacity: 1 } }" v-if="$slidev.nav.clicks === 1">

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Transition Example</title>
  <style>
    .box {
      width: 100px;
      height: 100px;
      background-color: red;
      transition: background-color 0.5s ease; /* Définit la transition */
    }
    .box:hover {
      background-color: blue; /* Changement de couleur au survol */
    }
  </style>
</head>
<body>
  <div class="box"></div>
</body>
</html>
```
</Transform>
    </div>
</div>



