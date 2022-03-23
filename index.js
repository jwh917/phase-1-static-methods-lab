class Formatter {
  //add static methods here
  static capitalize(word){
    console.log(word)
    return word.charAt(0).toUpperCase() + word .slice(1)
  }

  static sanitize(word){    
    console.log(word)
    return word.replace(/[!@#$%^&*(){}+=]/g, "")
  }

  static titleize(word){
    const words = word.split(" ")    
    // console.log(words)
    for (var i = 0; i < words.length; i++) {
      // console.log(words[i])
      if(words[i] !== "the" && words[i] !== "a" && words[i] !== "an" && words[i] !== "but" && words[i] !== "of" && words[i] !== "and" && words[i] !== "for" && words[i] !== "at" && words[i] !== "by" && words[i] !== "from") {
      words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1)
      }
    }
    const words2 = words.join(" ") 
    // console.log(words2.charAt(0).toUpperCase())
    let newW0 = words2.charAt(0).toUpperCase()
    // console.log(words2.slice(1))
    let newW1 = words2.slice(1)
    let newWords = newW0 + newW1
    // console.log(newWords)
    return newWords
  }

}