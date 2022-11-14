import React from "react";
import "./meme.css"

export default function Meme()
{
    // const [ myMeme,setMyMeme ] = React.useState("https://i.imgflip.com/30b1gx.jpg")

    const [meme,setMeme] = React.useState({
        topText:"",
        bottomText:"",
        img:"https://i.imgflip.com/30b1gx.jpg"
    })
    
    const [ allMemeImages, setAllMemeImages ] = React.useState([])

    React.useEffect(()=>{
        fetch(`https://api.imgflip.com/get_memes`)
        .then(res => res.json())
        .then(imgs => setAllMemeImages(imgs.data.memes))
    },[])

    function handleClick()
    {
        const getRandomNumber = Math.floor(Math.random() * allMemeImages.length )
        const url = allMemeImages[getRandomNumber].url
        setMeme(prevState => ({
            ...prevState,
            img:url
        }))
    }
    function handleChange(event)
    {
        const {name,value} = event.target
        setMeme(prevState => ({
            ...prevState,
            [name]:value
        }))
    }
    return(
        <main>
            <div className="form">
                <input 
                type="text" 
                placeholder="Top Text" 
                className="form--input"
                name="topText"
                value={meme.topText}
                onChange={handleChange}
                />

                <input type="text" 
                placeholder="Bottom Text" 
                className="form--input"
                name="bottomText"
                value={meme.bottomText}
                onChange={handleChange}
                />

            <button onClick={handleClick}
            className="form--button">
                Get new meme Image
            </button>
        </div>
        <div className="meme">
            <h1 className="meme--text top">{meme.topText}</h1>
            <h1 className="meme--text bottom">{meme.bottomText}</h1>
        <img alt="meme" src={meme.img} className="meme--image" />
        </div>
        </main>
    )
}