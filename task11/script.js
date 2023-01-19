function randImg() {
    let images = [
    img1= {
        link: "https://justthebestmemes.files.wordpress.com/2021/03/image-4.jpg",
        width: "720",
        height: "720"
        },
    img2= {
        link: "https://i.gadgets360cdn.com/large/drake2_1545716682891.jpg",
        width: "800",
        height: "718"
        },
    img3= {
        link: "https://th.bing.com/th/id/R.9b93b3f38dff069bf8e7952bd48c15a7?rik=e%2fMrOd9Px%2ba%2fzA&riu=http%3a%2f%2ffreeaddon.com%2fwp-content%2fuploads%2f2019%2f04%2finternet-memes-31.jpg&ehk=stcNH5f%2bFOOYaAyRd95CiEGiQkP8cI3QYZ5zTA%2bFVPw%3d&risl=&pid=ImgRaw&r=0",
        width: "600",
        height: "411"
        },
    img4= {
        link: "https://th.bing.com/th/id/R.b0624b7dcce8365bdc5557fde05ef654?rik=Y6tqc4jjAixyWQ&riu=http%3a%2f%2ftechstuffed.com%2fwp-content%2fuploads%2f2016%2f04%2finternet-explorer-troll-294x300.jpg&ehk=Xayq1AJyYxhgrV8bUySsWwTJy%2fiuJyTB0uM8BFx8xMc%3d&risl=&pid=ImgRaw&r=0&sres=1&sresct=1",
        width: "294",
        height: "300"
        }
    ]
    
    let rn = Math.round(Math.random() * (images.length - 0.5));
    console.log(rn);
    
    if (rn>=0 && rn<=3) {
        let con = document.getElementById("images").innerHTML = `<img src="${images[rn].link}" width="${images[rn].width}" height="${images[rn].height}"></img>`;
    }
    }