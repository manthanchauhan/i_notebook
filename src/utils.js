const getTitleCase = (text)=>{
    let givenText = text.toLowerCase();
    let wordList = givenText.split(/\s+/);

    for (let i = 0; i < wordList.length; i++) {
      wordList[i] = wordList[i].charAt(0).toUpperCase() + wordList[i].slice(1);
    }
    
    return wordList.join(" ");
}

const getAuthToken = () => {
    return localStorage.getItem('authToken');
}

export {getTitleCase, getAuthToken};
