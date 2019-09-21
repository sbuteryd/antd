export default {
    formateDate(time){
        if(!time) return"";
        let date = new Date(time);
        return `${date.getFullYear()}-${date.getMonth()+1}-${date.getDate()} 
          　${date.getHours()}:${date.getMinutes()>=10 ? date.getMinutes():"0"+date.getMinutes()}:${date.getSeconds()}
          `
    }
}
