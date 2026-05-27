const songInput = document.getElementById('songInput');
const songList = document.getElementById('songList');
const currentSong = document.getElementById('currentSong');
const audioPlayer = document.getElementById('audioPlayer');

let songs = [];

songInput.addEventListener("change", function(){

  // Allows adding new songs from existing array
  songs.push(...Array.from(songInput.files));

  // Will get the starting index of new songs
  let startIndex = songs.length - songInput.files.length;

  // Allows to loop only through new uploads
  for(let i = startIndex; i < songs.length; i++){
    
    const listItem = document.createElement("li");
    listItem.style.color = "aliceblue";

    listItem.textContent = songs[i].name;

    const songFile = songs[i];

    // Plays the audio
    listItem.addEventListener("click", function(){

      const songURL = URL.createObjectURL(songs[i]);
      audioPlayer.src = songURL;
      audioPlayer.play();
      currentSong.textContent = songs[i].name;
      
    });

    songList.appendChild(listItem);
  }



});