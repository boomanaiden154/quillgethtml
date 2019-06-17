Quill.prototype.getHTML = function() {
    var delta = this.getContents();
    var output = "";
    delta.ops.forEach(function(element) {
        if(element.attributes)
        {
            if(element.attributes.bold)
            {
                output += "<b>" + element.insert + "</b>";
            }
        }
        else if(element.insert.formula)
        {
            output += "<span>\\(" + element.insert.formula + "\\)</span>";
        }
        else
        {
            output += element.insert;
        }
    });
    console.log(output);
    return output;
};