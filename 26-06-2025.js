const post = [
    { title: "Js bascis", tags: ["javascript", "basics", "web"] },
    { title: "React guide", tags: ["javascript", "react", "frontend"] },
    { title: "Node intro", tags: ["javascript", "backend", "node"] },
]

let finalOutput = {}
post.map((postData) => {

    // postData.tags.map((tagdata, i) => {
    //     if (!finalOutput[tagdata]) {
    //         finalOutput[tagdata] = []
    //     }
    //     finalOutput[tagdata].push(postData.title)

    // })

})



console.log({ finalOutput });


let result = {
    "javascript": [
        "Node intro", "React guide", "Js bascis"
    ],
    "basics": [
        "Js bascis"
    ],
    "web": [
        "Js bascis"
    ],
    "react": [
        "React guide"
    ],
    "frontend": [
        "React guide"
    ],
    "backend": [
        "Node intro"
    ],
    "node": [
        "Node intro"
    ]
}


