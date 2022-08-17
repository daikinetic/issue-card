
/*
if (!firebase.apps.length) {
  firebase.initializeApp({
    apiKey: "AIzaSyC2uGQbTynGIm2AzMbGF1CO_A3ieF_5kL4",
    authDomain: "issue-card.firebaseapp.com",
    projectId: "issue-card",
    storageBucket: "issue-card.appspot.com",
    messagingSenderId: "936978701874",
    appId: "1:936978701874:web:d7f2c3d7bb489de6afe62b",
    measurementId: "G-W5HTB0QYTB"
  })
}
*/

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); 
    //The maximum is exclusive and the minimum is inclusive
}

function cssChangeText() {
    let textbox = document.getElementById("textbox");
    let p_message_element = textbox.querySelector("p");

    let categorybox = document.getElementById("categorybox");
    let p_category_element = categorybox.querySelector("p");

    let issueNumberbox = document.getElementById("issueNumberbox");
    let p_issue_number_element = issueNumberbox.querySelector("p");

    let p_new_message_element = document.createElement('p');
    let p_new_category_element = document.createElement('p');
    let p_new_issue_number_element = document.createElement('p');

    /*
    const db = firebase.firestore();
    db.collection("users").add({
        //DBに突っ込みたいもの
        name: "マイメロ",
        age: 27
    })
    .then((doc) => {
        console.log(`追加に成功しました`);
    })
    .catch((error) => {
        console.log(error);
    });
    */

    textList = [
        { 
            "text": "男女比は今のままでいいのか？",
            "category": "Diversity",
            "number": "#1"
        },
        { 
            "text": "学部の多様性は今のままでいいのか？",
            "category": "Diversity",
            "number": "#2"
        },
        { 
            "text": "日本出身者と国際生は同じ活動ができているか？",
            "category": "Diversity",
            "number": "#3"
        },
        {
            "text": "今のアイセックには多様性があると言えるのか？",
            "category": "Diversity",
            "number": "#4"
        },
        {
            "text": "今のアイセックが排除してしまっている者は何か？",
            "category": "Diversity",
            "number": "#5"
        },
        {
            "text": "JWI は女性しか参加できない。" + "\n" + "アイセックの理念に反することはないのか？",
            "category": "Diversity",
            "number": "#6"
        },
        {
            "text": "アイセックの多様性に限界があるとしたら？",
            "category": "Diversity",
            "number": "#7"
        },
        {
            "text": "as AIESEC として、AJ が譲れない寛容と不寛容の線引きはどこになされるべきか？",
            "category": "Diversity",
            "number": "#8"
        },
        {
            "text": "6Values に living diversity とあるが、どうしてこの value は必要なのか？",
            "category": "Diversity",
            "number": "#9"
        },
        {
            "text": "これまでのアイセック活動において、自分自身もしくは周りのメンバーが排除されている、否定されていると感じたことはあったか、それはどんな瞬間か？",
            "category": "Diversity",
            "number": "#10"
        }
    ];

    i = getRandomInt(0, textList.length)

    console.log(textList[i].text);
    console.log(textList[i].category);
    console.log(i);

    p_new_message_element.textContent = textList[i].text;
    p_new_category_element.textContent = textList[i].category;
    p_new_issue_number_element.textContent = textList[i].number;

    textbox.replaceChild(p_new_message_element, p_message_element);
    categorybox.replaceChild(p_new_category_element, p_category_element);
    issueNumberbox.replaceChild(p_new_issue_number_element, p_issue_number_element);
}