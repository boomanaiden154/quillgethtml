Quill.prototype.getHTML = function() {
    var delta = this.getContents();
    var output = "";
    var lines = [];
    lines.push("");
    linesIndex = 0;
    delta.ops.forEach(function(element) {
        if(element.attributes)
        {
            if(element.attributes.bold)
            {
                lines[linesIndex] += "<b>";
            }
            if(element.attributes.italic)
            {
                lines[linesIndex] += "<i>";
            }
            if(element.attributes.underline)
            {
                lines[linesIndex] += "<u>";
            }
            if(element.attributes.strike)
            {
                lines[linesIndex] += "<strike>";
            }
        }
        if(element.insert.formula)
        {
            lines[linesIndex] += "<span>\\(" + element.insert.formula + "\\)</span>";
        }
        else
        {
            element.insert.split(/(\n)/g).forEach(function(textElement) {
                if(textElement == "\n")
                {
                    if(element.attributes)
                    {
                        if(element.attributes.header)
                        {
                            lines[linesIndex] = "<h" + element.attributes.header + ">" + lines[linesIndex] + "</h" + element.attributes.header + ">";
                        }
                    }
                    else
                    {
                        lines[linesIndex] = "<p>" + lines[linesIndex] + "</p></br>"
                    }
                    lines.push("");
                    linesIndex++;
                }
                else
                {
                    lines[linesIndex] += textElement;
                }
            });
        }
        if(element.attributes)
        {
            if(element.attributes.bold)
            {
                lines[linesIndex] += "</b>";
            }
            if(element.attributes.italic)
            {
                lines[linesIndex] += "</i>"
            }
            if(element.attributes.underline)
            {
                lines[linesIndex] += "</u>"
            }
            if(element.attributes.strike)
            {
                lines[linesIndex] += "</strike>";
            }
        }
    });
    lines.forEach(function(element) {
        output += element;
    });
    return output;
};