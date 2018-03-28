# portfolio-site
A personal portfolio site for Josh Ruud's design, web development, & photography.

## Frameworks or CDNs Used

1. Bootstrap
2. jQuery
3. FontAwesome Icons/SVGs
4. Google Fonts


## CSS Selectors
1. A core component of the site is the '.content-square' class. This class is applied to divs with key content such as photography categories or web development projects.

2. Two other important selectors used are the '.flex-wrapper' and '.flex-wrapper-column' classes. While the project itself does incorporate some Bootstrap for responsiveness, these two classes are applied when only a simple stripped-down flex container is needed.

3. The '#mobile-nav-wrapper' id is used to target the mobile navigation menu, both for styling and querying with a script to hide and show the mobile menu.


## Functions

1. The file 'mobile-nav.js' contains the script to hide and show the mobile menu on xs and small devices. One function uses jQuery to slide the nav menu down when a menu arrow is clicked and to hide/show the appropriate arrow depending on the nav menu's display state. The second function in this file hides the mobile menu if it is shown and the browser is resized to a medium breakpoint or larger.

2. Another file, 'styles.js', applies styling to headings within the '.content-square' class upon mouse enter and mouse leave.

3. A third script file, 'scroll-button.js', controls the display state and functionality of the To the Top Button for the site.


## Future Considerations

1. Future revisions of this site will be focused on converting the outbound hrefs into internal content. Clicking the link for 'Wedding Photography' will take the user to a page of images displayed with a lightbox rather than referring the user to an external site for the content.

2. While the code for this site has been refactored more than once, this will be an ongoing priority as the site continues to be developed.
