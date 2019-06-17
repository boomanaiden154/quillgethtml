Look at the example page online! [example](https://boomanaiden154.github.io/quillgethtml/example.html)

# QuillGetHTML

This library allows you to easily get HTML out of the quill editor to be used elsewhere. It takes the delta format that quill provides natively and transforms it into HTML that can be used just about anywhere.

### Usage

Include the `quillgethtml.js` file on the page in which you plan to use this feature. It wall add the `getHTML()` function to the quill editor, so you can simply call `quill.getHTML()` which will return the HTML in the form of a string.

If you wish to use formulas, QuillGetHTML does support them, but you do need to tell Katex to render them. This is done with Katex's autorender extension. This is included in another JS file(which you can include through the provided CDN at the URL `https://cdn.jsdelivr.net/npm/katex@0.10.2/dist/contrib/auto-render.min.js`, or from wherever you prefer). After you have included the autorender extension, you then need to call `renderMathInElement(element)` on the element that you placed the HTML in. This will render all of the formulas inline. 

### Building

Generating minified assets is quite simple. First, install dependencies with `npm install`, and then run `npm run build` which will generate the minified version of `quillgethtml.js`, called `quillgethtml.min.js`.
