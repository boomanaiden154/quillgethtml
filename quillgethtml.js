Quill.prototype.getHTML = function() {
    var delta = this.getContents();
    var output = "";
    var lines = [];
    lines.push({"text":""});
    linesIndex = 0;
    delta.ops.forEach(function(element) {
        if(element.attributes)
        {
            if(element.attributes.bold)
            {
                lines[linesIndex].text += "<b>";
            }
            if(element.attributes.italic)
            {
                lines[linesIndex].text += "<i>";
            }
            if(element.attributes.underline)
            {
                lines[linesIndex].text += "<u>";
            }
            if(element.attributes.strike)
            {
                lines[linesIndex].text += "<strike>";
            }
            if(element.attributes.script == "super")
            {
                lines[linesIndex].text += "<sup>";
            }
            if(element.attributes.script == "sub")
            {
                lines[linesIndex].text += "<sub>";
            }
            if(element.attributes['code-block'])
            {
                lines[linesIndex].codeBlock = true;
            }
        }
        if(element.insert.formula)
        {
            lines[linesIndex].text += "<span>\\(" + element.insert.formula + "\\)</span>";
        }
        else if(element.insert.image)
        {
            lines[linesIndex].text += "<img src=\"" + element.insert.image + "\"/>";
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
                            lines[linesIndex].text = "<h" + element.attributes.header + ">" + lines[linesIndex].text + "</h" + element.attributes.header + ">";
                        }
                    }
                    else
                    {
                        lines[linesIndex].text = "<p>" + lines[linesIndex].text + "</p>"
                    }
                    lines.push({"text":""});
                    linesIndex++;
                }
                else
                {
                    lines[linesIndex].text += textElement;
                }
            });
        }
        if(element.attributes)
        {
            if(element.attributes.bold)
            {
                lines[linesIndex].text += "</b>";
            }
            if(element.attributes.italic)
            {
                lines[linesIndex].text += "</i>"
            }
            if(element.attributes.underline)
            {
                lines[linesIndex].text += "</u>"
            }
            if(element.attributes.strike)
            {
                lines[linesIndex].text += "</strike>";
            }
            if(element.attributes.script == "super")
            {
                lines[linesIndex].text += "</sup>";
            }
            if(element.attributes.script == "sub")
            {
                lines[linesIndex].text += "</sub>";
            }
        }
    });
    if(lines[lines.length - 1].text == "")
    {
        lines.pop();
    }
    var inCodeBlock = false;
    for(var i = 0; i < lines.length; i++)
    {
        if(i == (lines.length - 1) && lines[i].text.endsWith("</br>"))
        {
            output += lines[i].text.slice(0,lines[i].text.length - 5);
        }
        else
        {
            if(lines[i].codeBlock && inCodeBlock == false)
            {
                output += "<pre style=\"background-color:#23241f;color:#f8f8f2;padding:5px 10px;line-height:1.42;\">";
                inCodeBlock = true;
            }
            if(!lines[i].codeBlock && inCodeBlock)
            {
                output += "</pre>";
                inCodeBlock = false;
            }
            output += lines[i].text;
            if(inCodeBlock)
            {
                output += "\n";
            }
        }
    }
    return output;
};