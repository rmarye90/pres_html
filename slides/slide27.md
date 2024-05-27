<div w-full h-full>
    <div>
        <h1 w-70 pb-4 text-gradient-css font-mono text-2xl >Box Model en CSS</h1>
    </div>
    <div>
        <ListCustom
            listStyle="text-gradient-css"
            title="Composants du Modèle de Boîte"
            :list="[
                `Block: Les éléments de type block prennent toute la largeur disponible et commencent toujours sur une nouvelle ligne.`,
                `Inline: Les éléments de type inline ne prennent que la largeur nécessaire et peuvent être placés côte à côte.`,
                `Inline-block: Combinaison des deux précédents. Ils se comportent comme des éléments inline, mais acceptent les propriétés de dimension (width, height).`,
                `Flex: Utilisé pour créer des layouts flexibles. Les enfants directs d'un conteneur flex peuvent être organisés horizontalement ou verticalement. flex peuvent être organisés horizontalement ou verticalement.`,
                `Grid: Utilisé pour créer des mises en page en deux dimensions, permettant un contrôle précis des lignes et des colonnes.`
            ]"
        />
    </div>
    <div px-8 w-20 h-4>

```css
+-------------------------------------------+
|                 Block                     |
|                                           |
|  +-----------------------+                |
|  | Inline                |                |
|  | Inline                |                |
|  +-----------------------+                |
|                                           |
|  +-----------------------+ +------------+ |
|  | Inline-block          | | Inline     | |
|  |                       | |            | |
|  |                       | |            | |
|  |                       | +------------+ |
|  |                       |                |
|  |                       |                |
|  +-----------------------+                |
|                                           |
|  +--------------------------------------+ |
|  | Flex                                  | |
|  | +-----------+ +-----------+ +-------+ | |
|  | | Flex Item | | Flex Item | | Flex  | | |
|  | |           | |           | | Item  | | |
|  | +-----------+ +-----------+ +-------+ | |
|  +--------------------------------------+ |
|                                           |
|  +--------------------------------------+ |
|  | Grid                                  | |
|  | +-----------+ +-----------+ +-------+ | |
|  | | Grid Cell | | Grid Cell | | Grid  | | |
|  | |           | |           | | Cell  | | |
|  | +-----------+ +-----------+ +-------+ | |
|  +--------------------------------------+ |
|                                           |
+-------------------------------------------+
```
</div>
</div>
