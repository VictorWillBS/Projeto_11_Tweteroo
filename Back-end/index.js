import express, { json } from "express"
import cors from "cors"
const app = express();
app.use(express.json())
app.use(cors())


const users = []
const tweets=[]
let ultimosTweets;
app.post("/sign-up",(req,res)=>{
    const user  = req.body
    users.push(user)
    res.send("OK")
})

app.get("/tweets",(req,res)=>{
    res.send(ultimosTweets)
})

app.post("/tweets",(req,res)=>{
    const tweetTextoandNome = req.body
    formatarRespostaTweet(tweetTextoandNome)
    fazerUltimosTweets()
    res.send("OK")
})

function formatarRespostaTweet(tweetTextoandNome){
    const avatar = users.find((user)=>user.username===tweetTextoandNome.username).avatar
    console.log(tweets.length)
    const tweet = {...tweetTextoandNome, avatar}
    tweets.push(tweet)
}

function fazerUltimosTweets(){
    
    ultimosTweets=tweets.slice(-10)
        
}

app.listen(5000)