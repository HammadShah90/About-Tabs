// ----------------History-Vision-Goals-Buttons-------------------


const tabBtns = ['history', 'vision', 'goals'];
// console.log(tabBtns);


const tabs = document.querySelector('.tabs')
// console.log(tabs);


// ---Create Tab Buttons---


let emptyArray = []


let btnFirstLetterCapital = tabBtns.forEach( (btns) => {
    
    let btnFirstLetter = btns.slice(0, 1).toUpperCase();
    let btnOtherLetters = btns.slice(1).toLowerCase();
    let oneTabName = `${btnFirstLetter}${btnOtherLetters}`;

    // console.log(oneTabName);
    
    let tabButtons =    `<li onclick="changeTabs('${oneTabName}')">
    ${oneTabName}
    </li>`
    
    // tabs.classList.toggle('active')

    // console.log(tabButtons);
    
    emptyArray.push(tabButtons)

})


// console.log(emptyArray.join(""));


tabs.innerHTML = emptyArray.join("")



// ----------------History-Vision-Goals-Heading-Paragraph-------------------


const headingParagraph = [
    {
        id: 1,
        category: "history",
        headingName:    "History",
        headingPara:    "I'm baby wolf pickled schlitz try-hard normcore marfa man bun mumblecore vice pop-up XOXO lomo kombucha glossier bicycle rights. Umami kinfolk salvia jean shorts offal venmo. Knausgaard tilde try-hard, woke fixie banjo man bun. Small batch tumeric mustache tbh wayfarers 8-bit shaman chartreuse tacos. Viral direct trade hoodie ugh chambray, craft beer pork belly flannel tacos single-origin coffee art party migas plaid pop-up. mustache tbh wayfarers 8-bit shaman chartreuse tacos."
    },

    {
        id: 2,
        category:   "vision",
        headingName:    "Vision",
        headingPara:    "Man bun PBR&B keytar copper mug prism, hell of helvetica. Synth crucifix offal deep v hella biodiesel. Church-key listicle polaroid put a bird on it chillwave palo santo enamel pin, tattooed meggings franzen la croix cray. Retro yr aesthetic four loko tbh helvetica air plant, neutra palo santo tofu mumblecore. Hoodie bushwick pour-over jean shorts chartreuse shabby chic. Roof party hammock master cleanse pop-up truffaut, bicycle rights skateboard affogato readymade sustainable deep v live-edge schlitz narwhal."
    },

    {
        id: 3,
        category:   "goals",
        headingName:    "Goals",
        headingPara:    "Chambray authentic truffaut, kickstarter brunch taxidermy vape heirloom four dollar toast raclette shoreditch church-key. Poutine etsy tote bag, cred fingerstache leggings cornhole everyday carry blog gastropub. Brunch biodiesel sartorial mlkshk swag, mixtape hashtag marfa readymade direct trade man braid cold-pressed roof party. Small batch adaptogen coloring book heirloom. Letterpress food truck hammock literally hell of wolf beard adaptogen everyday carry. Dreamcatcher pitchfork yuccie."
    }
]
// console.log(headingParagraph[0].headingName);


let profileImg = document.querySelector(".profileImg");
// console.log(profileImg);


let tabMaterialSyntec = document.querySelector(".tabMaterialSyntec");
// console.log(tabMaterialSyntec);


const changeTabs = (findingAboutTab) => {

    console.log(findingAboutTab);
    
    const wholeDiv = []
    
    const findCategory =  headingParagraph.filter((tabAbout) => tabAbout.category.toLowerCase() === findingAboutTab.toLowerCase()).forEach((tabAbout)=> {
        
        
        // profileImg.src = "./Assets/programming.jpg";
        // profileImg.src = "./Assets/history.jpeg";

        const headingParagraphContent =  `<h4 class="tabMaterialSyntecHead active">

                                            ${tabAbout.headingName}
        
                                        </h4>
                                        <p class="tabMaterialSyntecPara active">
                
                                            ${tabAbout.headingPara}
                
                                        </p>`;
        
        wholeDiv.push(headingParagraphContent)

    })


    tabMaterialSyntec.innerHTML = wholeDiv.join("")


}
    








































// let aboutTabsContant = [];

// let headParaContent;


// headingParagraph.forEach( (headPara) => {
    
//     // console.log(headPara);

//     headParaContent =   `<div class="style">
//                                 <h4>
//                                     ${headPara.headingName}
//                                 </h4>
//                                 <p>
//                                     ${headPara.headingPara}
//                                 </p>
//                             </div>`;
    
//     // console.log(headParaContent);

//     aboutTabsContant.push(headParaContent);

//     // console.log(aboutTabsContant);
    
// })

// // console.log(aboutTabsContant[0]);

// tabMaterialSyntec.innerHTML = aboutTabsContant.join("");


// const changeTabs = (tabsFind) => {
    
//     const findTabs = headingParagraph.filter( (tab)=> tab.category === tabsFind).map( (tab)=> {
//         return `<div>
//                     <h4>
//                         ${tab.headingName}
//                     </h4>
//                     <p>
//                         ${tab.headingPara}
//                     </p>
//                 </div>`;
//     })

//     console.log(findTabs);
//     tabMaterialSyntec.innerHTML = findTabs.join("");
//     // console.log(headingParagraph[1].category)
// }







































