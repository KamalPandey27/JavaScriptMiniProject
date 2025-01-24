let EmojiEL = document.querySelector(".EmojiEL");
let EmojiMeaning = document.querySelector(".EmojiMeaning");

const emoji = [];

async function getEmoji() {
  let response = await fetch(
    "https://emoji-api.com/emojis?access_key=773b58f681fb786fafdb8392e8b8a75ddc177fd1"
  );

  let data = await response.json();
  for (let i = 0; i < 1500; i++) {
    emoji.push({
      emojiName: data[i].character,
      emojiCode: data[i].unicodeName,
    });
  }
}

getEmoji();

EmojiEL.addEventListener('click',()=>{
    let randomNumber = Math.floor(Math.random() * emoji.length)
    EmojiEL.innerHTML = emoji[randomNumber].emojiName
    EmojiMeaning.innerHTML = emoji[randomNumber].emojiCode
})