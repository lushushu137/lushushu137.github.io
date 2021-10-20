## Website URL: https://lushushu137.github.io/COMP5322-Mid-Term/


## Neon Light Effect and Hover Effect

- Neon light works by overlaying multiple layers of gradient colors. In this site, I used this technique on the background color of the school logo, the text-shadow of the h2 header, and the box-shadow of the progress bar.
- The hover effect works by setting an animation that rotates the hue 360 degrees from 0% to 100%, so that it ends with the same color as it started.
- The transition is then set to an ease property on the element to which the animation is applied, making the color change silky smooth and continuous.

## Pseudo-classes

- I use a pseudo-class to make the neon glow of the logo.
- I also use a pseudo-class to make the game-project-thumbnail mask so it doesn't have to use an html element to make the darker hover effect.

## Flex

- Without JavaScript, I use flex to make the different sizes of the photo wall images auto-fill in the line while keeping the height fixed.
- This is done by setting the parent container to `display:flex; flex-wrap:wrap`, which means that the child element photogrpahy-collection-photo will automatically wrap after filling the current row.
- Then set the child element's flex-grow to 1, which means that the image's container width is automatically filled with the current row.
- Then set a fixed height and `width:100%` for the img element, so that the image fills the current container. In order not to distort the image, you also need to set `object-fit: cover`.

## Anchor and Smooth Scroll Effects

- Anchor navigation is accomplished by matching the current page's element's id with the href of the a tag.
- Setting `scroll-behavior: smooth` on the `<body>` will do the trick. There seems to be a compatibility issue in safari.

## CSS Variables

- I've added the theme color and neon color as variables so that I don't have to copy and paste each one when I modify the shadow.

## Progress Elements

- Use the `progress::-webkit-progress-bar` and `progress::-webkit-progress-value` selectors for styling the progress bar and the background respectively.

