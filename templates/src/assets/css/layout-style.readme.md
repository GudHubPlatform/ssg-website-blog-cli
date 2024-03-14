# Layout Specification

## Page:
### HTML:
All components should be separated by a line break for better readability. NOTE: Except for meta-components, they should be the first on the page and without separation from each other (without a line break between them).
### CSS
If a component needs to be customized and does not have the necessary built-in styles, its customization should be placed within the `<style data-webpack-style="true">` tag of the page. Styling is done based on the component tag and the value of the `data-gh-id` data attribute (there may be several components with the same tag on the page). Styles for a specific component should be grouped together, and the order of component styles should correspond to the order of components on the page (for easier readability and orientation in the code).

## Component:
### HTML:
Layout typically starts with the `<section>` tag, which has styles in 'style.css' and defines a vertical container, and the `<div class="container">` tag, which has styles in 'style.css' and defines a horizontal container.
## CSS:
All component styles should be within the component's scope to avoid affecting styles outside the component.
Additionally, the component should utilize variables for styling from themes (see 'default-styles.css').