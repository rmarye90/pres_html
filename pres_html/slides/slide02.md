create me a list and div for the example with lorem ipsum text and a link to the GitHub repository. 
```html
<div relative w-full h-full>
    <div
        text-5xl absolute top-8 left-8 fw-bold text-primary
        v-motion
        :initial="{ x: -80, opacity: 0}"
        :enter="{ x: 0, opacity: 1, transition: { delay: 0, duration: 1000 } }"
    >
        Slide 02
    </div>
    <div w-full h-full flex="~ justify-center items-center">
        <ul class="text-2xl">
            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
            <li>Nullam nec purus nec nunc tincidunt fermentum.</li>
            <li>Proin nec nunc nec nunc tincidunt fermentum.</li>
            <li>Proin nec nunc nec nunc tincidunt fermentum.</li>
            <li>Proin nec nunc nec nunc tincidunt fermentum.</li>
        </ul>
    </div>  
```
