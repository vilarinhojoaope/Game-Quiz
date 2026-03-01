const questions =[
    {
        question: "Qual é o resultado de 9 x 7?",
        answer:[
            {id:"1", text:"56", correct:false, selected:0},
            {id:"2", text:"63", correct:true, selected:0},
            {id:"3", text:"72", correct:false, selected:0},
            {id:"4", text:"69", correct:false, selected:0},
        ],
        visited:false,
    },
    {
        question: "Quanto é 144 ÷ 12?",
        answer:[
            {id:"1", text:"11", correct:false, selected:0},
            {id:"2", text:"12", correct:true, selected:0},
            {id:"3", text:"13", correct:false, selected:0},
            {id:"4", text:"14", correct:false, selected:0},
        ],
        visited:false,
    },
    {
        question: "Qual é o valor de 5²?",
        answer:[
            {id:"1", text:"10", correct:false, selected:0},
            {id:"2", text:"20", correct:false, selected:0},
            {id:"3", text:"25", correct:true, selected:0},
            {id:"4", text:"15", correct:false, selected:0},
        ],
        visited:false,
    },
    {
        question: "Quanto é 3³?",
        answer:[
            {id:"1", text:"6", correct:false, selected:0},
            {id:"2", text:"9", correct:false, selected:0},
            {id:"3", text:"27", correct:true, selected:0},
            {id:"4", text:"18", correct:false, selected:0},
        ],
        visited:false,
    },
    {
        question: "Qual é o resultado de 2/3 + 1/3?",
        answer:[
            {id:"1", text:"1", correct:true, selected:0},
            {id:"2", text:"2/3", correct:false, selected:0},
            {id:"3", text:"3/6", correct:false, selected:0},
            {id:"4", text:"4/3", correct:false, selected:0},
        ],
        visited:false,
    },
    {
        question: "Quanto é 50% de 200?",
        answer:[
            {id:"1", text:"50", correct:false, selected:0},
            {id:"2", text:"100", correct:true, selected:0},
            {id:"3", text:"150", correct:false, selected:0},
            {id:"4", text:"200", correct:false, selected:0},
        ],
        visited:false,
    },
    {
        question: "Qual é o MMC de 4 e 6?",
        answer:[
            {id:"1", text:"10", correct:false, selected:0},
            {id:"2", text:"12", correct:true, selected:0},
            {id:"3", text:"24", correct:false, selected:0},
            {id:"4", text:"8", correct:false, selected:0},
        ],
        visited:false,
    },
    {
        question: "Qual é o MDC de 18 e 24?",
        answer:[
            {id:"1", text:"6", correct:true, selected:0},
            {id:"2", text:"12", correct:false, selected:0},
            {id:"3", text:"3", correct:false, selected:0},
            {id:"4", text:"9", correct:false, selected:0},
        ],
        visited:false,
    },
    {
        question: "Qual é a raiz quadrada de 81?",
        answer:[
            {id:"1", text:"8", correct:false, selected:0},
            {id:"2", text:"9", correct:true, selected:0},
            {id:"3", text:"7", correct:false, selected:0},
            {id:"4", text:"6", correct:false, selected:0},
        ],
        visited:false,
    },
    {
        question: "Quanto é 0,5 + 0,25?",
        answer:[
            {id:"1", text:"0,75", correct:true, selected:0},
            {id:"2", text:"0,30", correct:false, selected:0},
            {id:"3", text:"0,80", correct:false, selected:0},
            {id:"4", text:"0,70", correct:false, selected:0},
        ],
        visited:false,
    },
    {
        question: "Qual é o perímetro de um quadrado com lado 5 cm?",
        answer:[
            {id:"1", text:"10 cm", correct:false, selected:0},
            {id:"2", text:"20 cm", correct:true, selected:0},
            {id:"3", text:"25 cm", correct:false, selected:0},
            {id:"4", text:"15 cm", correct:false, selected:0},
        ],
        visited:false,
    },
    {
        question: "Qual é a área de um retângulo de 4 cm por 6 cm?",
        answer:[
            {id:"1", text:"24 cm²", correct:true, selected:0},
            {id:"2", text:"20 cm²", correct:false, selected:0},
            {id:"3", text:"10 cm²", correct:false, selected:0},
            {id:"4", text:"26 cm²", correct:false, selected:0},
        ],
        visited:false,
    },
    {
        question: "Quanto é -5 + 8?",
        answer:[
            {id:"1", text:"3", correct:true, selected:0},
            {id:"2", text:"-3", correct:false, selected:0},
            {id:"3", text:"13", correct:false, selected:0},
            {id:"4", text:"-13", correct:false, selected:0},
        ],
        visited:false,
    },
    {
        question: "Quanto é -4 x 6?",
        answer:[
            {id:"1", text:"24", correct:false, selected:0},
            {id:"2", text:"-24", correct:true, selected:0},
            {id:"3", text:"-10", correct:false, selected:0},
            {id:"4", text:"10", correct:false, selected:0},
        ],
        visited:false,
    },
    {
        question: "Resolva: 2x = 10. Qual é o valor de x?",
        answer:[
            {id:"1", text:"2", correct:false, selected:0},
            {id:"2", text:"5", correct:true, selected:0},
            {id:"3", text:"10", correct:false, selected:0},
            {id:"4", text:"8", correct:false, selected:0},
        ],
        visited:false,
    },
    {
        question: "Qual é a fração equivalente a 2/4?",
        answer:[
            {id:"1", text:"1/2", correct:true, selected:0},
            {id:"2", text:"2/8", correct:false, selected:0},
            {id:"3", text:"3/4", correct:false, selected:0},
            {id:"4", text:"4/2", correct:false, selected:0},
        ],
        visited:false,
    },
    {
        question: "Quanto é 15% de 100?",
        answer:[
            {id:"1", text:"10", correct:false, selected:0},
            {id:"2", text:"15", correct:true, selected:0},
            {id:"3", text:"20", correct:false, selected:0},
            {id:"4", text:"25", correct:false, selected:0},
        ],
        visited:false,
    },
    {
        question: "Qual é o valor de 4³?",
        answer:[
            {id:"1", text:"12", correct:false, selected:0},
            {id:"2", text:"16", correct:false, selected:0},
            {id:"3", text:"64", correct:true, selected:0},
            {id:"4", text:"32", correct:false, selected:0},
        ],
        visited:false,
    },
    {
        question: "Quanto é 7/8 - 3/8?",
        answer:[
            {id:"1", text:"4/8", correct:true, selected:0},
            {id:"2", text:"3/8", correct:false, selected:0},
            {id:"3", text:"1/8", correct:false, selected:0},
            {id:"4", text:"5/8", correct:false, selected:0},
        ],
        visited:false,
    },
    {
        question: "Qual é o dobro de 35?",
        answer:[
            {id:"1", text:"60", correct:false, selected:0},
            {id:"2", text:"70", correct:true, selected:0},
            {id:"3", text:"65", correct:false, selected:0},
            {id:"4", text:"75", correct:false, selected:0},
        ],
        visited:false,
    },
    {
        question: "Qual é a metade de 96?",
        answer:[
            {id:"1", text:"46", correct:false, selected:0},
            {id:"2", text:"48", correct:true, selected:0},
            {id:"3", text:"52", correct:false, selected:0},
            {id:"4", text:"44", correct:false, selected:0},
        ],
        visited:false,
    },
    {
        question: "Quanto é 11 x 11?",
        answer:[
            {id:"1", text:"111", correct:false, selected:0},
            {id:"2", text:"121", correct:true, selected:0},
            {id:"3", text:"101", correct:false, selected:0},
            {id:"4", text:"131", correct:false, selected:0},
        ],
        visited:false,
    },
    {
        question: "Qual é o sucessor de 999?",
        answer:[
            {id:"1", text:"1001", correct:false, selected:0},
            {id:"2", text:"1000", correct:true, selected:0},
            {id:"3", text:"998", correct:false, selected:0},
            {id:"4", text:"1010", correct:false, selected:0},
        ],
        visited:false,
    },
    {
        question: "Qual é o antecessor de 500?",
        answer:[
            {id:"1", text:"499", correct:true, selected:0},
            {id:"2", text:"501", correct:false, selected:0},
            {id:"3", text:"490", correct:false, selected:0},
            {id:"4", text:"450", correct:false, selected:0},
        ],
        visited:false,
    },
    {
        question: "Quanto é 2,5 + 1,5?",
        answer:[
            {id:"1", text:"3,5", correct:false, selected:0},
            {id:"2", text:"4,0", correct:true, selected:0},
            {id:"3", text:"4,5", correct:false, selected:0},
            {id:"4", text:"3,0", correct:false, selected:0},
        ],
        visited:false,
    },
    {
        question: "Qual é a área de um triângulo com base 10 e altura 4?",
        answer:[
            {id:"1", text:"40", correct:false, selected:0},
            {id:"2", text:"20", correct:true, selected:0},
            {id:"3", text:"14", correct:false, selected:0},
            {id:"4", text:"24", correct:false, selected:0},
        ],
        visited:false,
    },
    {
        question: "Quanto é 3/5 de 100?",
        answer:[
            {id:"1", text:"60", correct:true, selected:0},
            {id:"2", text:"30", correct:false, selected:0},
            {id:"3", text:"50", correct:false, selected:0},
            {id:"4", text:"80", correct:false, selected:0},
        ],
        visited:false,
    },
    {
        question: "Resolva: x + 7 = 15",
        answer:[
            {id:"1", text:"6", correct:false, selected:0},
            {id:"2", text:"8", correct:true, selected:0},
            {id:"3", text:"7", correct:false, selected:0},
            {id:"4", text:"9", correct:false, selected:0},
        ],
        visited:false,
    },
    {
        question: "Qual é o resultado de 125 ÷ 5?",
        answer:[
            {id:"1", text:"20", correct:false, selected:0},
            {id:"2", text:"25", correct:true, selected:0},
            {id:"3", text:"30", correct:false, selected:0},
            {id:"4", text:"35", correct:false, selected:0},
        ],
        visited:false,
    },
    {
        question: "Quanto é 6² + 4?",
        answer:[
            {id:"1", text:"40", correct:true, selected:0},
            {id:"2", text:"36", correct:false, selected:0},
            {id:"3", text:"28", correct:false, selected:0},
            {id:"4", text:"32", correct:false, selected:0},
        ],
        visited:false,
    },
];