import React, { useState } from 'react'
import './emojiSearch.css'
const emojiData=[
    
    {
        id:1,
        Symbol:"😊",
        name:"Happy"
    },
    {
        id:2,
        Symbol:"😂",
        name:"laughing with tears"
    },
    {
        id:3,
        Symbol:"🥳",
        name:"party"
    },
    {
        id:4,
        Symbol:"😋",
        name:"Yummy face"
    },
    {
        id:5,
        Symbol:"🤗",
        name:"hugging face"
    },
    {
        id:6,
        Symbol:"😴",
        name:"sleepy"
    },
    {
        id:7,
        Symbol:"😭",
        name:"crying"
    },
    {
        id:8,
        Symbol:"😡",
        name:"anger"
    },
    {
        id:9,
        Symbol:"🥱",
        name:"yawningface"
    },
    {
        id:10,
        Symbol:"❤️",
        name:"Heart"
    }


]

function EmojiSearch() {
    const [searchEmoji,setSearchEmoji]=useState("");
     
    const handleChange=(e)=>{
        setSearchEmoji(e.target.value);
    }
    const showEmoji=emojiData.filter((emoji)=>{
        const emojiName=emoji.name.toLowerCase();
        return emojiName.includes(searchEmoji.toLowerCase());
    });
  return (
    <div id='division'>
        <h1>React Emoji App</h1>
        <input type="text" placeholder='Search for the Emoji...' value={searchEmoji} onChange={handleChange} ></input>

        <div id='output'>
            {showEmoji.map((emoji) => (emoji.Symbol))}
        </div>
    </div>
  )
}

export default EmojiSearch