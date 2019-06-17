Quill.prototype.getHTML = function() {
    var delta = this.getContents();
    var output = "";
    delta.ops.forEach(function(element) {
        if(element.attributes)
        {
            if(element.attributes.bold)
            {
                output += "<b>";
            }
            if(element.attributes.italic)
            {
                output += "<i>";
            }
            if(element.attributes.underline)
            {
                output += "<u>";
            }
        }
        if(element.insert.formula)
        {
            output += "<span>\\(" + element.insert.formula + "\\)</span>";
        }
        else
        {
            output += element.insert;
        }
        if(element.attributes)
        {
            if(element.attributes.bold)
            {
                output += "</b>";
            }
            if(element.attributes.italic)
            {
                output += "</i>"
            }
            if(element.attributes.underline)
            {
                output += "</u>"
            }
        }
    });
    console.log(output);
    return output;
};