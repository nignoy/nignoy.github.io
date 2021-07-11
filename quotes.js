const quotes = [
    {
        quote: "위험을 감수하지 않으면 실패도 하지 않는다."
    },
    {
        quote: "배우자 외모는 3개월 가지만 못생긴 건 평생 간다.",
        
    },
    {
        quote: "승자 한 명당 패자는 열명인데, 솔직히 너는 후자일 것이다.",
        
    },
    {
        quote: "열심히 일하다 보면 언젠가 보상을 받기도 한다. 하지만 게으름을 피우면 당장 확실한 보상을 받는다.",
        
    },
    {
        quote: "고통이 없으면 성취도 없다. 근데 고통이 있다고 해서 성취가 있는 것은 아니다.",
        
    },
    {
        quote: "남들이 널 필요로 한다고 해서 그게 네가 중요한 사람이라는 뜻은 아니다.",
        
    },
    {
        quote: "개처럼 일해주면 진짜 개로 안다.",
        
    },
    {
        quote: "남들이 알아주지 않더라도 너의 일을 묵묵히 하다 보면 결국 남 좋은 일만 하게 된다.",
        
    },
    {
        quote: "우리 서로의 의견을 존중하도록 하자. 물론 내가 맞고 네가 틀리지만.",
        
    },
    {
        quote: "포기하면 편하다.",
        
    },
    {
        quote: "동정할거면 돈으로 줘요.",
        
    },
    {
        quote:"되면 한다."
    }
];

const quote = document.querySelector("#quote span");
const todayQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todayQuote.quote;



