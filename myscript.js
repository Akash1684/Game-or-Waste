
walk(document.body);

function walk(node)  
{
	
	var child, next;

	switch ( node.nodeType )  
	{
		case 1: 
		case 9:  
		case 11: 
			child = node.firstChild;
			while ( child ) 
			{
				next = child.nextSibling; 
				walk(child);
				child = next;
			}
			break;

		case 3: 
			handleText(node);
			break;
	}
}

function handleText(textNode) 
{
	var v = textNode.nodeValue;

	v = v.replace(/\bGames\b/g, "waste");
	v = v.replace(/\bGame\b/g, "waste");
	v = v.replace(/\bgame\b/g, "waste");
	v = v.replace(/\bgames\b/g, "waste");
	
	
	textNode.nodeValue = v;
}