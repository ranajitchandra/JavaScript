const posts = [
    {
        title : "This is Tile 1",
        description : "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eos similique quos, enim laborum nostrum quam, sequi beatae reiciendis nulla, odio consequuntur tempora! Autem ex ea repellendus possimus repellat facere nequ",
    },
    {
        title : "This is Tile 2",
        description : "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eos similique quos, enim laborum nostrum quam, sequi beatae reiciendis nulla, odio consequuntur tempora! Autem ex ea repellendus possimus repellat facere nequ",
    },
    {
        title : "This is Tile 3",
        description : "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eos similique quos, enim laborum nostrum quam, sequi beatae reiciendis nulla, odio consequuntur tempora! Autem ex ea repellendus possimus repellat facere nequ",
    },
    {
        title : "This is Tile 4",
        description : "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eos similique quos, enim laborum nostrum quam, sequi beatae reiciendis nulla, odio consequuntur tempora! Autem ex ea repellendus possimus repellat facere nequ",
    },
    {
        title : "This is Tile 5",
        description : "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eos similique quos, enim laborum nostrum quam, sequi beatae reiciendis nulla, odio consequuntur tempora! Autem ex ea repellendus possimus repellat facere nequ",
    },
    {
        title : "This is Tile 6",
        description : "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eos similique quos, enim laborum nostrum quam, sequi beatae reiciendis nulla, odio consequuntur tempora! Autem ex ea repellendus possimus repellat facere nequ",
    },
    {
        title : "This is Tile 7",
        description : "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eos similique quos, enim laborum nostrum quam, sequi beatae reiciendis nulla, odio consequuntur tempora! Autem ex ea repellendus possimus repellat facere nequ",
    },
    {
        title : "This is Tile 8",
        description : "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eos similique quos, enim laborum nostrum quam, sequi beatae reiciendis nulla, odio consequuntur tempora! Autem ex ea repellendus possimus repellat facere nequ",
    },
]

// Fatch Data..............

const fetchData = async (fatchApi)=>{
    try{
        const res = await axios(fatchApi);

        return res.data;

    }catch(err) {
        throw Error ("Data is not Fatch");
    }
}

fetchData("https://jsonplaceholder.typicode.com/posts");


const postsEle = document.querySelector(".posts");

const loadAllData = async () => {
    const posts = await fetchData("https://jsonplaceholder.typicode.com/posts");
    posts.map((post) => {
        console.log(post);
        const mkPostEle = document.createElement("div");
        mkPostEle.classList.add("post");
        mkPostEle.innerHTML = `
            <h4 class="post-title">${post.title} - ${post.id}</h4>
            <p class="post-content">${post.body}</p>
        `;
        postsEle.appendChild(mkPostEle);
    })
}
loadAllData();



