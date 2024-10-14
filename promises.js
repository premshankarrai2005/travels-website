let p1=new Promise((resolve, reject) => {
    setTimeout(()=>{
        resolve("value 1")
    },3000)
})
let p2=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("value 2")
    },4000)
})
let p3=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("value 3")
    },5000)
})
let p4=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("value 4")
    },6000)
})
let p5=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("value 5")
    },7000)
})
let p6=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("value 6")
    },8000)
})
let p7=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("value 7")
    },9000)
})


// p1.then((value)=>{
//     console.log(value)
// })
// p2.then((value)=>{
//     console.log(value)
// })
// p3.then((value)=>{
//     console.log(value)
// })
// p4.then((value)=>{
//     console.log(value)
// })
// p5.then((value)=>{
//     console.log(value)
// })
// p6.then((value)=>{
//     console.log(value)
// })
// p7.then((value)=>{
//     console.log(value)
// })


// let promise_all=Promise.all([p1,p2,p3,p4,p5,p6,p7])
// let promise_all=Promise.allSettled([p1,p2,p3,p4,p5,p6,p7])
// let promise_all=Promise.race([p1,p2,p3,p4,p5,p6,p7])
// let promise_all=Promise.any([p1,p2,p3,p4,p5,p6,p7])
// let promise_all=Promise.resolve(6)
// let promise_all=Promise.reject(new Error("hey"))
promise_all.then((value)=>{
    console.log(value)
})