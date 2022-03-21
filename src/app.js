import axios from 'axios';

document.addEventListener("DOMContentLoaded", async () => {
    const res = await axios.get('/api/keywords');
    // const res = await axios.get('/api/users');

    console.log(res)


    document.body.innerHTML = (res.data || []).map(data => {
        return `<div>${data.keyword} </div>`;
    }).join('');
    // document.body.innerHTML = (res.data || []).map(user => {
    //     return `<div>${user.id}: ${user.name} </div>`;
    // }).join('');


    if(module.hot) {
        console.log('핫 모듈 켜짐');
        
        // module.hot.accept(변경을 감지할 모듈을 작성함(ex. './result'), () => {
        //     console.log('result 모듈 변경됨')
        // })
    }
})