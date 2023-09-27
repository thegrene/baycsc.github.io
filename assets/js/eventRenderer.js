// var tester = () => {
// 	const output = [];
// 	for (const d of document.querySelectorAll('.col-12-medium')) {
// 		var contents = d.querySelector('section section');
        
// 		const data = {
            // imageURL: contents.querySelector('a.image img').src,
            // title: contents.querySelector('h3').innerText,
            // description: contents.querySelector('p').innerText,
// 		}

// 		if (!contents.querySelector('a.image').href.endsWith('#')) {
// 			data.learnMoreURL = contents.querySelector('a.image').href;
// 		} else if (contents.querySelector('ul.actions a.button')) {
            // data.learnMoreURL = contents.querySelector('ul.actions a.button').href;
// 		} else {
// 			data.learnMoreURL = null;
// 		}

// 		output.push(data);
// 	}

// 	console.log(output);
// }

window.onload = () => {
    var counter = [0, 0];

    let targets = [
        document.querySelector('div#eventsFuture'),
        document.querySelector('div#eventsPast'),
    ]

    for (const e of eventData) {
        
        let template = document.querySelector('span#eventTemplate div');
        const clone = template.cloneNode(true);
        
        clone.querySelector('a.image').href = e.learnMoreURL;
        clone.querySelector('a.image img').src = e.imageURL;
        clone.querySelector('h3').innerText = e.title;
        clone.querySelector('p').innerText = e.description;
        clone.querySelector('ul.actions a.button').href = e.learnMoreURL;

        let category = e.future ? 0 : 1;
        
        counter[category] += 1;
        
        if (counter[category] > 3) {
            clone.querySelector("section.topBorder").appendChild(document.createElement("hr"));
        } 

        targets[category].appendChild(clone);

    }
}