# QuillGetHTML

This library allows you to easily get HTML out of the quill editor to be used elsewhere. It takes the delta format that quill provides natively and transforms it into HTML that can be used just about anywhere.

### Usage

Include the `quillgethtml.js` file on the page in which you plan to use this feature. It wall add the `getHTML()` function to the quill editor, so you can simply call `quill.getHTML()` which will return the HTML in the form of a string.

If you wish to use formulas, QuillGetHTML does support them, but you do need to tell Katex to render them. This is done with Katex's autorender extension. This is included in another JS file:

CDN:

```
<script defer src="https://cdn.jsdelivr.net/npm/katex@0.10.2/dist/contrib/auto-render.min.js" integrity="sha384-kWPLUVMOks5AQFrykwIup5lo0m3iMkkHrD0uJ4H5cjeGihAutqP0yW0J6dpFiVkI" crossorigin="anonymous"

```

<script defer src="https://cdn.jsdelivr.net/npm/katex@0.10.2/dist/contrib/auto-render.min.js" integrity="sha384-kWPLUVMOks5AQFrykwIup5lo0m3iMkkHrD0uJ4H5cjeGihAutqP0yW0J6dpFiVkI" crossorigin="anonymous"
